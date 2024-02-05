//package org.ton.tlb.generator
//
//import org.ton.tlb.ConstructorTag
//import org.ton.tlb.MinMaxSize
//import org.ton.tlb.compiler.TlbCompiler
//import org.ton.tlb.compiler.TlbConstructor
//import org.ton.tlb.compiler.TlbField
//import org.ton.tlb.compiler.TlbType
//import org.ton.tlb.parser.AST
//
//public class TlbCodeGen(
//    public val compiler: TlbCompiler,
//    public val tlbType: TlbType,
//    private val identScope: IdentScope = IdentScope()
//) {
//    private val tmpVars = IdentScope()
//    private var localId = IdentScope()
//    public val className: String = calculateClassName()
//    public val constructorNames: Map<TlbConstructor, String> = tlbType.constructors.associateWith {
//        identScope.registerIdentifier(it.name)
//    }
//    private val enumValue: Map<TlbConstructor, Int>
//    private val idxByEnum: Map<Int, TlbConstructor>
//
//    init {
//        val a = tlbType.constructors.map {
//            (it.beginWith.firstOrNull() ?: 0) to it
//        }.sortedBy { it.first }
//        val enumValue = HashMap<TlbConstructor, Int>()
//        val idxByEnum = HashMap<Int, TlbConstructor>()
//        for ((i, z) in a.withIndex()) {
//            enumValue[z.second] = i
//            idxByEnum[i] = z.second
//        }
//        this.enumValue = enumValue
//        this.idxByEnum = idxByEnum
//    }
//
//    public val isSimpleGetSize: Boolean get() = tlbType.size.isFixed()
//    public val isInlineSkip: Boolean get() = isSimpleGetSize
//
//    private fun calculateClassName(): String {
//        val typeName = tlbType.name
//        var typeClassName = identScope.registerIdentifier(typeName)
//        return typeClassName
//    }
//
//    public fun generateSkipMethod(appendable: Appendable) {
//        appendable.append("(slice, int) ")
//        appendable.append(className).append("::skip(slice cs) {")
//        tlbType.constructors.forEach { tlbConstructor ->
//            val prefix = ConstructorTag(tlbConstructor.beginWith.firstOrNull() ?: 0).toHex()
//            appendable.append("\n  if (cs~slice_begin_with(\"$prefix\"s) {")
//            generateSkipConsMethod(appendable, "\n    ", tlbConstructor)
//            appendable.append("\n  }")
//        }
//        appendable.append("\n  return (cs, false);\n")
//        appendable.append("}\n")
//    }
//
//    public fun generateGetSize(appendable: Appendable): Unit = with(appendable) {
//        append("int ")
//        append(className)
//        append("::get_size(slice cs) {\n")
//        append("  return ")
//        if (isSimpleGetSize) {
//            append(tlbType.size.minBits.toString())
//        } else {
//            append("tlb::get_size_by_skip(cs, ")
//            append(className)
//            append("::skip)")
//        }
//        append(";\n}\n")
//    }
//
//    public fun generatePack(appendable: Appendable) {
//        tlbType.constructors.forEach { constructor ->
//            generatePack(appendable, constructor)
//            appendable.append("\n")
//        }
//    }
//
//    public fun generatePack(appendable: Appendable, constructor: TlbConstructor) {
//        val explicitFields = constructor.fields.filter { !it.isImplicit }
//
//        appendable.append("builder ")
//        appendable.append(className)
//        appendable.append("::")
//        appendable.append(constructorNames[constructor])
//        appendable.append("::pack(")
//        appendable.append("builder cb")
//
//        if (explicitFields.isNotEmpty()) {
//            appendable.append(", [\n")
//            explicitFields.forEach { field ->
//                if (field.isImplicit) return@forEach
//
//                val funcType = (getFuncType(field) + ",").let {
//                    it + " ".repeat("slice,".length - it.length)
//                }
//                appendable.append("  ").append(funcType).append(" ;; ")
//                appendable.append(field.name).append(" : ").append(field.typeExpression.toString())
//                appendable.append("\n")
//            }
//            appendable.append("] data")
//        }
//        appendable.append(") {\n")
//
//        val fieldIdentScope = IdentScope()
//        val fieldNames = explicitFields.associateWith { field ->
//            fieldIdentScope.registerIdentifier(requireNotNull(field.name) { "explicit field $field has no name" })
//        }
//
//        if (explicitFields.isNotEmpty()) {
//            appendable.append("  var (")
//            explicitFields.forEachIndexed { index, field ->
//                appendable.append(fieldNames[field])
//                if (index != explicitFields.lastIndex) {
//                    appendable.append(", ")
//                }
//            }
//            appendable.append(") = data;\n")
//        }
//        appendable.append("  return cb;\n")
//        appendable.append("}\n")
//    }
//
//    private fun getFuncType(field: TlbField): String {
//        if (field.typeExpression is AST.TypeExpression.CellRef) {
//            return "cell"
//        }
//        if (field.type.isNatural || field.type.isInt) {
//            return "int"
//        }
//        return "slice"
//    }
//
//    private fun generatePackField(constructor: TlbConstructor, field: TlbField, fieldName: String): Action {
//        val type = field.type
//        val size = field.size
//        if (type.isNatural || field.type.isInt) {
//            return generateStoreNatField(field, fieldName)
//        }
//
//        TODO()
//    }
//
//    private fun generateSkipConsMethod(appendable: Appendable, newLine: String, constructor: TlbConstructor) {
//        var actions: List<Action> = emptyList()
//        for (field in constructor.fields) {
//            if (!field.isImplicit) {
//                actions = generateSkipField(constructor, field, actions)
//            } else if (!field.isConstraint) {
//                TODO("implicit fields not supported")
//            } else {
//                TODO("constaint checks not supported")
//            }
//        }
//        outputActions(appendable, newLine, actions)
//    }
//
//    private fun generateSkipField(constructor: TlbConstructor, field: TlbField, actions: List<Action>): List<Action> {
//        val size = field.size
//        val anyBits = true // TODO: compute any bits
//        if (size != null && size.isFixed() && size.minSize and 0xFF == 0 && anyBits) {
//            return actions + Action(MinMaxSize.convertSize(size.minSize))
//        }
//
//        val sb = StringBuilder()
//        if (canComputeSizeOf(field.typeExpression)) {
//            sb.append("cs~skip_bits(")
//            outputSizeOfExpression(sb, field.typeExpression)
//            sb.append(")")
//            return actions + Action(sb.toString())
//        }
//
//        sb.append("cs~")
//        outputExpression(sb, field.typeExpression)
//        sb.append("::skip()")
//        return actions + Action(sb.toString())
//    }
//
//    private fun outputActions(appendable: Appendable, newLine: String, actions: List<Action>) {
//        if (actions.isEmpty()) {
//            appendable.append(newLine).append("return (cs, true);")
//        } else {
//            actions.forEach { action ->
//                appendable.append(newLine).append(action.toString()).append(";")
//            }
//            appendable.append(newLine).append("return (cs, true);")
//        }
//    }
//
//    private fun canComputeSizeOf(expression: AST.TypeExpression): Boolean {
//        val size = compiler.expressionComputeSize(expression)
//        if (size.isFixed()) {
//            return size.maxRefs == 0
//        }
//        return false
//    }
//
//    private fun outputSizeOfExpression(appendable: Appendable, expression: AST.TypeExpression) {
//        val size = compiler.expressionComputeSize(expression)
//        if (size.isFixed()) {
//            appendable.append(size.minBits.toString())
//            return
//        }
//        when (expression) {
//            is AST.TypeExpression.Conditional -> {
//                appendable.append("( ")
//                outputExpression(appendable, expression.expression)
//                appendable.append(" ? ")
//                outputSizeOfExpression(appendable, expression.expression2)
//                appendable.append(" : 0 )")
//            }
//
//            is AST.TypeExpression.Multiply -> {
//                appendable.append("( ")
//                outputExpression(appendable, expression.expression)
//                appendable.append(" * ")
//                outputSizeOfExpression(appendable, expression.value)
//                appendable.append(" )")
//            }
//
//            else -> TODO("Unknown size of expression for $expression")
//        }
//    }
//
//    private fun outputExpression(appendable: Appendable, expression: AST.TypeExpression) {
//        when (expression) {
//            is AST.TypeExpression.Param,
//            is AST.TypeExpression.Apply -> {
//                val type = try {
//                    compiler.expressionAppliedType(expression)
//                } catch (e: Exception) {
//                    null
//                }
//                if (type != null) {
//                    val code = TlbCodeGen(compiler, type)
//                    appendable.append(code.className)
//                } else if (expression is AST.TypeExpression.Param) {
//                    appendable.append(expression.name)
//                } else {
//                    error("Unknown type: $expression")
//                }
//            }
//
//            is AST.TypeExpression.Add -> {
//                appendable.append("(")
//                outputExpression(appendable, expression.expression)
//                appendable.append("+")
//                outputExpression(appendable, expression.expression2)
//                appendable.append(")")
//                return
//            }
//
//            is AST.TypeExpression.Multiply -> {
//                appendable.append("(")
//                outputExpression(appendable, expression.expression)
//                appendable.append("*")
//                outputExpression(appendable, expression.value)
//                appendable.append(")")
//                return
//            }
//
//            is AST.TypeExpression.IntConstant -> {
//                appendable.append(expression.value.toString())
//                return
//            }
//
//            is AST.TypeExpression.GetBit -> TODO()
//            is AST.TypeExpression.AnonymousConstructor -> TODO()
//            is AST.TypeExpression.CellRef -> TODO()
//            is AST.TypeExpression.Conditional -> TODO()
//            is AST.TypeExpression.Tuple -> TODO()
//        }
//    }
//
//    private fun newTmpVar(hint: String? = null): String {
//        if (hint.isNullOrEmpty() || hint == "_") {
//            var identifier: String
//            var i = tmpVars.size
//            while (true) {
//                identifier = "t${++i}"
//                if (tmpVars.isGoodIdentifier(identifier) && localId.isGoodIdentifier(identifier)) {
//                    break
//                }
//            }
//            return tmpVars.registerIdentifier(identifier)
//        }
//        var count = 0
//        while (true) {
//            val identifier = IdentScope.computeIdentifier(hint, count++)
//            if (tmpVars.isGoodIdentifier(identifier) && localId.isGoodIdentifier(identifier)) {
//                return tmpVars.registerIdentifier(identifier)
//            }
//        }
//    }
//
//    private fun detectPrimitiveType(expression: AST.TypeExpression): PrimitiveType {
//        if (expression is AST.TypeExpression.CellRef) {
//            return PrimitiveType.CELL
//        }
//        if (expression is AST.TypeExpression.NaturalTypExpression) {
//            return PrimitiveType.INT32
//        }
//
//        TODO()
//    }
//
//    private fun generateStoreNatField(field: TlbField, fieldVar: String): Action {
//        val type = field.type
//        val sb = StringBuilder()
//        sb.append("cb = cb.")
//        when (type) {
//            TlbCompiler.NAT_TYPE -> {
//                sb.append("store_uint(")
//                sb.append(fieldVar)
//                sb.append(", 32)")
//            }
//            TlbCompiler.NAT_WIDTH_TYPE -> {
//                sb.append("store_uint(")
//                sb.append(fieldVar)
//                sb.append(", ")
//                outputExpression(sb, (field.typeExpression as AST.TypeExpression.Apply).arguments[0])
//                sb.append(")")
//            }
//            TlbCompiler.NAT_LEQ_TYPE -> {
//                sb.append("store_uint_leq(")
//                sb.append(fieldVar)
//                sb.append(", ")
//                outputExpression(sb, (field.typeExpression as AST.TypeExpression.Apply).arguments[0])
//                sb.append(")")
//            }
//            TlbCompiler.NAT_LESS_TYPE -> {
//                sb.append("store_uint_less(")
//                sb.append(fieldVar)
//                sb.append(", ")
//                outputExpression(sb, (field.typeExpression as AST.TypeExpression.Apply).arguments[0])
//                sb.append(")")
//            }
//        }
//        return Action(sb.toString())
//    }
//
//    private fun generateLoadNatField(constructor: TlbConstructor, field: TlbField): Action {
//        val id = field.name ?: newTmpVar()
//        val sb = StringBuilder()
//        sb.append("var $id = cs~")
//        val expr = field.typeExpression as? AST.TypeExpression.Apply ?: TODO()
//        if (field.type == TlbCompiler.NAT_TYPE) {
//            sb.append("load_uint(32)")
//        } else if (field.type == TlbCompiler.NAT_WIDTH_TYPE) {
//            sb.append("load_uint(")
//            outputExpression(sb, expr.arguments.first())
//            sb.append(")")
//        } else if (field.type == TlbCompiler.NAT_LEQ_TYPE) {
//            // compute size
//            TODO()
//        } else if (field.type == TlbCompiler.NAT_LESS_TYPE) {
//            TODO()
//        }
//        return Action(sb.toString())
//    }
//
//    private data class Action(
//        val fixedSize: Int,
//        val isPure: Boolean,
//        val isConstraint: Boolean,
//        val action: String = ""
//    ) {
//        constructor(size: Int) : this(size, false, false)
//        constructor(action: String, isConstraint: Boolean = false) : this(-1, false, isConstraint, action)
//
//        public fun mayCombine(other: Action): Boolean {
//            return fixedSize == 0 || other.fixedSize == 0 || (fixedSize >= 0 && other.fixedSize >= 0)
//        }
//
//        @OptIn(ExperimentalStdlibApi::class)
//        public override fun toString(): String {
//            return if (fixedSize >= 0) {
//                when {
//                    fixedSize == 0 -> ""
//                    fixedSize < 0x10000 -> "cs~skip_bits($fixedSize)"
//                    fixedSize and 0xffff == 0 -> "cs~skip_refs(${fixedSize ushr 16})"
//                    else -> "cs~skip_bits(0x${fixedSize.toHexString()})"
//                }
//            } else {
//                action
//            }
//        }
//    }
//}
