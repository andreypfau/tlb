package org.ton.tlb.compiler

import org.ton.tlb.BinTrie
import org.ton.tlb.BitPfxCollection
import org.ton.tlb.MinMaxSize

public data class TlbType(
    public val name: String,
    public val producesNatural: Boolean,
    public val isNatural: Boolean = false,
    public val isPositive: Boolean = false,
    public val isAnyBits: Boolean = false,
    public val isInt: Int = 0,
    public val size: MinMaxSize = MinMaxSize.fixedSize(MinMaxSize.MAX_SIZE_CELL),
    public val args: List<TlbType> = emptyList(),
    public val constructorTrie: BinTrie? = null,
    public val beginsWith: BitPfxCollection = BitPfxCollection(),
    public val constructors: List<TlbConstructor> = emptyList()
) {
    public val isPrefixDetermined: Boolean by lazy {
        if (constructorTrie != null) {
            constructorTrie.findConflictPath() == 0L
        } else {
            true
        }
    }

    public val isEnum: Boolean = constructors.all {
        it.isEnum
    }

    public val isSimpleEnum: Boolean = constructors.all {
        it.isSimpleEnum
    }

    override fun toString(): String = buildString {
        appendLine("Type `$name`, ${constructors.size} constructors")
        constructors.forEach { constructor ->
            appendLine("  constructor `${constructor.name}`")
            appendLine("    $constructor")
            appendLine("    begins with: ${constructor.beginWith}")
            appendLine("    size: ${constructor.size}")
        }
        appendLine("  type size: $size")
        appendLine("  type begins with: $beginsWith")
        constructorTrie?.let {
            appendLine("  type constructor trie:")
            it.toString().lines().forEach { line ->
                appendLine("    $line")
            }
        }
    }
}
