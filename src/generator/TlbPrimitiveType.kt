package org.ton.tlb.generator

import org.ton.tlb.compiler.TlbCompiler
import org.ton.tlb.compiler.TlbTypeExpression

public enum class TlbPrimitiveType {
    SLICE,
    CELL,
    TYPE,
    BITS,
    BITSTRING,
    INTEGER,
    BOOL,
    ENUM,
    VARUINT16,
    INT32,
    UINT32,
    INT64,
    UINT64,
    ANONYMOUS
}

public fun TlbTypeExpression.calcPrimitiveType(): TlbPrimitiveType {
    val expr = this
    if (expr.isAnon) {
        return TlbPrimitiveType.ANONYMOUS
    }
    if (expr is TlbTypeExpression.CellRef) {
        return TlbPrimitiveType.CELL
    }
    val size = expr.size
    val minBitSize = if (size.isFixed()) size.minBits else 0
    if (expr.isNatural) {
        return if (minBitSize == 1) TlbPrimitiveType.BOOL else TlbPrimitiveType.INT32
    }
    if (expr is TlbTypeExpression.Conditional) {
        return when (val subType = expr.expression.calcPrimitiveType()) {
            TlbPrimitiveType.SLICE,
            TlbPrimitiveType.CELL,
            TlbPrimitiveType.INTEGER,
            TlbPrimitiveType.BITSTRING,
            TlbPrimitiveType.ENUM -> subType

            TlbPrimitiveType.INT32,
            TlbPrimitiveType.INT64 -> {
                if (expr.intSign > 0) {
                    subType
                } else {
                    TlbPrimitiveType.SLICE
                }
            }

            else -> TlbPrimitiveType.SLICE
        }
    }

    if (size.maxRefs > 0) {
        return TlbPrimitiveType.SLICE
    }

    if (!expr.isInt) {
        if (expr is TlbTypeExpression.Apply) {
            if (expr.typeApplied.isSimpleEnum) {
                return TlbPrimitiveType.ENUM
            }
            val typeName = expr.typeApplied.name
            if (expr.typeApplied == TlbCompiler.BITS_TYPE || (typeName.startsWith('b') && TlbCompiler.getBuiltInType(
                    typeName
                ) != null)
            ) {
                return if (minBitSize in 0..256) TlbPrimitiveType.BITS else TlbPrimitiveType.BITSTRING
            }
        }
        if (expr is TlbTypeExpression.Tuple && expr.expression is TlbTypeExpression.Apply && expr.expression.typeApplied.isBool) {
            return if (minBitSize in 0..256) TlbPrimitiveType.BITS else TlbPrimitiveType.BITSTRING
        }
        return TlbPrimitiveType.SLICE
    }
    if (minBitSize == 1) {
        return TlbPrimitiveType.BOOL
    }
    if (minBitSize < 32) {
        return TlbPrimitiveType.INT32
    }
    if (minBitSize == 32) {
        return if (expr.intSign < 0) TlbPrimitiveType.INT32 else TlbPrimitiveType.UINT32
    }
    if (minBitSize < 64) {
        return TlbPrimitiveType.INT64
    }
    if (minBitSize == 64) {
        return if (expr.intSign < 0) TlbPrimitiveType.INT64 else TlbPrimitiveType.UINT64
    }
    return TlbPrimitiveType.INTEGER
}

public fun TlbPrimitiveType.funcType(): String = when (this) {
    TlbPrimitiveType.CELL -> "cell"
    TlbPrimitiveType.TYPE -> "cont"

    TlbPrimitiveType.SLICE,
    TlbPrimitiveType.BITS,
    TlbPrimitiveType.BITSTRING -> "slice"

    TlbPrimitiveType.INTEGER,
    TlbPrimitiveType.BOOL,
    TlbPrimitiveType.ENUM,
    TlbPrimitiveType.VARUINT16,
    TlbPrimitiveType.INT32,
    TlbPrimitiveType.UINT32,
    TlbPrimitiveType.INT64,
    TlbPrimitiveType.UINT64 -> "int"

    TlbPrimitiveType.ANONYMOUS -> TODO("Anonymous type is not supported, YET.")
}
