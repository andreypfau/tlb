(function (root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-crypto-kotlinx-crypto-digest.js'], factory);
    else if (typeof exports === 'object')
        factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-crypto-kotlinx-crypto-digest.js'));
    else {
        if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
            throw new Error("Error loading module 'kotlinx-crypto-kotlinx-crypto-crc32'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-crypto-kotlinx-crypto-crc32'.");
        }
        if (typeof this['kotlinx-io-kotlinx-io-core'] === 'undefined') {
            throw new Error("Error loading module 'kotlinx-crypto-kotlinx-crypto-crc32'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'kotlinx-crypto-kotlinx-crypto-crc32'.");
        }
        if (typeof this['kotlinx-crypto-kotlinx-crypto-digest'] === 'undefined') {
            throw new Error("Error loading module 'kotlinx-crypto-kotlinx-crypto-crc32'. Its dependency 'kotlinx-crypto-kotlinx-crypto-digest' was not found. Please, check whether 'kotlinx-crypto-kotlinx-crypto-digest' is loaded prior to 'kotlinx-crypto-kotlinx-crypto-crc32'.");
        }
        root['kotlinx-crypto-kotlinx-crypto-crc32'] = factory(typeof this['kotlinx-crypto-kotlinx-crypto-crc32'] === 'undefined' ? {} : this['kotlinx-crypto-kotlinx-crypto-crc32'], this['kotlin-kotlin-stdlib'], this['kotlinx-io-kotlinx-io-core'], this['kotlinx-crypto-kotlinx-crypto-digest']);
    }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_github_andreypfau_kotlinx_crypto_digest) {
    'use strict';
    //region block: imports
    var Unit_getInstance = kotlin_kotlin.$_$.q1;
    var protoOf = kotlin_kotlin.$_$.b4;
    var objectCreate = kotlin_kotlin.$_$.z3;
    var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.g1;
    var toByte = kotlin_kotlin.$_$.d4;
    var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.d1;
    var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.e1;
    var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.i1;
    var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.f1;
    var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
    var Long = kotlin_kotlin.$_$.d5;
    var write$default = kotlin_io_github_andreypfau_kotlinx_crypto_digest.$_$.b;
    var digest$default = kotlin_io_github_andreypfau_kotlinx_crypto_digest.$_$.a;
    var toLong = kotlin_kotlin.$_$.e4;
    var get_digestSize = kotlin_io_github_andreypfau_kotlinx_crypto_digest.$_$.g;
    var writeByte = kotlin_io_github_andreypfau_kotlinx_crypto_digest.$_$.f;
    var digest = kotlin_io_github_andreypfau_kotlinx_crypto_digest.$_$.d;
    var flush = kotlin_io_github_andreypfau_kotlinx_crypto_digest.$_$.e;
    var close = kotlin_io_github_andreypfau_kotlinx_crypto_digest.$_$.c;
    var IntDigest = kotlin_io_github_andreypfau_kotlinx_crypto_digest.$_$.h;
    var classMeta = kotlin_kotlin.$_$.o3;
    var setMetadataFor = kotlin_kotlin.$_$.c4;
    var VOID = kotlin_kotlin.$_$.a;
    var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.h1;
    var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.k1;
    var get_indices = kotlin_kotlin.$_$.i2;
    var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.j1;
    var uintRemainder = kotlin_kotlin.$_$.t5;
    var UIntArray = kotlin_kotlin.$_$.i5;
    var KProperty0 = kotlin_kotlin.$_$.j4;
    var getPropertyCallableRef = kotlin_kotlin.$_$.s3;
    var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.c;
    var lazy = kotlin_kotlin.$_$.l5;
    //endregion
    //region block: pre-declaration
    setMetadataFor(CRC32Pure, 'CRC32Pure', classMeta, VOID, [IntDigest], CRC32Pure_init_$Create$);

    //endregion
    function crc32(bytes) {
        var crc32 = CRC32Pure_init_$Create$();
        // Inline function 'io.github.andreypfau.kotlinx.crypto.digest.plusAssign' call
        crc32.write$default_x02oae_k$(bytes);
        return crc32.intDigest_7g5z71_k$();
    }

    function _get_table__b2dcfx($this) {
        return $this.table_1;
    }

    function CRC32Pure_init_$Init$($this) {
        CRC32Pure.call($this, get_IEEE_TABLE());
        return $this;
    }

    function CRC32Pure_init_$Create$() {
        return CRC32Pure_init_$Init$(objectCreate(protoOf(CRC32Pure)));
    }

    function _set_crc32__d6bgxe($this, _set____db54di) {
        $this.crc32__1 = _set____db54di;
    }

    function _get_crc32__iuszk2($this) {
        return $this.crc32__1;
    }

    function update($this, value) {
        // Inline function 'kotlin.toUByte' call
        // Inline function 'kotlin.experimental.xor' call
        // Inline function 'kotlin.UInt.toByte' call
        var this_0 = $this.crc32__1;
        var other = toByte(_UInt___get_data__impl__f0vqqw(this_0));
        var this_1 = toByte(value ^ other);
        var index = _UByte___init__impl__g9hnc4(this_1);
        var tmp = $this;
        // Inline function 'kotlin.UInt.xor' call
        // Inline function 'kotlin.UByte.toInt' call
        var tmp$ret$3 = _UByte___get_data__impl__jof9qr(index) & 255;
        var this_2 = UIntArray__get_impl_gp5kza($this.table_1, tmp$ret$3);
        // Inline function 'kotlin.UInt.shr' call
        var this_3 = $this.crc32__1;
        var other_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) >>> 8 | 0);
        tmp.crc32__1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) ^ _UInt___get_data__impl__f0vqqw(other_0));
    }

    function CRC32Pure(table) {
        this.table_1 = table;
        this.crc32__1 = _UInt___init__impl__l7qpdl(-1);
    }

    protoOf(CRC32Pure).write_yvqjfp_k$ = function (source, byteCount) {
        var tempBuffer = new Buffer();
        source.copyTo_f80oje_k$(tempBuffer, new Long(0, 0), byteCount);
        while (!tempBuffer.exhausted_p1jt55_k$()) {
            // Inline function 'io.github.andreypfau.kotlinx.crypto.crc32.CRC32Pure.update' call
            // Inline function 'kotlin.toUByte' call
            // Inline function 'kotlin.experimental.xor' call
            var this_0 = tempBuffer.readByte_ectjk2_k$();
            // Inline function 'kotlin.UInt.toByte' call
            var this_1 = this.crc32__1;
            var other = toByte(_UInt___get_data__impl__f0vqqw(this_1));
            var this_2 = toByte(this_0 ^ other);
            var index = _UByte___init__impl__g9hnc4(this_2);
            var tmp = this;
            // Inline function 'kotlin.UInt.xor' call
            // Inline function 'kotlin.UByte.toInt' call
            var tmp$ret$3 = _UByte___get_data__impl__jof9qr(index) & 255;
            var this_3 = UIntArray__get_impl_gp5kza(this.table_1, tmp$ret$3);
            // Inline function 'kotlin.UInt.shr' call
            var this_4 = this.crc32__1;
            var other_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) >>> 8 | 0);
            tmp.crc32__1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) ^ _UInt___get_data__impl__f0vqqw(other_0));
        }
    };
    protoOf(CRC32Pure).write_ti570x_k$ = function (source, startIndex, endIndex) {
        var inductionVariable = startIndex;
        if (inductionVariable < endIndex)
            do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'io.github.andreypfau.kotlinx.crypto.crc32.CRC32Pure.update' call
                // Inline function 'kotlin.toUByte' call
                // Inline function 'kotlin.experimental.xor' call
                var this_0 = source[i];
                // Inline function 'kotlin.UInt.toByte' call
                var this_1 = this.crc32__1;
                var other = toByte(_UInt___get_data__impl__f0vqqw(this_1));
                var this_2 = toByte(this_0 ^ other);
                var index = _UByte___init__impl__g9hnc4(this_2);
                var tmp = this;
                // Inline function 'kotlin.UInt.xor' call
                // Inline function 'kotlin.UByte.toInt' call
                var tmp$ret$3 = _UByte___get_data__impl__jof9qr(index) & 255;
                var this_3 = UIntArray__get_impl_gp5kza(this.table_1, tmp$ret$3);
                // Inline function 'kotlin.UInt.shr' call
                var this_4 = this.crc32__1;
                var other_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) >>> 8 | 0);
                tmp.crc32__1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) ^ _UInt___get_data__impl__f0vqqw(other_0));
            }
            while (inductionVariable < endIndex);
    };
    protoOf(CRC32Pure).digest_56095w_k$ = function (destination, destinationOffset) {
        var intDigest = this.intDigest_7g5z71_k$();
        destination[destinationOffset] = toByte(intDigest >> 24 & 255);
        destination[destinationOffset + 1 | 0] = toByte(intDigest >> 16 & 255);
        destination[destinationOffset + 2 | 0] = toByte(intDigest >> 8 & 255);
        destination[destinationOffset + 3 | 0] = toByte(intDigest & 255);
    };
    protoOf(CRC32Pure).digest_zf5404_k$ = function (sink) {
        var intDigest = this.intDigest_7g5z71_k$();
        if (sink instanceof Buffer) {
            sink.writeInt_i8xgjs_k$(intDigest);
        } else {
            var buffer = new Buffer();
            buffer.writeInt_i8xgjs_k$(intDigest);
            sink.write_yvqjfp_k$(buffer, toLong(this.get_digestSize_t7emi6_k$()));
        }
    };
    protoOf(CRC32Pure).reset_5u6xz3_k$ = function () {
        this.crc32__1 = _UInt___init__impl__l7qpdl(-1);
    };
    protoOf(CRC32Pure).intDigest_7g5z71_k$ = function () {
        // Inline function 'kotlin.UInt.toInt' call
        // Inline function 'kotlin.UInt.xor' call
        var this_0 = this.crc32__1;
        var other = _UInt___init__impl__l7qpdl(-1);
        var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) ^ _UInt___get_data__impl__f0vqqw(other));
        return _UInt___get_data__impl__f0vqqw(this_1);
    };

    function get_IEEE_TABLE() {
        _init_properties_constants_kt__o0zklf();
        // Inline function 'kotlin.getValue' call
        var this_0 = IEEE_TABLE$delegate;
        IEEE_TABLE$factory();
        return this_0.get_value_j01efc_k$().storage_1;
    }

    var IEEE_TABLE$delegate;

    function get_CASTAGNOLI_TABLE() {
        _init_properties_constants_kt__o0zklf();
        // Inline function 'kotlin.getValue' call
        var this_0 = CASTAGNOLI_TABLE$delegate;
        CASTAGNOLI_TABLE$factory();
        return this_0.get_value_j01efc_k$().storage_1;
    }

    var CASTAGNOLI_TABLE$delegate;

    function generateCrc32Table(poly) {
        _init_properties_constants_kt__o0zklf();
        var table = _UIntArray___init__impl__ghjpc6(256);
        // Inline function 'kotlin.collections.indices' call
        var progression = get_indices(_UIntArray___get_storage__impl__92a0v0(table));
        var inductionVariable = progression.get_first_irdx8n_k$();
        var last = progression.get_last_wopotb_k$();
        if (inductionVariable <= last)
            do {
                var idx = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'kotlin.toUInt' call
                var this_0 = idx;
                var tmp$ret$1 = _UInt___init__impl__l7qpdl(this_0);
                UIntArray__set_impl_7f2zu2(table, idx, tmp$ret$1);
                var inductionVariable_0 = 8;
                if (1 <= inductionVariable_0)
                    do {
                        var bit = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + -1 | 0;
                        var tmp;
                        // Inline function 'kotlin.UInt.rem' call
                        var this_1 = UIntArray__get_impl_gp5kza(table, idx);
                        var other = _UInt___init__impl__l7qpdl(2);
                        if (uintRemainder(this_1, other) === _UInt___init__impl__l7qpdl(0)) {
                            // Inline function 'kotlin.UInt.shr' call
                            var this_2 = UIntArray__get_impl_gp5kza(table, idx);
                            tmp = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) >>> 1 | 0);
                        } else {
                            // Inline function 'kotlin.UInt.xor' call
                            // Inline function 'kotlin.UInt.shr' call
                            var this_3 = UIntArray__get_impl_gp5kza(table, idx);
                            var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) >>> 1 | 0);
                            tmp = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) ^ _UInt___get_data__impl__f0vqqw(poly));
                        }
                        UIntArray__set_impl_7f2zu2(table, idx, tmp);
                    }
                    while (1 <= inductionVariable_0);
            }
            while (!(idx === last));
        return table;
    }

    function IEEE_TABLE$delegate$lambda() {
        _init_properties_constants_kt__o0zklf();
        return new UIntArray(generateCrc32Table(_UInt___init__impl__l7qpdl(-306674912)));
    }

    function CASTAGNOLI_TABLE$delegate$lambda() {
        _init_properties_constants_kt__o0zklf();
        return new UIntArray(generateCrc32Table(_UInt___init__impl__l7qpdl(-2097792136)));
    }

    function IEEE_TABLE$factory() {
        return getPropertyCallableRef('IEEE_TABLE', 0, KProperty0, function () {
            return new UIntArray(get_IEEE_TABLE());
        }, null);
    }

    function CASTAGNOLI_TABLE$factory() {
        return getPropertyCallableRef('CASTAGNOLI_TABLE', 0, KProperty0, function () {
            return new UIntArray(get_CASTAGNOLI_TABLE());
        }, null);
    }

    var properties_initialized_constants_kt_tf27pd;

    function _init_properties_constants_kt__o0zklf() {
        if (!properties_initialized_constants_kt_tf27pd) {
            properties_initialized_constants_kt_tf27pd = true;
            var tmp = LazyThreadSafetyMode_PUBLICATION_getInstance();
            IEEE_TABLE$delegate = lazy(tmp, IEEE_TABLE$delegate$lambda);
            var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
            CASTAGNOLI_TABLE$delegate = lazy(tmp_0, CASTAGNOLI_TABLE$delegate$lambda);
        }
    }

    //region block: post-declaration
    protoOf(CRC32Pure).write$default_x02oae_k$ = write$default;
    protoOf(CRC32Pure).digest$default_mw4tcc_k$ = digest$default;
    protoOf(CRC32Pure).get_digestSize_t7emi6_k$ = get_digestSize;
    protoOf(CRC32Pure).writeByte_9ih3z3_k$ = writeByte;
    protoOf(CRC32Pure).digest_m0ziv0_k$ = digest;
    protoOf(CRC32Pure).flush_shahbo_k$ = flush;
    protoOf(CRC32Pure).close_yn9xrc_k$ = close;
    //endregion
    //region block: exports
    _.$_$ = _.$_$ || {};
    _.$_$.a = crc32;
    //endregion
    return _;
}));

//# sourceMappingURL=kotlinx-crypto-kotlinx-crypto-crc32.js.map
