package org.ton.tlb.compiler

import io.github.andreypfau.kotlinx.crypto.crc32.crc32
import org.ton.tlb.*

public data class TlbConstructor(
    public val tag: ConstructorTag?,
    public val name: String,
    public val typeName: String,
    public val fields: List<TlbField> = emptyList(),
    public val params: List<TlbTypeExpression> = emptyList()
) {
    /***
     * Returns a list of constructor arguments that are not negated.
     */
    public val trueParams: List<TlbTypeExpression>
        get() = params.filter {
            it !is TlbTypeExpression.NaturalParam || !it.isNegated
        }

    /**
     * Returns a list of constructor fields that are not implicit and not constraints.
     */
    public val explicitFields: List<TlbField> = fields.filter {
        !it.isConstraint && !it.isImplicit
    }

    public val size: MinMaxSize get() = fields.computeSize(tag)
    public val beginWith: BitPfxCollection = fields.computeBeginWith(tag)
    public val isAnyBits: Boolean = explicitFields.isEmpty() || explicitFields.all { it.type.isAnyBits }

    public val isEnum: Boolean get() = explicitFields.isEmpty()
    public val isSimpleEnum: Boolean get() = isEnum && trueParams.isEmpty()
    public val isConstant: Boolean get() = explicitFields.all { it.type.isConstant } && params.all { it.isConstant }

    public val isForward: Boolean =
        if (name.isNotEmpty() || !tag.isNullOrEmpty() || params.isNotEmpty() || fields.size != 1) {
            false
        } else {
            fields[0].isImplicit || fields[0].isConstraint
        }

    public fun isomorphicTo(other: TlbConstructor, allowOtherNames: Boolean = true): Boolean {
        if (name != other.name) return false
        if (fields.size != other.fields.size) return false
        if (params.size != other.params.size) return false
        for (i in fields.indices) {
            if (!fields[i].isomorphicTo(other.fields[i], allowOtherNames)) {
                return false
            }
        }
        for (i in params.indices) {
            if (params[i] != other.params[i]) {
                return false
            }
        }
        return true
    }

    public fun computeTag(): ConstructorTag {
        val crc = crc32(toString(showTag = false).encodeToByteArray())
        return ConstructorTag((crc.toLong() shl 32) or 0x80000000)
    }

    override fun toString(): String = buildString {
        appendTo(this)
    }

    public fun toString(showTag: Boolean): String = buildString {
        appendTo(this, showTag)
    }

    public fun appendTo(appendable: Appendable, showTag: Boolean = true): Appendable = appendable.apply {
        if (showTag && !tag.isNullOrEmpty()) {
            append(tag.toString())
            append(" ")
        }
        for (field in fields) {
            append(" ")
            append(field.toString())
        }
        append(" = ")
        append(typeName)
        for (param in params) {
            append(" ")
            append(param.toString())
        }
    }
}

public fun Iterable<TlbConstructor>.computeConstructorTrie(): BinTrie? {
    var z = 1L
    var trie: BinTrie? = null
    for (constructor in this) {
        trie = BinTrie.insertPaths(trie, constructor.beginWith, z)
        z = z shl 1
    }
    return trie
}

public fun Iterable<TlbConstructor>.computeBeginWith(): BitPfxCollection {
    var result = BitPfxCollection()
    for (constructor in this) {
        result += constructor.beginWith
    }
    return result
}

public fun Iterable<TlbConstructor>.computeSize(): MinMaxSize {
    var size = MinMaxSize.IMPOSSIBLE
    for (constructor in this) {
        val constructorSize = constructor.size
        size = size or constructorSize
    }
    return size
}
