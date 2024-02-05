package org.ton.tlb

private const val ALL = 1L shl 63

public class BitPfxCollection private constructor(
    private val pfx: MutableList<Long>
) : Iterable<Long> {
    public constructor() : this(ArrayList())
    public constructor(pfx: Long) : this(ArrayList<Long>().apply {
        add(pfx)
    })

    public fun isEmpty(): Boolean = pfx.isEmpty()

    override fun iterator(): Iterator<Long> = pfx.iterator()

    override fun toString(): String = buildString {
        var first = '{'
        for (value in pfx) {
            append(first)
            var v = value
            while (v and ((ALL.toULong() - 1u).toLong()) != 0L) {
                append(v ushr 63)
                v = v shl 1
            }
            append("*")
            first = ','
        }
        if (first == '{') {
            append('{')
        }
        append('}')
    }

    public operator fun times(prepend: Long): BitPfxCollection {
        var p = prepend
        if (p == 0L) {
            return BitPfxCollection()
        }
        if (p == ALL) {
            return this
        }
        val result = BitPfxCollection(ArrayList(pfx.size))
        val l = 63 - prepend.countTrailingZeroBits()
        p = p and (p - 1)
        for (i in 0 until pfx.size) {
            var z = pfx[i]
            val zw = z.lowerBit()
            z = z ushr l
            z = z or p
            if (zw ushr l == 0L) {
                z = z or 1
            }
            result.plus(z)
        }
        return result
    }

    public operator fun plus(prefix: Long) {
        var z = prefix
        if (pfx.isEmpty()) {
            pfx.add(z)
            return
        }
        var w = z.lowerBit()
        while (pfx.size != 0) {
            val b = pfx.last()
            val t = z xor b
            if (t == 0L) {
                return
            }
            if (t != (w shl 1)) {
                break
            }
            z -= w
            w = w shl 1
            pfx.removeLast()
        }
        pfx.add(z)
    }

    public operator fun plus(other: BitPfxCollection): BitPfxCollection {
        if (other.isEmpty()) {
            return this
        }
        if (isEmpty()) {
            return other
        }
        var i = 0
        var j = 0
        val m = pfx.size
        val n = other.pfx.size
        val result = BitPfxCollection(ArrayList(m + n))
        var u = Interval(pfx[0])
        var v = Interval(other.pfx[0])
        while (i < m && j < n) {
            if (u.b < v.b || (u.b == v.b && u.a >= v.a)) {
                if (u.a < v.a) {
                    result.plus(u.z)
                }
                if (++i == m) {
                    break
                }
                u = Interval(pfx[i])
            } else {
                if (v.a < u.a) {
                    result.plus(v.z)
                }
                if (++j == n) {
                    break
                }
                v = Interval(other.pfx[j])
            }
        }
        while (i < m) {
            result.plus(pfx[i++])
        }
        while (j < n) {
            result.plus(other.pfx[j++])
        }
        return result
    }

    private data class Interval(val z: Long, val a: Long, val b: Long) {
        constructor(z: Long) : this(
            z = z,
            a = z and (z - 1),
            b = z or (z - 1)
        )

        operator fun contains(other: Interval) = a <= other.a && other.b <= b
    }

    public companion object {
        public fun all(): BitPfxCollection = BitPfxCollection(ALL)
    }
}
