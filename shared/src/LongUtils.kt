package org.ton.tlb

internal fun Long.bitsNegate() = inv() + 1
internal fun Long.lowerBit() = this and bitsNegate()
