package org.ton.tlb.compiler

import org.ton.tlb.BitPfxCollection
import org.ton.tlb.MinMaxSize
import org.ton.tlb.compiler.TlbTypeExpression.Type.isAnon
import org.ton.tlb.compiler.exceptions.CantApplyNonNatTypeException
import org.ton.tlb.compiler.exceptions.ConstructorTypeLowerCaseException
import org.ton.tlb.compiler.exceptions.TypeAlreadyDefinedException
import org.ton.tlb.compiler.exceptions.UndefinedTypeException
import org.ton.tlb.parser.AST

public class TlbCompiler {

    public val types: MutableMap<String, TlbType> = mutableMapOf()

    public fun compileConstructor(ast: AST.Constructor): TlbType {
        var fields = ArrayList<TlbField>()
        ast.fields.forEach { field ->
            fields.add(compileField(field, fields))
        }
        val params = ast.args.map { expr ->
            compileTypeExpression(expr, fields)
        }
        val constructor = TlbConstructor(
            tag = ast.tag,
            name = ast.name,
            typeName = ast.typeName,
            fields = fields,
            params = params
        )
        val type = getType(ast.typeName) ?: registerNewType(ast.typeName, params)
        type += constructor

        var size = type.size
        while (true) {
            type.recomputeSize()
            val newSize = type.size
            if (newSize == size) {
                break
            }
            size = newSize
        }

        return type
    }

    private fun compileAnonConstructor(ast: AST.TypeExpression.AnonymousConstructor): TlbType {
        val fields = ArrayList<TlbField>()
        ast.fields.forEach {
            fields.add(compileField(it, fields))
        }
        val constructor = TlbConstructor(
            tag = null,
            name = "",
            typeName = "",
            fields = fields,
        )
        return TlbType(name = "", false, isAnon, constructors = listOf(constructor))
    }

    public fun compileField(
        ast: AST.Field,
        definedFields: List<TlbField>,
    ): TlbField {
        return TlbField(
            name = ast.name ?: "",
            type = compileTypeExpression(ast.typeExpression, definedFields),
            isImplicit = ast.isImplicit,
            isConstraint = ast.isConstraint
        )
    }

    public fun compileTypeExpression(
        ast: AST.TypeExpression,
        definedFields: List<TlbField>
    ): TlbTypeExpression {
        return when (ast) {
            is AST.TypeExpression.AnonymousConstructor -> {
                val type = compileAnonConstructor(ast)
                return TlbTypeExpression.Apply(type)
            }
            is AST.TypeExpression.Apply -> {
                val apply = (compileTypeExpression(ast.expression, definedFields) as? TlbTypeExpression.Apply)
                    ?: throw UndefinedTypeException(ast.expression.toString())
                return apply.copy(arguments = ast.arguments.map { compileTypeExpression(it, definedFields) })
            }

            is AST.TypeExpression.CellRef -> TlbTypeExpression.CellRef(
                compileTypeExpression(
                    ast.expression,
                    definedFields
                )
            )

            is AST.TypeExpression.Conditional -> TlbTypeExpression.Conditional(
                compileTypeExpression(ast.expression, definedFields) as? TlbNatExpression
                    ?: throw CantApplyNonNatTypeException(),
                compileTypeExpression(ast.expression2, definedFields),
            )

            is AST.TypeExpression.Add -> TlbTypeExpression.Add(
                compileTypeExpression(ast.expression, definedFields),
                compileTypeExpression(ast.expression2, definedFields)
            )
            is AST.TypeExpression.GetBit -> TlbTypeExpression.GetBit(
                compileTypeExpression(ast.expression, definedFields),
                compileTypeExpression(ast.expression2, definedFields)
            )
            is AST.TypeExpression.IntConstant -> TlbTypeExpression.IntConstant(ast.value)
            is AST.TypeExpression.Multiply -> {
                val value = compileTypeExpression(ast.value, definedFields)
                val subType = compileTypeExpression(ast.expression, definedFields)

                TlbTypeExpression.Multiply(
                    value as? TlbNatExpression
                        ?: throw CantApplyNonNatTypeException(),
                    subType
                )
            }
            is AST.TypeExpression.Tuple -> TlbTypeExpression.Tuple(
                compileTypeExpression(ast.value, definedFields) as? TlbNatExpression
                    ?: throw CantApplyNonNatTypeException(),
                compileTypeExpression(ast.expression, definedFields)
            )
            is AST.TypeExpression.TypeApply -> {
                val typeDef = getType(ast.name)
                if (typeDef != null) {
                    check(!ast.isNegated) {
                        "Can't negate a type"
                    }
                    return TlbTypeExpression.Apply(typeDef)
                }
                val fieldDef = definedFields.find { it.name == ast.name }
                if (fieldDef != null) {
                    val fieldType = fieldDef.type
                    val isNat = if (fieldType is TlbTypeExpression.Apply) {
                        fieldType.typeApplied.isProducesNatural
                    } else {
                        false
                    }
                    return if (isNat) {
                        TlbTypeExpression.NaturalParam(ast.name, ast.isNegated)
                    } else {
                        check(fieldType is TlbTypeExpression.Apply && fieldType.typeApplied == TYPE_TYPE) {
                            "cannot use a field in an expression unless it is either an integer or a type"
                        }
                        TlbTypeExpression.TypeParam(ast.name)
                    }
                }
                val type = registerNewType(ast.name, emptyList())
                return TlbTypeExpression.Apply(type)
            }
        }
    }

