package org.ton.tlb.compiler

import org.ton.tlb.BitPfxCollection
import org.ton.tlb.ConstructorTag
import org.ton.tlb.MinMaxSize
import org.ton.tlb.parser.AST

public class TlbConstructor(
    public val ast: AST.Constructor,
    public val fields: List<TlbField> = emptyList(),
    public val size: MinMaxSize,
    public val beginWith: BitPfxCollection
) {
    public val name: String get() = ast.name

    public val tag: ConstructorTag? get() = ast.tag

    public val tagSize: MinMaxSize get() = tag?.size ?: MinMaxSize.fixedSize(0)

    public val args: List<AST.ConstructorArg> get() = ast.args

    /***
     * Returns a list of constructor arguments that are not negated.
     */
    public val trueArgs: List<AST.ConstructorArg>
        get() = ast.args.filter {
            !it.isNegated
        }

    /**
     * Returns a list of constructor fields that are not implicit and not constraints.
     */
    public val explicitFields: List<TlbField> = fields.filter {
        !it.isConstraint && !it.isImplicit
    }

    public val isEnum: Boolean get() = explicitFields.isEmpty()
    public val isSimpleEnum: Boolean get() = isEnum && trueArgs.isEmpty()

    public val isForward: Boolean by lazy {
        if (name.isNotEmpty()) {
            return@lazy false
        }
        if (fields.size != 1) {
            return@lazy false
        }
        if (args.isNotEmpty()) {
            return@lazy false
        }
        val field = fields.firstOrNull() ?: return@lazy false
        !field.isImplicit && !field.isConstraint
    }

    override fun toString(): String = ast.toString()
}
