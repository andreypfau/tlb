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

    private val simpleGetSize get() = type.size.isFixed()
    private val inlineSkip get() = simpleGetSize

    init {
        assignClassName()
        assignConsNames()
        assignClassFieldNames()
        assignConsValues()
        assignRecordConsNames()
    }

    public fun generate(appendable: Appendable): Appendable = appendable.apply {
        declareSkipMethod().append(";\n")

        generateGetSizeMethod(appendable)
        generateLoadMethod(appendable)

        records.forEach { record ->
            generateSkipMethod(appendable, record)
            generateUnpackMethod(appendable, record)
            generatePackMethod(appendable, record)
        }

        generateSkipMethod(appendable)
    }

    private fun generateGetSizeMethod(appendable: Appendable) = appendable.apply {
        appendLine()
        append("(int, int) ")
        append(funcClassName)
        append("::get_size(slice cs)")
        append(" {\n")
        if (simpleGetSize) {
            append("    return (")
            append(type.size.minBits.toString())
            append(", ")
            append(type.size.minRefs.toString())
            append(");\n")
        } else {
            append("    return tlb::get_size_by_skip(cs, ")
            append(funcClassName)
            append("::skip);\n")
        }
        append("}\n")
    }

    private fun Appendable.declareSkipMethod() = apply {
        appendLine()
        append("(slice) ")
        append(funcClassName)
        append("::skip(slice cs)")
    }

    private fun generateLoadMethod(appendable: Appendable) = appendable.apply {
        appendLine()
        append("(slice, slice) ")
        append(funcClassName)
        append("::load(slice cs)")
        append(" {\n")
        append("    return tlb::load(cs, ")
        append(funcClassName)
        append("::get_size);\n")
        append("}\n")
    }

    private fun generateSkipMethod(appendable: Appendable) = appendable.apply {
        declareSkipMethod()
        append(" {\n")
        for (record in records) {
            append("    if cs~slice_begins_with(\"")
            append(record.cons.tag?.toHex())
            append("\"s) {\n")
            append("        return ")
            append(record.funcType.funcClassName)
            append("::")
            append(record.funcType.consEnumName[record.cons])
            append("::skip(cs);\n")
            append("    }\n")
        }
        append("    return cs;\n")
        append("}\n")
    }

    private fun generateSkipMethod(appendable: Appendable, record: ConsRecord) = ctx(appendable) {
        appendLine()
        append("(slice) ")
        append(record.funcType.funcClassName)
        append("::")
        append(record.funcType.consEnumName[record.cons])
        append("::skip(slice cs)")
        append(" {\n")
        for (field in record.fields) {
            if (!field.isImplicit) {
                generateSkipField(record, field)
            }
        }
        outputActions()
        append("    return cs;\n")
        append("}\n")
    }

    private fun LocalContext.generateSkipField(record: ConsRecord, field: ConsField) {
        val expr = field.type
        val size = expr.size
        val anyBits = expr.isAnyBits

        if (expr.isNaturalSubType() && !anyBits) {
            fetchNatField(record.cons, field)
            return
        }

        if (size.isFixed()) {
            actions += Action(size)
            return
        }

        if (expr.isNegated()) {
            TODO("Negated types are not supported")
        }

        if (expr.isReferred()) {
            actions += Action(MinMaxSize.ONE_REF)
            return
        }

        if (anyBits && expr.canComputeSizeOf()) {
            // field size can be computed at run-time, and either the contents is arbitrary, or we are not validating
            actions += Action(buildString {
                append("cs~skip_bits(")
                appendSizeOfExpr(expr)
                append(")")
            })
            return
        }

        if (expr !is TlbTypeExpression.CellRef) {
            // field type is not a reference, generate a type expression and invoke skip/validate_skip method
            actions += Action {
                append("cs~")
                appendExpr(expr)
                append("::skip()")
            }
            return
        }

        // the (remaining) field type is a reference
        if (expr is TlbTypeExpression.Apply && expr.isReferred()) {
            // the subcase when the field type is either a reference to a cell with arbitrary contents
            // or it is a reference, and we are not validating, so we simply skip the reference
            actions += Action("cs~slice_split(0, 1)")
            return
        }

        actions += Action {
            append("cs~")
            appendExpr(expr)
            append("::skip()")
        }
    }

    private fun generateUnpackMethod(appendable: Appendable, record: ConsRecord) = ctx(appendable) {
        appendLine()
        record.declareRecordUnpack(appendable)
        append(" {\n")

        bindRecordFields(record)

        for (field in record.fields) {
            if (field.isConstraint) {
                continue
            }
            if (field.isImplicit) {

            } else {
                generateUnpackField(this, field, record.cons)
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
        val vt = field.primitiveType
        if (size.isFixed() && field.primitiveType != TlbPrimitiveType.ENUM) {
            if (field.primitiveType == TlbPrimitiveType.ANONYMOUS) {
                TODO()
            } else {
                fetchField(field.name, expr, field.primitiveType)
            }
            return@apply
        }

        if (expr is TlbTypeExpression.NaturalParam && expr.isNegated) {

        }

        if (vt == TlbPrimitiveType.SLICE || vt == TlbPrimitiveType.ENUM) {
            fetchType(field, expr)
            return@apply
        }

        fetchRef(field, expr)
    }

    private fun generatePackMethod(appendable: Appendable, record: ConsRecord) = ctx(appendable) {
        appendLine()
        record.declareRecordPack(appendable)
        append(" {\n")

        bindRecordFields(record)

        if (record.fields.isNotEmpty()) {
            actions += Action(
                buildString {
                    append("var (")
                    var seprarator = ""
                    for (field in record.fields) {
                        if (!field.isImplicit) {
                            append(seprarator)
                            append(fieldVar(field))
                            seprarator = ", "
                        }
                    }
                    append(") = data")
                }
            )
        }

        for (field in record.fields) {
            if (field.isConstraint) {

                continue
            }
            if (!field.isImplicit) {
                generatePackField(this, field, record.cons)
            }
        }

        actions += Action("return cb")

        outputActions()
        append("}\n")
    }

    private fun generatePackField(ctx: LocalContext, field: ConsField, constructor: TlbConstructor) = ctx.apply {
        if (storeNatField(constructor, field)) {
            return@apply
        }

        val expr = field.field.type
        val size = expr.size
        val isAnyBits = expr.isAnyBits
        val vt = field.primitiveType


        if (size.isFixed() && vt != TlbPrimitiveType.ENUM) {
            if (vt == TlbPrimitiveType.ANONYMOUS) {
                TODO()
            } else {
                storeField(field.name, expr, vt)
            }
            return@apply
        }

        if (expr is TlbTypeExpression.NaturalParam && expr.isNegated) {

        }
        if (isAnyBits && expr.canComputeSizeOf() && vt != TlbPrimitiveType.ENUM) {
            storeField(field.name, expr, vt)
            return@apply
        }

        if (expr !is TlbTypeExpression.CellRef) {
            if (vt == TlbPrimitiveType.SLICE) {
                actions += Action("cb = cb.store_slice(${field.name})")
            } else {
                TODO()
            }
            return@apply
        }

        storeRef(field, expr)
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

        fun fieldVar(field: ConsField): String {
            return fieldVars[field] ?: throw UndefinedFieldException(field.name)
        }

        fun bindRecordFields(record: ConsRecord) {
            for (field in record.fields) {
                fieldVars[field] = field.name
            }
        }

        fun fetchNatField(constructor: TlbConstructor, field: ConsField): Boolean {
            val id = fieldVars[field] ?: TODO("Implicit names for fields are not supported")
            val expr = field.field.type as? TlbTypeExpression.Apply ?: return false
            val ta = expr.typeApplied
            if (ta == TlbCompiler.NAT_TYPE || ta == TlbCompiler.NAT_WIDTH_TYPE || ta == TlbCompiler.NAT_LESS_TYPE || ta == TlbCompiler.NAT_LEQ_TYPE) {
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

        fun storeNatField(constructor: TlbConstructor, field: ConsField): Boolean {
            val id = fieldVars[field] ?: TODO("Implicit names for fields are not supported")
            val expr = field.field.type as? TlbTypeExpression.Apply ?: return false
            val ta = expr.typeApplied
            if (ta == TlbCompiler.NAT_TYPE || ta == TlbCompiler.NAT_WIDTH_TYPE || ta == TlbCompiler.NAT_LESS_TYPE || ta == TlbCompiler.NAT_LEQ_TYPE) {
                val action = buildString {
                    append("cb = cb.")

                    if (ta == TlbCompiler.NAT_TYPE) {
                        append("store_uint(").append(id).append(", 32)")
                    } else {
                        when (ta) {
                            TlbCompiler.NAT_WIDTH_TYPE -> append("store_uint(")
                            TlbCompiler.NAT_LESS_TYPE -> append("store_uint_less(")
                            TlbCompiler.NAT_LEQ_TYPE -> append("store_uint_leq(")
                        }
                        append(id)
                        append(", ")
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
            val size = expr.size
            val l = if (size.isFixed()) size.minBits else -1
            val action = buildString {
                append("var ")
                append(fieldVar)
                append(" = ")
                when (primitiveType) {
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

                    TlbPrimitiveType.INT32, TlbPrimitiveType.INT64 -> {
                        append("cs~load_int(").append(l).append(")")
                    }

                    TlbPrimitiveType.BOOL, TlbPrimitiveType.UINT32, TlbPrimitiveType.UINT64 -> {
                        append("cs~load_uint(").append(l).append(")")
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

        fun storeField(fieldVar: String, expr: TlbTypeExpression, primitiveType: TlbPrimitiveType) {
            val isInteger = expr.isInt
            val size = expr.size
            val l = if (size.isFixed()) size.minBits else -1
            val action = buildString {
                when (primitiveType) {
                    TlbPrimitiveType.BITSTRING,
                    TlbPrimitiveType.BITS,
                    TlbPrimitiveType.SLICE -> {
                        append("cb = cb.store_slice(").append(fieldVar).append(")")
                    }

                    TlbPrimitiveType.CELL -> {
                        append("cb = cb.store_ref(").append(fieldVar).append(")")
                    }

                    TlbPrimitiveType.INT32, TlbPrimitiveType.INT64 -> {
                        append("cb = cb.store_int(").append(fieldVar).append(", ").append(l).append(")")
                    }

                    TlbPrimitiveType.BOOL, TlbPrimitiveType.UINT32, TlbPrimitiveType.UINT64 -> {
                        append("cb = cb.store_uint(").append(fieldVar).append(", ").append(l).append(")")
                    }

                    TlbPrimitiveType.INTEGER -> {
                        append("cb = cb.store_uint(").append(fieldVar).append(", ").appendSizeOfExpr(expr).append(")")
                    }

                    else -> throw IllegalArgumentException("Can't fetch field of type $primitiveType")
                }
            }
            actions.add(Action(action))
        }

        fun fetchType(field: ConsField, expression: TlbTypeExpression) {
            val fieldName = fieldVars[field] ?: throw UndefinedFieldException(field.name)
            val action = buildString {
                append("var ")
                append(fieldName)
                append(" = cs~")
                appendExpr(expression)
                append("::load()")
            }
            actions.add(Action(action))
        }

        fun storeType(field: ConsField, expression: TlbTypeExpression) {
            val fieldName = fieldVars[field] ?: throw UndefinedFieldException(field.name)
            val action = buildString {
                append("cb = cb.")
                appendExpr(expression)
                append("::store(")
                append(fieldName)
                append(")")
            }
            actions.add(Action(action))
        }

        fun fetchRef(field: ConsField, expr: TlbTypeExpression) {
            val fieldNme = fieldVars[field] ?: throw UndefinedFieldException(field.name)
            val action = buildString {
                append("var ")
                append(fieldNme)
                append(" = cs~load_ref()")
            }
            actions.add(Action(action))
        }

        fun storeRef(field: ConsField, expr: TlbTypeExpression) {
            val fieldNme = fieldVars[field] ?: throw UndefinedFieldException(field.name)
            val action = buildString {
                append("cb = cb.store_ref(")
                append(fieldNme)
                append(")")
            }
            actions.add(Action(action))
        }

        fun Appendable.appendExpr(expression: TlbTypeExpression): Appendable = apply {
            when (expression) {
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
                    append(expression.name)
                }

                else -> TODO("Expression `$expression` is not supported")
            }
        }

        fun Appendable.appendSizeOfExpr(expr: TlbTypeExpression): Appendable = apply {
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
            for (action in actions.combine()) {
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
        val type get() = field.type
        val isConstraint get() = field.isConstraint
        val isImplicit get() = field.isImplicit
    }

    private class ConsRecord(
        val funcType: FuncCodeGen,
        val cons: TlbConstructor,

        /**
         * Ff parent type contains only one constructor or constructor name is empty).
         */
        val hasTrivialName: Boolean,
        val fields: List<ConsField>
    ) {
        fun declareRecordUnpack(appendable: Appendable) = appendable.apply {
            append("(slice, ")
            declareRecordUnpackType(appendable)
            cons.params.forEachIndexed { index, param ->
                if (param is TlbTypeExpression.NaturalParam && param.isNegated) {
                    append(", int")
                }
            }
            append(") ")
            append("${funcType.funcClassName}::${funcType.consEnumName[cons]}::parse(")
            append("slice cs")
            cons.params.forEachIndexed { index, param ->
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

        fun declareRecordPack(appendable: Appendable) = appendable.apply {
            append("builder ")
            append("${funcType.funcClassName}::${funcType.consEnumName[cons]}::store(builder cb")
            if (fields.isNotEmpty()) {
                append(", ")
                declareRecordUnpackType(appendable)
                append(" data")
            }
            append(")")
        }

        fun declareRecordUnpackType(appendable: Appendable) = appendable.apply {
            append("[\n")
            fields.forEachIndexed { index, field ->
                if (!field.isImplicit) {
                    val funcType = field.primitiveType.funcType() + if (index != fields.lastIndex) "," else ""
                    append("    ")
                    append(funcType)
                    append(" ".repeat("slice,".length - funcType.length))
                    append(" ;; ")
                    append(field.name)
                    append(" : ")
                    append(field.field.type.toString())
                    appendLine()
                }
            }
            append("]")
        }
    }



    private fun List<Action>.combine() = buildList {
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

    public companion object {
        public val TLB_LIB: String = """;; This file is generated by TLB compiler. Do not edit it manually.
#pragma version >=0.4.0;
#include "stdlib.fc";

(slice, int) slice_begins_with(slice cs, slice prefix) asm "SDBEGINSXQ";
(slice, slice) slice_split(slice cs, int bits, int refs) asm(-> 1 0) "SPLIT";

(int, int) tlb::get_size_by_skip(slice cs, ((slice) -> slice) skip) {
    int (before_bits, before_refs) = cs.slice_bits_refs();
    slice new_slice = skip(cs);
    int (after_bits, after_refs) = new_slice.slice_bits_refs();
    return (before_bits - after_bits, before_refs - after_refs);
}

(slice) tlb::skip(slice cs, ((slice) -> (int, int)) get_size) inline {
    int (bits, refs) = get_size(cs);
    cs~slice_split(bits, refs);
    return cs;
}

(slice, slice) tlb::load(slice cs, ((slice) -> (int, int)) get_size) inline {
    int (bits, refs) = get_size(cs);
    return cs.slice_split(bits, refs);
}
""".trimIndent()
    }
}
