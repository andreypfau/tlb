package org.ton.tlb.generator

import org.ton.tlb.MinMaxSize
import org.ton.tlb.compiler.*
import org.ton.tlb.isNullOrEmpty
import org.ton.tlb.parser.TlbGrammar

public class SchemeGenerator(
    public val src: String,
    public val compiler: TlbCompiler = TlbCompiler()
) {
    public fun generate(): String = buildString {
        val ast = TlbGrammar().parseOrThrow(src)

        ast.forEach {
            compiler.compileConstructor(it)
        }

        val constantExpr = HashSet<TlbType>()
        val newTy = compiler.types.map { (_, ty) ->
            val newConstructors = ty.constructors.map { constructor ->
                val newFields = constructor.fields.map { field ->
                    if (!field.isExplicit) {
                        field
                    } else {
                        val type = field.type
                        val newType = if (type is TlbTypeExpression.Apply && type.arguments.isNotEmpty()) {
                            val applyType = applyType(type.typeApplied, type.arguments)
                            if (type.typeApplied != applyType) {
                                constantExpr.add(applyType)
                            }
                            TlbTypeExpression.Apply(applyType)
                        } else if (type is TlbTypeExpression.CellRef) {
                            val refType = type.expression
                            if (refType is TlbTypeExpression.Apply && refType.arguments.isNotEmpty()) {
                                val applyType = applyType(refType.typeApplied, refType.arguments)
                                if (refType.typeApplied != applyType) {
                                    constantExpr.add(applyType)
                                }
                            }
                            type
                        } else {
                            type
                        }
                        TlbField(field.name, newType, field.isImplicit, field.isConstraint)
                    }
                }
                TlbConstructor(constructor.tag, constructor.name, constructor.typeName, newFields, constructor.params)
            }
            val newTy = TlbType(
                ty.name,
                ty.isProducesNatural,
                ty.isNatural,
                ty.isAnon,
                ty.intSign,
                ty.args,
                newConstructors,
                ty.isAnyBits,
                ty.size,
                ty.beginsWith,
                ty.isFinal
            )
            newTy.recomputeSize()
            newTy
        }
        constantExpr.forEach { ty ->
            appendLine(TypeGenerator(ty).genDeclarations())
        }
        newTy.forEach { ty ->
            if (ty.constructors.all { it.isConstant }) {
                appendLine(TypeGenerator(ty).genDeclarations())
            }
        }
    }

    private fun applyType(type: TlbType, applyParams: List<TlbTypeExpression>): TlbType {
        val newConstr = type.constructors.map { constr ->
            remap(constr, applyParams)
        }
        val newType = TlbType(
            type.name + "_" + applyParams.joinToString("_"),
            type.isProducesNatural,
            type.isNatural,
            type.isAnon,
            type.intSign,
            applyParams,
            newConstr,
            type.isAnyBits,
            type.size,
            type.beginsWith,
            type.isFinal
        )
        newType.recomputeSize()
        return newType
    }

    private fun remap(constr: TlbConstructor, applyParams: List<TlbTypeExpression>): TlbConstructor {
        val typeParams = constr.params
        val newFields = constr.fields.map { field ->
            remap(field, typeParams, applyParams)
        }
        return TlbConstructor(constr.tag, constr.name, constr.typeName, newFields, applyParams)
    }

    private fun remap(
        field: TlbField,
        typeParams: List<TlbTypeExpression>,
        applyParams: List<TlbTypeExpression>
    ): TlbField {
        if (field.isExplicit) {
            val newType = remap(field.type, typeParams, applyParams)
            return TlbField(field.name, newType, field.isImplicit, field.isConstraint)
        } else {
            return field
        }
    }

    private fun remap(
        expr: TlbTypeExpression,
        typeParams: List<TlbTypeExpression>,
        applyParams: List<TlbTypeExpression>
    ): TlbTypeExpression {
        if (expr is TlbTypeExpression.Apply && expr.arguments.isNotEmpty()) {
            val newArgs = expr.arguments.map {
                remap(it, typeParams, applyParams)
            }
            return TlbTypeExpression.Apply(expr.typeApplied, newArgs)
        }
        if (expr is TlbTypeExpression.TypeParam) {
            val index = typeParams.indexOf(expr)
            val applyParam = applyParams[index]
            return applyParam
        }
        return expr
    }
}

