package org.ton.tlb.generator

import org.ton.tlb.MinMaxSize
import org.ton.tlb.compiler.*
import org.ton.tlb.compiler.exceptions.UndefinedFieldException
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.InvocationKind
import kotlin.contracts.contract

public class FuncCodeGen(
    public val type: TlbType,
    private val globalCodeIds: IdentScope = IdentScope(),
    private val localCodeIds: IdentScope = IdentScope(),
) {
    private lateinit var funcClassName: String
    private lateinit var consEnumName: Map<TlbConstructor, String>
    private lateinit var typeParamName: Array<String>
    private lateinit var consEnumValue: Map<TlbConstructor, Int>
    private lateinit var consIdxByEnum: Array<TlbConstructor>
    private lateinit var records: List<ConsRecord>

    init {
        assignClassName()
        assignConsNames()
        assignClassFieldNames()
        assignConsValues()
        assignRecordConsNames()
    }

    public fun generate(appendable: Appendable) {
        records.forEach { record ->
            generateUnpackMethod(appendable, record)
        }
    }

    private fun generateUnpackMethod(appendable: Appendable, record: ConsRecord) = ctx(appendable) {
        appendLine()
        record.declareRecordUnpack(appendable, "    ")
        append(" {\n")

        bindRecordFields(record)

        for (field in record.fields) {
            if (field.isConstraint) {
                continue
            }
            if (field.isImplicit) {

            } else {
                generateUnpackField(this, field, record.constructor)
            }
        }

        actions += Action(buildString {
            appendReturnUnpack(record)
        })

        outputActions()
        append("}\n")
    }

    private fun generateUnpackField(ctx: LocalContext, field: ConsField, constructor: TlbConstructor) = ctx.apply {
        if (fetchNatField(constructor, field)) {
            return@apply
        }
        val expr = field.field.type
        val size = expr.size
        if (size.isFixed() && field.primitiveType != TlbPrimitiveType.ENUM ) {
            if (field.primitiveType == TlbPrimitiveType.ANONYMOUS) {
                TODO()
            } else {
                fetchField(field.name, expr, field.primitiveType)
            }
            return@apply
        }

        if (expr is TlbTypeExpression.NaturalParam && expr.isNegated) {

        }
    }


    private fun assignClassName() {
        funcClassName = globalCodeIds.registerIdentifier(type.name)

    }

    private fun assignConsNames() {
        consEnumName = type.constructors.associateWith { constructor ->
            localCodeIds.registerIdentifier(constructor.name)
        }
    }

    private fun assignClassFieldNames() {
        var cn = 'm'
        var ct = 'X'
        typeParamName = Array(type.args.size) {
            val arg = type.args[it]
            val id: String
            if (arg.isNatural) {
                id = localCodeIds.registerIdentifier(cn.toString())
                cn++
            } else {
                id = localCodeIds.registerIdentifier(ct.toString())
                ct++
            }
            id
        }
    }

    private fun assignConsValues() {
        val a = type.constructors.map { constructor ->
            (constructor.beginWith.firstOrNull() ?: 0L) to constructor
        }.sortedBy { it.first }

        consIdxByEnum = Array(a.size) { a[it].second }
        consEnumValue = a.mapIndexed { index, pair ->
            pair.second to index
        }.toMap()
    }

    private fun assignRecordConsNames() {
        records = type.constructors.map { constructor ->
            val hasTrivialName = type.constructors.size <= 1 || constructor.name.isBlank()
            val recIds = IdentScope()
            val fields = constructor.fields.mapNotNull { field ->
                if (field.isConstraint) {
                    null
                } else if (!field.isImplicit) {
                    val size = field.type.size
                    if (size.maxSize == 0) {
                        null
                    } else {
                        var fieldName = ""
                        var subRecord: ConsRecord? = null
                        if (field.name.isNotEmpty()) {
                            fieldName = recIds.registerIdentifier(field.name)
                        } else if (field.type.isAnon) {
                            fieldName = recIds.registerIdentifier("anon", 1)
                            subRecord = FuncCodeGen(
                                (field.type as TlbTypeExpression.Apply).typeApplied,
                                globalCodeIds
                            ).records.first()
                        } else if (field.type is TlbTypeExpression.CellRef) {
                            fieldName = recIds.registerIdentifier("ref", 1)
                        }
                        val primitiveType = detectFieldType(field.type)
                        ConsField(field, fieldName, primitiveType, size.maxSize, subRecord)
                    }
                } else {
                    null
                }
            }
            ConsRecord(this, constructor, hasTrivialName, fields)
        }
    }

    private fun detectFieldType(expr: TlbTypeExpression): TlbPrimitiveType {
        if (expr.isAnon) {
            return TlbPrimitiveType.ANONYMOUS
        }
        if (expr is TlbTypeExpression.CellRef) {
            return TlbPrimitiveType.CELL
        }
        val size = expr.size
        val minBitSize = if (size.isFixed()) size.minBits else 0
        if (expr.isNatural) {
            return if (minBitSize == 1) TlbPrimitiveType.BOOL else TlbPrimitiveType.INT32
        }
        if (expr is TlbTypeExpression.Conditional) {
            return when (val subType = detectFieldType(expr.expression)) {
                TlbPrimitiveType.SLICE,
                TlbPrimitiveType.CELL,
                TlbPrimitiveType.INTEGER,
                TlbPrimitiveType.BITSTRING,
                TlbPrimitiveType.ENUM -> subType

                TlbPrimitiveType.INT32,
                TlbPrimitiveType.INT64 -> {
                    if (expr.intSign > 0) {
                        subType
                    } else {
                        TlbPrimitiveType.SLICE
                    }
                }

                else -> TlbPrimitiveType.SLICE
            }
        }

        if (size.maxRefs > 0) {
            return TlbPrimitiveType.SLICE
        }

        if (!expr.isInt) {
            if (expr is TlbTypeExpression.Apply) {
                if (expr.typeApplied.isSimpleEnum) {
                    return TlbPrimitiveType.ENUM
                }
                val typeName = expr.typeApplied.name
                if (expr.typeApplied == TlbCompiler.BITS_TYPE || (typeName.startsWith('b') && TlbCompiler.getBuiltInType(
                        typeName
                    ) != null)
                ) {
                    return if (minBitSize in 0..256) TlbPrimitiveType.BITS else TlbPrimitiveType.BITSTRING
                }
            }
            if (expr is TlbTypeExpression.Tuple && expr.expression is TlbTypeExpression.Apply && expr.expression.typeApplied.isBool) {
                return if (minBitSize in 0..256) TlbPrimitiveType.BITS else TlbPrimitiveType.BITSTRING
            }
            return TlbPrimitiveType.SLICE
        }
        if (minBitSize == 1) {
            return TlbPrimitiveType.BOOL
        }
        if (minBitSize < 32) {
            return TlbPrimitiveType.INT32
        }
        if (minBitSize == 32) {
            return if (expr.intSign < 0) TlbPrimitiveType.INT32 else TlbPrimitiveType.UINT32
        }
        if (minBitSize < 64) {
            return TlbPrimitiveType.INT64
        }
        if (minBitSize == 64) {
            return if (expr.intSign < 0) TlbPrimitiveType.INT64 else TlbPrimitiveType.UINT64
        }
        return TlbPrimitiveType.INTEGER
    }



    private inner class LocalContext(
        private val appendable: Appendable,
        private val tmpCodeIds: IdentScope = IdentScope(),
        public val actions: MutableList<Action> = ArrayList()
    ) : Appendable by appendable {
        init {
            tmpCodeIds.registerIdentifier("cs")
            tmpCodeIds.registerIdentifier("cb")
            tmpCodeIds.registerIdentifier("cell_ref")
            tmpCodeIds.registerIdentifier("t")
        }

        private val fieldVars = HashMap<ConsField, String>()

        fun bindRecordFields(record: ConsRecord) {
            for (field in record.fields) {
                if (!field.isImplicit) {
                    fieldVars[field] = field.name
                }
            }
        }

        fun fetchNatField(constructor: TlbConstructor, field: ConsField): Boolean {
            val id = fieldVars[field] ?: TODO("Implicit names for fields are not supported")
            val expr = field.field.type as? TlbTypeExpression.Apply ?: return false
            val ta = expr.typeApplied
            if(ta == TlbCompiler.NAT_TYPE || ta == TlbCompiler.NAT_WIDTH_TYPE || ta == TlbCompiler.NAT_LESS_TYPE || ta == TlbCompiler.NAT_LEQ_TYPE) {
                val action = buildString {
                    append("var ")
                    append(id)
                    append(" = cs~")
                    if (ta == TlbCompiler.NAT_TYPE) {
                        append("load_uint(32)")
                    } else {
                        when (ta) {
                            TlbCompiler.NAT_WIDTH_TYPE -> append("load_uint(")
                            TlbCompiler.NAT_LESS_TYPE -> append("load_uint_less(")
                            TlbCompiler.NAT_LEQ_TYPE -> append("load_uint_leq(")
                        }
                        appendExpr(expr.arguments.first())
                        append(")")
                    }
                }
                actions.add(Action(action))
                return true
            }
            return false
        }

        fun fetchField(fieldVar: String, expr: TlbTypeExpression, primitiveType: TlbPrimitiveType) {
            val i = expr.intSign
            val size = expr.size
            val l = if (size.isFixed()) size.minSize else -1
            val action = buildString {
                append("var ")
                append(fieldVar)
                append(" = ")
                when(primitiveType) {
                    TlbPrimitiveType.SLICE -> {
                        append("cs~load_slice")
                        if (size.maxSize and 0xFF != 0) {
                            append("_ext")
                        }
                        append("(")
                        appendSizeOfExpr(expr)
                        append(")")
                    }
                    TlbPrimitiveType.BITSTRING -> {
                        append("cs~load_bits")
                        append("(")
                        appendSizeOfExpr(expr)
                        append(")")
                    }
                    TlbPrimitiveType.BITS -> {
                        append("cs~load_bits")
                        append("(")
                        append(l)
                        append(")")
                    }
                    TlbPrimitiveType.CELL -> {
                        append("cs~load_ref()")
                    }
                    TlbPrimitiveType.BOOL -> {
                        append("cs~load_uint(1)")
                    }
                    TlbPrimitiveType.INT32 -> {
                        append("cs~load_int(32)")
                    }
                    TlbPrimitiveType.UINT32 -> {
                        append("cs~load_uint(32)")
                    }
                    TlbPrimitiveType.INT64 -> {
                        append("cs~load_int(64)")
                    }
                    TlbPrimitiveType.UINT64 -> {
                        append("cs~load_uint(64)")
                    }
                    TlbPrimitiveType.INTEGER -> {
                        append("cs~load_uint(")
                        append(l)
                        append(")")
                    }
                    else -> throw IllegalArgumentException("Can't fetch field of type $primitiveType")
                }
            }
            actions.add(Action(action))
        }

        private fun Appendable.appendExpr(expression: TlbTypeExpression): Appendable = appendable.apply {
            when(expression) {
                is TlbTypeExpression.Apply -> {
                    append(FuncCodeGen(type).funcClassName)
                }

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
                    val fieldName =fieldVars.keys.find {
                        it.field.name == expression.name
                    }?.let {
                        fieldVars[it]
                    } ?: throw UndefinedFieldException(expression.name)
                    append(fieldName)
                }
                else -> TODO("Expression `$expression` is not supported")
            }
        }

        private fun Appendable.appendSizeOfExpr(expr: TlbTypeExpression): Appendable = appendable.apply {
            check (expr !is TlbParamExpression) { "Can't compute size of non-type expression $expr" }
            var size = expr.size
            if (size.isFixed()) {
                append(size.minSize.toString())
                return@apply
            }
            when(expr) {
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
                    when(ta) {
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

        fun Appendable.appendReturnUnpack(record: ConsRecord) {
            append("return (cs, [")
            var separator = ""
            record.fields.forEach { field ->
                append(separator)
                val fieldName = fieldVars[field] ?: return@forEach
                append(fieldName)
                separator = ", "
            }
            append("])")
        }

        fun outputActions() {
            for (action in actions) {
                append("    ")
                append(action.toString())
                append(";\n")
            }
        }
    }

    @OptIn(ExperimentalContracts::class)
    private fun <R> ctx(appendable: Appendable, ctx: LocalContext.() -> R): R {
        contract {
            callsInPlace(ctx, InvocationKind.EXACTLY_ONCE)
        }
        val localContext = LocalContext(appendable)
        return localContext.ctx()
    }

    private class ConsField(
        val field: TlbField,
        val name: String,
        val primitiveType: TlbPrimitiveType,
        val size: Int,
        val subRecord: ConsRecord? = null
    ) {
        val isConstraint get() = field.isConstraint
        val isImplicit get() = field.isImplicit
    }

    private class ConsRecord(
        val funcType: FuncCodeGen,
        val constructor: TlbConstructor,

        /**
         * Ff parent type contains only one constructor or constructor name is empty).
         */
        val hasTrivialName: Boolean,
        val fields: List<ConsField>
    ) {
        fun declareRecordUnpack(appendable: Appendable, newLine: String) = appendable.apply {
            append("(slice, ")
            declareRecordUnpackType(appendable, newLine)
            constructor.params.forEachIndexed { index, param ->
                if (param is TlbTypeExpression.NaturalParam && param.isNegated) {
                    append(", int")
                }
            }
            append(") ")
            append("${funcType.funcClassName}::${funcType.consEnumName[constructor]}::parse(")
            append("slice cs")
            constructor.params.forEachIndexed { index, param ->
                if (param is TlbTypeExpression.NaturalParam && !param.isNegated) {
                    append(", int ")
                    append(funcType.typeParamName[index])
                } else if (param is TlbTypeExpression.TypeParam) {
                    append(", cont ")
                    append(funcType.typeParamName[index])
                }
            }
            append(")")
        }

        fun declareRecordUnpackType(appendable: Appendable, newLine: String) = appendable.apply {
            append("[\n")
            fields.forEachIndexed { index, field ->
                val funcType = field.primitiveType.funcType() + if (index != fields.lastIndex) "," else ""
                append(newLine)
                append(funcType)
                append(" ".repeat("slice,".length - funcType.length))
                append(" ;; ")
                append(field.name)
                append(" : ")
                append(field.field.type.toString())
                appendLine()
            }
            append("]")
        }
    }

    private data class Action(
        val fixedSize: MinMaxSize,
        val action: String
    ) {
        constructor(action: String) : this(MinMaxSize.IMPOSSIBLE, action)

        override fun toString(): String {
            return when {
                fixedSize == MinMaxSize.IMPOSSIBLE-> action
                fixedSize.value == 0L -> ""
                fixedSize.value < 0x10000 -> "cs~skip_bits(${fixedSize.value})"
                fixedSize.value and 0xFFFF == 0L -> "cs~skip_refs(${fixedSize.value ushr 16})"
                else -> "cs~skip_size(${fixedSize.value})"
            }
        }
    }
}

private fun TlbPrimitiveType.funcType() = when (this) {
    TlbPrimitiveType.CELL -> "cell"
    TlbPrimitiveType.TYPE -> "cont"

    TlbPrimitiveType.SLICE,
    TlbPrimitiveType.BITS,
    TlbPrimitiveType.BITSTRING -> "slice"

    TlbPrimitiveType.INTEGER,
    TlbPrimitiveType.BOOL,
    TlbPrimitiveType.ENUM,
    TlbPrimitiveType.VARUINT16,
    TlbPrimitiveType.INT32,
    TlbPrimitiveType.UINT32,
    TlbPrimitiveType.INT64,
    TlbPrimitiveType.UINT64 -> "int"

    TlbPrimitiveType.ANONYMOUS -> TODO("Anonymous type is not supported, YET.")
}
