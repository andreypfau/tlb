package org.ton.tlb.compiler

import org.ton.tlb.*
import kotlin.math.min

public sealed interface TlbTypeExpression {

    public val size: MinMaxSize

    public val isAnyBits: Boolean

    public val intSign: Int get() = 0
    public val isInt: Boolean get() = intSign != 0
    public val isAnon: Boolean get() = false

    public data object Type : TlbTypeExpression {
        override val size: MinMaxSize = MinMaxSize.fixedSize(0)
        override val isAnyBits: Boolean = true

        override fun toString(): String = "Type"
    }

    public data class Param(
        val name: String,
        val isNegated: Boolean = false,
    ) : TlbTypeExpression {
        // any size possible for type parameters
        override val size: MinMaxSize get() = MinMaxSize.ANY
        override val isAnyBits: Boolean get() = false

        override fun toString(): String = buildString {
            if (isNegated) {
                append("~")
            }
            append(name)
        }
    }

    public data class Apply(
        val typeApplied: TlbType,
        val arguments: List<TlbTypeExpression> = emptyList(),
    ) : TlbTypeExpression {
        public constructor(
            typeApplied: TlbType,
            vararg arguments: TlbTypeExpression
        ) : this(typeApplied, arguments.toList())

        override val intSign: Int get() = typeApplied.intSign

        override val isAnon: Boolean get() = arguments.isEmpty() && typeApplied.isAnon

        override val isAnyBits: Boolean = run {
            val expression = arguments.getOrNull(0)
            if (arguments.size == 1 && expression is IntConstant) {
                val n = expression.value
                when (typeApplied) {
                    TlbCompiler.NAT_LEQ_TYPE -> return@run (n and (n + 1)) == 0
                    TlbCompiler.NAT_LESS_TYPE -> return@run (n and (n - 1)) == 0
                }
            }
            typeApplied.isAnyBits
        }

        override val size: MinMaxSize = run {
            val expression = arguments.getOrNull(0)
            if (arguments.size == 1 && expression is IntConstant) {
                val n = expression.value
                when (typeApplied) {
                    TlbCompiler.NAT_WIDTH_TYPE,
                    TlbCompiler.INT_TYPE,
                    TlbCompiler.UINT_TYPE,
                    TlbCompiler.BITS_TYPE -> {
                        val s = MinMaxSize.fixedSize(min(n, 2047))
                        return@run s
                    }

                    TlbCompiler.NAT_LEQ_TYPE -> return@run MinMaxSize.fixedSize(
                        min(
                            32 - n.countLeadingZeroBits(),
                            2047
                        )
                    )

                    TlbCompiler.NAT_LESS_TYPE -> return@run MinMaxSize.fixedSize(
                        min(
                            32 - (n - 1).countLeadingZeroBits(),
                            2047
                        )
                    )
                }
            }
            typeApplied.size
        }

        override fun toString(): String = buildString {
            append("(")
            append(typeApplied.name)
            for (arg in arguments) {
                append(" ")
                append(arg)
            }
            append(")")
        }
    }

    public data class Add(
        val expression: TlbTypeExpression,
        val expression2: TlbTypeExpression,
    ) : TlbNatTypeExpression {
        override fun interpretNat(): Int =
            abstractAdd(
                (expression as? TlbNatTypeExpression)?.interpretNat() ?: 0,
                (expression2 as? TlbNatTypeExpression)?.interpretNat() ?: 0
            )

        override fun toString(): String = "($expression + $expression2)"
    }

    public data class GetBit(
        val expression: TlbTypeExpression,
        val expression2: TlbTypeExpression,
    ) : TlbNatTypeExpression {
        override fun interpretNat(): Int =
            abstractGetBit(
                (expression as? TlbNatTypeExpression)?.interpretNat() ?: 0,
                (expression2 as? TlbNatTypeExpression)?.interpretNat() ?: 0
            )

        override fun toString(): String {
            return "($expression.$expression2)"
        }
    }

    public data class Multiply(
        val value: TlbNatTypeExpression,
        val expression: TlbTypeExpression,
    ) : TlbNatTypeExpression {
        override fun interpretNat(): Int =
            abstractMul(
                (value as? TlbNatTypeExpression)?.interpretNat() ?: 0,
                value.interpretNat()
            )

        override fun toString(): String = "($value * $expression)"
    }

    public data class IntConstant(
        val value: Int,
    ) : TlbNatTypeExpression {
        override fun toString(): String = value.toString()

        override fun interpretNat(): Int = abstractNatConst(value)
    }

    public data class Tuple(
        val value: TlbNatTypeExpression,
        val expression: TlbTypeExpression,
    ) : TlbTypeExpression {
        override val size: MinMaxSize = value.interpretNat().let { nat ->
            if (nat and 1.inv() == 0) {
                MinMaxSize.fixedSize(0)
            } else {
                var size = expression.size
                if (value is IntConstant) {
                    size = size.times(value.value)
                } else {
                    if (nat and 1 != 0) {
                        size = size.withoutMin() // zero repetition count possible
                    }
                    if (nat and 12 != 0) {
                        // may be repeated more than once
                        val n = if (nat and 1 != 0) 0 else if (nat and 2 != 0) 1 else 2
                        // minimal value of repetition count
                        size = size.timesAtLeast(n)
                        // repetition count >= n
                    }
                }
                size
            }
        }
        override val isAnyBits: Boolean = run {
            val n = value.interpretNat()
            n and 1.inv() == 0 || expression.isAnyBits
        }

        override fun toString(): String = "($value * $expression)"
    }

    public data class CellRef(
        val expression: TlbTypeExpression,
    ) : TlbTypeExpression {
        override val size: MinMaxSize = if (expression.size.isPossible()) {
            MinMaxSize.ONE_REF
        } else {
            MinMaxSize.IMPOSSIBLE
        }
        override val isAnyBits: Boolean get() = true

        override fun toString(): String = "^$expression"
    }

    public data class Conditional(
        val condition: TlbNatTypeExpression,
        val expression: TlbTypeExpression,
    ) : TlbTypeExpression {
        override val size: MinMaxSize = condition.interpretNat().let { value ->
            if (value and 1.inv() == 0) {
                MinMaxSize.fixedSize(0)
            } else {
                expression.size.let { size ->
                    if (value and 1 == 0) {
                        size.withoutMin()
                    } else {
                        size
                    }
                }
            }
        }
        override val isAnyBits: Boolean = run {
            val n = condition.interpretNat()
            n and 1.inv() == 0 || expression.isAnyBits
        }

        override fun toString(): String {
            return "($condition?$expression)"
        }
    }
}

public sealed interface TlbNatTypeExpression : TlbTypeExpression {
    override val size: MinMaxSize get() = MinMaxSize.fixedSize(0)
    override val isAnyBits: Boolean get() = true

    public fun interpretNat(): Int
}