public class TypeGenerator(
    public val type: TlbType,
    public val typeName: String = type.name
) {
    public fun genDeclarations(): String = buildString {
        type.constructors.forEach { constr ->
            appendLine(ConstructorGenerator(constr, typeName).genDeclarations())
        }
        appendLine(genSkip())
        appendLine(genSize())
        appendLine(genLoad())
        appendLine(genConstructorSkip())
        appendLine(genParse())
        appendLine(genStore())
    }

    public fun genSize(): String = buildString {
        appendLine("(int, int) $typeName::size(slice cs) {")
        if (type.size.isFixed()) {
            append("    return (")
            append(type.size.minBits.toString())
            append(", ")
            append(type.size.minRefs.toString())
            append(");\n")
        } else {
            fun getSizeExpr(constructor: TlbConstructor): String {
                return if (constructor.size.isFixed()) {
                    buildString {
                        append("return (")
                        append(constructor.size.minBits.toString())
                        append(", ")
                        append(constructor.size.minRefs.toString())
                        append(");")
                    }
                } else {
                    "return get_size_by_skip(cs, $typeName::${constructor.name}::skip);"
                }
            }
            if (type.constructors.size == 1) {
                appendLine("    " + getSizeExpr(type.constructors.first()))
            } else {
                appendLine("    " + genSwitch("return (-1, -1);", ::getSizeExpr))
            }
        }
        appendLine("}")
    }

    public fun genSkip(): String = buildString {
        appendLine("(slice) $typeName::skip(slice cs) {")
        if (type.constructors.size == 1) {
            appendLine("   return $typeName::${type.constructors.first().name}::skip(cs);")
        } else {
            appendLine("    " + genSwitch("return cs;") { constr ->
                "return $typeName::${constr.name}::skip(cs);"
            })
        }
        appendLine("}")
    }

    public fun genLoad(): String = buildString {
        appendLine("(slice, slice) $typeName::load(slice cs) {")
        appendLine("    return tlb::load(cs, $typeName::size);")
        appendLine("}")
    }

    public fun genConstructorSkip(): String = buildString {
        type.constructors.forEach { constr ->
            appendLine(ConstructorGenerator(constr, typeName).genSkip())
        }
    }

    public fun genParse(): String = buildString {
        type.constructors.forEach { constr ->
            appendLine(ConstructorGenerator(constr, typeName).genParse())
        }
    }

    public fun genStore(): String = buildString {
        type.constructors.forEach { constr ->
            appendLine(ConstructorGenerator(constr, typeName).genStore())
        }
    }

    private fun genSwitch(default: String, branch: (TlbConstructor) -> String): String =
        type.constructors.joinToString(" else") { constructor ->
            "if cs~slice_begin_with(\"${constructor.tag?.toHex()}\"s) {\n        ${branch(constructor)}\n    }"
        } + " else {\n        $default\n    }"
}

