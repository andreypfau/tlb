package org.ton.tlb.compiler

import org.ton.tlb.BitPfxCollection
import org.ton.tlb.ConstructorTag
import org.ton.tlb.MinMaxSize
import org.ton.tlb.size

public class TlbField(
    public val name: String,
    public val type: TlbTypeExpression,
    public val isImplicit: Boolean,
    public val isConstraint: Boolean = false
) {
    public val isExplicit: Boolean get() = !(isImplicit || isConstraint)

    override fun toString(): String = buildString {
        val printBrace = !isExplicit
        if (printBrace) {
            append("{")
        }
        if (name.isNotBlank()) {
            append(name)
            append(":")
        }
        append(type)
        if (printBrace) {
            append("}")
        }
    }

    public fun isomorphicTo(other: TlbField, allowOtherNames: Boolean = true): Boolean {
        if (!allowOtherNames && name != other.name) return false
        return type == other.type
    }
}

public fun Iterable<TlbField>.computeSize(tag: ConstructorTag?): MinMaxSize {
    var size = tag.size
    for (field in this) {
        if (!field.isImplicit && !field.isConstraint) {
            size += field.type.size
        }
    }
    return size
}

public fun Iterable<TlbField>.computeBeginWith(tag: ConstructorTag?): BitPfxCollection {
    val tagValue = tag?.value ?: 0
    for (field in this) {
        if (!field.isImplicit && !field.isConstraint) {
            val expr = field.type
            if (expr is TlbTypeExpression.CellRef) {
                continue
            }
            if (expr !is TlbTypeExpression.Apply) {
                break
            }
            val typeBeginWith =  expr.typeApplied.beginsWith
            val add = typeBeginWith * tagValue
            return BitPfxCollection() + add
        }
    }
    return BitPfxCollection() + BitPfxCollection(tagValue)
}
