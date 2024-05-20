package org.ton.tlb.generator

import org.ton.tlb.MinMaxSize
import org.ton.tlb.compiler.TlbCompiler
import org.ton.tlb.compiler.TlbParamExpression
import org.ton.tlb.compiler.TlbTypeExpression

public data class Action(
    val fixedSize: MinMaxSize,
    val action: String
) {
    public constructor(action: String) : this(MinMaxSize.IMPOSSIBLE, action)
    public constructor(fixedSize: MinMaxSize) : this(fixedSize, "")
    public constructor(builder: StringBuilder.() -> Unit) : this(buildString(builder))

    override fun toString(): String {
        return when {
            fixedSize == MinMaxSize.IMPOSSIBLE -> action
            fixedSize.value == 0L -> ""
            fixedSize.minRefs == 0 -> "cs~skip_bits(${fixedSize.minBits})"
            else -> "cs~slice_split(${fixedSize.minBits}, ${fixedSize.minRefs})"
        }
    }

    public fun mayCombine(other: Action): Boolean {
        if (fixedSize == MinMaxSize.IMPOSSIBLE || other.fixedSize == MinMaxSize.IMPOSSIBLE) {
            return false
        }
        if (fixedSize.minBits > 0 && other.fixedSize.minBits > 0 && fixedSize.minRefs == 0 && other.fixedSize.minRefs == 0) {
            return true
        }
        if (fixedSize.minRefs > 0 && other.fixedSize.minRefs > 0 && fixedSize.minBits == 0 && other.fixedSize.minBits == 0) {
            return true
        }
        return false
    }

    public fun combine(other: Action): Action {
        return Action(fixedSize + other.fixedSize)
    }
}

public fun Iterable<Action>.combine(): List<Action> = buildList {
    var last: Action? = null
    for (action in this@combine) {
        if (last != null && last.mayCombine(action)) {
            last = last.combine(action)
        } else {
            last?.let { add(it) }
            last = action
        }
    }
    last?.let { add(it) }
}

public interface ActionContext : Iterable<Action> {
    public fun addAction(action: Action)

    public fun addAction(builder: StringBuilder.() -> Unit): Unit = addAction(Action(builder))

    public fun defineTypeParam(name: String, typeParam: TlbTypeExpression.TypeParam)

    public fun getTypeParam(name: String): TlbTypeExpression.TypeParam?

    public fun build(appendable: Appendable)
}

public class ActionContextImpl : ActionContext {
    public val actions: MutableList<Action> = ArrayList()
    public val typeParams: MutableMap<String, TlbTypeExpression.TypeParam> = HashMap()

    override fun iterator(): Iterator<Action> {
        return actions.iterator()
    }

    override fun addAction(action: Action) {
        actions.add(action)
    }

    override fun defineTypeParam(name: String, typeParam: TlbTypeExpression.TypeParam) {
        typeParams[name] = typeParam
    }

    override fun getTypeParam(name: String): TlbTypeExpression.TypeParam? {
        return typeParams[name]
    }

    override fun build(appendable: Appendable) {
        appendable.apply {
            for (action in combine()) {
                append("    ")
                append(action.toString())
                append(";\n")
            }
        }
    }
}

public fun Appendable.appendExpr(expression: TlbTypeExpression): Appendable = apply {
    when (expression) {
        is TlbTypeExpression.Add -> {
            append("(")
            appendExpr(expression.expression)
            append(" + ")
            appendExpr(expression.expression2)
            append(")")
        }

        is TlbTypeExpression.IntConstant -> {
            append(expression.value.toString())
        }

        is TlbTypeExpression.Multiply -> {
            append("(")
            appendExpr(expression.value)
            append(" * ")
            appendExpr(expression.expression)
            append(")")
        }

        is TlbParamExpression -> {
            append(expression.name)
        }

        is TlbTypeExpression.Apply -> {
            append(expression.typeApplied.name)
        }

        else -> TODO("Expression `$expression` (${expression::class}) is not supported")
    }
}

public fun Appendable.appendSizeOfExpr(expr: TlbTypeExpression): Appendable = apply {
    check(expr !is TlbParamExpression) { "Can't compute size of non-type expression $expr" }
    var size = expr.size
    if (size.isFixed()) {
        append(size.minBits.toString())
        return@apply
    }
    when (expr) {
        is TlbTypeExpression.Conditional -> {
            append("(")
            appendExpr(expr.condition)
            append(" ? ")
            appendSizeOfExpr(expr.expression)
            append(" : 0")
            append(")")
            return@apply
        }

        is TlbTypeExpression.Tuple -> {
            if (expr.value is TlbTypeExpression.IntConstant && expr.value.value == 1) {
                appendSizeOfExpr(expr.expression)
                return@apply
            }
            size = expr.expression.size
            if (size.isFixed() && size.minSize == 1) {
                appendExpr(expr.value)
                return@apply
            }
            append("(")
            appendExpr(expr.value)
            append(" * ")
            appendSizeOfExpr(expr.expression)
            append(")")
            return@apply
        }

        is TlbTypeExpression.Apply -> {
            val ta = expr.typeApplied
            when (ta) {
                TlbCompiler.INT_TYPE,
                TlbCompiler.UINT_TYPE,
                TlbCompiler.NAT_WIDTH_TYPE,
                TlbCompiler.BITS_TYPE -> {
                    appendExpr(expr.arguments.first())
                    return@apply
                }
            }
        }

        else -> {}
    }
    throw IllegalArgumentException("Can't compute size of expression `$expr`")
}