public class ConstructorGenerator(
    public val const: TlbConstructor,
    public val typeName: String = const.typeName
) {
    private val ctx = ActionContextImpl()

    public fun stdlib(): String = buildString {
        appendLine("const int TLB_SKIP = 0;")
        appendLine("const int TLB_GET_SIZE = 1;")
        appendLine("const int TLB_LOAD = 2;")
        appendLine("const int TLB_PARSE = 3;")
        appendLine("const int TLB_STORE = 4;")
        appendLine("const int TLB_UNKNOWN_FUNCTION = 340001;")
    }

    public fun genDeclarations(): String = buildString {
        appendLine("(slice) ${typeName}::${const.name}::skip(slice cs);")
        appendLine("(slice, tuple) ${typeName}::${const.name}::parse(slice cs);")
        appendLine("(builder) ${typeName}::${const.name}::store(builder cb, tuple data);")
    }

    public fun genSkip(): String = buildString {
        appendLine("(slice) ${typeName}::${const.name}::skip(slice cs) {")
        const.fields.forEach {
            genSkip(it)
        }
        ctx.build(this)
        appendLine("    return cs;")
        appendLine("}")
    }

    public fun genParse(): String = buildString {
        appendLine("(slice, tuple) ${typeName}::${const.name}::parse(slice cs) {")
        appendLine("    var data = empty_tuple();")
        for (field in const.fields) {
            if (field.isConstraint) {
                continue
            }
            if (field.isExplicit) {
                genParse(field)
            }
        }
        ctx.build(this)
        appendLine("    return (cs, data);")
        appendLine("}")
    }

    public fun genStore(): String = buildString {
        appendLine("(builder) ${typeName}::${const.name}::store(builder cb, tuple data) {")

        if (!const.tag.isNullOrEmpty() && const.tag.toHex().isNotEmpty()) { // TODO: fix isNullOrEmpty
            appendLine("    cb = cb.store_slice(\"${const.tag.toHex()}\"s);")
        }
        for (field in const.fields) {
            if (field.isExplicit) {
                genStore(field)
            }
        }
        ctx.build(this)
        appendLine("    return cb;")
        appendLine("}")
    }

    private fun genStore(field: TlbField) {
        if (ctx.addStoreNatFieldAction(field)) {
            return
        }

        val expr = field.type
        val size = expr.size
        val isAnyBits = expr.isAnyBits
        val vt = expr.calcPrimitiveType()

        if (size.isFixed() && vt != TlbPrimitiveType.ENUM) {
            if (vt == TlbPrimitiveType.ANONYMOUS) {
                TODO()
            } else {
                ctx.addStoreFieldAction(field)
            }
            return
        }

        if (expr is TlbTypeExpression.NaturalParam && expr.isNegated) {

        }
        if (isAnyBits && expr.canComputeSizeOf() && vt != TlbPrimitiveType.ENUM) {
            ctx.addStoreFieldAction(field)
            return
        }
        if (expr !is TlbTypeExpression.CellRef) {
            if (vt == TlbPrimitiveType.SLICE) {
                ctx.addAction {
                    append("cb = cb.store_slice(data~list_next())")
                }
            } else {
                TODO()
            }
            return
        }

        ctx.addAction {
            append("cb = cb.store_ref(data~list_next())")
        }
    }

    private fun genParse(field: TlbField) {
        if (ctx.addLoadNatFieldAction(field)) {
            return
        }
        val expr = field.type
        val size = expr.size
        val vt = expr.calcPrimitiveType()
        if (size.isFixed() && vt != TlbPrimitiveType.ENUM) {
            if (vt == TlbPrimitiveType.ANONYMOUS) {
                TODO()
            } else {
                ctx.addLoadFieldAction(field)
            }
            return
        }

        if (vt == TlbPrimitiveType.ENUM || vt == TlbPrimitiveType.SLICE) {
            ctx.addAction {
                append("data~tpush(cs~")
                appendExpr(expr)
                append("::load()")
                append(")")
            }
            return
        }

        ctx.addAction {
            append("data~tpush(cs~load_ref())")
        }
    }

    private fun genSkip(field: TlbField) {
        val expr = field.type
        val size = expr.size
        val anyBits = expr.isAnyBits

        if (!field.isExplicit) return
        if (expr.isNaturalSubType() && !anyBits) {
            ctx.addLoadNatFieldAction(field)
            return
        }
        if (size.isFixed()) return ctx.addAction(Action(size))
        if (expr.isNegated()) TODO("Negated types are not supported")
        if (expr.isReferred()) return ctx.addAction(Action(MinMaxSize.ONE_REF))

        if (anyBits && expr.canComputeSizeOf()) {
            // field size can be computed at run-time, and either the contents is arbitrary, or we are not validating
            return ctx.addAction {
                append("cs~skip_bits(")
                appendSizeOfExpr(expr)
                append(")")
            }
        }

        if (expr !is TlbTypeExpression.CellRef) {
            // field type is not a reference, generate a type expression and invoke skip/validate_skip method
            return ctx.addAction {
                append(expr.skipExpression())
            }
        }

        // the (remaining) field type is a reference
        if (expr is TlbTypeExpression.Apply && expr.isReferred()) {
            // the subcase when the field type is either a reference to a cell with arbitrary contents
            // or it is a reference, and we are not validating, so we simply skip the reference
            return ctx.addAction(Action("cs~slice_split(0, 1)"))
        }

//        ctx.addAction {
//            append("cs~")
//            append(expr.skipExpression())
//        }
        TODO()
    }

    private fun TlbTypeExpression.skipExpression(): String {
        if (this is TlbTypeExpression.Apply) {
            return buildString {
                append("cs~")
                append(typeApplied.name)
                append("::skip()")
            }
        }
        TODO(this.toString())
    }

    private fun ActionContext.addLoadFieldAction(field: TlbField) {
        val expr = field.type
        val size = expr.size
        val l = if (size.isFixed()) size.minBits else -1
        val primitiveType = expr.calcPrimitiveType()
        addAction {
            append("data~tpush(")
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

                else -> TODO()
            }
            append(")")
        }
    }

    private fun ActionContext.addLoadNatFieldAction(field: TlbField): Boolean {
        val expr = field.type as? TlbTypeExpression.Apply ?: return false
        val ta = expr.typeApplied
        if (ta == TlbCompiler.NAT_TYPE || ta == TlbCompiler.NAT_WIDTH_TYPE || ta == TlbCompiler.NAT_LESS_TYPE || ta == TlbCompiler.NAT_LEQ_TYPE) {
            val action = buildString {
                append("data~tpush(cs~")
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
                append(")")
            }
            addAction(Action(action))
            return true
        }
        return false
    }

    private fun ActionContext.addStoreNatFieldAction(field: TlbField): Boolean {
        val expr = field.type as? TlbTypeExpression.Apply ?: return false
        val ta = expr.typeApplied
        if (ta == TlbCompiler.NAT_TYPE || ta == TlbCompiler.NAT_WIDTH_TYPE || ta == TlbCompiler.NAT_LESS_TYPE || ta == TlbCompiler.NAT_LEQ_TYPE) {
            addAction {
                append("cb = cb.")
                if (ta == TlbCompiler.NAT_TYPE) {
                    append("store_uint(").append("data~list_next()").append(", 32)")
                } else {
                    when (ta) {
                        TlbCompiler.NAT_WIDTH_TYPE -> append("store_uint(")
                        TlbCompiler.NAT_LESS_TYPE -> append("store_uint_less(")
                        TlbCompiler.NAT_LEQ_TYPE -> append("store_uint_leq(")
                    }
                    append("data~list_next()")
                    append(", ")
                    appendExpr(expr.arguments.first())
                    append(")")
                }
            }
            return true
        }
        return false
    }

    private fun ActionContext.addStoreFieldAction(field: TlbField) {
        val expr = field.type
        val isInteger = expr.isInt
        val size = expr.size
        val l = if (size.isFixed()) size.minBits else -1
        val primitiveType = expr.calcPrimitiveType()
        addAction {
            when (primitiveType) {
                TlbPrimitiveType.BITSTRING,
                TlbPrimitiveType.BITS,
                TlbPrimitiveType.SLICE -> {
                    append("cb = cb.store_slice(data~list_next())")
                }

                TlbPrimitiveType.CELL -> {
                    append("cb = cb.store_ref(data~list_next())")
                }

                TlbPrimitiveType.INT32, TlbPrimitiveType.INT64 -> {
                    append("cb = cb.store_int(data~list_next(), $l)")
                }

                TlbPrimitiveType.BOOL, TlbPrimitiveType.UINT32, TlbPrimitiveType.UINT64 -> {
                    append("cb = cb.store_uint(data~list_next(), $l)")
                }

                TlbPrimitiveType.INTEGER -> {
                    append("cb = cb.store_uint(data~list_next(), ").appendSizeOfExpr(expr).append(")")
                }

                else -> throw IllegalArgumentException("Can't fetch field of type $primitiveType")
            }
        }
    }
}
