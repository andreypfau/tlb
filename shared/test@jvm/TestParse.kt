import org.ton.tlb.compiler.TlbCompiler
import org.ton.tlb.compiler.TlbType
import org.ton.tlb.compiler.TlbTypeExpression
import org.ton.tlb.generator.FuncCodeGen
import org.ton.tlb.parser.TlbGrammar
import java.io.File
import kotlin.test.Test

class TestParse {
    @Test
    fun testParse() {
        val src = File("/Users/andreypfau/IdeaProjects/tlb/shared/testResources/block.tlb").readText()
        val parsed = TlbGrammar().parseOrThrow(src)
        println(parsed)
    }

    @Test
    fun simpleParse() {
        val src = """
//var_uint${'$'}_ {n:#} len:(#< n) value:(uint (len * 8)) = VarUInteger n;
//addr_none${'$'}00 = MsgAddressExt;
//addr_extern${'$'}01 len:(## 9) external_address:(bits len) = MsgAddressExt;

var_uint${'$'}_ {n:#} len:(#< n) value:(uint (len * 8)) = VarUInteger n;
nanograms${'$'}_ amount:(VarUInteger 16) = Grams;

//first${'$'}0 = Foo;
second${'$'}10 a:int32 = Foo;
third${'$'}11 a:int32 b:Foo = Foo;
        """.trimIndent()

        val ast = TlbGrammar().parseOrThrow(src)
        val compiler = TlbCompiler()

        var type = ast.map {
            compiler.compileConstructor(it)
        }.last()

        compiler.types.forEach {
            println(it.value)
        }
//       compiler.compileConstructor(ast[2])
//        println(compiler.types.values.joinToString("\n"))
        println("\n==== tlb ====\n")
        println(ast.joinToString("\n"))
        println("\n==== code gen ====\n")
        val funcCodeGen = FuncCodeGen(type)
        val output = buildString {
            funcCodeGen.generate(this)
        }
        println(output)
//        println(
//            buildString {
//                codeGen.generateSkipMethod(this)
//                codeGen.generateGetSize(this)
//                codeGen.generatePack(this)
//            }
//        )

//        println(ast.joinToString("\n"))
    }

    @Test
    fun testSize() {
        val apply = TlbTypeExpression.Apply(
            TlbCompiler.INT_TYPE,
            TlbTypeExpression.IntConstant(32),
        )
        val tuple = TlbTypeExpression.Conditional(
            TlbTypeExpression.IntConstant(1),
            apply
        )
        println(tuple)
        println(tuple.size)
    }
}