    public fun getType(name: String?): TlbType? {
        name ?: return null
        return types[name] ?: getBuiltInType(name)
    }

    public fun registerNewType(name: String, args: List<TlbTypeExpression>): TlbType {
        validateNewType(name)
        val type = TlbType(name, false, args = args)
        types[name] = type
        return type
    }

    @Throws(ConstructorTypeLowerCaseException::class)
    public fun validateNewType(name: String) {
        if (name[0].isLowerCase()) {
            throw ConstructorTypeLowerCaseException(name)
        }
        if (types.containsKey(name)) {
            throw TypeAlreadyDefinedException(name)
        }
    }

    public companion object {
        private val builtinTypes = mutableMapOf<String, TlbType>()
        public val TYPE_TYPE: TlbType = TlbType("Type", false).also {
            builtinTypes["Type"] = it
        }
        public val NAT_TYPE: TlbType = defineBuiltinType("#", "", true, 32, 32, true)
        public val NAT_WIDTH_TYPE: TlbType = defineBuiltinType("##", "#", true, 32, 0, true)
        public val NAT_LESS_TYPE: TlbType = defineBuiltinType("#<", "#", true, 32, 0)
        public val NAT_LEQ_TYPE: TlbType = defineBuiltinType("#<=", "#", true, 32, 0)
        public val ANY_TYPE: TlbType = defineBuiltinType("Any", "", false)
        public val CELL_TYPE: TlbType = defineBuiltinType("Cell", "", false)
        public val INT_TYPE: TlbType = defineBuiltinType("int", "#", false, 257, 0, true, -1)
        public val UINT_TYPE: TlbType = defineBuiltinType("uint", "#", false, 256, 0, true, 1)
        public val BITS_TYPE: TlbType = defineBuiltinType("bits", "#", false, 1023, 0, true)
        public val EQ_TYPE: TlbType = defineBuiltinType("=", "##", false, 0, 0, true)
        public val LESS_TYPE: TlbType = defineBuiltinType("<", "##", false, 0, 0, true)
        public val LEQ_TYPE: TlbType = defineBuiltinType("<=", "##", false, 0, 0, true)

        init {
            for (i in 1..257) {
                defineBuiltinType("int$i", "", false, i, i, true, -1)
            }
            for (i in 1..256) {
                defineBuiltinType("uint$i", "", false, i, i, true, 1)
            }
            for (i in 1..1023) {
                defineBuiltinType("bits$i", "", false, i, i, true)
            }
        }

        public fun getBuiltInType(name: String): TlbType? {
            return builtinTypes[name]
        }

        private fun defineBuiltinType(
            name: String,
            args: String,
            producesNatural: Boolean,
            size: Int = -1,
            minSize: Int = -1,
            anyBits: Boolean = false,
            isInt: Int = 0
        ): TlbType {
            val minMaxSize = when {
                size < 0 -> MinMaxSize.ANY
                minSize >= 0 && minSize != size -> MinMaxSize.range(minSize, size)
                else -> MinMaxSize.fixedSize(size)
            }
//            val isPositive = args != "#"

            val type = TlbType(
                name = name,
                isProducesNatural = producesNatural,
                isNatural = false,
//                isPositive = false,
                isAnyBits = anyBits,
                intSign = isInt,
                size = minMaxSize,
                args = args.map { char ->
                    val isNatural = char == '#'
                    TlbTypeExpression.Apply(
                        TlbType(
                        name = "#",
                        isProducesNatural = false,
                        isNatural = isNatural,
//                        isPositive = isPositive,
                        beginsWith = BitPfxCollection.all(),
                        isFinal = true
                        )
                    )
                },
                beginsWith = BitPfxCollection.all(),
                isFinal = true
            )
            builtinTypes[name] = type
            return type
        }
    }
}
