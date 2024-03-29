package org.ton.tlb.parser

import org.ton.tlb.ConstructorTag

public sealed interface AST {
    public data class Field(
        val name: String?,
        val typeExpression: TypeExpression,
        val isImplicit: Boolean = false,
    ) : AST {
        val isConstraint: Boolean get() = name == null

        override fun toString(): String = buildString {
            val printBrace = isImplicit || isConstraint
            if (printBrace) {
                append("{")
            }
            if (!name.isNullOrBlank()) {
                append(name)
                append(":")
            }
            append(typeExpression)
            if (printBrace) {
                append("}")
            }
        }
    }

    public data class ConstructorArg(
        val expression: TypeExpression,
        val isNegated: Boolean = false,
    ) : AST

    public data class Constructor(
        val name: String,
        val tag: ConstructorTag?,
        val fields: List<Field>,
        val typeName: String,
        val args: List<TypeExpression>,
        val isExotic: Boolean = false,
    ) : AST {
        override fun toString(): String {
            return toString(
                printTag = true
            )
        }

        public fun toString(
            printTag: Boolean,
        ): String = buildString {
            append(name)
            if (printTag && tag != null) {
                append(tag)
            }
            fields.forEach { field ->
                append(" ")
                append(field)
            }
            append(" = ")
            append(typeName)
            args.forEach { arg ->
                append(" ")
                append(arg)
            }
        }
    }

    public sealed interface TypeExpression : AST {
        public sealed interface NaturalTypExpression : TypeExpression

        public data class TypeApply(
            val name: String,
            val isNegated: Boolean = false,
        ) : TypeExpression {
            override fun toString(): String = buildString {
                if (isNegated) {
                    append("~")
                }
                append(name)
            }
        }

        public data class Apply(
            val expression: TypeExpression,
            val arguments: List<TypeExpression> = emptyList()
        ) : TypeExpression {
            override fun toString(): String = buildString {
                append("(")
                append(expression)
                for (arg in arguments) {
                    append(" ")
                    append(arg)
                }
                append(")")
            }

            public operator fun plus(arg: TypeExpression): Apply {
                return copy(arguments = arguments + arg)
            }

            public companion object {
                public fun create(expression: TypeExpression, vararg args: TypeExpression): Apply {
                    if (expression is Apply) {
                        return expression.copy(arguments = expression.arguments + args)
                    }
                    return Apply(expression, args.toList())
                }
            }
        }

        public data class Add(
            val expression: TypeExpression,
            val expression2: TypeExpression
        ) : NaturalTypExpression {

            override fun toString(): String {
                return "($expression + $expression2)"
            }
        }

        public data class GetBit(
            val expression: TypeExpression,
            val expression2: TypeExpression
        ) : NaturalTypExpression {

            override fun toString(): String {
                return "($expression.$expression2)"
            }
        }

        public data class Multiply(
            val value: TypeExpression,
            val expression: TypeExpression
        ) : NaturalTypExpression {
            override fun toString(): String = "($value * $expression)"
        }

        public data class IntConstant(
            val value: Int
        ) : NaturalTypExpression {
            override fun toString(): String = value.toString()
        }

        public data class Tuple(
            val value: TypeExpression,
            val expression: TypeExpression
        ) : TypeExpression {
            override fun toString(): String = "($value * $expression)"
        }

        public data class CellRef(
            val expression: TypeExpression
        ) : TypeExpression {
            override fun toString(): String = "^$expression"
        }

        public data class Conditional(
            val expression: TypeExpression,
            val expression2: TypeExpression,
        ) : TypeExpression {
            override fun toString(): String {
                return "($expression?$expression2)"
            }
        }

        public data class AnonymousConstructor(
            val fields: List<Field>
        ) : TypeExpression {
            override fun toString(): String = buildString {
                append("[")
                fields.forEach {
                    append(" ")
                    append(it)
                }
                append(" ]")
            }
        }
    }
}
