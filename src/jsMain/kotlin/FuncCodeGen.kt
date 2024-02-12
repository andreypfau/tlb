package org.ton.tlb

import kotlinx.browser.document
import org.ton.tlb.compiler.TlbCompiler
import org.ton.tlb.generator.FuncCodeGen
import org.ton.tlb.parser.TlbGrammar

fun main() {
    document.getElementById("compile")?.addEventListener("click", {
        val src = document.getElementById("src")?.asDynamic().value as String
        val output = funcCodeGen(src)
        document.getElementById("output")?.textContent = output
    })
}

@OptIn(ExperimentalJsExport::class)
@JsExport
fun funcCodeGen(src: String): String {
    try {
        val ast = TlbGrammar().parseOrThrow(src)
        val compiler = TlbCompiler()

        ast.forEach {
            compiler.compileConstructor(it)
        }

        val output = buildString {
            appendLine(FuncCodeGen.TLB_LIB)
            compiler.types.values.forEach { type ->
                val funcCodeGen = FuncCodeGen(type)
                funcCodeGen.generate(this)
            }
        }
        return output
    } catch (e: Exception) {
        return e.stackTraceToString()
    }
}
