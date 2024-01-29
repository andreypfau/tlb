package org.ton.tlb

private val HEX_DIGITS = "0123456789abcdef"

public class ConstructorTag(
    public val value: Long
) {
    public val size: MinMaxSize
        get() = if (value != 0L) {
            MinMaxSize.fixedSize(63 - value.countTrailingZeroBits())
        } else {
            MinMaxSize.fixedSize(0)
        }

    override fun toString(): String {
        if (value == 0L) {
            return ""
        }
        return if (value and ((1L shl 59) - 1) == 0L) {
            "$" + toBinary()
        } else {
            "#" + toHex()
        }
    }

    public fun toBinary(): String {
        if (value == 0L) {
            return ""
        }
        return buildString {
            var c = 0
            var tag = value
            while (tag and (((1uL shl 63) - 1uL).toLong()) != 0L) {
                append(tag ushr 63)
                tag = tag shl 1
                c++
            }
            if (c == 0) {
                append("_")
            }
        }
    }

    public fun toHex(): String {
        if (value == 0L) {
            return ""
        }
        return buildString {
            var tag = value
            while (tag and (((1uL shl 63) - 1uL).toLong()) != 0L) {
                append(HEX_DIGITS[(tag ushr 60).toInt()])
                tag = tag shl 4
            }
            if (tag == 0L) {
                append("_")
            }
        }
    }

    public companion object {
        public fun parse(string: CharSequence?): ConstructorTag {
            return ConstructorTag(parseValue(string))
        }

        public fun parseValue(string: CharSequence?): Long {
            if (string.isNullOrBlank()) {
                return 0
            }
            var value = 0L
            var bits = 0
            var chars = 1
            when (string[0]) {
                '#' -> {
                    for (i in 1..string.lastIndex) {
                        var c = string[i].code
                        if (c == '_'.code) {
                            break
                        }
                        c -= when (c) {
                            in '0'.code..'9'.code -> '0'.code
                            in 'A'.code..'F'.code -> 'A'.code - 10
                            in 'a'.code..'f'.code -> 'a'.code - 10
                            else -> return 0
                        }
                        if (bits > 60) {
                            return 0
                        }
                        value = value or (c.toLong() shl (60 - bits))
                        bits += 4
                        chars++
                    }
                }

                '$' -> {
                    if (string[1] != '_') {
                        for (i in 1..string.lastIndex) {
                            val c = string[i].code - '0'.code
                            if (c and -2 != 0) {
                                return 0
                            }
                            if (bits > 63) {
                                return 0
                            }
                            value = value or (c.toLong() shl (63 - bits))
                            bits++
                            chars++
                        }
                    }
                }

                else -> return 0
            }

            if (chars < string.lastIndex) {
                return 0
            }
            if (chars == string.lastIndex and bits) {
                // trailing _
                while (bits != 0 && ((value ushr (64 - bits) and 1) == 0L)) {
                    --bits
                }
                if (bits != 0) {
                    --bits
                }
            }
            if (bits == 64) {
                return 0
            }
            value = value or (1L shl (63 - bits))
            return value
        }
    }
}
