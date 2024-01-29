package org.ton.tlb.compiler

import org.ton.tlb.BinTrie
import org.ton.tlb.BitPfxCollection
import org.ton.tlb.ConstructorTag
import org.ton.tlb.MinMaxSize
import org.ton.tlb.compiler.exceptions.ConstructorTypeLowerCaseException
import org.ton.tlb.parser.AST
import kotlin.math.min

public class TlbCompiler {

    public val types: MutableMap<String, TlbType> = mutableMapOf()

    public fun compileConstructor(astConstructor: AST.Constructor): TlbType {

        val fields = astConstructor.fields.map { astField ->
            val fieldSize = if (!astField.isImplicit && !astField.isConstraint) {
                expressionComputeSize(astField.typeExpression)
            } else {
                null
            }
            TlbField(
                ast = astField,
                type = expressionAppliedType(astField.typeExpression),
                size = fieldSize
            )
        }
        val constructor = TlbConstructor(
            ast = astConstructor,
            fields = fields,
            size = computeConstructorSize(astConstructor.tag?.size ?: MinMaxSize.fixedSize(0), fields),
            beginWith = computeConstructorBeginsWith(astConstructor.tag, fields)
        )

        var type = getType(astConstructor.typeName) ?: registerNewType(astConstructor.typeName, constructor.size)
        val constructors = type.constructors + constructor
        val constructorTrie = constructors.computeConstructorTrie()
        type = type.copy(
            size = type.size or constructor.size,
            constructors = constructors,
            constructorTrie = constructorTrie,
            beginsWith = computeBeginWith(constructors)
        )

        types[type.name] = type

        return type
    }

    private fun computeConstructorSize(
        tagSize: MinMaxSize,
        fields: Iterable<TlbField>
    ): MinMaxSize {
        var size = tagSize
        for (field in fields) {
            field.size?.let {
                size += it
            }
        }
        return size
    }

    private fun computeConstructorBeginsWith(tag: ConstructorTag?, fields: Iterable<TlbField>): BitPfxCollection {
        val tagValue = tag?.value ?: 0
        var result = BitPfxCollection()
        for (field in fields) {
            if (!field.isImplicit && !field.isConstraint) {
                if (field.typeExpression is AST.TypeExpression.CellRef) {
                    continue
                }
                if (field.typeExpression !is AST.TypeExpression.Apply) {
                    break
                }
                val appliedType = requireNotNull(expressionAppliedType(field.typeExpression))
                val typeBeginWith = appliedType.beginsWith
                val add = typeBeginWith * tagValue
                result += add
                return result
            }
        }
        return BitPfxCollection(tagValue)
    }

    private fun computeBeginWith(constructors: Iterable<TlbConstructor>): BitPfxCollection {
        var result = BitPfxCollection()
        for (constructor in constructors) {
            result += constructor.beginWith
        }
        return result
    }

    private fun Iterable<TlbConstructor>.computeConstructorTrie(): BinTrie? {
        var z = 1L
        var trie: BinTrie? = null
        for (constructor in this) {
            trie = BinTrie.insertPaths(trie, constructor.beginWith, z)
            z = z shl 1
        }
        return trie
    }

    public fun expressionAppliedType(expression: AST.TypeExpression): TlbType? = when (expression) {
        is AST.TypeExpression.Type -> getType(expression.name)
        is AST.TypeExpression.Param -> getType(expression.name)
        is AST.TypeExpression.Apply -> expressionAppliedType(expression)
        else -> null
    }

    public fun expressionComputeSize(expression: AST.TypeExpression): MinMaxSize = when (expression) {
        is AST.TypeExpression.Type -> expressionAppliedType(expression)?.size
            ?: error("Unknown type: ${expression.name}")

        is AST.TypeExpression.Param -> expressionAppliedType(expression)?.size
            ?: error("Unknown type: ${expression.name}")

        is AST.TypeExpression.CellRef -> {
            val f = expressionComputeSize(expression.expression).isPossible()
            if (f) MinMaxSize.ONE_REF else MinMaxSize.IMPOSSIBLE
        }

        is AST.TypeExpression.Apply -> {
            // TODO: fix ast param as type
            val type = expressionAppliedType(expression) ?: error("Unknown type: $this")

            val n = (expression.arguments.firstOrNull() as? AST.TypeExpression.IntConstant)?.value

            if (n != null) {
                when (type.name) {
                    NAT_WIDTH_TYPE.name, INT_TYPE.name, UINT_TYPE.name, BITS_TYPE.name ->
                        MinMaxSize.fixedSize(min(n, 2047))

                    NAT_LEQ_TYPE.name -> MinMaxSize.fixedSize(32 - n.countLeadingZeroBits())
                    NAT_LESS_TYPE.name -> MinMaxSize.fixedSize(if (n != 0) 32 - (n - 1).countLeadingZeroBits() else 2047)
                    else -> type.size
                }
            } else {
                type.size
            }
        }

        is AST.TypeExpression.Conditional -> TODO()
        is AST.TypeExpression.Add -> TODO()
        is AST.TypeExpression.AnonymousConstructor -> TODO()
        is AST.TypeExpression.GetBit -> TODO()
        is AST.TypeExpression.IntConstant -> TODO()
        is AST.TypeExpression.Multiply -> TODO()
    }

    public fun getType(name: String?): TlbType? {
        name ?: return null
        return types[name] ?: getBuiltInType(name)
    }

    public fun registerNewType(name: String, size: MinMaxSize): TlbType {
        validateNewType(name)
        val type = TlbType(name, false, size = size)
        types[name] = type
        return type
    }

    @Throws(ConstructorTypeLowerCaseException::class)
    public fun validateNewType(name: String) {
        if (name[0].isLowerCase()) {
            throw ConstructorTypeLowerCaseException(name)
        }
    }

    public companion object {
        private val builtinTypes = mutableMapOf<String, TlbType>()
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
            val isPositive = args != "#"

            val type = TlbType(
                name = name,
                producesNatural = producesNatural,
                isNatural = false,
                isPositive = false,
                isAnyBits = anyBits,
                isInt = isInt,
                size = minMaxSize,
                args = args.map { char ->
                    val isNatural = char == '#'
                    TlbType(
                        name = "#",
                        producesNatural = false,
                        isNatural = isNatural,
                        isPositive = isPositive,
                        beginsWith = BitPfxCollection.all()
                    )
                },
                beginsWith = BitPfxCollection.all()
            )
            builtinTypes[name] = type
            return type
        }
    }
}
