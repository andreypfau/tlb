package org.ton.tlb.compiler

import org.ton.tlb.MinMaxSize
import org.ton.tlb.parser.AST

public class TlbField(
    public val ast: AST.Field,
    public val type: TlbType?,
    public val size: MinMaxSize? = null
) {
    public val name: String? get() = ast.name
    public val typeExpression: AST.TypeExpression get() = ast.typeExpression
    public val isImplicit: Boolean get() = ast.isImplicit
    public val isConstraint: Boolean get() = ast.isConstraint

    override fun toString(): String = ast.toString()
}
