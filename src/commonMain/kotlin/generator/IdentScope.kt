package org.ton.tlb.generator

public class IdentScope(
    private val forbiddenIdentifiers: Collection<String> = emptyList(),
    private val identifiers: MutableSet<String> = HashSet()
) : Collection<String> by identifiers {
    public fun clear(): Unit = identifiers.clear()

    public fun registerIdentifier(originalIdentifier: String, count: Int = 0): String {
        var i = count
        while (true) {
            val identifier = computeIdentifier(originalIdentifier, i)
            if (isGoodIdentifier(identifier)) {
                identifiers.add(identifier)
                return identifier
            }
            i++
        }
    }

    public fun isGoodIdentifier(identifier: String): Boolean =
        !contains(identifier) && !isForbiddenIdentifier(identifier) && !forbiddenIdentifiers.contains(identifier)

    public companion object {
        public fun computeIdentifier(originalIdentifier: String, count: Int = 0): String {
            return buildString {
                append(originalIdentifier)
                if (count != 0) {
                    append(count)
                }
            }
        }

        private fun isForbiddenIdentifier(identifier: String) = when (identifier) {
            "true",
            "false",
            "int",
            "bool",
            "unsigned",
            "long",
            "short",
            "char",
            "void",
            "class",
            "struct",
            "enum",
            "union",
            "public",
            "private",
            "protected",
            "extern",
            "static",
            "final",
            "if",
            "else",
            "while",
            "do",
            "for",
            "break",
            "continue",
            "return",
            "virtual",
            "explicit",
            "override",
            "new",
            "delete",
            "operator",
            "Ref",
            "Cell",
            "CellSlice",
            "Anything",
            "RefAnything",
            "Nat" -> true
            else -> false
        }
    }
}
