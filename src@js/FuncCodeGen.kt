package org.ton.tlb

import kotlinx.browser.document
import org.ton.tlb.generator.FuncCodeGen
import org.ton.tlb.generator.SchemeGenerator
import org.ton.tlb.parser.TlbGrammar

public fun main() {
    document.getElementById("compile")?.addEventListener("click", {
        val src = document.getElementById("src")?.asDynamic().value as String
        val (output, debug) = funcCodeGen(src)
        document.getElementById("output")?.textContent = output
        document.getElementById("debug")?.textContent = debug
    })
}

public fun funcCodeGen(src: String): List<String> {
    try {
        val ast = TlbGrammar().parseOrThrow(src)
        val generator = SchemeGenerator(src)

        val output = buildString {
            appendLine(FuncCodeGen.TLB_LIB)
            appendLine(generator.generate())
        }
        return listOf(output, buildString {
            generator.compiler.types.values.forEach { type ->
                appendLine(type)
            }
        })
    } catch (e: Exception) {
        return listOf(e.stackTraceToString(), "")
    }
}
