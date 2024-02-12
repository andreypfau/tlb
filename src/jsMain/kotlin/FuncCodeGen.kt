package org.ton.tlb

import kotlinx.browser.document
import org.ton.tlb.compiler.TlbCompiler
import org.ton.tlb.generator.FuncCodeGen
import org.ton.tlb.parser.TlbGrammar

fun main() {
    document.getElementById("compile")?.addEventListener("click", {
        val src = document.getElementById("src")?.asDynamic().value as String
        val (output, debug) = funcCodeGen(src)
        document.getElementById("output")?.textContent = output
        document.getElementById("debug")?.textContent = debug
    })
}

fun funcCodeGen(src: String): List<String> {
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
        return listOf(output, buildString {
            compiler.types.values.forEach { type ->
                appendLine(type)
            }
        })
    } catch (e: Exception) {
        return listOf(e.stackTraceToString(), "")
    }
}
