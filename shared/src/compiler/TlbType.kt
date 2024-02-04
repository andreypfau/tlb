package org.ton.tlb.compiler

import org.ton.tlb.BinTrie
import org.ton.tlb.BitPfxCollection
import org.ton.tlb.MinMaxSize

public class TlbType(
    public val name: String,
    public val producesNatural: Boolean,
    public val isNatural: Boolean = false,
    public val isAnon: Boolean = false,
    public val intSign: Int = 0,
    public val args: List<TlbType> = emptyList(),
    constructors: List<TlbConstructor> = emptyList(),
    isAnyBits: Boolean = false,
    size: MinMaxSize = MinMaxSize.IMPOSSIBLE,
    beginsWith: BitPfxCollection = BitPfxCollection(),
    public val isFinal: Boolean = false
) {
    private val constructors_: MutableList<TlbConstructor> = constructors.toMutableList()
    public val constructors: List<TlbConstructor> get() = constructors_

    public var constructorTrie: BinTrie? = null
        private set
    public var isPrefixDetermined: Boolean = true
        private set
    public var isAnyBits: Boolean = isAnyBits
        private set
    public var size: MinMaxSize = size
        private set
    public var beginsWith: BitPfxCollection = beginsWith
        private set

    init {
        if (!isFinal) {
            recalculate()
        }
    }

    public val isInt: Boolean get() = intSign != 0

    public val isEnum: Boolean get() = constructors.all {
        it.isEnum
    }

    public val isSimpleEnum: Boolean get() = constructors.all {
        it.isSimpleEnum
    }

    public operator fun plusAssign(constructor: TlbConstructor) {
        check(!isFinal) { "Cannot add constructor to a final type" }
        constructors_.add(constructor)
        recalculate()
    }

    private fun recalculate() {
        val constructorTrie = constructors.computeConstructorTrie()
        isPrefixDetermined = if (constructorTrie != null) {
            constructorTrie.findConflictPath() == 0L
        } else {
            true
        }
        isAnyBits = constructors.all { it.isAnyBits }
        size = constructors.computeSize()
        beginsWith = constructors.computeBeginWith()
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
