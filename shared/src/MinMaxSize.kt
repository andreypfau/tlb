package org.ton.tlb

import kotlin.math.max
import kotlin.math.min

public class MinMaxSize private constructor(
    public val value: Long
) {

    public constructor(
        minRefs: Int,
        minBits: Int,
        maxRefs: Int,
        maxBits: Int
    ) : this(
        ((minBits.toLong() * 0x100 + minRefs.toLong()) shl 32) + (maxBits.toLong() * 0x100 + maxRefs.toLong())
    )

    public val minSize: Int get() = (value ushr 32).toInt()
    public val maxSize: Int get() = (value and 0xFFFFFFFFL).toInt()

    // |
    public val maxRefs: Int get() = (value and 0xFF).toInt()
    public val maxBits: Int get() = ((value ushr 8) and BITS_MASK).toInt()
    public val minRefs: Int get() = ((value ushr 32) and 0xFF).toInt()
    public val minBits: Int get() = ((value ushr 40) and BITS_MASK).toInt()

    public fun isFixed(): Boolean = minSize == maxSize

    public fun fitsIntoCell(): Boolean =
        isPossible(MAX_SIZE_CELL, minSize)

    public fun isPossible(): Boolean =
        isPossible(maxSize, minSize)

    public fun normalize(): MinMaxSize {
        return MinMaxSize(normalize(value))
    }

    public fun withoutMin(): MinMaxSize = MinMaxSize(value and ((1L shl 32) - 1))

    public operator fun plus(other: MinMaxSize): MinMaxSize {
        return MinMaxSize(normalize(value + other.value))
    }

    public infix fun or(other: MinMaxSize): MinMaxSize {
        return MinMaxSize(
            minRefs = min(minRefs, other.minRefs),
            minBits = min(minBits, other.minBits),
            maxRefs = max(maxRefs, other.maxRefs),
            maxBits = max(maxBits, other.maxBits)
        )
    }

    public operator fun times(count: Int): MinMaxSize {
        return when (count) {
            0 -> MinMaxSize(0)
            1 -> this
            else -> MinMaxSize(
                min(minRefs * count, MAX_REFS_MASK.toInt()),
                min(minBits * count, BITS_MASK.toInt()),
                min(maxRefs * count, MAX_REFS_MASK.toInt()),
                min(maxBits * count, BITS_MASK.toInt())
            )
        }
    }

    public fun timesAtLeast(count: Int): MinMaxSize {
        val clampedCount = min(max(count, 0), 1024)
        return MinMaxSize(
            minRefs = min(minRefs * clampedCount, MAX_REFS_MASK.toInt()),
            minBits = min(minBits * clampedCount, BITS_MASK.toInt()),
            maxRefs = if (maxRefs != 0) MAX_REFS_MASK.toInt() else 0,
            maxBits = if (maxBits != 0) BITS_MASK.toInt() else 0
        )
    }

    override fun toString(): String = buildString {
        fun appendSize(bits: Int, refs: Int) {
            if (bits >= 1024 && refs >= 7) {
                append("Inf")
            } else {
                append(bits)
                if (refs > 0) {
                    append("+")
                    append(refs)
                    append("R")
                }
            }
        }

        val fixed = isFixed()
        if (fixed) {
            append("=")
        }
        appendSize(minBits, minRefs)
        if (!fixed) {
            append("..")
            appendSize(maxBits, maxRefs)
        }
    }

    public companion object {
        public const val MAX_SIZE_CELL: Int = 0x3FF04 // 0x3FF = 1023 bits, 0x04 = 4 refs
        public const val BITS_MASK: Long = 0x7FF
        public const val MAX_REFS_MASK: Long = 7

        public val ONE_REF: MinMaxSize = MinMaxSize(0x100000001)
        public val ANY: MinMaxSize = MinMaxSize(0x7ff07)
        public val IMPOSSIBLE: MinMaxSize = MinMaxSize(0x7ff07 shl 32)

        public fun convertSize(z: Int): Int = ((z and 0xFF) shl 16) or (z ushr 8)

        private fun isPossible(
            maxSize: Int,
            minSize: Int
        ): Boolean = (maxSize - minSize).toLong() and 0x80000080 == 0L

        private fun normalize(value: Long): Long {
            var v = value
            v = normalize(v, 0xF8, 7)
            v = normalize(v, 0xfff80000, 0x7ff00)
            v = normalize(v, 0xF8L shl 32, 7L shl 32)
            v = normalize(v, 0xfff80000L shl 32, 0x7ff00L shl 32)
            return v
        }

        private fun normalize(value: Long, a: Long, b: Long): Long {
            if (value and a != 0L) {
                return (value or (a or b)) - a
            }
            return value
        }

        public fun fixedSize(size: Int): MinMaxSize = MinMaxSize(size.toLong() * 0x10000000100)

        public fun range(minSize: Int, maxSize: Int): MinMaxSize =
            MinMaxSize(((minSize.toLong() shl 32) + maxSize) shl 8)
    }
}
