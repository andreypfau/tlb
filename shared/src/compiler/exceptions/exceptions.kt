package org.ton.tlb.compiler.exceptions

public class ConstructorTypeLowerCaseException(
    public val typeName: String
) : Exception("Constructor type `$typeName` name must begin with an uppercase letter")

public class InvalidConstructorTagException(
    public val tag: String
) : Exception("Invalid constructor tag `$tag`")

public class TypeAlreadyDefinedException(
    public val typeName: String
) : Exception("Type `$typeName` is already defined")

public class UndefinedTypeException(
    public val typeName: String
) : Exception("Type `$typeName` is not defined")

public class UndefinedFieldException(
    public val fieldName: String
) : Exception("Field `$fieldName` is not defined")

public class CantApplyNonNatTypeException() : Exception("Can't apply non-nat type")
