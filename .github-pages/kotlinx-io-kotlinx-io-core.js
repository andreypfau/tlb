(function (root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['exports', './kotlin-kotlin-stdlib.js'], factory);
    else if (typeof exports === 'object')
        factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
    else {
        if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
            throw new Error("Error loading module 'kotlinx-io-kotlinx-io-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-io-kotlinx-io-core'.");
        }
        root['kotlinx-io-kotlinx-io-core'] = factory(typeof this['kotlinx-io-kotlinx-io-core'] === 'undefined' ? {} : this['kotlinx-io-kotlinx-io-core'], this['kotlin-kotlin-stdlib']);
    }
}(this, function (_, kotlin_kotlin) {
    'use strict';
    //region block: imports
    var imul = Math.imul;
    var toLong = kotlin_kotlin.$_$.e4;
    var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t;
    var Long = kotlin_kotlin.$_$.d5;
    var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r;
    var toString = kotlin_kotlin.$_$.g4;
    var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u;
    var charArrayOf = kotlin_kotlin.$_$.l3;
    var protoOf = kotlin_kotlin.$_$.b4;
    var THROW_CCE = kotlin_kotlin.$_$.g5;
    var Annotation = kotlin_kotlin.$_$.x4;
    var classMeta = kotlin_kotlin.$_$.o3;
    var setMetadataFor = kotlin_kotlin.$_$.c4;
    var VOID = kotlin_kotlin.$_$.a;
    var ensureNotNull = kotlin_kotlin.$_$.k5;
    var toShort = kotlin_kotlin.$_$.f4;
    var Unit_getInstance = kotlin_kotlin.$_$.q1;
    var numberToLong = kotlin_kotlin.$_$.y3;
    var arrayCopy = kotlin_kotlin.$_$.v1;
    var toByte = kotlin_kotlin.$_$.d4;
    var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l;
    var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
    var AutoCloseable = kotlin_kotlin.$_$.y4;
    var interfaceMeta = kotlin_kotlin.$_$.v3;
    var objectCreate = kotlin_kotlin.$_$.z3;
    var objectMeta = kotlin_kotlin.$_$.a4;
    var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.q;
    var charSequenceLength = kotlin_kotlin.$_$.n3;
    var charSequenceGet = kotlin_kotlin.$_$.m3;
    var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.v;
    var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.y;
    var copyOf = kotlin_kotlin.$_$.a2;
    var captureStack = kotlin_kotlin.$_$.k3;
    var Exception = kotlin_kotlin.$_$.c5;
    var Exception_init_$Init$ = kotlin_kotlin.$_$.p;
    var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
    var asReversed = kotlin_kotlin.$_$.w1;
    var equals = kotlin_kotlin.$_$.p3;
    var contains = kotlin_kotlin.$_$.n4;
    var isBlank = kotlin_kotlin.$_$.p4;
    var getStringHashCode = kotlin_kotlin.$_$.t3;
    var Char = kotlin_kotlin.$_$.z4;
    var KProperty0 = kotlin_kotlin.$_$.j4;
    var getPropertyCallableRef = kotlin_kotlin.$_$.s3;
    var lazy = kotlin_kotlin.$_$.m5;
    //endregion
    //region block: pre-declaration
    setMetadataFor(InternalIoApi, 'InternalIoApi', classMeta, VOID, [Annotation]);
    setMetadataFor(RawSource, 'RawSource', interfaceMeta, VOID, [AutoCloseable]);

    function readAtMostTo$default(sink, startIndex, endIndex, $super) {
        startIndex = startIndex === VOID ? 0 : startIndex;
        endIndex = endIndex === VOID ? sink.length : endIndex;
        return $super === VOID ? this.readAtMostTo_kub29z_k$(sink, startIndex, endIndex) : $super.readAtMostTo_kub29z_k$.call(this, sink, startIndex, endIndex);
    }

    setMetadataFor(Source, 'Source', interfaceMeta, VOID, [RawSource]);
    setMetadataFor(RawSink, 'RawSink', interfaceMeta, VOID, [AutoCloseable]);

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

    setMetadataFor(Sink, 'Sink', interfaceMeta, VOID, [RawSink]);
    setMetadataFor(Buffer, 'Buffer', classMeta, VOID, [Source, Sink], Buffer);
    setMetadataFor(PeekSource, 'PeekSource', classMeta, VOID, [RawSource]);
    setMetadataFor(RealSource, 'RealSource', classMeta, VOID, [Source]);
    setMetadataFor(Companion, 'Companion', objectMeta);
    setMetadataFor(Segment, 'Segment', classMeta, VOID, VOID, Segment_init_$Create$);

    function delete$default(path, mustExist, $super) {
        mustExist = mustExist === VOID ? true : mustExist;
        var tmp;
        if ($super === VOID) {
            this.delete_wo7h84_k$(path, mustExist);
            tmp = Unit_getInstance();
        } else {
            tmp = $super.delete_wo7h84_k$.call(this, path, mustExist);
        }
        return tmp;
    }

    function createDirectories$default(path, mustCreate, $super) {
        mustCreate = mustCreate === VOID ? false : mustCreate;
        var tmp;
        if ($super === VOID) {
            this.createDirectories_7nzr80_k$(path, mustCreate);
            tmp = Unit_getInstance();
        } else {
            tmp = $super.createDirectories_7nzr80_k$.call(this, path, mustCreate);
        }
        return tmp;
    }

    function sink$default(path, append, $super) {
        append = append === VOID ? false : append;
        return $super === VOID ? this.sink_ed8sos_k$(path, append) : $super.sink_ed8sos_k$.call(this, path, append);
    }

    setMetadataFor(FileSystem, 'FileSystem', interfaceMeta);
    setMetadataFor(SystemFileSystemImpl, 'SystemFileSystemImpl', classMeta, VOID, [FileSystem]);
    setMetadataFor(FileMetadata, 'FileMetadata', classMeta, VOID, VOID, FileMetadata);
    setMetadataFor(IOException, 'IOException', classMeta, Exception, VOID, IOException_init_$Create$);
    setMetadataFor(EOFException, 'EOFException', classMeta, IOException, VOID, EOFException);
    setMetadataFor(SegmentPool, 'SegmentPool', objectMeta);
    setMetadataFor(FileNotFoundException, 'FileNotFoundException', classMeta, IOException);
    setMetadataFor(SystemFileSystem$1, VOID, classMeta, SystemFileSystemImpl);
    setMetadataFor(Path, 'Path', classMeta);
    setMetadataFor(FileSource, 'FileSource', classMeta, VOID, [RawSource]);
    setMetadataFor(FileSink, 'FileSink', classMeta, VOID, [RawSink]);

    //endregion
    function get_HEX_DIGIT_CHARS() {
        _init_properties__Util_kt__g8tcl9();
        return HEX_DIGIT_CHARS;
    }

    var HEX_DIGIT_CHARS;

    function minOf(a, b) {
        _init_properties__Util_kt__g8tcl9();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = toLong(b);
        return a.compareTo_9jj042_k$(b_0) <= 0 ? a : b_0;
    }

    function and(_this__u8e3s4, other) {
        _init_properties__Util_kt__g8tcl9();
        return _this__u8e3s4 & other;
    }

    function and_0(_this__u8e3s4, other) {
        _init_properties__Util_kt__g8tcl9();
        return toLong(_this__u8e3s4).and_4spn93_k$(other);
    }

    function and_1(_this__u8e3s4, other) {
        _init_properties__Util_kt__g8tcl9();
        return toLong(_this__u8e3s4).and_4spn93_k$(other);
    }

    function checkBounds(size, startIndex, endIndex) {
        _init_properties__Util_kt__g8tcl9();
        if (startIndex.compareTo_9jj042_k$(new Long(0, 0)) < 0 ? true : endIndex.compareTo_9jj042_k$(size) > 0) {
            throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
        }
        if (startIndex.compareTo_9jj042_k$(endIndex) > 0) {
            throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
        }
    }

    function checkByteCount(byteCount) {
        _init_properties__Util_kt__g8tcl9();
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
            // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
            var message = 'byteCount (' + byteCount.toString() + ') < 0';
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
    }

    function checkBounds_0(size, startIndex, endIndex) {
        _init_properties__Util_kt__g8tcl9();
        return checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    }

    function checkOffsetAndCount(size, offset, byteCount) {
        _init_properties__Util_kt__g8tcl9();
        if (((offset.compareTo_9jj042_k$(new Long(0, 0)) < 0 ? true : offset.compareTo_9jj042_k$(size) > 0) ? true : size.minus_mfbszm_k$(offset).compareTo_9jj042_k$(byteCount) < 0) ? true : byteCount.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
            throw IllegalArgumentException_init_$Create$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
        }
    }

    function minOf_0(a, b) {
        _init_properties__Util_kt__g8tcl9();
        // Inline function 'kotlin.comparisons.minOf' call
        var a_0 = toLong(a);
        return a_0.compareTo_9jj042_k$(b) <= 0 ? a_0 : b;
    }

    var properties_initialized__Util_kt_67kc5b;

    function _init_properties__Util_kt__g8tcl9() {
        if (!properties_initialized__Util_kt_67kc5b) {
            properties_initialized__Util_kt_67kc5b = true;
            // Inline function 'kotlin.charArrayOf' call
            HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
        }
    }

    function InternalIoApi() {
    }

    protoOf(InternalIoApi).equals = function (other) {
        if (!(other instanceof InternalIoApi))
            return false;
        other instanceof InternalIoApi || THROW_CCE();
        return true;
    };
    protoOf(InternalIoApi).hashCode = function () {
        return 0;
    };
    protoOf(InternalIoApi).toString = function () {
        return '@kotlinx.io.InternalIoApi()';
    };

    function Buffer() {
        this.head_1 = null;
        this.size_1 = new Long(0, 0);
        this.buffer_1 = this;
    }

    protoOf(Buffer).set_head_6iwqe0_k$ = function (_set____db54di) {
        this.head_1 = _set____db54di;
    };
    protoOf(Buffer).get_head_won7e1_k$ = function () {
        return this.head_1;
    };
    protoOf(Buffer).set_size_9bzqhs_k$ = function (_set____db54di) {
        this.size_1 = _set____db54di;
    };
    protoOf(Buffer).get_size_woubt6_k$ = function () {
        return this.size_1;
    };
    protoOf(Buffer).get_buffer_bmaafd_k$ = function () {
        return this.buffer_1;
    };
    protoOf(Buffer).exhausted_p1jt55_k$ = function () {
        return this.size_1.equals(new Long(0, 0));
    };
    protoOf(Buffer).require_28r0pl_k$ = function (byteCount) {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
            // Inline function 'kotlinx.io.Buffer.require.<anonymous>' call
            var message = 'byteCount: ' + byteCount.toString();
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        if (this.size_1.compareTo_9jj042_k$(byteCount) < 0) {
            throw new EOFException("Buffer doesn't contain required number of bytes (size: " + this.size_1.toString() + ', required: ' + byteCount.toString() + ')');
        }
    };
    protoOf(Buffer).request_mpoy7z_k$ = function (byteCount) {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
            // Inline function 'kotlinx.io.Buffer.request.<anonymous>' call
            var message = 'byteCount: ' + byteCount.toString() + ' < 0';
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        return this.size_1.compareTo_9jj042_k$(byteCount) >= 0;
    };
    protoOf(Buffer).readByte_ectjk2_k$ = function () {
        this.require_28r0pl_k$(new Long(1, 0));
        var segment = ensureNotNull(this.head_1);
        var pos = segment.get_pos_18iyad_k$();
        var limit = segment.get_limit_iuokuq_k$();
        var data = segment.get_data_wokkxf_k$();
        var tmp0 = pos;
        pos = tmp0 + 1 | 0;
        var b = data[tmp0];
        this.size_1 = this.size_1.minus_mfbszm_k$(new Long(1, 0));
        if (pos === limit) {
            this.head_1 = segment.pop_2dsh_k$();
            SegmentPool_getInstance().recycle_3mobff_k$(segment);
        } else {
            segment.set_pos_tfwdvz_k$(pos);
        }
        return b;
    };
    protoOf(Buffer).readShort_ilpyey_k$ = function () {
        this.require_28r0pl_k$(new Long(2, 0));
        var segment = ensureNotNull(this.head_1);
        var pos = segment.get_pos_18iyad_k$();
        var limit = segment.get_limit_iuokuq_k$();
        if ((limit - pos | 0) < 2) {
            // Inline function 'kotlinx.io.and' call
            var tmp = (this.readByte_ectjk2_k$() & 255) << 8;
            // Inline function 'kotlinx.io.and' call
            var s = tmp | this.readByte_ectjk2_k$() & 255;
            return toShort(s);
        }
        var data = segment.get_data_wokkxf_k$();
        // Inline function 'kotlinx.io.and' call
        var tmp1 = pos;
        pos = tmp1 + 1 | 0;
        var tmp_0 = (data[tmp1] & 255) << 8;
        // Inline function 'kotlinx.io.and' call
        var tmp0 = pos;
        pos = tmp0 + 1 | 0;
        var s_0 = tmp_0 | data[tmp0] & 255;
        this.size_1 = this.size_1.minus_mfbszm_k$(new Long(2, 0));
        if (pos === limit) {
            this.head_1 = segment.pop_2dsh_k$();
            SegmentPool_getInstance().recycle_3mobff_k$(segment);
        } else {
            segment.set_pos_tfwdvz_k$(pos);
        }
        return toShort(s_0);
    };
    protoOf(Buffer).readInt_hv8cxl_k$ = function () {
        this.require_28r0pl_k$(new Long(4, 0));
        var segment = ensureNotNull(this.head_1);
        var pos = segment.get_pos_18iyad_k$();
        var limit = segment.get_limit_iuokuq_k$();
        if (toLong(limit - pos | 0).compareTo_9jj042_k$(new Long(4, 0)) < 0) {
            // Inline function 'kotlinx.io.and' call
            var tmp = (this.readByte_ectjk2_k$() & 255) << 24;
            // Inline function 'kotlinx.io.and' call
            var tmp_0 = tmp | (this.readByte_ectjk2_k$() & 255) << 16;
            // Inline function 'kotlinx.io.and' call
            var tmp_1 = tmp_0 | (this.readByte_ectjk2_k$() & 255) << 8;
            // Inline function 'kotlinx.io.and' call
            return tmp_1 | this.readByte_ectjk2_k$() & 255;
        }
        var data = segment.get_data_wokkxf_k$();
        // Inline function 'kotlinx.io.and' call
        var tmp3 = pos;
        pos = tmp3 + 1 | 0;
        var tmp_2 = (data[tmp3] & 255) << 24;
        // Inline function 'kotlinx.io.and' call
        var tmp2 = pos;
        pos = tmp2 + 1 | 0;
        var tmp_3 = tmp_2 | (data[tmp2] & 255) << 16;
        // Inline function 'kotlinx.io.and' call
        var tmp1 = pos;
        pos = tmp1 + 1 | 0;
        var tmp_4 = tmp_3 | (data[tmp1] & 255) << 8;
        // Inline function 'kotlinx.io.and' call
        var tmp0 = pos;
        pos = tmp0 + 1 | 0;
        var i = tmp_4 | data[tmp0] & 255;
        this.size_1 = this.size_1.minus_mfbszm_k$(new Long(4, 0));
        if (pos === limit) {
            this.head_1 = segment.pop_2dsh_k$();
            SegmentPool_getInstance().recycle_3mobff_k$(segment);
        } else {
            segment.set_pos_tfwdvz_k$(pos);
        }
        return i;
    };
    protoOf(Buffer).readLong_ecnd8u_k$ = function () {
        this.require_28r0pl_k$(new Long(8, 0));
        var segment = ensureNotNull(this.head_1);
        var pos = segment.get_pos_18iyad_k$();
        var limit = segment.get_limit_iuokuq_k$();
        if (toLong(limit - pos | 0).compareTo_9jj042_k$(new Long(8, 0)) < 0) {
            // Inline function 'kotlinx.io.and' call
            var this_0 = this.readInt_hv8cxl_k$();
            var other = new Long(-1, 0);
            var tmp = toLong(this_0).and_4spn93_k$(other).shl_bg8if3_k$(32);
            // Inline function 'kotlinx.io.and' call
            var this_1 = this.readInt_hv8cxl_k$();
            var other_0 = new Long(-1, 0);
            var tmp$ret$1 = toLong(this_1).and_4spn93_k$(other_0);
            return tmp.or_v7fvkl_k$(tmp$ret$1);
        }
        var data = segment.get_data_wokkxf_k$();
        // Inline function 'kotlinx.io.and' call
        var tmp7 = pos;
        pos = tmp7 + 1 | 0;
        var this_2 = data[tmp7];
        var other_1 = new Long(255, 0);
        var tmp_0 = toLong(this_2).and_4spn93_k$(other_1).shl_bg8if3_k$(56);
        // Inline function 'kotlinx.io.and' call
        var tmp6 = pos;
        pos = tmp6 + 1 | 0;
        var this_3 = data[tmp6];
        var other_2 = new Long(255, 0);
        var tmp$ret$3 = toLong(this_3).and_4spn93_k$(other_2);
        var tmp_1 = tmp_0.or_v7fvkl_k$(tmp$ret$3.shl_bg8if3_k$(48));
        // Inline function 'kotlinx.io.and' call
        var tmp5 = pos;
        pos = tmp5 + 1 | 0;
        var this_4 = data[tmp5];
        var other_3 = new Long(255, 0);
        var tmp$ret$4 = toLong(this_4).and_4spn93_k$(other_3);
        var tmp_2 = tmp_1.or_v7fvkl_k$(tmp$ret$4.shl_bg8if3_k$(40));
        // Inline function 'kotlinx.io.and' call
        var tmp4 = pos;
        pos = tmp4 + 1 | 0;
        var this_5 = data[tmp4];
        var other_4 = new Long(255, 0);
        var tmp$ret$5 = toLong(this_5).and_4spn93_k$(other_4);
        var tmp_3 = tmp_2.or_v7fvkl_k$(tmp$ret$5.shl_bg8if3_k$(32));
        // Inline function 'kotlinx.io.and' call
        var tmp3 = pos;
        pos = tmp3 + 1 | 0;
        var this_6 = data[tmp3];
        var other_5 = new Long(255, 0);
        var tmp$ret$6 = toLong(this_6).and_4spn93_k$(other_5);
        var tmp_4 = tmp_3.or_v7fvkl_k$(tmp$ret$6.shl_bg8if3_k$(24));
        // Inline function 'kotlinx.io.and' call
        var tmp2 = pos;
        pos = tmp2 + 1 | 0;
        var this_7 = data[tmp2];
        var other_6 = new Long(255, 0);
        var tmp$ret$7 = toLong(this_7).and_4spn93_k$(other_6);
        var tmp_5 = tmp_4.or_v7fvkl_k$(tmp$ret$7.shl_bg8if3_k$(16));
        // Inline function 'kotlinx.io.and' call
        var tmp1 = pos;
        pos = tmp1 + 1 | 0;
        var this_8 = data[tmp1];
        var other_7 = new Long(255, 0);
        var tmp$ret$8 = toLong(this_8).and_4spn93_k$(other_7);
        var tmp_6 = tmp_5.or_v7fvkl_k$(tmp$ret$8.shl_bg8if3_k$(8));
        // Inline function 'kotlinx.io.and' call
        var tmp0 = pos;
        pos = tmp0 + 1 | 0;
        var this_9 = data[tmp0];
        var other_8 = new Long(255, 0);
        var tmp$ret$9 = toLong(this_9).and_4spn93_k$(other_8);
        var v = tmp_6.or_v7fvkl_k$(tmp$ret$9);
        this.size_1 = this.size_1.minus_mfbszm_k$(new Long(8, 0));
        if (pos === limit) {
            this.head_1 = segment.pop_2dsh_k$();
            SegmentPool_getInstance().recycle_3mobff_k$(segment);
        } else {
            segment.set_pos_tfwdvz_k$(pos);
        }
        return v;
    };
    protoOf(Buffer).hintEmit_6b2e5m_k$ = function () {
        return Unit_getInstance();
    };
    protoOf(Buffer).emit_jn20hp_k$ = function () {
        return Unit_getInstance();
    };
    protoOf(Buffer).flush_shahbo_k$ = function () {
        return Unit_getInstance();
    };
    protoOf(Buffer).copyTo_f80oje_k$ = function (out, startIndex, endIndex) {
        checkBounds(this.size_1, startIndex, endIndex);
        if (startIndex.equals(endIndex))
            return Unit_getInstance();
        var currentOffset = startIndex;
        var remainingByteCount = endIndex.minus_mfbszm_k$(startIndex);
        out.size_1 = out.size_1.plus_r93sks_k$(remainingByteCount);
        var s = this.head_1;
        while (currentOffset.compareTo_9jj042_k$(toLong(ensureNotNull(s).get_limit_iuokuq_k$() - s.get_pos_18iyad_k$() | 0)) >= 0) {
            currentOffset = currentOffset.minus_mfbszm_k$(toLong(s.get_limit_iuokuq_k$() - s.get_pos_18iyad_k$() | 0));
            s = s.get_next_wor1vg_k$();
        }
        while (remainingByteCount.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
            var copy = ensureNotNull(s).sharedCopy_timhza_k$();
            copy.set_pos_tfwdvz_k$(copy.get_pos_18iyad_k$() + currentOffset.toInt_1tsl84_k$() | 0);
            // Inline function 'kotlin.comparisons.minOf' call
            var a = copy.get_pos_18iyad_k$() + remainingByteCount.toInt_1tsl84_k$() | 0;
            var b = copy.get_limit_iuokuq_k$();
            var tmp$ret$0 = Math.min(a, b);
            copy.set_limit_mo5fx2_k$(tmp$ret$0);
            if (out.head_1 == null) {
                copy.set_prev_xbvcpn_k$(copy);
                copy.set_next_hfcco5_k$(copy.get_prev_wosl18_k$());
                out.head_1 = copy.get_next_wor1vg_k$();
            } else {
                ensureNotNull(ensureNotNull(out.head_1).get_prev_wosl18_k$()).push_3ggrb0_k$(copy);
            }
            remainingByteCount = remainingByteCount.minus_mfbszm_k$(toLong(copy.get_limit_iuokuq_k$() - copy.get_pos_18iyad_k$() | 0));
            currentOffset = new Long(0, 0);
            s = s.get_next_wor1vg_k$();
        }
    };
    protoOf(Buffer).copyTo$default_txus2s_k$ = function (out, startIndex, endIndex, $super) {
        startIndex = startIndex === VOID ? new Long(0, 0) : startIndex;
        endIndex = endIndex === VOID ? this.size_1 : endIndex;
        var tmp;
        if ($super === VOID) {
            this.copyTo_f80oje_k$(out, startIndex, endIndex);
            tmp = Unit_getInstance();
        } else {
            tmp = $super.copyTo_f80oje_k$.call(this, out, startIndex, endIndex);
        }
        return tmp;
    };
    protoOf(Buffer).completeSegmentByteCount_8y8ucz_k$ = function () {
        var result = this.size_1;
        if (result.equals(new Long(0, 0)))
            return new Long(0, 0);
        var tail = ensureNotNull(ensureNotNull(this.head_1).get_prev_wosl18_k$());
        if (tail.get_limit_iuokuq_k$() < Companion_getInstance().get_SIZE_wo97pm_k$() ? tail.get_owner_iwkx3e_k$() : false) {
            result = result.minus_mfbszm_k$(toLong(tail.get_limit_iuokuq_k$() - tail.get_pos_18iyad_k$() | 0));
        }
        return result;
    };
    protoOf(Buffer).get_ugtq3c_k$ = function (position) {
        if (position.compareTo_9jj042_k$(new Long(0, 0)) < 0 ? true : position.compareTo_9jj042_k$(this.size_1) >= 0) {
            throw IndexOutOfBoundsException_init_$Create$('position (' + position.toString() + ') is not within the range [0..size(' + this.size_1.toString() + '))');
        }
        // Inline function 'kotlinx.io.seek' call
        var tmp0_elvis_lhs = this.head_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var offset = new Long(-1, -1);
            return ensureNotNull(null).get_data_wokkxf_k$()[numberToLong(null.get_pos_18iyad_k$()).plus_r93sks_k$(position).minus_mfbszm_k$(offset).toInt_1tsl84_k$()];
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var s = tmp;
        if (this.size_1.minus_mfbszm_k$(position).compareTo_9jj042_k$(position) < 0) {
            var offset_0 = this.size_1;
            while (offset_0.compareTo_9jj042_k$(position) > 0) {
                s = ensureNotNull(s.get_prev_wosl18_k$());
                offset_0 = offset_0.minus_mfbszm_k$(toLong(s.get_limit_iuokuq_k$() - s.get_pos_18iyad_k$() | 0));
            }
            var s_0 = s;
            var offset_1 = offset_0;
            return ensureNotNull(s_0).get_data_wokkxf_k$()[numberToLong(s_0.get_pos_18iyad_k$()).plus_r93sks_k$(position).minus_mfbszm_k$(offset_1).toInt_1tsl84_k$()];
        } else {
            var offset_2 = new Long(0, 0);
            $l$loop: while (true) {
                // Inline function 'kotlin.Long.plus' call
                var this_0 = offset_2;
                var other = s.get_limit_iuokuq_k$() - s.get_pos_18iyad_k$() | 0;
                var nextOffset = this_0.plus_r93sks_k$(toLong(other));
                if (nextOffset.compareTo_9jj042_k$(position) > 0)
                    break $l$loop;
                s = ensureNotNull(s.get_next_wor1vg_k$());
                offset_2 = nextOffset;
            }
            var s_1 = s;
            var offset_3 = offset_2;
            return ensureNotNull(s_1).get_data_wokkxf_k$()[numberToLong(s_1.get_pos_18iyad_k$()).plus_r93sks_k$(position).minus_mfbszm_k$(offset_3).toInt_1tsl84_k$()];
        }
    };
    protoOf(Buffer).clear_j9egeb_k$ = function () {
        return this.skip_bgd4sf_k$(this.size_1);
    };
    protoOf(Buffer).skip_bgd4sf_k$ = function (byteCount) {
        // Inline function 'kotlinx.io.checkByteCount' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
            // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
            var message = 'byteCount (' + byteCount.toString() + ') < 0';
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var remainingByteCount = byteCount;
        while (remainingByteCount.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
            var tmp0_elvis_lhs = this.head_1;
            var tmp;
            if (tmp0_elvis_lhs == null) {
                throw new EOFException('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
            } else {
                tmp = tmp0_elvis_lhs;
            }
            var head = tmp;
            // Inline function 'kotlinx.io.minOf' call
            var a = remainingByteCount;
            var b = head.get_limit_iuokuq_k$() - head.get_pos_18iyad_k$() | 0;
            // Inline function 'kotlin.comparisons.minOf' call
            var b_0 = toLong(b);
            var toSkip = (a.compareTo_9jj042_k$(b_0) <= 0 ? a : b_0).toInt_1tsl84_k$();
            this.size_1 = this.size_1.minus_mfbszm_k$(toLong(toSkip));
            remainingByteCount = remainingByteCount.minus_mfbszm_k$(toLong(toSkip));
            head.set_pos_tfwdvz_k$(head.get_pos_18iyad_k$() + toSkip | 0);
            if (head.get_pos_18iyad_k$() === head.get_limit_iuokuq_k$()) {
                this.head_1 = head.pop_2dsh_k$();
                SegmentPool_getInstance().recycle_3mobff_k$(head);
            }
        }
    };
    protoOf(Buffer).readAtMostTo_kub29z_k$ = function (sink, startIndex, endIndex) {
        // Inline function 'kotlinx.io.checkBounds' call
        var size = sink.length;
        checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
        var tmp0_elvis_lhs = this.head_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
            return -1;
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var s = tmp;
        // Inline function 'kotlin.comparisons.minOf' call
        var a = endIndex - startIndex | 0;
        var b = s.get_limit_iuokuq_k$() - s.get_pos_18iyad_k$() | 0;
        var toCopy = Math.min(a, b);
        // Inline function 'kotlin.collections.copyInto' call
        var this_0 = s.get_data_wokkxf_k$();
        var startIndex_0 = s.get_pos_18iyad_k$();
        var endIndex_0 = s.get_pos_18iyad_k$() + toCopy | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = this_0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, sink, startIndex, startIndex_0, endIndex_0);
        s.set_pos_tfwdvz_k$(s.get_pos_18iyad_k$() + toCopy | 0);
        this.size_1 = this.size_1.minus_mfbszm_k$(toLong(toCopy));
        if (s.get_pos_18iyad_k$() === s.get_limit_iuokuq_k$()) {
            this.head_1 = s.pop_2dsh_k$();
            SegmentPool_getInstance().recycle_3mobff_k$(s);
        }
        return toCopy;
    };
    protoOf(Buffer).readAtMostTo_nyls31_k$ = function (sink, byteCount) {
        // Inline function 'kotlinx.io.checkByteCount' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
            // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
            var message = 'byteCount (' + byteCount.toString() + ') < 0';
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        if (this.size_1.equals(new Long(0, 0)))
            return new Long(-1, -1);
        var bytesWritten = byteCount.compareTo_9jj042_k$(this.size_1) > 0 ? this.size_1 : byteCount;
        sink.write_yvqjfp_k$(this, bytesWritten);
        return bytesWritten;
    };
    protoOf(Buffer).readTo_rtq83_k$ = function (sink, byteCount) {
        // Inline function 'kotlinx.io.checkByteCount' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
            // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
            var message = 'byteCount (' + byteCount.toString() + ') < 0';
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        if (this.size_1.compareTo_9jj042_k$(byteCount) < 0) {
            sink.write_yvqjfp_k$(this, this.size_1);
            throw new EOFException('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.size_1.toString() + ' bytes were written.');
        }
        sink.write_yvqjfp_k$(this, byteCount);
    };
    protoOf(Buffer).transferTo_lu4ka2_k$ = function (sink) {
        var byteCount = this.size_1;
        if (byteCount.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
            sink.write_yvqjfp_k$(this, byteCount);
        }
        return byteCount;
    };
    protoOf(Buffer).peek_21nx7_k$ = function () {
        return buffered(new PeekSource(this));
    };
    protoOf(Buffer).writableSegment_i90lmt_k$ = function (minimumCapacity) {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(minimumCapacity >= 1 ? minimumCapacity <= Companion_getInstance().get_SIZE_wo97pm_k$() : false)) {
            // Inline function 'kotlinx.io.Buffer.writableSegment.<anonymous>' call
            var message = 'unexpected capacity';
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        if (this.head_1 == null) {
            var result = SegmentPool_getInstance().take_2451j_k$();
            this.head_1 = result;
            result.set_prev_xbvcpn_k$(result);
            result.set_next_hfcco5_k$(result);
            return result;
        }
        var tail = ensureNotNull(this.head_1).get_prev_wosl18_k$();
        if ((ensureNotNull(tail).get_limit_iuokuq_k$() + minimumCapacity | 0) > Companion_getInstance().get_SIZE_wo97pm_k$() ? true : !tail.get_owner_iwkx3e_k$()) {
            tail = tail.push_3ggrb0_k$(SegmentPool_getInstance().take_2451j_k$());
        }
        return tail;
    };
    protoOf(Buffer).write_ti570x_k$ = function (source, startIndex, endIndex) {
        // Inline function 'kotlinx.io.checkBounds' call
        var size = source.length;
        checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
        var currentOffset = startIndex;
        while (currentOffset < endIndex) {
            var tail = this.writableSegment_i90lmt_k$(1);
            // Inline function 'kotlin.comparisons.minOf' call
            var a = endIndex - currentOffset | 0;
            var b = Companion_getInstance().get_SIZE_wo97pm_k$() - tail.get_limit_iuokuq_k$() | 0;
            var toCopy = Math.min(a, b);
            // Inline function 'kotlin.collections.copyInto' call
            var destination = tail.get_data_wokkxf_k$();
            var destinationOffset = tail.get_limit_iuokuq_k$();
            var startIndex_0 = currentOffset;
            var endIndex_0 = currentOffset + toCopy | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp = source;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp, destination, destinationOffset, startIndex_0, endIndex_0);
            currentOffset = currentOffset + toCopy | 0;
            tail.set_limit_mo5fx2_k$(tail.get_limit_iuokuq_k$() + toCopy | 0);
        }
        var tmp_0 = this;
        // Inline function 'kotlin.Long.plus' call
        var this_0 = this.size_1;
        var other = endIndex - startIndex | 0;
        tmp_0.size_1 = this_0.plus_r93sks_k$(toLong(other));
    };
    protoOf(Buffer).write_nimze1_k$ = function (source, byteCount) {
        // Inline function 'kotlinx.io.checkByteCount' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
            // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
            var message = 'byteCount (' + byteCount.toString() + ') < 0';
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var remainingByteCount = byteCount;
        while (remainingByteCount.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
            var read = source.readAtMostTo_nyls31_k$(this, remainingByteCount);
            if (read.equals(new Long(-1, -1))) {
                throw new EOFException('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + byteCount.minus_mfbszm_k$(remainingByteCount).toString() + ' were read.'));
            }
            remainingByteCount = remainingByteCount.minus_mfbszm_k$(read);
        }
    };
    protoOf(Buffer).write_yvqjfp_k$ = function (source, byteCount) {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!(source === this)) {
            // Inline function 'kotlinx.io.Buffer.write.<anonymous>' call
            var message = 'source == this';
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        checkOffsetAndCount(source.size_1, new Long(0, 0), byteCount);
        var remainingByteCount = byteCount;
        while (remainingByteCount.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
            if (remainingByteCount.compareTo_9jj042_k$(toLong(ensureNotNull(source.head_1).get_limit_iuokuq_k$() - ensureNotNull(source.head_1).get_pos_18iyad_k$() | 0)) < 0) {
                var tail = !(this.head_1 == null) ? ensureNotNull(this.head_1).get_prev_wosl18_k$() : null;
                var tmp;
                if (!(tail == null) ? tail.get_owner_iwkx3e_k$() : false) {
                    // Inline function 'kotlin.Long.minus' call
                    // Inline function 'kotlin.Long.plus' call
                    var this_0 = remainingByteCount;
                    var other = tail.get_limit_iuokuq_k$();
                    var this_1 = this_0.plus_r93sks_k$(toLong(other));
                    var other_0 = tail.get_shared_jgtlda_k$() ? 0 : tail.get_pos_18iyad_k$();
                    tmp = this_1.minus_mfbszm_k$(toLong(other_0)).compareTo_9jj042_k$(toLong(Companion_getInstance().get_SIZE_wo97pm_k$())) <= 0;
                } else {
                    tmp = false;
                }
                if (tmp) {
                    ensureNotNull(source.head_1).writeTo_ozg1f0_k$(tail, remainingByteCount.toInt_1tsl84_k$());
                    source.size_1 = source.size_1.minus_mfbszm_k$(remainingByteCount);
                    this.size_1 = this.size_1.plus_r93sks_k$(remainingByteCount);
                    return Unit_getInstance();
                } else {
                    source.head_1 = ensureNotNull(source.head_1).split_cz4av2_k$(remainingByteCount.toInt_1tsl84_k$());
                }
            }
            var segmentToMove = source.head_1;
            var movedByteCount = toLong(ensureNotNull(segmentToMove).get_limit_iuokuq_k$() - segmentToMove.get_pos_18iyad_k$() | 0);
            source.head_1 = segmentToMove.pop_2dsh_k$();
            if (this.head_1 == null) {
                this.head_1 = segmentToMove;
                segmentToMove.set_prev_xbvcpn_k$(segmentToMove);
                segmentToMove.set_next_hfcco5_k$(segmentToMove.get_prev_wosl18_k$());
            } else {
                var tail_0 = ensureNotNull(this.head_1).get_prev_wosl18_k$();
                tail_0 = ensureNotNull(tail_0).push_3ggrb0_k$(segmentToMove);
                tail_0.compact_dawvql_k$();
            }
            source.size_1 = source.size_1.minus_mfbszm_k$(movedByteCount);
            this.size_1 = this.size_1.plus_r93sks_k$(movedByteCount);
            remainingByteCount = remainingByteCount.minus_mfbszm_k$(movedByteCount);
        }
    };
    protoOf(Buffer).transferFrom_v29myr_k$ = function (source) {
        var totalBytesRead = new Long(0, 0);
        $l$loop: while (true) {
            var readCount = source.readAtMostTo_nyls31_k$(this, toLong(Companion_getInstance().get_SIZE_wo97pm_k$()));
            if (readCount.equals(new Long(-1, -1)))
                break $l$loop;
            totalBytesRead = totalBytesRead.plus_r93sks_k$(readCount);
        }
        return totalBytesRead;
    };
    protoOf(Buffer).writeByte_9ih3z3_k$ = function (byte) {
        var tail = this.writableSegment_i90lmt_k$(1);
        var tmp = tail.get_data_wokkxf_k$();
        var tmp1 = tail.get_limit_iuokuq_k$();
        tail.set_limit_mo5fx2_k$(tmp1 + 1 | 0);
        tmp[tmp1] = byte;
        this.size_1 = this.size_1.plus_r93sks_k$(new Long(1, 0));
    };
    protoOf(Buffer).writeShort_vn2jsb_k$ = function (short) {
        var tail = this.writableSegment_i90lmt_k$(2);
        var data = tail.get_data_wokkxf_k$();
        var limit = tail.get_limit_iuokuq_k$();
        var tmp0 = limit;
        limit = tmp0 + 1 | 0;
        data[tmp0] = toByte((short >>> 8 | 0) & 255);
        var tmp1 = limit;
        limit = tmp1 + 1 | 0;
        data[tmp1] = toByte(short & 255);
        tail.set_limit_mo5fx2_k$(limit);
        this.size_1 = this.size_1.plus_r93sks_k$(new Long(2, 0));
    };
    protoOf(Buffer).writeInt_i8xgjs_k$ = function (int) {
        var tail = this.writableSegment_i90lmt_k$(4);
        var data = tail.get_data_wokkxf_k$();
        var limit = tail.get_limit_iuokuq_k$();
        var tmp0 = limit;
        limit = tmp0 + 1 | 0;
        data[tmp0] = toByte((int >>> 24 | 0) & 255);
        var tmp1 = limit;
        limit = tmp1 + 1 | 0;
        data[tmp1] = toByte((int >>> 16 | 0) & 255);
        var tmp2 = limit;
        limit = tmp2 + 1 | 0;
        data[tmp2] = toByte((int >>> 8 | 0) & 255);
        var tmp3 = limit;
        limit = tmp3 + 1 | 0;
        data[tmp3] = toByte(int & 255);
        tail.set_limit_mo5fx2_k$(limit);
        this.size_1 = this.size_1.plus_r93sks_k$(new Long(4, 0));
    };
    protoOf(Buffer).writeLong_2rx6yl_k$ = function (long) {
        var tail = this.writableSegment_i90lmt_k$(8);
        var data = tail.get_data_wokkxf_k$();
        var limit = tail.get_limit_iuokuq_k$();
        var tmp0 = limit;
        limit = tmp0 + 1 | 0;
        data[tmp0] = long.ushr_z7nmq8_k$(56).and_4spn93_k$(new Long(255, 0)).toByte_edm0nx_k$();
        var tmp1 = limit;
        limit = tmp1 + 1 | 0;
        data[tmp1] = long.ushr_z7nmq8_k$(48).and_4spn93_k$(new Long(255, 0)).toByte_edm0nx_k$();
        var tmp2 = limit;
        limit = tmp2 + 1 | 0;
        data[tmp2] = long.ushr_z7nmq8_k$(40).and_4spn93_k$(new Long(255, 0)).toByte_edm0nx_k$();
        var tmp3 = limit;
        limit = tmp3 + 1 | 0;
        data[tmp3] = long.ushr_z7nmq8_k$(32).and_4spn93_k$(new Long(255, 0)).toByte_edm0nx_k$();
        var tmp4 = limit;
        limit = tmp4 + 1 | 0;
        data[tmp4] = long.ushr_z7nmq8_k$(24).and_4spn93_k$(new Long(255, 0)).toByte_edm0nx_k$();
        var tmp5 = limit;
        limit = tmp5 + 1 | 0;
        data[tmp5] = long.ushr_z7nmq8_k$(16).and_4spn93_k$(new Long(255, 0)).toByte_edm0nx_k$();
        var tmp6 = limit;
        limit = tmp6 + 1 | 0;
        data[tmp6] = long.ushr_z7nmq8_k$(8).and_4spn93_k$(new Long(255, 0)).toByte_edm0nx_k$();
        var tmp7 = limit;
        limit = tmp7 + 1 | 0;
        data[tmp7] = long.and_4spn93_k$(new Long(255, 0)).toByte_edm0nx_k$();
        tail.set_limit_mo5fx2_k$(limit);
        this.size_1 = this.size_1.plus_r93sks_k$(new Long(8, 0));
    };
    protoOf(Buffer).copy_1tks5_k$ = function () {
        var result = new Buffer();
        if (this.size_1.equals(new Long(0, 0)))
            return result;
        var head = ensureNotNull(this.head_1);
        var headCopy = head.sharedCopy_timhza_k$();
        result.head_1 = headCopy;
        headCopy.set_prev_xbvcpn_k$(result.head_1);
        headCopy.set_next_hfcco5_k$(headCopy.get_prev_wosl18_k$());
        var s = head.get_next_wor1vg_k$();
        while (!(s === head)) {
            ensureNotNull(headCopy.get_prev_wosl18_k$()).push_3ggrb0_k$(ensureNotNull(s).sharedCopy_timhza_k$());
            s = s.get_next_wor1vg_k$();
        }
        result.size_1 = this.size_1;
        return result;
    };
    protoOf(Buffer).close_yn9xrc_k$ = function () {
        return Unit_getInstance();
    };
    protoOf(Buffer).toString = function () {
        if (this.size_1.equals(new Long(0, 0)))
            return 'Buffer(size=0)';
        var maxPrintableBytes = 64;
        // Inline function 'kotlinx.io.minOf' call
        var b = this.size_1;
        // Inline function 'kotlin.comparisons.minOf' call
        var a = toLong(maxPrintableBytes);
        var len = (a.compareTo_9jj042_k$(b) <= 0 ? a : b).toInt_1tsl84_k$();
        var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.size_1.compareTo_9jj042_k$(toLong(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
        var curr = ensureNotNull(this.head_1);
        var bytesWritten = 0;
        var pos = curr.get_pos_18iyad_k$();
        while (bytesWritten < len) {
            if (pos === curr.get_limit_iuokuq_k$()) {
                curr = ensureNotNull(curr.get_next_wor1vg_k$());
                pos = curr.get_pos_18iyad_k$();
            }
            var tmp = curr.get_data_wokkxf_k$();
            var tmp0 = pos;
            pos = tmp0 + 1 | 0;
            var b_0 = tmp[tmp0];
            bytesWritten = bytesWritten + 1 | 0;
            builder.append_am5a4z_k$(get_HEX_DIGIT_CHARS()[b_0 >> 4 & 15]).append_am5a4z_k$(get_HEX_DIGIT_CHARS()[b_0 & 15]);
        }
        if (this.size_1.compareTo_9jj042_k$(toLong(maxPrintableBytes)) > 0) {
            builder.append_am5a4z_k$(_Char___init__impl__6a9atx(8230));
        }
        return 'Buffer(size=' + this.size_1.toString() + ' hex=' + builder + ')';
    };

    function seek(_this__u8e3s4, fromIndex, lambda) {
        var tmp0_elvis_lhs = _this__u8e3s4.head_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
            return lambda(null, new Long(-1, -1));
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var s = tmp;
        if (_this__u8e3s4.size_1.minus_mfbszm_k$(fromIndex).compareTo_9jj042_k$(fromIndex) < 0) {
            var offset = _this__u8e3s4.size_1;
            while (offset.compareTo_9jj042_k$(fromIndex) > 0) {
                s = ensureNotNull(s.get_prev_wosl18_k$());
                offset = offset.minus_mfbszm_k$(toLong(s.get_limit_iuokuq_k$() - s.get_pos_18iyad_k$() | 0));
            }
            return lambda(s, offset);
        } else {
            var offset_0 = new Long(0, 0);
            $l$loop: while (true) {
                // Inline function 'kotlin.Long.plus' call
                var this_0 = offset_0;
                var other = s.get_limit_iuokuq_k$() - s.get_pos_18iyad_k$() | 0;
                var nextOffset = this_0.plus_r93sks_k$(toLong(other));
                if (nextOffset.compareTo_9jj042_k$(fromIndex) > 0)
                    break $l$loop;
                s = ensureNotNull(s.get_next_wor1vg_k$());
                offset_0 = nextOffset;
            }
            return lambda(s, offset_0);
        }
    }

    function buffered(_this__u8e3s4) {
        return new RealSource(_this__u8e3s4);
    }

    function _get_upstream__8b4500($this) {
        return $this.upstream_1;
    }

    function _get_buffer__tgqkad($this) {
        return $this.buffer_1;
    }

    function _set_expectedSegment__ufl0ui($this, _set____db54di) {
        $this.expectedSegment_1 = _set____db54di;
    }

    function _get_expectedSegment__uhstm2($this) {
        return $this.expectedSegment_1;
    }

    function _set_expectedPos__7eepj($this, _set____db54di) {
        $this.expectedPos_1 = _set____db54di;
    }

    function _get_expectedPos__u2zrmd($this) {
        return $this.expectedPos_1;
    }

    function _set_closed__kdb0et($this, _set____db54di) {
        $this.closed_1 = _set____db54di;
    }

    function _get_closed__iwkfs1($this) {
        return $this.closed_1;
    }

    function _set_pos__4wcab5($this, _set____db54di) {
        $this.pos_1 = _set____db54di;
    }

    function _get_pos__e6evgd($this) {
        return $this.pos_1;
    }

    function PeekSource(upstream) {
        this.upstream_1 = upstream;
        this.buffer_1 = this.upstream_1.get_buffer_bmaafd_k$();
        this.expectedSegment_1 = this.buffer_1.get_head_won7e1_k$();
        var tmp = this;
        var tmp0_safe_receiver = this.buffer_1.get_head_won7e1_k$();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_pos_18iyad_k$();
        tmp.expectedPos_1 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
        this.closed_1 = false;
        this.pos_1 = new Long(0, 0);
    }

    protoOf(PeekSource).readAtMostTo_nyls31_k$ = function (sink, byteCount) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this.closed_1) {
            // Inline function 'kotlinx.io.PeekSource.readAtMostTo.<anonymous>' call
            var message = 'Source is closed.';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.io.checkByteCount' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
            // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
            var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
            throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(this.expectedSegment_1 == null ? true : this.expectedSegment_1 === this.buffer_1.get_head_won7e1_k$() ? this.expectedPos_1 === ensureNotNull(this.buffer_1.get_head_won7e1_k$()).get_pos_18iyad_k$() : false)) {
            // Inline function 'kotlinx.io.PeekSource.readAtMostTo.<anonymous>' call
            var message_1 = 'Peek source is invalid because upstream source was used';
            throw IllegalStateException_init_$Create$(toString(message_1));
        }
        if (byteCount.equals(new Long(0, 0)))
            return new Long(0, 0);
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$3 = this.pos_1.plus_r93sks_k$(toLong(1));
        if (!this.upstream_1.request_mpoy7z_k$(tmp$ret$3))
            return new Long(-1, -1);
        if (this.expectedSegment_1 == null ? !(this.buffer_1.get_head_won7e1_k$() == null) : false) {
            this.expectedSegment_1 = this.buffer_1.get_head_won7e1_k$();
            this.expectedPos_1 = ensureNotNull(this.buffer_1.get_head_won7e1_k$()).get_pos_18iyad_k$();
        }
        // Inline function 'kotlin.comparisons.minOf' call
        var b = this.buffer_1.get_size_woubt6_k$().minus_mfbszm_k$(this.pos_1);
        var toCopy = byteCount.compareTo_9jj042_k$(b) <= 0 ? byteCount : b;
        this.buffer_1.copyTo_f80oje_k$(sink, this.pos_1, this.pos_1.plus_r93sks_k$(toCopy));
        this.pos_1 = this.pos_1.plus_r93sks_k$(toCopy);
        return toCopy;
    };
    protoOf(PeekSource).close_yn9xrc_k$ = function () {
        this.closed_1 = true;
    };

    function RawSource() {
    }

    function _get_bufferField__cx5nm1($this) {
        return $this.bufferField_1;
    }

    function checkNotClosed($this) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!$this.closed_1) {
            // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
            var message = 'Source is closed.';
            throw IllegalStateException_init_$Create$(toString(message));
        }
    }

    function RealSource(source) {
        this.source_1 = source;
        this.closed_1 = false;
        this.bufferField_1 = new Buffer();
    }

    protoOf(RealSource).get_source_jl0x7o_k$ = function () {
        return this.source_1;
    };
    protoOf(RealSource).set_closed_z8zuoc_k$ = function (_set____db54di) {
        this.closed_1 = _set____db54di;
    };
    protoOf(RealSource).get_closed_byjrzp_k$ = function () {
        return this.closed_1;
    };
    protoOf(RealSource).get_buffer_bmaafd_k$ = function () {
        return this.bufferField_1;
    };
    protoOf(RealSource).readAtMostTo_nyls31_k$ = function (sink, byteCount) {
        // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this.closed_1) {
            // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
            var message = 'Source is closed.';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
            // Inline function 'kotlinx.io.RealSource.readAtMostTo.<anonymous>' call
            var message_0 = 'byteCount: ' + byteCount.toString();
            throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        if (this.bufferField_1.get_size_woubt6_k$().equals(new Long(0, 0))) {
            var read = this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, toLong(Companion_getInstance().get_SIZE_wo97pm_k$()));
            if (read.equals(new Long(-1, -1)))
                return new Long(-1, -1);
        }
        // Inline function 'kotlin.comparisons.minOf' call
        var b = this.bufferField_1.get_size_woubt6_k$();
        var toRead = byteCount.compareTo_9jj042_k$(b) <= 0 ? byteCount : b;
        return this.bufferField_1.readAtMostTo_nyls31_k$(sink, toRead);
    };
    protoOf(RealSource).exhausted_p1jt55_k$ = function () {
        // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this.closed_1) {
            // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
            var message = 'Source is closed.';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        return this.bufferField_1.exhausted_p1jt55_k$() ? this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, toLong(Companion_getInstance().get_SIZE_wo97pm_k$())).equals(new Long(-1, -1)) : false;
    };
    protoOf(RealSource).require_28r0pl_k$ = function (byteCount) {
        if (!this.request_mpoy7z_k$(byteCount))
            throw new EOFException("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
    };
    protoOf(RealSource).request_mpoy7z_k$ = function (byteCount) {
        // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this.closed_1) {
            // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
            var message = 'Source is closed.';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
            // Inline function 'kotlinx.io.RealSource.request.<anonymous>' call
            var message_0 = 'byteCount: ' + byteCount.toString();
            throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        while (this.bufferField_1.get_size_woubt6_k$().compareTo_9jj042_k$(byteCount) < 0) {
            if (this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, toLong(Companion_getInstance().get_SIZE_wo97pm_k$())).equals(new Long(-1, -1)))
                return false;
        }
        return true;
    };
    protoOf(RealSource).readByte_ectjk2_k$ = function () {
        this.require_28r0pl_k$(new Long(1, 0));
        return this.bufferField_1.readByte_ectjk2_k$();
    };
    protoOf(RealSource).readAtMostTo_kub29z_k$ = function (sink, startIndex, endIndex) {
        // Inline function 'kotlinx.io.checkBounds' call
        var size = sink.length;
        checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
        if (this.bufferField_1.get_size_woubt6_k$().equals(new Long(0, 0))) {
            var read = this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, toLong(Companion_getInstance().get_SIZE_wo97pm_k$()));
            if (read.equals(new Long(-1, -1)))
                return -1;
        }
        // Inline function 'kotlinx.io.minOf' call
        var a = endIndex - startIndex | 0;
        var b = this.bufferField_1.get_size_woubt6_k$();
        // Inline function 'kotlin.comparisons.minOf' call
        var a_0 = toLong(a);
        var toRead = (a_0.compareTo_9jj042_k$(b) <= 0 ? a_0 : b).toInt_1tsl84_k$();
        return this.bufferField_1.readAtMostTo_kub29z_k$(sink, startIndex, startIndex + toRead | 0);
    };
    protoOf(RealSource).readTo_rtq83_k$ = function (sink, byteCount) {
        try {
            this.require_28r0pl_k$(byteCount);
        } catch ($p) {
            if ($p instanceof EOFException) {
                var e = $p;
                sink.write_yvqjfp_k$(this.bufferField_1, this.bufferField_1.get_size_woubt6_k$());
                throw e;
            } else {
                throw $p;
            }
        }
        this.bufferField_1.readTo_rtq83_k$(sink, byteCount);
    };
    protoOf(RealSource).transferTo_lu4ka2_k$ = function (sink) {
        var totalBytesWritten = new Long(0, 0);
        while (!this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, toLong(Companion_getInstance().get_SIZE_wo97pm_k$())).equals(new Long(-1, -1))) {
            var emitByteCount = this.bufferField_1.completeSegmentByteCount_8y8ucz_k$();
            if (emitByteCount.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
                totalBytesWritten = totalBytesWritten.plus_r93sks_k$(emitByteCount);
                sink.write_yvqjfp_k$(this.bufferField_1, emitByteCount);
            }
        }
        if (this.bufferField_1.get_size_woubt6_k$().compareTo_9jj042_k$(new Long(0, 0)) > 0) {
            totalBytesWritten = totalBytesWritten.plus_r93sks_k$(this.bufferField_1.get_size_woubt6_k$());
            sink.write_yvqjfp_k$(this.bufferField_1, this.bufferField_1.get_size_woubt6_k$());
        }
        return totalBytesWritten;
    };
    protoOf(RealSource).readShort_ilpyey_k$ = function () {
        this.require_28r0pl_k$(new Long(2, 0));
        return this.bufferField_1.readShort_ilpyey_k$();
    };
    protoOf(RealSource).readInt_hv8cxl_k$ = function () {
        this.require_28r0pl_k$(new Long(4, 0));
        return this.bufferField_1.readInt_hv8cxl_k$();
    };
    protoOf(RealSource).readLong_ecnd8u_k$ = function () {
        this.require_28r0pl_k$(new Long(8, 0));
        return this.bufferField_1.readLong_ecnd8u_k$();
    };
    protoOf(RealSource).skip_bgd4sf_k$ = function (byteCount) {
        // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this.closed_1) {
            // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
            var message = 'Source is closed.';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
            // Inline function 'kotlinx.io.RealSource.skip.<anonymous>' call
            var message_0 = 'byteCount: ' + byteCount.toString();
            throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var remainingByteCount = byteCount;
        while (remainingByteCount.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
            if (this.bufferField_1.get_size_woubt6_k$().equals(new Long(0, 0)) ? this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, toLong(Companion_getInstance().get_SIZE_wo97pm_k$())).equals(new Long(-1, -1)) : false) {
                throw new EOFException('Source exhausted before skipping ' + byteCount.toString() + ' bytes ' + ('(only ' + remainingByteCount.minus_mfbszm_k$(byteCount).toString() + ' bytes were skipped).'));
            }
            // Inline function 'kotlin.comparisons.minOf' call
            var a = remainingByteCount;
            var b = this.bufferField_1.get_size_woubt6_k$();
            var toSkip = a.compareTo_9jj042_k$(b) <= 0 ? a : b;
            this.bufferField_1.skip_bgd4sf_k$(toSkip);
            remainingByteCount = remainingByteCount.minus_mfbszm_k$(toSkip);
        }
    };
    protoOf(RealSource).peek_21nx7_k$ = function () {
        // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this.closed_1) {
            // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
            var message = 'Source is closed.';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        return buffered(new PeekSource(this));
    };
    protoOf(RealSource).close_yn9xrc_k$ = function () {
        if (this.closed_1)
            return Unit_getInstance();
        this.closed_1 = true;
        this.source_1.close_yn9xrc_k$();
        this.bufferField_1.clear_j9egeb_k$();
    };
    protoOf(RealSource).toString = function () {
        return 'buffered(' + this.source_1 + ')';
    };

    function Segment_init_$Init$($this) {
        Segment.call($this);
        $this.data_1 = new Int8Array(8192);
        $this.owner_1 = true;
        $this.shared_1 = false;
        return $this;
    }

    function Segment_init_$Create$() {
        return Segment_init_$Init$(objectCreate(protoOf(Segment)));
    }

    function Segment_init_$Init$_0(data, pos, limit, shared, owner, $this) {
        Segment.call($this);
        $this.data_1 = data;
        $this.pos_1 = pos;
        $this.limit_1 = limit;
        $this.shared_1 = shared;
        $this.owner_1 = owner;
        return $this;
    }

    function Segment_init_$Create$_0(data, pos, limit, shared, owner) {
        return Segment_init_$Init$_0(data, pos, limit, shared, owner, objectCreate(protoOf(Segment)));
    }

    function Companion() {
        Companion_instance = this;
        this.SIZE_1 = 8192;
        this.SHARE_MINIMUM_1 = 1024;
    }

    protoOf(Companion).get_SIZE_wo97pm_k$ = function () {
        return this.SIZE_1;
    };
    protoOf(Companion).get_SHARE_MINIMUM_wfrtqd_k$ = function () {
        return this.SHARE_MINIMUM_1;
    };
    var Companion_instance;

    function Companion_getInstance() {
        if (Companion_instance == null)
            new Companion();
        return Companion_instance;
    }

    protoOf(Segment).get_data_wokkxf_k$ = function () {
        return this.data_1;
    };
    protoOf(Segment).set_pos_tfwdvz_k$ = function (_set____db54di) {
        this.pos_1 = _set____db54di;
    };
    protoOf(Segment).get_pos_18iyad_k$ = function () {
        return this.pos_1;
    };
    protoOf(Segment).set_limit_mo5fx2_k$ = function (_set____db54di) {
        this.limit_1 = _set____db54di;
    };
    protoOf(Segment).get_limit_iuokuq_k$ = function () {
        return this.limit_1;
    };
    protoOf(Segment).set_shared_67kjx_k$ = function (_set____db54di) {
        this.shared_1 = _set____db54di;
    };
    protoOf(Segment).get_shared_jgtlda_k$ = function () {
        return this.shared_1;
    };
    protoOf(Segment).set_owner_bh4mbj_k$ = function (_set____db54di) {
        this.owner_1 = _set____db54di;
    };
    protoOf(Segment).get_owner_iwkx3e_k$ = function () {
        return this.owner_1;
    };
    protoOf(Segment).set_next_hfcco5_k$ = function (_set____db54di) {
        this.next_1 = _set____db54di;
    };
    protoOf(Segment).get_next_wor1vg_k$ = function () {
        return this.next_1;
    };
    protoOf(Segment).set_prev_xbvcpn_k$ = function (_set____db54di) {
        this.prev_1 = _set____db54di;
    };
    protoOf(Segment).get_prev_wosl18_k$ = function () {
        return this.prev_1;
    };
    protoOf(Segment).sharedCopy_timhza_k$ = function () {
        this.shared_1 = true;
        return Segment_init_$Create$_0(this.data_1, this.pos_1, this.limit_1, true, false);
    };
    protoOf(Segment).unsharedCopy_5kj8b7_k$ = function () {
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.data_1.slice();
        return Segment_init_$Create$_0(tmp$ret$1, this.pos_1, this.limit_1, false, true);
    };
    protoOf(Segment).pop_2dsh_k$ = function () {
        var result = !(this.next_1 === this) ? this.next_1 : null;
        ensureNotNull(this.prev_1).next_1 = this.next_1;
        ensureNotNull(this.next_1).prev_1 = this.prev_1;
        this.next_1 = null;
        this.prev_1 = null;
        return result;
    };
    protoOf(Segment).push_3ggrb0_k$ = function (segment) {
        segment.prev_1 = this;
        segment.next_1 = this.next_1;
        ensureNotNull(this.next_1).prev_1 = segment;
        this.next_1 = segment;
        return segment;
    };
    protoOf(Segment).split_cz4av2_k$ = function (byteCount) {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(byteCount > 0 ? byteCount <= (this.limit_1 - this.pos_1 | 0) : false)) {
            // Inline function 'kotlinx.io.Segment.split.<anonymous>' call
            var message = 'byteCount out of range';
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var prefix;
        if (byteCount >= 1024) {
            prefix = this.sharedCopy_timhza_k$();
        } else {
            prefix = SegmentPool_getInstance().take_2451j_k$();
            // Inline function 'kotlin.collections.copyInto' call
            var this_0 = this.data_1;
            var destination = prefix.data_1;
            var startIndex = this.pos_1;
            var endIndex = this.pos_1 + byteCount | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp = this_0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp, destination, 0, startIndex, endIndex);
        }
        prefix.limit_1 = prefix.pos_1 + byteCount | 0;
        this.pos_1 = this.pos_1 + byteCount | 0;
        ensureNotNull(this.prev_1).push_3ggrb0_k$(prefix);
        return prefix;
    };
    protoOf(Segment).compact_dawvql_k$ = function () {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!(this.prev_1 === this)) {
            // Inline function 'kotlinx.io.Segment.compact.<anonymous>' call
            var message = 'cannot compact';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        if (!ensureNotNull(this.prev_1).owner_1)
            return Unit_getInstance();
        var byteCount = this.limit_1 - this.pos_1 | 0;
        var availableByteCount = (8192 - ensureNotNull(this.prev_1).limit_1 | 0) + (ensureNotNull(this.prev_1).shared_1 ? 0 : ensureNotNull(this.prev_1).pos_1) | 0;
        if (byteCount > availableByteCount)
            return Unit_getInstance();
        this.writeTo_ozg1f0_k$(ensureNotNull(this.prev_1), byteCount);
        this.pop_2dsh_k$();
        SegmentPool_getInstance().recycle_3mobff_k$(this);
    };
    protoOf(Segment).writeTo_ozg1f0_k$ = function (sink, byteCount) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!sink.owner_1) {
            // Inline function 'kotlinx.io.Segment.writeTo.<anonymous>' call
            var message = 'only owner can write';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        if ((sink.limit_1 + byteCount | 0) > 8192) {
            if (sink.shared_1)
                throw IllegalArgumentException_init_$Create$_0();
            if (((sink.limit_1 + byteCount | 0) - sink.pos_1 | 0) > 8192)
                throw IllegalArgumentException_init_$Create$_0();
            // Inline function 'kotlin.collections.copyInto' call
            var this_0 = sink.data_1;
            var destination = sink.data_1;
            var startIndex = sink.pos_1;
            var endIndex = sink.limit_1;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp = this_0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp, destination, 0, startIndex, endIndex);
            sink.limit_1 = sink.limit_1 - sink.pos_1 | 0;
            sink.pos_1 = 0;
        }
        // Inline function 'kotlin.collections.copyInto' call
        var this_1 = this.data_1;
        var destination_0 = sink.data_1;
        var destinationOffset = sink.limit_1;
        var startIndex_0 = this.pos_1;
        var endIndex_0 = this.pos_1 + byteCount | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = this_1;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, destination_0, destinationOffset, startIndex_0, endIndex_0);
        sink.limit_1 = sink.limit_1 + byteCount | 0;
        this.pos_1 = this.pos_1 + byteCount | 0;
    };
    protoOf(Segment).get_size_woubt6_k$ = function () {
        return this.limit_1 - this.pos_1 | 0;
    };

    function Segment() {
        Companion_getInstance();
        this.pos_1 = 0;
        this.limit_1 = 0;
        this.shared_1 = false;
        this.owner_1 = false;
        this.next_1 = null;
        this.prev_1 = null;
    }

    function Sink() {
    }

    function get_HEX_DIGIT_BYTES() {
        _init_properties_Sinks_kt__92ml72();
        return HEX_DIGIT_BYTES;
    }

    var HEX_DIGIT_BYTES;
    var properties_initialized_Sinks_kt_u7wmts;

    function _init_properties_Sinks_kt__92ml72() {
        if (!properties_initialized_Sinks_kt_u7wmts) {
            properties_initialized_Sinks_kt_u7wmts = true;
            HEX_DIGIT_BYTES = asUtf8ToByteArray('0123456789abcdef');
        }
    }

    function Source() {
    }

    function FileSystem() {
    }

    function SystemFileSystemImpl() {
    }

    function FileMetadata(isRegularFile, isDirectory, size) {
        isRegularFile = isRegularFile === VOID ? false : isRegularFile;
        isDirectory = isDirectory === VOID ? false : isDirectory;
        size = size === VOID ? new Long(0, 0) : size;
        this.isRegularFile_1 = isRegularFile;
        this.isDirectory_1 = isDirectory;
        this.size_1 = size;
    }

    protoOf(FileMetadata).get_isRegularFile_wfnog5_k$ = function () {
        return this.isRegularFile_1;
    };
    protoOf(FileMetadata).get_isDirectory_hgpbzu_k$ = function () {
        return this.isDirectory_1;
    };
    protoOf(FileMetadata).get_size_woubt6_k$ = function () {
        return this.size_1;
    };

    function commonAsUtf8ToByteArray(_this__u8e3s4) {
        var bytes = new Int8Array(imul(4, _this__u8e3s4.length));
        var inductionVariable = 0;
        var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
        if (inductionVariable <= last)
            do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var b0 = charSequenceGet(_this__u8e3s4, index);
                if (Char__compareTo_impl_ypi4mb(b0, _Char___init__impl__6a9atx(128)) >= 0) {
                    var size = index;
                    // Inline function 'kotlinx.io.internal.processUtf8Bytes' call
                    var endIndex = _this__u8e3s4.length;
                    var index_0 = index;
                    while (index_0 < endIndex) {
                        var c = charSequenceGet(_this__u8e3s4, index_0);
                        if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(128)) < 0) {
                            // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                            // Inline function 'kotlin.code' call
                            var tmp$ret$0 = Char__toInt_impl_vasixd(c);
                            var tmp0 = size;
                            size = tmp0 + 1 | 0;
                            bytes[tmp0] = toByte(tmp$ret$0);
                            index_0 = index_0 + 1 | 0;
                            while (index_0 < endIndex ? Char__compareTo_impl_ypi4mb(charSequenceGet(_this__u8e3s4, index_0), _Char___init__impl__6a9atx(128)) < 0 : false) {
                                // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                                // Inline function 'kotlin.code' call
                                var tmp1 = index_0;
                                index_0 = tmp1 + 1 | 0;
                                var this_0 = charSequenceGet(_this__u8e3s4, tmp1);
                                var tmp$ret$1 = Char__toInt_impl_vasixd(this_0);
                                var tmp0_0 = size;
                                size = tmp0_0 + 1 | 0;
                                bytes[tmp0_0] = toByte(tmp$ret$1);
                            }
                        } else if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(2048)) < 0) {
                            // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                            // Inline function 'kotlin.code' call
                            var tmp$ret$2 = Char__toInt_impl_vasixd(c);
                            var tmp0_1 = size;
                            size = tmp0_1 + 1 | 0;
                            bytes[tmp0_1] = toByte(tmp$ret$2 >> 6 | 192);
                            // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                            // Inline function 'kotlin.code' call
                            var tmp$ret$3 = Char__toInt_impl_vasixd(c);
                            var tmp0_2 = size;
                            size = tmp0_2 + 1 | 0;
                            bytes[tmp0_2] = toByte(tmp$ret$3 & 63 | 128);
                            index_0 = index_0 + 1 | 0;
                        } else if (!(_Char___init__impl__6a9atx(55296) <= c ? c <= _Char___init__impl__6a9atx(57343) : false)) {
                            // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                            // Inline function 'kotlin.code' call
                            var tmp$ret$4 = Char__toInt_impl_vasixd(c);
                            var tmp0_3 = size;
                            size = tmp0_3 + 1 | 0;
                            bytes[tmp0_3] = toByte(tmp$ret$4 >> 12 | 224);
                            // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                            // Inline function 'kotlin.code' call
                            var tmp$ret$5 = Char__toInt_impl_vasixd(c);
                            var tmp0_4 = size;
                            size = tmp0_4 + 1 | 0;
                            bytes[tmp0_4] = toByte(tmp$ret$5 >> 6 & 63 | 128);
                            // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                            // Inline function 'kotlin.code' call
                            var tmp$ret$6 = Char__toInt_impl_vasixd(c);
                            var tmp0_5 = size;
                            size = tmp0_5 + 1 | 0;
                            bytes[tmp0_5] = toByte(tmp$ret$6 & 63 | 128);
                            index_0 = index_0 + 1 | 0;
                        } else {
                            var tmp;
                            if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(56319)) > 0 ? true : endIndex <= (index_0 + 1 | 0)) {
                                tmp = true;
                            } else {
                                var containsArg = charSequenceGet(_this__u8e3s4, index_0 + 1 | 0);
                                tmp = !(_Char___init__impl__6a9atx(56320) <= containsArg ? containsArg <= _Char___init__impl__6a9atx(57343) : false);
                            }
                            if (tmp) {
                                // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                                var tmp0_6 = size;
                                size = tmp0_6 + 1 | 0;
                                bytes[tmp0_6] = 63;
                                index_0 = index_0 + 1 | 0;
                            } else {
                                // Inline function 'kotlin.code' call
                                var tmp_0 = Char__toInt_impl_vasixd(c) << 10;
                                // Inline function 'kotlin.code' call
                                var this_1 = charSequenceGet(_this__u8e3s4, index_0 + 1 | 0);
                                var codePoint = (tmp_0 + Char__toInt_impl_vasixd(this_1) | 0) + -56613888 | 0;
                                // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                                var tmp0_7 = size;
                                size = tmp0_7 + 1 | 0;
                                bytes[tmp0_7] = toByte(codePoint >> 18 | 240);
                                // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                                var tmp0_8 = size;
                                size = tmp0_8 + 1 | 0;
                                bytes[tmp0_8] = toByte(codePoint >> 12 & 63 | 128);
                                // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                                var tmp0_9 = size;
                                size = tmp0_9 + 1 | 0;
                                bytes[tmp0_9] = toByte(codePoint >> 6 & 63 | 128);
                                // Inline function 'kotlinx.io.internal.commonAsUtf8ToByteArray.<anonymous>' call
                                var tmp0_10 = size;
                                size = tmp0_10 + 1 | 0;
                                bytes[tmp0_10] = toByte(codePoint & 63 | 128);
                                index_0 = index_0 + 2 | 0;
                            }
                        }
                    }
                    return copyOf(bytes, size);
                }
                // Inline function 'kotlin.code' call
                var tmp$ret$9 = Char__toInt_impl_vasixd(b0);
                bytes[index] = toByte(tmp$ret$9);
            }
            while (inductionVariable <= last);
        return copyOf(bytes, _this__u8e3s4.length);
    }

    function processUtf8Bytes(_this__u8e3s4, beginIndex, endIndex, yield_0) {
        var index = beginIndex;
        while (index < endIndex) {
            var c = charSequenceGet(_this__u8e3s4, index);
            if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(128)) < 0) {
                // Inline function 'kotlin.code' call
                var tmp$ret$0 = Char__toInt_impl_vasixd(c);
                yield_0(toByte(tmp$ret$0));
                index = index + 1 | 0;
                while (index < endIndex ? Char__compareTo_impl_ypi4mb(charSequenceGet(_this__u8e3s4, index), _Char___init__impl__6a9atx(128)) < 0 : false) {
                    // Inline function 'kotlin.code' call
                    var tmp1 = index;
                    index = tmp1 + 1 | 0;
                    var this_0 = charSequenceGet(_this__u8e3s4, tmp1);
                    var tmp$ret$1 = Char__toInt_impl_vasixd(this_0);
                    yield_0(toByte(tmp$ret$1));
                }
            } else if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(2048)) < 0) {
                // Inline function 'kotlin.code' call
                var tmp$ret$2 = Char__toInt_impl_vasixd(c);
                yield_0(toByte(tmp$ret$2 >> 6 | 192));
                // Inline function 'kotlin.code' call
                var tmp$ret$3 = Char__toInt_impl_vasixd(c);
                yield_0(toByte(tmp$ret$3 & 63 | 128));
                index = index + 1 | 0;
            } else if (!(_Char___init__impl__6a9atx(55296) <= c ? c <= _Char___init__impl__6a9atx(57343) : false)) {
                // Inline function 'kotlin.code' call
                var tmp$ret$4 = Char__toInt_impl_vasixd(c);
                yield_0(toByte(tmp$ret$4 >> 12 | 224));
                // Inline function 'kotlin.code' call
                var tmp$ret$5 = Char__toInt_impl_vasixd(c);
                yield_0(toByte(tmp$ret$5 >> 6 & 63 | 128));
                // Inline function 'kotlin.code' call
                var tmp$ret$6 = Char__toInt_impl_vasixd(c);
                yield_0(toByte(tmp$ret$6 & 63 | 128));
                index = index + 1 | 0;
            } else {
                var tmp;
                if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(56319)) > 0 ? true : endIndex <= (index + 1 | 0)) {
                    tmp = true;
                } else {
                    var containsArg = charSequenceGet(_this__u8e3s4, index + 1 | 0);
                    tmp = !(_Char___init__impl__6a9atx(56320) <= containsArg ? containsArg <= _Char___init__impl__6a9atx(57343) : false);
                }
                if (tmp) {
                    yield_0(63);
                    index = index + 1 | 0;
                } else {
                    // Inline function 'kotlin.code' call
                    var tmp_0 = Char__toInt_impl_vasixd(c) << 10;
                    // Inline function 'kotlin.code' call
                    var this_1 = charSequenceGet(_this__u8e3s4, index + 1 | 0);
                    var codePoint = (tmp_0 + Char__toInt_impl_vasixd(this_1) | 0) + -56613888 | 0;
                    yield_0(toByte(codePoint >> 18 | 240));
                    yield_0(toByte(codePoint >> 12 & 63 | 128));
                    yield_0(toByte(codePoint >> 6 & 63 | 128));
                    yield_0(toByte(codePoint & 63 | 128));
                    index = index + 2 | 0;
                }
            }
        }
    }

    function get_REPLACEMENT_BYTE() {
        return REPLACEMENT_BYTE;
    }

    var REPLACEMENT_BYTE;

    function asUtf8ToByteArray(_this__u8e3s4) {
        return commonAsUtf8ToByteArray(_this__u8e3s4);
    }

    function IOException_init_$Init$(message, $this) {
        message = message === VOID ? null : message;
        IOException.call($this, message, null);
        return $this;
    }

    function IOException_init_$Create$(message) {
        var tmp = IOException_init_$Init$(message, objectCreate(protoOf(IOException)));
        captureStack(tmp, IOException_init_$Create$);
        return tmp;
    }

    function IOException(message, cause) {
        Exception_init_$Init$(message, cause, this);
        captureStack(this, IOException);
    }

    function EOFException(message) {
        message = message === VOID ? null : message;
        IOException_init_$Init$(message, this);
        captureStack(this, EOFException);
    }

    function RawSink() {
    }

    function SegmentPool() {
        SegmentPool_instance = this;
        this.MAX_SIZE_1 = 0;
        this.byteCount_1 = 0;
    }

    protoOf(SegmentPool).get_MAX_SIZE_bmfi1n_k$ = function () {
        return this.MAX_SIZE_1;
    };
    protoOf(SegmentPool).get_byteCount_pu5ghu_k$ = function () {
        return this.byteCount_1;
    };
    protoOf(SegmentPool).take_2451j_k$ = function () {
        return Segment_init_$Create$();
    };
    protoOf(SegmentPool).recycle_3mobff_k$ = function (segment) {
    };
    var SegmentPool_instance;

    function SegmentPool_getInstance() {
        if (SegmentPool_instance == null)
            new SegmentPool();
        return SegmentPool_instance;
    }

    function get_SystemFileSystem() {
        _init_properties_FileSystemJs_kt__4boaac();
        return SystemFileSystem;
    }

    var SystemFileSystem;

    function get_fs() {
        _init_properties_FileSystemJs_kt__4boaac();
        var tmp;
        try {
            tmp = require('fs');
        } catch ($p) {
            var tmp_0;
            if ($p instanceof Error) {
                var t = $p;
                tmp_0 = null;
            } else {
                throw $p;
            }
            tmp = tmp_0;
        }
        return tmp;
    }

    function FileNotFoundException(message) {
        IOException_init_$Init$(message, this);
        captureStack(this, FileNotFoundException);
    }

    function SystemFileSystem$1() {
        SystemFileSystemImpl.call(this);
    }

    protoOf(SystemFileSystem$1).exists_hs0cko_k$ = function (path) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(get_fs() !== null)) {
            // Inline function 'kotlinx.io.files.<no name provided>.exists.<anonymous>' call
            var message = "Module 'fs' was not found";
            throw IllegalStateException_init_$Create$(toString(message));
        }
        var tmp = get_fs().existsSync(path.get_path_wos8ry_k$());
        return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    };
    protoOf(SystemFileSystem$1).delete_wo7h84_k$ = function (path, mustExist) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(get_fs() !== null)) {
            // Inline function 'kotlinx.io.files.<no name provided>.delete.<anonymous>' call
            var message = "Module 'fs' was not found";
            throw IllegalStateException_init_$Create$(toString(message));
        }
        if (!this.exists_hs0cko_k$(path)) {
            if (mustExist) {
                throw new FileNotFoundException('File does not exist: ' + path.get_path_wos8ry_k$());
            }
            return Unit_getInstance();
        }
        try {
            var stats = get_fs().statSync(path.get_path_wos8ry_k$());
            var tmp = stats.isDirectory();
            if ((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE()) {
                get_fs().rmdirSync(path.get_path_wos8ry_k$());
            } else {
                get_fs().rmSync(path.get_path_wos8ry_k$());
            }
        } catch ($p) {
            if ($p instanceof Error) {
                var t = $p;
                throw new IOException('Delete failed for ' + path, t);
            } else {
                throw $p;
            }
        }
    };
    protoOf(SystemFileSystem$1).createDirectories_7nzr80_k$ = function (path, mustCreate) {
        var metadata = this.metadataOrNull_ojv48r_k$(path);
        if (!(metadata == null)) {
            if (mustCreate) {
                throw IOException_init_$Create$('Path already exists: ' + path);
            }
            if (metadata.get_isRegularFile_wfnog5_k$()) {
                throw IOException_init_$Create$("Path already exists and it's a file: " + path);
            }
            return Unit_getInstance();
        }
        // Inline function 'kotlin.collections.arrayListOf' call
        var parts = ArrayList_init_$Create$();
        var p = path;
        while (!(p == null) ? !this.exists_hs0cko_k$(p) : false) {
            parts.add_utx5q5_k$(p.toString());
            p = p.get_parent_hy4reb_k$();
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = asReversed(parts).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'kotlinx.io.files.<no name provided>.createDirectories.<anonymous>' call
            get_fs().mkdirSync(element);
        }
    };
    protoOf(SystemFileSystem$1).atomicMove_uo79h0_k$ = function (source, destination) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(get_fs() !== null)) {
            // Inline function 'kotlinx.io.files.<no name provided>.atomicMove.<anonymous>' call
            var message = "Module 'fs' was not found";
            throw IllegalStateException_init_$Create$(toString(message));
        }
        if (!this.exists_hs0cko_k$(source)) {
            throw new FileNotFoundException('Source does not exist: ' + source.get_path_wos8ry_k$());
        }
        try {
            get_fs().renameSync(source.get_path_wos8ry_k$(), destination.get_path_wos8ry_k$());
        } catch ($p) {
            if ($p instanceof Error) {
                var t = $p;
                throw new IOException('Move failed from ' + source + ' to ' + destination, t);
            } else {
                throw $p;
            }
        }
    };
    protoOf(SystemFileSystem$1).metadataOrNull_ojv48r_k$ = function (path) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(get_fs() !== null)) {
            // Inline function 'kotlinx.io.files.<no name provided>.metadataOrNull.<anonymous>' call
            var message = "Module 'fs' was not found";
            throw IllegalStateException_init_$Create$(toString(message));
        }
        var tmp;
        try {
            var stat = get_fs().statSync(path.get_path_wos8ry_k$());
            var tmp_0 = stat.mode;
            var mode = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
            var tmp_1 = get_fs().constants.S_IFMT;
            var isFile = equals(mode & ((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE()), get_fs().constants.S_IFREG);
            var tmp_2 = get_fs().constants.S_IFMT;
            var tmp_3 = equals(mode & ((!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE()), get_fs().constants.S_IFDIR);
            var tmp_4;
            if (isFile) {
                var tmp_5 = stat.size;
                tmp_4 = toLong((!(tmp_5 == null) ? typeof tmp_5 === 'number' : false) ? tmp_5 : THROW_CCE());
            } else {
                tmp_4 = new Long(-1, -1);
            }
            tmp = new FileMetadata(isFile, tmp_3, tmp_4);
        } catch ($p) {
            var tmp_6;
            if ($p instanceof Error) {
                var t = $p;
                if (this.exists_hs0cko_k$(path))
                    throw new IOException('Stat failed for ' + path, t);
                return null;
            } else {
                throw $p;
            }
        }
        return tmp;
    };
    protoOf(SystemFileSystem$1).source_rb8tqf_k$ = function (path) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(get_fs() !== null)) {
            // Inline function 'kotlinx.io.files.<no name provided>.source.<anonymous>' call
            var message = "Module 'fs' was not found";
            throw IllegalStateException_init_$Create$(toString(message));
        }
        return new FileSource(path);
    };
    protoOf(SystemFileSystem$1).sink_ed8sos_k$ = function (path, append) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(get_fs() !== null)) {
            // Inline function 'kotlinx.io.files.<no name provided>.sink.<anonymous>' call
            var message = "Module 'fs' was not found";
            throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(get_buffer() !== null)) {
            // Inline function 'kotlinx.io.files.<no name provided>.sink.<anonymous>' call
            var message_0 = "Module 'buffer' was not found";
            throw IllegalStateException_init_$Create$(toString(message_0));
        }
        return new FileSink(path, append);
    };
    var properties_initialized_FileSystemJs_kt_lg8f5i;

    function _init_properties_FileSystemJs_kt__4boaac() {
        if (!properties_initialized_FileSystemJs_kt_lg8f5i) {
            properties_initialized_FileSystemJs_kt_lg8f5i = true;
            SystemFileSystem = new SystemFileSystem$1();
        }
    }

    function get_SystemPathSeparator() {
        _init_properties_PathsJs_kt__cx5uqj();
        // Inline function 'kotlin.getValue' call
        var this_0 = SystemPathSeparator$delegate;
        SystemPathSeparator$factory();
        return this_0.get_value_j01efc_k$().value_1;
    }

    var SystemPathSeparator$delegate;

    function Path(path, any) {
        this.path_1 = path;
    }

    protoOf(Path).get_path_wos8ry_k$ = function () {
        return this.path_1;
    };
    protoOf(Path).get_parent_hy4reb_k$ = function () {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(get_pathLib() !== null)) {
            // Inline function 'kotlinx.io.files.Path.<get-parent>.<anonymous>' call
            var message = 'Path module not found';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        if (isBlank(this.path_1))
            return null;
        else if (!contains(this.path_1, get_SystemPathSeparator()))
            return null;
        var tmp = get_pathLib().dirname(this.path_1);
        var p = (tmp == null ? true : typeof tmp === 'string') ? tmp : THROW_CCE();
        var tmp_0;
        // Inline function 'kotlin.text.isNullOrBlank' call
        // Inline function 'kotlin.contracts.contract' call
        if (p == null ? true : isBlank(p)) {
            tmp_0 = null;
        } else {
            if (p === this.path_1) {
                tmp_0 = null;
            } else {
                tmp_0 = Path_0(p);
            }
        }
        return tmp_0;
    };
    protoOf(Path).get_isAbsolute_4pnyd2_k$ = function () {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(get_pathLib() !== null)) {
            // Inline function 'kotlinx.io.files.Path.<get-isAbsolute>.<anonymous>' call
            var message = 'Path module not found';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        var tmp = get_pathLib().isAbsolute(this.path_1);
        return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    };
    protoOf(Path).get_name_woqyms_k$ = function () {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(get_pathLib() !== null)) {
            // Inline function 'kotlinx.io.files.Path.<get-name>.<anonymous>' call
            var message = 'Path module not found';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        if (isBlank(this.path_1))
            return '';
        var tmp = get_pathLib().basename(this.path_1);
        var p = (tmp == null ? true : typeof tmp === 'string') ? tmp : THROW_CCE();
        var tmp_0;
        // Inline function 'kotlin.text.isNullOrBlank' call
        // Inline function 'kotlin.contracts.contract' call
        if (p == null ? true : isBlank(p)) {
            tmp_0 = '';
        } else {
            tmp_0 = p;
        }
        return tmp_0;
    };
    protoOf(Path).toString = function () {
        return this.path_1;
    };
    protoOf(Path).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Path))
            return false;
        return this.path_1 === other.path_1;
    };
    protoOf(Path).hashCode = function () {
        return getStringHashCode(this.path_1);
    };

    function _get_path__dbvv7q($this) {
        return $this.path_1;
    }

    function _set_buffer__uxh4x5($this, _set____db54di) {
        $this.buffer_1 = _set____db54di;
    }

    function _get_buffer__tgqkad_0($this) {
        return $this.buffer_1;
    }

    function _set_closed__kdb0et_0($this, _set____db54di) {
        $this.closed_1 = _set____db54di;
    }

    function _get_closed__iwkfs1_0($this) {
        return $this.closed_1;
    }

    function _set_offset__aq0ezo($this, _set____db54di) {
        $this.offset_1 = _set____db54di;
    }

    function _get_offset__c6qzmg($this) {
        return $this.offset_1;
    }

    function FileSource(path) {
        this.path_1 = path;
        this.buffer_1 = null;
        this.closed_1 = false;
        this.offset_1 = 0;
    }

    protoOf(FileSource).readAtMostTo_nyls31_k$ = function (sink, byteCount) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this.closed_1) {
            // Inline function 'kotlinx.io.files.FileSource.readAtMostTo.<anonymous>' call
            var message = 'Source is closed.';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        if (byteCount.equals(new Long(0, 0))) {
            return new Long(0, 0);
        }
        if (this.buffer_1 === null) {
            try {
                this.buffer_1 = get_fs().readFileSync(this.path_1.toString(), null);
            } catch ($p) {
                if ($p instanceof Error) {
                    var t = $p;
                    var tmp = get_fs().existsSync(this.path_1.path_1);
                    if ((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE()) {
                        throw new IOException('Failed to read data from ' + this.path_1, t);
                    }
                    throw new FileNotFoundException('File does not exist: ' + this.path_1);
                } else {
                    throw $p;
                }
            }
        }
        var tmp_0 = this.buffer_1.length;
        var len = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
        if (this.offset_1 >= len) {
            return new Long(-1, -1);
        }
        // Inline function 'kotlinx.io.minOf' call
        var b = len - this.offset_1 | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = toLong(b);
        var bytesToRead = byteCount.compareTo_9jj042_k$(b_0) <= 0 ? byteCount : b_0;
        var inductionVariable = new Long(0, 0);
        if (inductionVariable.compareTo_9jj042_k$(bytesToRead) < 0)
            do {
                var i = inductionVariable;
                inductionVariable = inductionVariable.plus_r93sks_k$(new Long(1, 0));
                var tmp2 = this.offset_1;
                this.offset_1 = tmp2 + 1 | 0;
                var tmp_1 = this.buffer_1.readInt8(tmp2);
                sink.writeByte_9ih3z3_k$((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE());
            }
            while (inductionVariable.compareTo_9jj042_k$(bytesToRead) < 0);
        return bytesToRead;
    };
    protoOf(FileSource).close_yn9xrc_k$ = function () {
        this.closed_1 = true;
    };

    function get_buffer() {
        _init_properties_PathsJs_kt__cx5uqj();
        var tmp;
        try {
            tmp = require('buffer');
        } catch ($p) {
            var tmp_0;
            if ($p instanceof Error) {
                var t = $p;
                tmp_0 = null;
            } else {
                throw $p;
            }
            tmp = tmp_0;
        }
        return tmp;
    }

    function _get_path__dbvv7q_0($this) {
        return $this.path_1;
    }

    function _set_append__n7i059($this, _set____db54di) {
        $this.append_1 = _set____db54di;
    }

    function _get_append__oo8ks1($this) {
        return $this.append_1;
    }

    function _set_closed__kdb0et_1($this, _set____db54di) {
        $this.closed_1 = _set____db54di;
    }

    function _get_closed__iwkfs1_1($this) {
        return $this.closed_1;
    }

    function FileSink(path, append) {
        this.path_1 = path;
        this.append_1 = append;
        this.closed_1 = false;
    }

    protoOf(FileSink).write_yvqjfp_k$ = function (source, byteCount) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this.closed_1) {
            // Inline function 'kotlinx.io.files.FileSink.write.<anonymous>' call
            var message = 'Sink is closed.';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        if (byteCount.equals(new Long(0, 0))) {
            return Unit_getInstance();
        }
        // Inline function 'kotlin.comparisons.minOf' call
        var b = source.get_size_woubt6_k$();
        var remainingBytes = byteCount.compareTo_9jj042_k$(b) <= 0 ? byteCount : b;
        while (remainingBytes.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
            var head = ensureNotNull(source.get_head_won7e1_k$());
            var segmentBytes = head.get_limit_iuokuq_k$() - head.get_pos_18iyad_k$() | 0;
            var buf = get_buffer().Buffer.allocUnsafe(segmentBytes);
            buf.fill(head.get_data_wokkxf_k$(), head.get_pos_18iyad_k$(), segmentBytes);
            try {
                if (this.append_1) {
                    get_fs().appendFileSync(this.path_1.toString(), buf);
                } else {
                    get_fs().writeFileSync(this.path_1.toString(), buf);
                    this.append_1 = true;
                }
            } catch ($p) {
                if ($p instanceof Error) {
                    var e = $p;
                    throw new IOException('Write failed', e);
                } else {
                    throw $p;
                }
            }
            source.skip_bgd4sf_k$(toLong(segmentBytes));
            // Inline function 'kotlin.Long.minus' call
            remainingBytes = remainingBytes.minus_mfbszm_k$(toLong(segmentBytes));
        }
    };
    protoOf(FileSink).flush_shahbo_k$ = function () {
        return Unit_getInstance();
    };
    protoOf(FileSink).close_yn9xrc_k$ = function () {
        this.closed_1 = true;
    };

    function get_pathLib() {
        _init_properties_PathsJs_kt__cx5uqj();
        var tmp;
        try {
            tmp = require('path');
        } catch ($p) {
            var tmp_0;
            if ($p instanceof Error) {
                var t = $p;
                tmp_0 = null;
            } else {
                throw $p;
            }
            tmp = tmp_0;
        }
        return tmp;
    }

    function Path_0(path) {
        _init_properties_PathsJs_kt__cx5uqj();
        return new Path(path, null);
    }

    function SystemPathSeparator$delegate$lambda() {
        _init_properties_PathsJs_kt__cx5uqj();
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(get_pathLib() != null)) {
            // Inline function 'kotlinx.io.files.SystemPathSeparator$delegate.<anonymous>.<anonymous>' call
            var message = 'Path module not found';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        var tmp = get_pathLib().sep;
        var sep = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(sep.length === 1)) {
            // Inline function 'kotlin.check.<anonymous>' call
            var message_0 = 'Check failed.';
            throw IllegalStateException_init_$Create$(toString(message_0));
        }
        return new Char(charSequenceGet(sep, 0));
    }

    function SystemPathSeparator$factory() {
        return getPropertyCallableRef('SystemPathSeparator', 0, KProperty0, function () {
            return new Char(get_SystemPathSeparator());
        }, null);
    }

    var properties_initialized_PathsJs_kt_chgord;

    function _init_properties_PathsJs_kt__cx5uqj() {
        if (!properties_initialized_PathsJs_kt_chgord) {
            properties_initialized_PathsJs_kt_chgord = true;
            SystemPathSeparator$delegate = lazy(SystemPathSeparator$delegate$lambda);
        }
    }

    //region block: post-declaration
    protoOf(Buffer).readAtMostTo$default_wtrooa_k$ = readAtMostTo$default;
    protoOf(Buffer).write$default_h97jte_k$ = write$default;
    protoOf(RealSource).readAtMostTo$default_wtrooa_k$ = readAtMostTo$default;
    protoOf(SystemFileSystemImpl).delete$default_6ix9e7_k$ = delete$default;
    protoOf(SystemFileSystemImpl).createDirectories$default_dm5znv_k$ = createDirectories$default;
    protoOf(SystemFileSystemImpl).sink$default_v7kfux_k$ = sink$default;
    //endregion
    //region block: init
    REPLACEMENT_BYTE = 63;
    //endregion
    //region block: exports
    _.$_$ = _.$_$ || {};
    _.$_$.a = Buffer;
    _.$_$.b = RawSink;
    //endregion
    return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.js.map
