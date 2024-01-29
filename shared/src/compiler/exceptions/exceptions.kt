package org.ton.tlb.compiler.exceptions

public class ConstructorTypeLowerCaseException(
    public val typeName: String
) : Exception("Constructor type `$typeName` name must begin with an uppercase letter")

public class InvalidConstructorTagException(
    public val tag: String
) : Exception("Invalid constructor tag `$tag`")
