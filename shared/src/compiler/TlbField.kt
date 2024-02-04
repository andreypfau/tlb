package org.ton.tlb.compiler

import org.ton.tlb.BitPfxCollection
import org.ton.tlb.MinMaxSize

public class TlbField(
    public val name: String,
    public val type: TlbTypeExpression,
    public val isImplicit: Boolean,
    public val isConstraint: Boolean = false
) {
    override fun toString(): String = buildString {
        val printBrace = isImplicit || isConstraint
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

public fun Iterable<TlbField>.computeSize(): MinMaxSize {
    var size = MinMaxSize.fixedSize(0)
    for (field in this) {
        size += field.type.size
    }
    return size
}

public fun Iterable<TlbField>.computeBeginWith(): BitPfxCollection {
    for (field in this) {
        if (!field.isImplicit && !field.isConstraint) {
            val expr = field.type
            if (expr is TlbTypeExpression.CellRef) {
                continue
            }
            if (expr !is TlbTypeExpression.Apply) {
                break
            }
            return expr.typeApplied.beginsWith
        }
    }
    return BitPfxCollection()
}
