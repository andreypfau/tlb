import org.ton.tlb.compiler.*
import org.ton.tlb.generator.TypeGenerator
import org.ton.tlb.parser.TlbGrammar
import kotlin.test.Test

class TestConstructorGenerator {
    @Test
    fun test() {
        val src = "nothing\$0 {X:Type} = Maybe X;\n" +
                "just\$1 {X:Type} value:X = Maybe X;\n" +
                "foo#_ a:(Maybe int32) b:int32 c:bits256 = Foo;"
        val ast = TlbGrammar().parseOrThrow(src)
        val compiler = TlbCompiler()

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
            println(TypeGenerator(ty).genDeclarations())
        }
        newTy.forEach { ty ->
            if (ty.constructors.all { it.isConstant }) {
                println(TypeGenerator(ty).genDeclarations())
            }
        }
    }

    fun applyType(type: TlbType, applyParams: List<TlbTypeExpression>): TlbType {
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
