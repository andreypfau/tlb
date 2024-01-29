import org.ton.tlb.MinMaxSize
import org.ton.tlb.compiler.TlbCompiler
import org.ton.tlb.generator.TlbCodeGen
import org.ton.tlb.parser.TlbGrammar
import java.io.File
import kotlin.test.Test

class TestParse {
    @Test
    fun testParse() {
        val src=File("/Users/andreypfau/IdeaProjects/tlb/shared/testResources/block.tlb").readText()
        val parsed = TlbGrammar().parseOrThrow(src)
        println(parsed)
    }

    @Test
    fun simpleParse() {
        val src = """
//var_uint${'$'}_ {n:#} len:(#< n) value:(uint (len * 8)) = VarUInteger n;
//addr_none${'$'}00 = MsgAddressExt;
//addr_extern${'$'}01 len:(## 9) external_address:(bits len) = MsgAddressExt;
first${'$'}0 = Foo;
second${'$'}10 a:int32 = Foo;
third${'$'}11 a:int32 b:Foo = Foo;
        """.trimIndent()

        val ast = TlbGrammar().parseOrThrow(src)
        val compiler = TlbCompiler()

       compiler.compileConstructor(ast[0])
       compiler.compileConstructor(ast[1])
       val type = compiler.compileConstructor(ast[2])


//       compiler.compileConstructor(ast[2])
//        println(compiler.types.values.joinToString("\n"))
        println("\n==== tlb ====\n")
        println(ast.joinToString("\n"))
        println("\n==== code gen ====\n")
        val codeGen = TlbCodeGen(compiler, type)
        println(
            buildString {
                codeGen.generateSkipMethod(this)
                codeGen.generateGetSize(this)
            }
        )

//        println(ast.joinToString("\n"))
    }

    @Test
    fun testSize() {
        val a = MinMaxSize.IMPOSSIBLE
        val b = MinMaxSize.range(2, 10)
        println(a or b)
    }
}
