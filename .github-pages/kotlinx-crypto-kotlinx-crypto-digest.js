(function (root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-io-kotlinx-io-core.js'], factory);
    else if (typeof exports === 'object')
        factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-io-kotlinx-io-core.js'));
    else {
        if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
            throw new Error("Error loading module 'kotlinx-crypto-kotlinx-crypto-digest'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-crypto-kotlinx-crypto-digest'.");
        }
        if (typeof this['kotlinx-io-kotlinx-io-core'] === 'undefined') {
            throw new Error("Error loading module 'kotlinx-crypto-kotlinx-crypto-digest'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'kotlinx-crypto-kotlinx-crypto-digest'.");
        }
        root['kotlinx-crypto-kotlinx-crypto-digest'] = factory(typeof this['kotlinx-crypto-kotlinx-crypto-digest'] === 'undefined' ? {} : this['kotlinx-crypto-kotlinx-crypto-digest'], this['kotlin-kotlin-stdlib'], this['kotlinx-io-kotlinx-io-core']);
    }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_io_core) {
    'use strict';
    //region block: imports
    var protoOf = kotlin_kotlin.$_$.b4;
    var VOID = kotlin_kotlin.$_$.a;
    var Unit_getInstance = kotlin_kotlin.$_$.q1;
    var RawSink = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
    var interfaceMeta = kotlin_kotlin.$_$.v3;
    var setMetadataFor = kotlin_kotlin.$_$.c4;
    var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o1;
    //endregion
    //region block: pre-declaration
    function writeByte(byte) {
        // Inline function 'kotlin.byteArrayOf' call
        var tmp$ret$0 = new Int8Array([byte]);
        this.write$default_x02oae_k$(tmp$ret$0);
    }

    function write$default(source, startIndex, endIndex, $super) {
        startIndex = startIndex === VOID ? 0 : startIndex;
        endIndex = endIndex === VOID ? source.length : endIndex;
        var tmp;
        if ($super === VOID) {
            this.write_ti570x_k$(source, startIndex, endIndex);
            tmp = Unit_getInstance();
        } else {
            tmp = $super.write_ti570x_k$.call(this, source, startIndex, endIndex);
        }
        return tmp;
    }

    function digest() {
        // Inline function 'kotlin.apply' call
        var this_0 = new Int8Array(this.get_digestSize_t7emi6_k$());
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'io.github.andreypfau.kotlinx.crypto.digest.Digest.digest.<anonymous>' call
        this.digest$default_mw4tcc_k$(this_0);
        return this_0;
    }

    function digest$default(destination, destinationOffset, $super) {
        destinationOffset = destinationOffset === VOID ? 0 : destinationOffset;
        var tmp;
        if ($super === VOID) {
            this.digest_56095w_k$(destination, destinationOffset);
            tmp = Unit_getInstance();
        } else {
            tmp = $super.digest_56095w_k$.call(this, destination, destinationOffset);
        }
        return tmp;
    }

    function flush() {
    }

    function close() {
        this.reset_5u6xz3_k$();
    }

    setMetadataFor(Digest, 'Digest', interfaceMeta, VOID, [RawSink]);

    function get_digestSize() {
        return IntCompanionObject_getInstance().get_SIZE_BYTES_qphg4q_k$();
    }

    setMetadataFor(IntDigest, 'IntDigest', interfaceMeta, VOID, [Digest]);

    //endregion
    function plusAssign(_this__u8e3s4, byteArray) {
        return _this__u8e3s4.write$default_x02oae_k$(byteArray);
    }

    function Digest() {
    }

    function IntDigest() {
    }

    //region block: exports
    _.$_$ = _.$_$ || {};
    _.$_$.a = digest$default;
    _.$_$.b = write$default;
    _.$_$.c = close;
    _.$_$.d = digest;
    _.$_$.e = flush;
    _.$_$.f = writeByte;
    _.$_$.g = get_digestSize;
    _.$_$.h = IntDigest;
    //endregion
    return _;
}));

//# sourceMappingURL=kotlinx-crypto-kotlinx-crypto-digest.js.map
