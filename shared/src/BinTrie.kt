package org.ton.tlb

import kotlin.math.max

public data class BinTrie(
    public val tag: Long = 0,
    public val left: BinTrie? = null,
    public val right: BinTrie? = null
) {
    val downTag: Long = run {
        var result = tag
        if (left != null) {
            result = result or left.downTag
        }
        if (right != null) {
            result = result or right.downTag
        }
        result
    }
    val usefulDeath: Int = kotlin.run {
        val child = max(left?.usefulDeath ?: 0, right?.usefulDeath ?: 0)
        if (child > 0) {
            child + 1
        } else {
            if (left != null && right != null && (left.downTag and right.downTag.inv()) != 0L && (right.downTag and left.downTag.inv()) != 0L) {
                1
            } else {
                0
            }
        }
    }

    public fun set(path: Long, newTag: Long): BinTrie {
        if (path == 0L || newTag == 0L) return this
        var left = left
        var right = right
        var tag = tag
        if ((path.toULong() and (1uL shl 63) - 1u) == 0uL) {
            tag = tag or newTag
            return BinTrie(tag, left, right)
        } else if (path >= 0L) {
            left = insertPath(left, path shl 1, newTag)
        } else {
            right = insertPath(right, path shl 1, newTag)
        }
        if (left != null && right != null) {
            tag = tag or (left.tag and right.tag)
        }
        return BinTrie(tag, left, right)
    }

    public fun get(path: Long): BinTrie? = when {
        path == 0L -> null
        (path.toULong() and (1uL shl 63) - 1u) == 0uL -> this
        path >= 0 -> left?.get(path shl 1)
        else -> right?.get(path shl 1)
    }

    public fun findConflictPath(colors: Long = 0, mask: Long = 0.inv()): Long {
        val c = colors or (tag and mask)
        return when {
            left == null && right == null -> {
                if (c and (c - 1) != 0L) (1uL shl 63).toLong() else 0
            }
            left == null -> {
                if (c and (c - 1) != 0L) {
                    1L shl 62
                } else {
                    val x = right?.findConflictPath(c, mask) ?: 0
                    if (x != 0L) (x ushr 1) or (1L shl 63) else 0
                }
            }
            right == null -> {
                if (c and (c - 1) != 0L) {
                    3L shl 62
                } else {
                    left.findConflictPath(c, mask) ushr 1
                }
            }
            else -> {
                val x = left.findConflictPath(c, mask)
                val y = right.findConflictPath(c, mask)
                if (y.lowerBit() > x.lowerBit()) {
                    (y ushr 1) or (1L shl 63)
                } else {
                    x ushr 1
                }
            }
        }
    }

    override fun toString(): String = buildString {
        appendTo(this)
    }

    private fun appendTo(appendable: Appendable, prefix: Long = (1uL shl 63).toLong()): Unit = with(appendable) {
        var x = prefix
        val u = x.lowerBit() ushr 1
        while (x and ((1uL shl 63) - 1u).toLong() != 0L) {
            append((x ushr 63).toString())
            x = x shl 1
        }
        append(" t=").append(tag.toString())
        append("; dt=").append(downTag.toString())
        append("; ud=").append(usefulDeath.toString())
        appendLine()
        left?.appendTo(appendable, prefix - u)
        right?.appendTo(appendable, prefix + u)
    }

    public companion object {
        internal fun insertPath(
            root: BinTrie?,
            path: Long,
            tag: Long
        ): BinTrie? = when {
            path == 0L || tag == 0L -> root
            root != null -> root.set(path, tag)
            (path.toULong() and (1uL shl 63) - 1u) == 0uL -> BinTrie(tag)
            path >= 0 -> BinTrie(
                left = insertPath(null, path shl 1, tag),
            )

            else -> BinTrie(
                right = insertPath(null, path shl 1, tag)
            )
        }

        internal fun insertPaths(root: BinTrie?, paths: BitPfxCollection, tag: Long): BinTrie? {
            var result = root
            if (tag != 0L) {
                for (x in paths) {
                    result = insertPath(result, x, tag)
                }
            }
            return result
        }
    }
}
