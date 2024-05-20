package org.ton.tlb.parser

import me.alllex.parsus.parser.*
import me.alllex.parsus.token.literalToken
import me.alllex.parsus.token.regexToken
import org.ton.tlb.ConstructorTag

public class TlbGrammar : Grammar<List<AST.Constructor>>() {
    init {
        regexToken("(/)([*])+(.|\\n)+?(\\2\\1)", ignored = true)
        regexToken("//(.*)", ignored = true)
        regexToken("\\s+", ignored = true)
    }

    private val lParen by literalToken("(")
    private val rParen by literalToken(")")
    private val lBracket by literalToken("[")
    private val rBracket by literalToken("]")
    private val lBrace by literalToken("{")
    private val rBrace by literalToken("}")
    private val dot by literalToken(".")
    private val question by literalToken("?")
    private val circumflex by literalToken("^")
    private val tilda by literalToken("~")
    private val star by literalToken("*")
    private val plus by literalToken("+")
    private val eq by literalToken("=")
    private val leq by literalToken("<=")
    private val geq by literalToken(">=")
    private val less by literalToken("<")
    private val greater by literalToken(">")
    private val colon by literalToken(":")
    private val semicolon by literalToken(";")
    private val exotic by literalToken("!")
    private val number by regexToken("\\d+") map {
        it.text.toInt()
    }
    private val tag by regexToken("((#[0-9a-f]*)|(\\$[01]*))_?") map {
        it.text
    }

    private val compareOp by eq or leq or geq or less or greater map {
        it.text
    }

    private val identifier by regexToken("#<|#<=|(##?)|([a-zA-Z_][a-zA-Z0-9_]*)").map {
        it.text
    }

    private val intConst by number map {
        AST.TypeExpression.IntConstant(it)
    }

    private val anonymousConstructor by -lBracket * ref(::fields) * -rBracket map {
        AST.TypeExpression.AnonymousConstructor(it)
    }

    // ^ E
    private val cellRef by parser {
        circumflex()
        AST.TypeExpression.CellRef(ref(::term)())
    }

    private val term: Parser<AST.TypeExpression> by parser {
        if (poll(lParen) != null) {
            val expr = ref(::expr)()
            rParen()
            return@parser expr
        }
        val intConst = poll(intConst)
        if (intConst != null) {
            return@parser intConst
        }
        val anonymousConstructor = poll(anonymousConstructor)
        if (anonymousConstructor != null) {
            return@parser anonymousConstructor
        }
        val cellRef = poll(cellRef)
        if (cellRef != null) {
            return@parser cellRef
        }

        val negate = poll(tilda) != null
        val name = identifier()

        AST.TypeExpression.TypeApply(name, negate)
    }

    // E [ . E ]
    private val expr97: Parser<AST.TypeExpression> by parser {
        var expr = term()
        if (poll(dot) != null) {
            val expr2 = term()
            expr = AST.TypeExpression.GetBit(expr, expr2)
        }
        expr
    }

    // E ? E [ : E ]
    private val expr95 by parser {
        var expr = expr97()
        if (poll(question) != null) {
            val expr2 = term()
            expr = AST.TypeExpression.Conditional(expr, expr2)
        }
        expr
    }

    // E E
    private val expr90 by parser {
        var expr = expr95()
        while (true) {
            val expr2 = poll(expr95) ?: break
            expr = AST.TypeExpression.Apply.create(expr, expr2)
        }
        expr
    }

    // E * E
    private val expr30 by parser {
        var expr = expr90()
        while (poll(star) != null) {
            val expr2 = expr90()
            if (expr2 is AST.TypeExpression.NaturalTypExpression) {
                expr = AST.TypeExpression.Multiply(expr, expr2)
            } else {
                expr = AST.TypeExpression.Tuple(expr, expr2)
            }
        }
        expr
    }

    // E + E
    private val expr20 by parser {
        var expr = expr30()
        while (poll(plus) != null) {
            val expr2 = expr30()
            expr = AST.TypeExpression.Add(expr, expr2)
        }
        expr
    }

    // E | E = E | E <= E | E < E | E >= E | E > E
    private val expr10 by parser {
        val expr = expr20()
        val op = poll(compareOp) ?: return@parser expr
        val expr2 = expr20()
        val expr0 = AST.TypeExpression.TypeApply(op)
        AST.TypeExpression.Apply(expr0, listOf(expr, expr2))
    }

    private val expr: Parser<AST.TypeExpression> by expr10

    private val implicitParam by parser {
        lBrace()
        val name = identifier()
        colon()
        val type = identifier()
        rBrace()
        AST.Field(name, AST.TypeExpression.TypeApply(type), true)
    }

    private val constraint by -lBrace * expr * -rBrace map {
        AST.Field(null, it, true)
    }

    private val unnamedField by parser {
        val type = expr95()
        AST.Field(null, type)
    }

    private val field by parser {
        val name = poll(identifier)
        colon()
        val type = expr95()
        AST.Field(name, type)
    }

    private val fields by zeroOrMore(implicitParam or constraint or field or unnamedField)

    private val constructor by parser {
        val isExotic = poll(exotic) != null
        val name = identifier()
        val tag = ConstructorTag.parse(poll(tag))
        val fields = fields()
        eq()
        val typeName = identifier()
        val args = ArrayList<AST.TypeExpression>(2)
        while (poll(semicolon) == null) {
            val expr = term()
            args.add(expr)
        }
        AST.Constructor(name, tag, fields, typeName, args, isExotic)
    }

    override val root: Parser<List<AST.Constructor>> by oneOrMore(constructor)
}
