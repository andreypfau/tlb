(function (root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-crypto-kotlinx-crypto-crc32.js', './parsus.js'], factory);
    else if (typeof exports === 'object')
        factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-crypto-kotlinx-crypto-crc32.js'), require('./parsus.js'));
    else {
        if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
            throw new Error("Error loading module 'tlb'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'tlb'.");
        }
        if (typeof this['kotlinx-crypto-kotlinx-crypto-crc32'] === 'undefined') {
            throw new Error("Error loading module 'tlb'. Its dependency 'kotlinx-crypto-kotlinx-crypto-crc32' was not found. Please, check whether 'kotlinx-crypto-kotlinx-crypto-crc32' is loaded prior to 'tlb'.");
        }
        if (typeof parsus === 'undefined') {
            throw new Error("Error loading module 'tlb'. Its dependency 'parsus' was not found. Please, check whether 'parsus' is loaded prior to 'tlb'.");
        }
        root.tlb = factory(typeof tlb === 'undefined' ? {} : tlb, this['kotlin-kotlin-stdlib'], this['kotlinx-crypto-kotlinx-crypto-crc32'], parsus);
    }
}(this, function (_, kotlin_kotlin, kotlin_io_github_andreypfau_kotlinx_crypto_crc32, kotlin_me_alllex_parsus_parsus) {
    'use strict';
    //region block: imports
    var imul = Math.imul;
    var clz32 = Math.clz32;
    var Long = kotlin_kotlin.$_$.d5;
    var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.l1;
    var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.m1;
    var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.f1;
    var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.g1;
    var toLong = kotlin_kotlin.$_$.e4;
    var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u;
    var Unit_getInstance = kotlin_kotlin.$_$.q1;
    var VOID = kotlin_kotlin.$_$.a;
    var equals = kotlin_kotlin.$_$.p3;
    var protoOf = kotlin_kotlin.$_$.b4;
    var objectMeta = kotlin_kotlin.$_$.a4;
    var setMetadataFor = kotlin_kotlin.$_$.c4;
    var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m;
    var THROW_CCE = kotlin_kotlin.$_$.g5;
    var classMeta = kotlin_kotlin.$_$.o3;
    var objectCreate = kotlin_kotlin.$_$.z3;
    var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
    var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
    var countTrailingZeroBits = kotlin_kotlin.$_$.j5;
    var last = kotlin_kotlin.$_$.l2;
    var removeLast = kotlin_kotlin.$_$.v2;
    var Iterable = kotlin_kotlin.$_$.s1;
    var isBlank = kotlin_kotlin.$_$.p4;
    var charSequenceGet = kotlin_kotlin.$_$.m3;
    var get_lastIndex = kotlin_kotlin.$_$.r4;
    var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.y;
    var fillArrayVal = kotlin_kotlin.$_$.q3;
    var toByte = kotlin_kotlin.$_$.d4;
    var charSequenceLength = kotlin_kotlin.$_$.n3;
    var listOf = kotlin_kotlin.$_$.m2;
    var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.j;
    var collectionSizeOrDefault = kotlin_kotlin.$_$.z1;
    var noWhenBranchMatchedException = kotlin_kotlin.$_$.n5;
    var toString = kotlin_kotlin.$_$.g4;
    var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
    var isInterface = kotlin_kotlin.$_$.w3;
    var isLowerCase = kotlin_kotlin.$_$.q4;
    var emptyList = kotlin_kotlin.$_$.b2;
    var Collection = kotlin_kotlin.$_$.r1;
    var encodeToByteArray = kotlin_kotlin.$_$.o4;
    var crc32 = kotlin_io_github_andreypfau_kotlinx_crypto_crc32.$_$.a;
    var hashCode = kotlin_kotlin.$_$.u3;
    var getStringHashCode = kotlin_kotlin.$_$.t3;
    var toMutableList = kotlin_kotlin.$_$.a3;
    var lines = kotlin_kotlin.$_$.s4;
    var toList = kotlin_kotlin.$_$.y2;
    var getBooleanHashCode = kotlin_kotlin.$_$.r3;
    var getOrNull = kotlin_kotlin.$_$.h2;
    var interfaceMeta = kotlin_kotlin.$_$.v3;
    var Exception = kotlin_kotlin.$_$.c5;
    var Exception_init_$Init$ = kotlin_kotlin.$_$.o;
    var captureStack = kotlin_kotlin.$_$.k3;
    var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.r5;
    var NotImplementedError = kotlin_kotlin.$_$.e5;
    var mapCapacity = kotlin_kotlin.$_$.o2;
    var coerceAtLeast = kotlin_kotlin.$_$.h4;
    var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.i;
    var toString_0 = kotlin_kotlin.$_$.z;
    var Char__inc_impl_6e1wmz = kotlin_kotlin.$_$.w;
    var firstOrNull = kotlin_kotlin.$_$.f2;
    var to = kotlin_kotlin.$_$.s5;
    var sortedWith = kotlin_kotlin.$_$.x2;
    var checkIndexOverflow = kotlin_kotlin.$_$.y1;
    var toMap = kotlin_kotlin.$_$.z2;
    var first = kotlin_kotlin.$_$.g2;
    var startsWith = kotlin_kotlin.$_$.u4;
    var HashMap_init_$Create$ = kotlin_kotlin.$_$.g;
    var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r;
    var Appendable = kotlin_kotlin.$_$.l4;
    var get_lastIndex_0 = kotlin_kotlin.$_$.k2;
    var repeat = kotlin_kotlin.$_$.t4;
    var Comparator = kotlin_kotlin.$_$.a5;
    var compareValues = kotlin_kotlin.$_$.c3;
    var firstOrNull_0 = kotlin_kotlin.$_$.e2;
    var HashSet_init_$Create$ = kotlin_kotlin.$_$.h;
    var THROW_IAE = kotlin_kotlin.$_$.h5;
    var enumEntries = kotlin_kotlin.$_$.i3;
    var Enum = kotlin_kotlin.$_$.b5;
    var plus = kotlin_kotlin.$_$.r2;
    var plus_0 = kotlin_kotlin.$_$.u2;
    var CoroutineImpl = kotlin_kotlin.$_$.g3;
    var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d3;
    var toInt = kotlin_kotlin.$_$.w4;
    var ref = kotlin_me_alllex_parsus_parsus.$_$.f;
    var poll = kotlin_me_alllex_parsus_parsus.$_$.a;
    var listOf_0 = kotlin_kotlin.$_$.n2;
    var ParserImpl = kotlin_me_alllex_parsus_parsus.$_$.c;
    var Grammar = kotlin_me_alllex_parsus_parsus.$_$.b;
    var regexToken = kotlin_me_alllex_parsus_parsus.$_$.l;
    var literalToken = kotlin_me_alllex_parsus_parsus.$_$.k;
    var or = kotlin_me_alllex_parsus_parsus.$_$.e;
    var unaryMinus = kotlin_me_alllex_parsus_parsus.$_$.i;
    var times = kotlin_me_alllex_parsus_parsus.$_$.g;
    var times_0 = kotlin_me_alllex_parsus_parsus.$_$.h;
    var emptySet = kotlin_kotlin.$_$.d2;
    var zeroOrMore = kotlin_me_alllex_parsus_parsus.$_$.j;
    var oneOrMore = kotlin_me_alllex_parsus_parsus.$_$.d;
    var KProperty1 = kotlin_kotlin.$_$.k4;
    var getPropertyCallableRef = kotlin_kotlin.$_$.s3;
    var KProperty0 = kotlin_kotlin.$_$.j4;
    var stackTraceToString = kotlin_kotlin.$_$.o5;
    //endregion
    //region block: pre-declaration
    setMetadataFor(Companion, 'Companion', objectMeta);
    setMetadataFor(BinTrie, 'BinTrie', classMeta, VOID, VOID, BinTrie);
    setMetadataFor(Interval, 'Interval', classMeta);
    setMetadataFor(Companion_0, 'Companion', objectMeta);
    setMetadataFor(BitPfxCollection, 'BitPfxCollection', classMeta, VOID, [Iterable], BitPfxCollection_init_$Create$);
    setMetadataFor(Companion_1, 'Companion', objectMeta);
    setMetadataFor(ConstructorTag, 'ConstructorTag', classMeta);
    setMetadataFor(Companion_2, 'Companion', objectMeta);
    setMetadataFor(MinMaxSize, 'MinMaxSize', classMeta);
    setMetadataFor(Companion_3, 'Companion', objectMeta);
    setMetadataFor(TlbCompiler, 'TlbCompiler', classMeta, VOID, VOID, TlbCompiler);
    setMetadataFor(TlbConstructor, 'TlbConstructor', classMeta);
    setMetadataFor(TlbField, 'TlbField', classMeta);
    setMetadataFor(TlbType, 'TlbType', classMeta);

    function get_intSign() {
        return 0;
    }

    function get_isInt() {
        return !(this.get_intSign_xn0cir_k$() === 0);
    }

    function get_isAnon() {
        return false;
    }

    function get_isNatural() {
        return false;
    }

    setMetadataFor(TlbTypeExpression, 'TlbTypeExpression', interfaceMeta);
    setMetadataFor(Type, 'Type', objectMeta, VOID, [TlbTypeExpression]);
    setMetadataFor(TlbParamExpression, 'TlbParamExpression', interfaceMeta, VOID, [TlbTypeExpression]);
    setMetadataFor(TypeParam, 'TypeParam', classMeta, VOID, [TlbParamExpression]);

    function get_size() {
        return Companion_getInstance_2().fixedSize_141yqr_k$(0);
    }

    function get_isAnyBits() {
        return true;
    }

    setMetadataFor(TlbNatExpression, 'TlbNatExpression', interfaceMeta, VOID, [TlbTypeExpression]);
    setMetadataFor(NaturalParam, 'NaturalParam', classMeta, VOID, [TlbNatExpression, TlbParamExpression]);
    setMetadataFor(Apply, 'Apply', classMeta, VOID, [TlbTypeExpression]);
    setMetadataFor(Add, 'Add', classMeta, VOID, [TlbNatExpression]);
    setMetadataFor(GetBit, 'GetBit', classMeta, VOID, [TlbNatExpression]);
    setMetadataFor(Multiply, 'Multiply', classMeta, VOID, [TlbNatExpression]);
    setMetadataFor(IntConstant, 'IntConstant', classMeta, VOID, [TlbNatExpression]);
    setMetadataFor(Tuple, 'Tuple', classMeta, VOID, [TlbTypeExpression]);
    setMetadataFor(CellRef, 'CellRef', classMeta, VOID, [TlbTypeExpression]);
    setMetadataFor(Conditional, 'Conditional', classMeta, VOID, [TlbTypeExpression]);
    setMetadataFor(ConstructorTypeLowerCaseException, 'ConstructorTypeLowerCaseException', classMeta, Exception);
    setMetadataFor(InvalidConstructorTagException, 'InvalidConstructorTagException', classMeta, Exception);
    setMetadataFor(TypeAlreadyDefinedException, 'TypeAlreadyDefinedException', classMeta, Exception);
    setMetadataFor(UndefinedTypeException, 'UndefinedTypeException', classMeta, Exception);
    setMetadataFor(UndefinedFieldException, 'UndefinedFieldException', classMeta, Exception);
    setMetadataFor(CantApplyNonNatTypeException, 'CantApplyNonNatTypeException', classMeta, Exception, VOID, CantApplyNonNatTypeException);
    setMetadataFor(LocalContext, 'LocalContext', classMeta, VOID, [Appendable]);
    setMetadataFor(ConsField, 'ConsField', classMeta);
    setMetadataFor(ConsRecord, 'ConsRecord', classMeta);
    setMetadataFor(Action, 'Action', classMeta);
    setMetadataFor(Companion_4, 'Companion', objectMeta);
    setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
    setMetadataFor(FuncCodeGen, 'FuncCodeGen', classMeta);
    setMetadataFor(Companion_5, 'Companion', objectMeta);
    setMetadataFor(IdentScope, 'IdentScope', classMeta, VOID, [Collection], IdentScope);
    setMetadataFor(TlbPrimitiveType, 'TlbPrimitiveType', classMeta, Enum);
    setMetadataFor(Companion_6, 'Companion', objectMeta);
    setMetadataFor(AST, 'AST', interfaceMeta);
    setMetadataFor(TypeExpression, 'TypeExpression', interfaceMeta, VOID, [AST]);
    setMetadataFor(NaturalTypExpression, 'NaturalTypExpression', interfaceMeta, VOID, [TypeExpression]);
    setMetadataFor(TypeApply, 'TypeApply', classMeta, VOID, [TypeExpression]);
    setMetadataFor(Apply_0, 'Apply', classMeta, VOID, [TypeExpression]);
    setMetadataFor(Add_0, 'Add', classMeta, VOID, [NaturalTypExpression]);
    setMetadataFor(GetBit_0, 'GetBit', classMeta, VOID, [NaturalTypExpression]);
    setMetadataFor(Multiply_0, 'Multiply', classMeta, VOID, [NaturalTypExpression]);
    setMetadataFor(IntConstant_0, 'IntConstant', classMeta, VOID, [NaturalTypExpression]);
    setMetadataFor(Tuple_0, 'Tuple', classMeta, VOID, [TypeExpression]);
    setMetadataFor(CellRef_0, 'CellRef', classMeta, VOID, [TypeExpression]);
    setMetadataFor(Conditional_0, 'Conditional', classMeta, VOID, [TypeExpression]);
    setMetadataFor(AnonymousConstructor, 'AnonymousConstructor', classMeta, VOID, [TypeExpression]);
    setMetadataFor(Field, 'Field', classMeta, VOID, [AST]);
    setMetadataFor(ConstructorArg, 'ConstructorArg', classMeta, VOID, [AST]);
    setMetadataFor(Constructor, 'Constructor', classMeta, VOID, [AST]);
    setMetadataFor($parseCOROUTINE$0, '$parseCOROUTINE$0', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$1, '$parseCOROUTINE$1', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$2, '$parseCOROUTINE$2', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$3, '$parseCOROUTINE$3', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$4, '$parseCOROUTINE$4', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$5, '$parseCOROUTINE$5', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$6, '$parseCOROUTINE$6', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$7, '$parseCOROUTINE$7', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$8, '$parseCOROUTINE$8', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$9, '$parseCOROUTINE$9', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$10, '$parseCOROUTINE$10', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$11, '$parseCOROUTINE$11', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$12, '$parseCOROUTINE$12', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$13, '$parseCOROUTINE$13', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$14, '$parseCOROUTINE$14', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$15, '$parseCOROUTINE$15', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$16, '$parseCOROUTINE$16', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$17, '$parseCOROUTINE$17', classMeta, CoroutineImpl);
    setMetadataFor($parseCOROUTINE$18, '$parseCOROUTINE$18', classMeta, CoroutineImpl);
    setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_6, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_7, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_8, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_9, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_10, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_11, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_12, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_13, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_14, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_15, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_16, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_17, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(TlbGrammar, 'TlbGrammar', classMeta, Grammar, VOID, TlbGrammar);
    setMetadataFor(SrcLocation, 'SrcLocation', classMeta);

    //endregion
    function appendTo($this, appendable, prefix) {
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var x = prefix;
        var u = lowerBit(x).ushr_z7nmq8_k$(1);
        $l$loop: while (true) {
            var tmp = x;
            // Inline function 'kotlin.ULong.toLong' call
            // Inline function 'kotlin.ULong.minus' call
            // Inline function 'kotlin.ULong.shl' call
            var this_0 = _ULong___init__impl__c78o9k(new Long(1, 0));
            var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(63));
            // Inline function 'kotlin.ULong.minus' call
            // Inline function 'kotlin.UInt.toULong' call
            var this_2 = _UInt___init__impl__l7qpdl(1);
            var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_2)).and_4spn93_k$(new Long(-1, 0)));
            var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
            var tmp$ret$6 = _ULong___get_data__impl__fggpzb(this_3);
            if (!!tmp.and_4spn93_k$(tmp$ret$6).equals(new Long(0, 0))) {
                break $l$loop;
            }
            appendable.append_jgojdo_k$(x.ushr_z7nmq8_k$(63).toString());
            x = x.shl_bg8if3_k$(1);
        }
        appendable.append_jgojdo_k$(' t=').append_jgojdo_k$($this.tag_1.toString());
        appendable.append_jgojdo_k$('; dt=').append_jgojdo_k$($this.downTag_1.toString());
        appendable.append_jgojdo_k$('; ud=').append_jgojdo_k$($this.usefulDeath_1.toString());
        // Inline function 'kotlin.text.appendLine' call
        appendable.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        var tmp0_safe_receiver = $this.left_1;
        if (tmp0_safe_receiver == null)
            null;
        else {
            appendTo(tmp0_safe_receiver, appendable, prefix.minus_mfbszm_k$(u));
        }
        var tmp1_safe_receiver = $this.right_1;
        if (tmp1_safe_receiver == null)
            null;
        else {
            appendTo(tmp1_safe_receiver, appendable, prefix.plus_r93sks_k$(u));
        }
        return Unit_getInstance();
    }

    function appendTo$default($this, appendable, prefix, $super) {
        var tmp;
        if (prefix === VOID) {
            // Inline function 'kotlin.ULong.toLong' call
            // Inline function 'kotlin.ULong.shl' call
            var this_0 = _ULong___init__impl__c78o9k(new Long(1, 0));
            var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(63));
            tmp = _ULong___get_data__impl__fggpzb(this_1);
        } else {
            tmp = prefix;
        }
        prefix = tmp;
        return appendTo($this, appendable, prefix);
    }

    function Companion() {
        Companion_instance = this;
    }

    protoOf(Companion).insertPath_6s79qg_k$ = function (root, path, tag) {
        var tmp;
        if (path.equals(new Long(0, 0)) ? true : tag.equals(new Long(0, 0))) {
            tmp = root;
        } else {
            if (!(root == null)) {
                tmp = root.set_3v7r1e_k$(path, tag);
            } else {
                // Inline function 'kotlin.ULong.and' call
                // Inline function 'kotlin.toULong' call
                var this_0 = _ULong___init__impl__c78o9k(path);
                // Inline function 'kotlin.ULong.minus' call
                // Inline function 'kotlin.ULong.shl' call
                var this_1 = _ULong___init__impl__c78o9k(new Long(1, 0));
                var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).shl_bg8if3_k$(63));
                // Inline function 'kotlin.ULong.minus' call
                // Inline function 'kotlin.UInt.toULong' call
                var this_3 = _UInt___init__impl__l7qpdl(1);
                var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_3)).and_4spn93_k$(new Long(-1, 0)));
                var other_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
                var tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
                if (equals(tmp$ret$5, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
                    tmp = new BinTrie(tag);
                } else {
                    if (path.compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
                        tmp = new BinTrie(VOID, this.insertPath_6s79qg_k$(null, path.shl_bg8if3_k$(1), tag));
                    } else {
                        tmp = new BinTrie(VOID, VOID, this.insertPath_6s79qg_k$(null, path.shl_bg8if3_k$(1), tag));
                    }
                }
            }
        }
        return tmp;
    };
    protoOf(Companion).insertPaths_b2a69v_k$ = function (root, paths, tag) {
        var result = root;
        if (!tag.equals(new Long(0, 0))) {
            var tmp0_iterator = paths.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var x = tmp0_iterator.next_20eer_k$();
                result = this.insertPath_6s79qg_k$(result, x, tag);
            }
        }
        return result;
    };
    var Companion_instance;

    function Companion_getInstance() {
        if (Companion_instance == null)
            new Companion();
        return Companion_instance;
    }

    function BinTrie(tag, left, right) {
        Companion_getInstance();
        tag = tag === VOID ? new Long(0, 0) : tag;
        left = left === VOID ? null : left;
        right = right === VOID ? null : right;
        this.tag_1 = tag;
        this.left_1 = left;
        this.right_1 = right;
        var tmp = this;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.BinTrie.downTag.<anonymous>' call
        var result = this.tag_1;
        if (!(this.left_1 == null)) {
            result = result.or_v7fvkl_k$(this.left_1.downTag_1);
        }
        if (!(this.right_1 == null)) {
            result = result.or_v7fvkl_k$(this.right_1.downTag_1);
        }
        tmp.downTag_1 = result;
        var tmp_0 = this;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.BinTrie.usefulDeath.<anonymous>' call
        // Inline function 'kotlin.math.max' call
        var tmp0_safe_receiver = this.left_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.usefulDeath_1;
        var a = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var tmp2_safe_receiver = this.right_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.usefulDeath_1;
        var b = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
        var child = Math.max(a, b);
        var tmp_1;
        if (child > 0) {
            tmp_1 = child + 1 | 0;
        } else {
            var tmp_2;
            if (((!(this.left_1 == null) ? !(this.right_1 == null) : false) ? !this.left_1.downTag_1.and_4spn93_k$(this.right_1.downTag_1.inv_28kx_k$()).equals(new Long(0, 0)) : false) ? !this.right_1.downTag_1.and_4spn93_k$(this.left_1.downTag_1.inv_28kx_k$()).equals(new Long(0, 0)) : false) {
                tmp_2 = 1;
            } else {
                tmp_2 = 0;
            }
            tmp_1 = tmp_2;
        }
        tmp_0.usefulDeath_1 = tmp_1;
    }

    protoOf(BinTrie).get_tag_18ivnz_k$ = function () {
        return this.tag_1;
    };
    protoOf(BinTrie).get_left_woprgw_k$ = function () {
        return this.left_1;
    };
    protoOf(BinTrie).get_right_ixz7xv_k$ = function () {
        return this.right_1;
    };
    protoOf(BinTrie).get_downTag_vtashb_k$ = function () {
        return this.downTag_1;
    };
    protoOf(BinTrie).get_usefulDeath_fltwbv_k$ = function () {
        return this.usefulDeath_1;
    };
    protoOf(BinTrie).set_3v7r1e_k$ = function (path, newTag) {
        if (path.equals(new Long(0, 0)) ? true : newTag.equals(new Long(0, 0)))
            return this;
        var left = this.left_1;
        var right = this.right_1;
        var tag = this.tag_1;
        // Inline function 'kotlin.ULong.and' call
        // Inline function 'kotlin.toULong' call
        var this_0 = _ULong___init__impl__c78o9k(path);
        // Inline function 'kotlin.ULong.minus' call
        // Inline function 'kotlin.ULong.shl' call
        var this_1 = _ULong___init__impl__c78o9k(new Long(1, 0));
        var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).shl_bg8if3_k$(63));
        // Inline function 'kotlin.ULong.minus' call
        // Inline function 'kotlin.UInt.toULong' call
        var this_3 = _UInt___init__impl__l7qpdl(1);
        var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_3)).and_4spn93_k$(new Long(-1, 0)));
        var other_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
        var tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
        if (equals(tmp$ret$5, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
            tag = tag.or_v7fvkl_k$(newTag);
            return new BinTrie(tag, left, right);
        } else {
            if (path.compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
                left = Companion_getInstance().insertPath_6s79qg_k$(left, path.shl_bg8if3_k$(1), newTag);
            } else {
                right = Companion_getInstance().insertPath_6s79qg_k$(right, path.shl_bg8if3_k$(1), newTag);
            }
        }
        if (!(left == null) ? !(right == null) : false) {
            tag = tag.or_v7fvkl_k$(left.tag_1.and_4spn93_k$(right.tag_1));
        }
        return new BinTrie(tag, left, right);
    };
    protoOf(BinTrie).get_ugtq3c_k$ = function (path) {
        var tmp;
        if (path.equals(new Long(0, 0))) {
            tmp = null;
        } else {
            // Inline function 'kotlin.ULong.and' call
            // Inline function 'kotlin.toULong' call
            var this_0 = _ULong___init__impl__c78o9k(path);
            // Inline function 'kotlin.ULong.minus' call
            // Inline function 'kotlin.ULong.shl' call
            var this_1 = _ULong___init__impl__c78o9k(new Long(1, 0));
            var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).shl_bg8if3_k$(63));
            // Inline function 'kotlin.ULong.minus' call
            // Inline function 'kotlin.UInt.toULong' call
            var this_3 = _UInt___init__impl__l7qpdl(1);
            var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_3)).and_4spn93_k$(new Long(-1, 0)));
            var other_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
            var tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
            if (equals(tmp$ret$5, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
                tmp = this;
            } else {
                if (path.compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
                    var tmp0_safe_receiver = this.left_1;
                    tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_ugtq3c_k$(path.shl_bg8if3_k$(1));
                } else {
                    var tmp1_safe_receiver = this.right_1;
                    tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_ugtq3c_k$(path.shl_bg8if3_k$(1));
                }
            }
        }
        return tmp;
    };
    protoOf(BinTrie).findConflictPath_j0gi0g_k$ = function (colors, mask) {
        var c = colors.or_v7fvkl_k$(this.tag_1.and_4spn93_k$(mask));
        var tmp;
        if (this.left_1 == null ? this.right_1 == null : false) {
            var tmp_0;
            // Inline function 'kotlin.Long.minus' call
            var tmp$ret$0 = c.minus_mfbszm_k$(toLong(1));
            if (!c.and_4spn93_k$(tmp$ret$0).equals(new Long(0, 0))) {
                // Inline function 'kotlin.ULong.toLong' call
                // Inline function 'kotlin.ULong.shl' call
                var this_0 = _ULong___init__impl__c78o9k(new Long(1, 0));
                var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(63));
                tmp_0 = _ULong___get_data__impl__fggpzb(this_1);
            } else {
                tmp_0 = new Long(0, 0);
            }
            tmp = tmp_0;
        } else if (this.left_1 == null) {
            var tmp_1;
            // Inline function 'kotlin.Long.minus' call
            var tmp$ret$3 = c.minus_mfbszm_k$(toLong(1));
            if (!c.and_4spn93_k$(tmp$ret$3).equals(new Long(0, 0))) {
                tmp_1 = new Long(0, 1073741824);
            } else {
                var tmp0_safe_receiver = this.right_1;
                var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.findConflictPath_j0gi0g_k$(c, mask);
                var x = tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs;
                tmp_1 = !x.equals(new Long(0, 0)) ? x.ushr_z7nmq8_k$(1).or_v7fvkl_k$(new Long(0, -2147483648)) : new Long(0, 0);
            }
            tmp = tmp_1;
        } else if (this.right_1 == null) {
            var tmp_2;
            // Inline function 'kotlin.Long.minus' call
            var tmp$ret$4 = c.minus_mfbszm_k$(toLong(1));
            if (!c.and_4spn93_k$(tmp$ret$4).equals(new Long(0, 0))) {
                tmp_2 = new Long(0, -1073741824);
            } else {
                tmp_2 = this.left_1.findConflictPath_j0gi0g_k$(c, mask).ushr_z7nmq8_k$(1);
            }
            tmp = tmp_2;
        } else {
            var x_0 = this.left_1.findConflictPath_j0gi0g_k$(c, mask);
            var y = this.right_1.findConflictPath_j0gi0g_k$(c, mask);
            var tmp_3;
            if (lowerBit(y).compareTo_9jj042_k$(lowerBit(x_0)) > 0) {
                tmp_3 = y.ushr_z7nmq8_k$(1).or_v7fvkl_k$(new Long(0, -2147483648));
            } else {
                tmp_3 = x_0.ushr_z7nmq8_k$(1);
            }
            tmp = tmp_3;
        }
        return tmp;
    };
    protoOf(BinTrie).findConflictPath$default_tcesif_k$ = function (colors, mask, $super) {
        colors = colors === VOID ? new Long(0, 0) : colors;
        mask = mask === VOID ? new Long(-1, -1) : mask;
        return $super === VOID ? this.findConflictPath_j0gi0g_k$(colors, mask) : $super.findConflictPath_j0gi0g_k$.call(this, colors, mask);
    };
    protoOf(BinTrie).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.BinTrie.toString.<anonymous>' call
        appendTo$default(this, this_0);
        return this_0.toString();
    };
    protoOf(BinTrie).component1_7eebsc_k$ = function () {
        return this.tag_1;
    };
    protoOf(BinTrie).component2_7eebsb_k$ = function () {
        return this.left_1;
    };
    protoOf(BinTrie).component3_7eebsa_k$ = function () {
        return this.right_1;
    };
    protoOf(BinTrie).copy_an8dbn_k$ = function (tag, left, right) {
        return new BinTrie(tag, left, right);
    };
    protoOf(BinTrie).copy$default_rn764j_k$ = function (tag, left, right, $super) {
        tag = tag === VOID ? this.tag_1 : tag;
        left = left === VOID ? this.left_1 : left;
        right = right === VOID ? this.right_1 : right;
        return $super === VOID ? this.copy_an8dbn_k$(tag, left, right) : $super.copy_an8dbn_k$.call(this, tag, left, right);
    };
    protoOf(BinTrie).hashCode = function () {
        var result = this.tag_1.hashCode();
        result = imul(result, 31) + (this.left_1 == null ? 0 : this.left_1.hashCode()) | 0;
        result = imul(result, 31) + (this.right_1 == null ? 0 : this.right_1.hashCode()) | 0;
        return result;
    };
    protoOf(BinTrie).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof BinTrie))
            return false;
        var tmp0_other_with_cast = other instanceof BinTrie ? other : THROW_CCE();
        if (!this.tag_1.equals(tmp0_other_with_cast.tag_1))
            return false;
        if (!equals(this.left_1, tmp0_other_with_cast.left_1))
            return false;
        if (!equals(this.right_1, tmp0_other_with_cast.right_1))
            return false;
        return true;
    };

    function get_ALL() {
        return ALL;
    }

    var ALL;

    function Interval_init_$Init$(z, $this) {
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$0 = z.minus_mfbszm_k$(toLong(1));
        var tmp = z.and_4spn93_k$(tmp$ret$0);
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$1 = z.minus_mfbszm_k$(toLong(1));
        Interval.call($this, z, tmp, z.or_v7fvkl_k$(tmp$ret$1));
        return $this;
    }

    function Interval_init_$Create$(z) {
        return Interval_init_$Init$(z, objectCreate(protoOf(Interval)));
    }

    function _get_pfx__e6eowf($this) {
        return $this.pfx_1;
    }

    function BitPfxCollection_init_$Init$($this) {
        BitPfxCollection.call($this, ArrayList_init_$Create$());
        return $this;
    }

    function BitPfxCollection_init_$Create$() {
        return BitPfxCollection_init_$Init$(objectCreate(protoOf(BitPfxCollection)));
    }

    function BitPfxCollection_init_$Init$_0(pfx, $this) {
        // Inline function 'kotlin.apply' call
        var this_0 = ArrayList_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.BitPfxCollection.<init>.<anonymous>' call
        this_0.add_utx5q5_k$(pfx);
        BitPfxCollection.call($this, this_0);
        return $this;
    }

    function BitPfxCollection_init_$Create$_0(pfx) {
        return BitPfxCollection_init_$Init$_0(pfx, objectCreate(protoOf(BitPfxCollection)));
    }

    function Interval(z, a, b) {
        this.z_1 = z;
        this.a_1 = a;
        this.b_1 = b;
    }

    protoOf(Interval).get_z_1mhr69_k$ = function () {
        return this.z_1;
    };
    protoOf(Interval).get_a_1mhr5k_k$ = function () {
        return this.a_1;
    };
    protoOf(Interval).get_b_1mhr5l_k$ = function () {
        return this.b_1;
    };
    protoOf(Interval).contains_s5chu7_k$ = function (other) {
        return this.a_1.compareTo_9jj042_k$(other.a_1) <= 0 ? other.b_1.compareTo_9jj042_k$(this.b_1) <= 0 : false;
    };
    protoOf(Interval).component1_7eebsc_k$ = function () {
        return this.z_1;
    };
    protoOf(Interval).component2_7eebsb_k$ = function () {
        return this.a_1;
    };
    protoOf(Interval).component3_7eebsa_k$ = function () {
        return this.b_1;
    };
    protoOf(Interval).copy_irvfc7_k$ = function (z, a, b) {
        return new Interval(z, a, b);
    };
    protoOf(Interval).copy$default_kgp7um_k$ = function (z, a, b, $super) {
        z = z === VOID ? this.z_1 : z;
        a = a === VOID ? this.a_1 : a;
        b = b === VOID ? this.b_1 : b;
        return $super === VOID ? this.copy_irvfc7_k$(z, a, b) : $super.copy_irvfc7_k$.call(this, z, a, b);
    };
    protoOf(Interval).toString = function () {
        return 'Interval(z=' + this.z_1.toString() + ', a=' + this.a_1.toString() + ', b=' + this.b_1.toString() + ')';
    };
    protoOf(Interval).hashCode = function () {
        var result = this.z_1.hashCode();
        result = imul(result, 31) + this.a_1.hashCode() | 0;
        result = imul(result, 31) + this.b_1.hashCode() | 0;
        return result;
    };
    protoOf(Interval).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Interval))
            return false;
        var tmp0_other_with_cast = other instanceof Interval ? other : THROW_CCE();
        if (!this.z_1.equals(tmp0_other_with_cast.z_1))
            return false;
        if (!this.a_1.equals(tmp0_other_with_cast.a_1))
            return false;
        if (!this.b_1.equals(tmp0_other_with_cast.b_1))
            return false;
        return true;
    };

    function Companion_0() {
        Companion_instance_0 = this;
    }

    protoOf(Companion_0).all_22ld_k$ = function () {
        return BitPfxCollection_init_$Create$_0(new Long(0, -2147483648));
    };
    var Companion_instance_0;

    function Companion_getInstance_0() {
        if (Companion_instance_0 == null)
            new Companion_0();
        return Companion_instance_0;
    }

    function BitPfxCollection(pfx) {
        Companion_getInstance_0();
        this.pfx_1 = pfx;
    }

    protoOf(BitPfxCollection).isEmpty_y1axqb_k$ = function () {
        return this.pfx_1.isEmpty_y1axqb_k$();
    };
    protoOf(BitPfxCollection).iterator_jk1svi_k$ = function () {
        return this.pfx_1.iterator_jk1svi_k$();
    };
    protoOf(BitPfxCollection).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.BitPfxCollection.toString.<anonymous>' call
        var first = _Char___init__impl__6a9atx(123);
        var tmp0_iterator = this.pfx_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var value = tmp0_iterator.next_20eer_k$();
            this_0.append_am5a4z_k$(first);
            var v = value;
            $l$loop: while (true) {
                var tmp = v;
                // Inline function 'kotlin.ULong.toLong' call
                // Inline function 'kotlin.ULong.minus' call
                // Inline function 'kotlin.toULong' call
                var this_1 = new Long(0, -2147483648);
                var this_2 = _ULong___init__impl__c78o9k(this_1);
                // Inline function 'kotlin.ULong.minus' call
                // Inline function 'kotlin.UInt.toULong' call
                var this_3 = _UInt___init__impl__l7qpdl(1);
                var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_3)).and_4spn93_k$(new Long(-1, 0)));
                var this_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
                var tmp$ret$4 = _ULong___get_data__impl__fggpzb(this_4);
                if (!!tmp.and_4spn93_k$(tmp$ret$4).equals(new Long(0, 0))) {
                    break $l$loop;
                }
                this_0.append_8gl4h8_k$(v.ushr_z7nmq8_k$(63));
                v = v.shl_bg8if3_k$(1);
            }
            this_0.append_22ad7x_k$('*');
            first = _Char___init__impl__6a9atx(44);
        }
        if (first === _Char___init__impl__6a9atx(123)) {
            this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(123));
        }
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(125));
        return this_0.toString();
    };
    protoOf(BitPfxCollection).times_nfzjiw_k$ = function (prepend) {
        var p = prepend;
        if (p.equals(new Long(0, 0))) {
            return BitPfxCollection_init_$Create$();
        }
        if (p.equals(new Long(0, -2147483648))) {
            return this;
        }
        var result = new BitPfxCollection(ArrayList_init_$Create$_0(this.pfx_1.get_size_woubt6_k$()));
        var l = 63 - countTrailingZeroBits(prepend) | 0;
        var tmp = p;
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$0 = p.minus_mfbszm_k$(toLong(1));
        p = tmp.and_4spn93_k$(tmp$ret$0);
        var inductionVariable = 0;
        var last = this.pfx_1.get_size_woubt6_k$();
        if (inductionVariable < last)
            do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var z = this.pfx_1.get_c1px32_k$(i);
                var zw = lowerBit(z);
                z = z.ushr_z7nmq8_k$(l);
                z = z.or_v7fvkl_k$(p);
                if (zw.ushr_z7nmq8_k$(l).equals(new Long(0, 0))) {
                    z = z.or_v7fvkl_k$(new Long(1, 0));
                }
                result.plus_a407us_k$(z);
            }
            while (inductionVariable < last);
        return result;
    };
    protoOf(BitPfxCollection).plus_a407us_k$ = function (prefix) {
        var z = prefix;
        if (this.pfx_1.isEmpty_y1axqb_k$()) {
            this.pfx_1.add_utx5q5_k$(z);
            return Unit_getInstance();
        }
        var w = lowerBit(z);
        $l$loop: while (!(this.pfx_1.get_size_woubt6_k$() === 0)) {
            var b = last(this.pfx_1);
            var t = z.xor_qzz94j_k$(b);
            if (t.equals(new Long(0, 0))) {
                return Unit_getInstance();
            }
            if (!t.equals(w.shl_bg8if3_k$(1))) {
                break $l$loop;
            }
            z = z.minus_mfbszm_k$(w);
            w = w.shl_bg8if3_k$(1);
            removeLast(this.pfx_1);
        }
        this.pfx_1.add_utx5q5_k$(z);
    };
    protoOf(BitPfxCollection).plus_1ucpai_k$ = function (other) {
        if (other.isEmpty_y1axqb_k$()) {
            return this;
        }
        if (this.isEmpty_y1axqb_k$()) {
            return other;
        }
        var i = 0;
        var j = 0;
        var m = this.pfx_1.get_size_woubt6_k$();
        var n = other.pfx_1.get_size_woubt6_k$();
        var result = new BitPfxCollection(ArrayList_init_$Create$_0(m + n | 0));
        var u = Interval_init_$Create$(this.pfx_1.get_c1px32_k$(0));
        var v = Interval_init_$Create$(other.pfx_1.get_c1px32_k$(0));
        $l$loop_0: while (i < m ? j < n : false) {
            if (u.b_1.compareTo_9jj042_k$(v.b_1) < 0 ? true : u.b_1.equals(v.b_1) ? u.a_1.compareTo_9jj042_k$(v.a_1) >= 0 : false) {
                if (u.a_1.compareTo_9jj042_k$(v.a_1) < 0) {
                    result.plus_a407us_k$(u.z_1);
                }
                i = i + 1 | 0;
                if (i === m) {
                    break $l$loop_0;
                }
                u = Interval_init_$Create$(this.pfx_1.get_c1px32_k$(i));
            } else {
                if (v.a_1.compareTo_9jj042_k$(u.a_1) < 0) {
                    result.plus_a407us_k$(v.z_1);
                }
                j = j + 1 | 0;
                if (j === n) {
                    break $l$loop_0;
                }
                v = Interval_init_$Create$(other.pfx_1.get_c1px32_k$(j));
            }
        }
        while (i < m) {
            var tmp0 = i;
            i = tmp0 + 1 | 0;
            result.plus_a407us_k$(this.pfx_1.get_c1px32_k$(tmp0));
        }
        while (j < n) {
            var tmp1 = j;
            j = tmp1 + 1 | 0;
            result.plus_a407us_k$(other.pfx_1.get_c1px32_k$(tmp1));
        }
        return result;
    };

    function get_HEX_DIGITS() {
        return HEX_DIGITS;
    }

    var HEX_DIGITS;

    function Companion_1() {
        Companion_instance_1 = this;
    }

    protoOf(Companion_1).parse_3soltv_k$ = function (string) {
        return new ConstructorTag(this.parseValue_1llirs_k$(string));
    };
    protoOf(Companion_1).parseValue_1llirs_k$ = function (string) {
        // Inline function 'kotlin.text.isNullOrBlank' call
        // Inline function 'kotlin.contracts.contract' call
        if (string == null ? true : isBlank(string)) {
            return new Long(0, 0);
        }
        var value = new Long(0, 0);
        var bits = 0;
        var chars = 1;
        var tmp0_subject = charSequenceGet(string, 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(35)) {
            var inductionVariable = 1;
            var last = get_lastIndex(string);
            if (inductionVariable <= last)
                $l$loop: do {
                    var i = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    // Inline function 'kotlin.code' call
                    var this_0 = charSequenceGet(string, i);
                    var c = Char__toInt_impl_vasixd(this_0);
                    var tmp = c;
                    // Inline function 'kotlin.code' call
                    var this_1 = _Char___init__impl__6a9atx(95);
                    if (tmp === Char__toInt_impl_vasixd(this_1)) {
                        break $l$loop;
                    }
                    var tmp_0 = c;
                    var tmp2_subject = c;
                    var tmp_1;
                    // Inline function 'kotlin.code' call
                    var this_2 = _Char___init__impl__6a9atx(48);
                    var containsLower = Char__toInt_impl_vasixd(this_2);
                    var tmp_2;
                    // Inline function 'kotlin.code' call
                    var this_3 = _Char___init__impl__6a9atx(57);
                    if (tmp2_subject <= Char__toInt_impl_vasixd(this_3)) {
                        tmp_2 = containsLower <= tmp2_subject;
                    } else {
                        tmp_2 = false;
                    }
                    if (tmp_2) {
                        // Inline function 'kotlin.code' call
                        var this_4 = _Char___init__impl__6a9atx(48);
                        tmp_1 = Char__toInt_impl_vasixd(this_4);
                    } else {
                        // Inline function 'kotlin.code' call
                        var this_5 = _Char___init__impl__6a9atx(65);
                        var containsLower_0 = Char__toInt_impl_vasixd(this_5);
                        var tmp_3;
                        // Inline function 'kotlin.code' call
                        var this_6 = _Char___init__impl__6a9atx(70);
                        if (tmp2_subject <= Char__toInt_impl_vasixd(this_6)) {
                            tmp_3 = containsLower_0 <= tmp2_subject;
                        } else {
                            tmp_3 = false;
                        }
                        if (tmp_3) {
                            tmp_1 = 55;
                        } else {
                            // Inline function 'kotlin.code' call
                            var this_7 = _Char___init__impl__6a9atx(97);
                            var containsLower_1 = Char__toInt_impl_vasixd(this_7);
                            var tmp_4;
                            // Inline function 'kotlin.code' call
                            var this_8 = _Char___init__impl__6a9atx(102);
                            if (tmp2_subject <= Char__toInt_impl_vasixd(this_8)) {
                                tmp_4 = containsLower_1 <= tmp2_subject;
                            } else {
                                tmp_4 = false;
                            }
                            if (tmp_4) {
                                tmp_1 = 87;
                            } else {
                                return new Long(0, 0);
                            }
                        }
                    }
                    c = tmp_0 - tmp_1 | 0;
                    if (bits > 60) {
                        return new Long(0, 0);
                    }
                    value = value.or_v7fvkl_k$(toLong(c).shl_bg8if3_k$(60 - bits | 0));
                    bits = bits + 4 | 0;
                    chars = chars + 1 | 0;
                }
                while (!(i === last));
        } else if (tmp0_subject === _Char___init__impl__6a9atx(36)) {
            if (!(charSequenceGet(string, 1) === _Char___init__impl__6a9atx(95))) {
                var inductionVariable_0 = 1;
                var last_0 = get_lastIndex(string);
                if (inductionVariable_0 <= last_0)
                    do {
                        var i_0 = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'kotlin.code' call
                        var this_9 = charSequenceGet(string, i_0);
                        var tmp_5 = Char__toInt_impl_vasixd(this_9);
                        // Inline function 'kotlin.code' call
                        var this_10 = _Char___init__impl__6a9atx(48);
                        var c_0 = tmp_5 - Char__toInt_impl_vasixd(this_10) | 0;
                        if (!((c_0 & -2) === 0)) {
                            return new Long(0, 0);
                        }
                        if (bits > 63) {
                            return new Long(0, 0);
                        }
                        value = value.or_v7fvkl_k$(toLong(c_0).shl_bg8if3_k$(63 - bits | 0));
                        bits = bits + 1 | 0;
                        chars = chars + 1 | 0;
                    }
                    while (!(i_0 === last_0));
            }
        } else
            return new Long(0, 0);
        if (chars < get_lastIndex(string)) {
            return new Long(0, 0);
        }
        if (chars === (get_lastIndex(string) & bits)) {
            while (!(bits === 0) ? value.ushr_z7nmq8_k$(64 - bits | 0).and_4spn93_k$(new Long(1, 0)).equals(new Long(0, 0)) : false) {
                bits = bits - 1 | 0;
            }
            if (!(bits === 0)) {
                bits = bits - 1 | 0;
            }
        }
        if (bits === 64) {
            return new Long(0, 0);
        }
        value = value.or_v7fvkl_k$((new Long(1, 0)).shl_bg8if3_k$(63 - bits | 0));
        return value;
    };
    var Companion_instance_1;

    function Companion_getInstance_1() {
        if (Companion_instance_1 == null)
            new Companion_1();
        return Companion_instance_1;
    }

    function ConstructorTag(value) {
        Companion_getInstance_1();
        this.value_1 = value;
    }

    protoOf(ConstructorTag).get_value_j01efc_k$ = function () {
        return this.value_1;
    };
    protoOf(ConstructorTag).get_size_woubt6_k$ = function () {
        var tmp;
        if (!this.value_1.equals(new Long(0, 0))) {
            tmp = Companion_getInstance_2().fixedSize_141yqr_k$(63 - countTrailingZeroBits(this.value_1) | 0);
        } else {
            tmp = Companion_getInstance_2().fixedSize_141yqr_k$(0);
        }
        return tmp;
    };
    protoOf(ConstructorTag).isEmpty_y1axqb_k$ = function () {
        return this.value_1.equals(new Long(0, 0));
    };
    protoOf(ConstructorTag).toString = function () {
        if (this.isEmpty_y1axqb_k$()) {
            return '';
        }
        var tmp;
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$0 = (new Long(0, 134217728)).minus_mfbszm_k$(toLong(1));
        if (this.value_1.and_4spn93_k$(tmp$ret$0).equals(new Long(0, 0))) {
            tmp = '$' + this.toBinary_xfaf6k_k$();
        } else {
            tmp = '#' + this.toHex_1tsk9s_k$();
        }
        return tmp;
    };
    protoOf(ConstructorTag).toBinary_xfaf6k_k$ = function () {
        if (this.isEmpty_y1axqb_k$()) {
            return '';
        }
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.ConstructorTag.toBinary.<anonymous>' call
        var c = 0;
        var tag = this.value_1;
        $l$loop: while (true) {
            var tmp = tag;
            // Inline function 'kotlin.ULong.toLong' call
            // Inline function 'kotlin.ULong.minus' call
            // Inline function 'kotlin.ULong.shl' call
            var this_1 = _ULong___init__impl__c78o9k(new Long(1, 0));
            var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).shl_bg8if3_k$(63));
            var other = _ULong___init__impl__c78o9k(new Long(1, 0));
            var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
            var tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_3);
            if (!!tmp.and_4spn93_k$(tmp$ret$2).equals(new Long(0, 0))) {
                break $l$loop;
            }
            this_0.append_8gl4h8_k$(tag.ushr_z7nmq8_k$(63));
            tag = tag.shl_bg8if3_k$(1);
            c = c + 1 | 0;
        }
        if (c === 0) {
            this_0.append_22ad7x_k$('_');
        }
        return this_0.toString();
    };
    protoOf(ConstructorTag).toHex_1tsk9s_k$ = function () {
        if (this.isEmpty_y1axqb_k$()) {
            return '';
        }
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.ConstructorTag.toHex.<anonymous>' call
        var tag = this.value_1;
        $l$loop: while (true) {
            var tmp = tag;
            // Inline function 'kotlin.ULong.toLong' call
            // Inline function 'kotlin.ULong.minus' call
            // Inline function 'kotlin.ULong.shl' call
            var this_1 = _ULong___init__impl__c78o9k(new Long(1, 0));
            var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).shl_bg8if3_k$(63));
            var other = _ULong___init__impl__c78o9k(new Long(1, 0));
            var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
            var tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_3);
            if (!!tmp.and_4spn93_k$(tmp$ret$2).equals(new Long(0, 0))) {
                break $l$loop;
            }
            this_0.append_am5a4z_k$(charSequenceGet(HEX_DIGITS, tag.ushr_z7nmq8_k$(60).toInt_1tsl84_k$()));
            tag = tag.shl_bg8if3_k$(4);
        }
        if (tag.equals(new Long(0, 0))) {
            this_0.append_22ad7x_k$('_');
        }
        return this_0.toString();
    };

    function isNullOrEmpty(_this__u8e3s4) {
        // Inline function 'kotlin.contracts.contract' call
        return _this__u8e3s4 == null ? true : _this__u8e3s4.value_1.equals(new Long(0, 0));
    }

    function get_size_0(_this__u8e3s4) {
        var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.get_size_woubt6_k$();
        return tmp1_elvis_lhs == null ? Companion_getInstance_2().fixedSize_141yqr_k$(0) : tmp1_elvis_lhs;
    }

    function bitsNegate(_this__u8e3s4) {
        // Inline function 'kotlin.Long.plus' call
        return _this__u8e3s4.inv_28kx_k$().plus_r93sks_k$(toLong(1));
    }

    function lowerBit(_this__u8e3s4) {
        return _this__u8e3s4.and_4spn93_k$(bitsNegate(_this__u8e3s4));
    }

    function isPossible($this, maxSize, minSize) {
        return toLong(maxSize - minSize | 0).and_4spn93_k$(new Long(-2147483520, 0)).equals(new Long(0, 0));
    }

    function normalize($this, value) {
        var v = value;
        v = normalize_0($this, v, new Long(248, 0), new Long(7, 0));
        v = normalize_0($this, v, new Long(-524288, 0), new Long(524032, 0));
        v = normalize_0($this, v, new Long(0, 248), new Long(0, 7));
        v = normalize_0($this, v, new Long(0, -524288), new Long(0, 524032));
        return v;
    }

    function normalize_0($this, value, a, b) {
        if (!value.and_4spn93_k$(a).equals(new Long(0, 0))) {
            return value.or_v7fvkl_k$(a.or_v7fvkl_k$(b)).minus_mfbszm_k$(a);
        }
        return value;
    }

    function MinMaxSize_init_$Init$(minRefs, minBits, maxRefs, maxBits, $this) {
        // Inline function 'kotlin.Long.times' call
        var tmp = toLong(minBits).times_nfzjiw_k$(toLong(256)).plus_r93sks_k$(toLong(minRefs)).shl_bg8if3_k$(32);
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$1 = toLong(maxBits).times_nfzjiw_k$(toLong(256));
        MinMaxSize.call($this, tmp.plus_r93sks_k$(tmp$ret$1.plus_r93sks_k$(toLong(maxRefs))));
        return $this;
    }

    function MinMaxSize_init_$Create$(minRefs, minBits, maxRefs, maxBits) {
        return MinMaxSize_init_$Init$(minRefs, minBits, maxRefs, maxBits, objectCreate(protoOf(MinMaxSize)));
    }

    function Companion_2() {
        Companion_instance_2 = this;
        this.MAX_SIZE_CELL_1 = 261892;
        this.BITS_MASK_1 = new Long(2047, 0);
        this.MAX_REFS_MASK_1 = new Long(7, 0);
        this.ONE_REF_1 = new MinMaxSize(new Long(1, 1));
        this.ANY_1 = new MinMaxSize(new Long(524039, 0));
        this.IMPOSSIBLE_1 = new MinMaxSize(new Long(0, 524039));
    }

    protoOf(Companion_2).get_MAX_SIZE_CELL_k3kol8_k$ = function () {
        return this.MAX_SIZE_CELL_1;
    };
    protoOf(Companion_2).get_BITS_MASK_76tmw4_k$ = function () {
        return this.BITS_MASK_1;
    };
    protoOf(Companion_2).get_MAX_REFS_MASK_2xmf53_k$ = function () {
        return this.MAX_REFS_MASK_1;
    };
    protoOf(Companion_2).get_ONE_REF_8ottyn_k$ = function () {
        return this.ONE_REF_1;
    };
    protoOf(Companion_2).get_ANY_18jxy5_k$ = function () {
        return this.ANY_1;
    };
    protoOf(Companion_2).get_IMPOSSIBLE_ngqwim_k$ = function () {
        return this.IMPOSSIBLE_1;
    };
    protoOf(Companion_2).convertSize_3is96k_k$ = function (z) {
        return (z & 255) << 16 | (z >>> 8 | 0);
    };
    protoOf(Companion_2).fixedSize_141yqr_k$ = function (size) {
        return new MinMaxSize(toLong(size).times_nfzjiw_k$(new Long(256, 256)));
    };
    protoOf(Companion_2).range_gh83gj_k$ = function (minSize, maxSize) {
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$0 = toLong(minSize).shl_bg8if3_k$(32).plus_r93sks_k$(toLong(maxSize));
        return new MinMaxSize(tmp$ret$0.shl_bg8if3_k$(8));
    };
    var Companion_instance_2;

    function Companion_getInstance_2() {
        if (Companion_instance_2 == null)
            new Companion_2();
        return Companion_instance_2;
    }

    function toString$_anonymous_$appendSize_x4gjbe($this_buildString, bits, refs) {
        if (bits >= 1024 ? refs >= 7 : false) {
            $this_buildString.append_22ad7x_k$('Inf');
        } else {
            $this_buildString.append_uppzia_k$(bits);
            if (refs > 0) {
                $this_buildString.append_22ad7x_k$('+');
                $this_buildString.append_uppzia_k$(refs);
                $this_buildString.append_22ad7x_k$('R');
            }
        }
    }

    function MinMaxSize(value) {
        Companion_getInstance_2();
        this.value_1 = value;
    }

    protoOf(MinMaxSize).get_value_j01efc_k$ = function () {
        return this.value_1;
    };
    protoOf(MinMaxSize).get_minSize_iuykcq_k$ = function () {
        return this.value_1.ushr_z7nmq8_k$(32).toInt_1tsl84_k$();
    };
    protoOf(MinMaxSize).get_maxSize_f83j4s_k$ = function () {
        return this.value_1.and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    };
    protoOf(MinMaxSize).get_maxRefs_f82spn_k$ = function () {
        return this.value_1.and_4spn93_k$(new Long(255, 0)).toInt_1tsl84_k$();
    };
    protoOf(MinMaxSize).get_maxBits_f7so81_k$ = function () {
        return this.value_1.ushr_z7nmq8_k$(8).and_4spn93_k$(new Long(2047, 0)).toInt_1tsl84_k$();
    };
    protoOf(MinMaxSize).get_minRefs_iuxtxl_k$ = function () {
        return this.value_1.ushr_z7nmq8_k$(32).and_4spn93_k$(new Long(255, 0)).toInt_1tsl84_k$();
    };
    protoOf(MinMaxSize).get_minBits_iunpfz_k$ = function () {
        return this.value_1.ushr_z7nmq8_k$(40).and_4spn93_k$(new Long(2047, 0)).toInt_1tsl84_k$();
    };
    protoOf(MinMaxSize).isFixed_y1sbxm_k$ = function () {
        return this.get_minSize_iuykcq_k$() === this.get_maxSize_f83j4s_k$();
    };
    protoOf(MinMaxSize).fitsIntoCell_tpkr5o_k$ = function () {
        return isPossible(Companion_getInstance_2(), 261892, this.get_minSize_iuykcq_k$());
    };
    protoOf(MinMaxSize).isPossible_lrpl1_k$ = function () {
        return isPossible(Companion_getInstance_2(), this.get_maxSize_f83j4s_k$(), this.get_minSize_iuykcq_k$());
    };
    protoOf(MinMaxSize).normalize_3wvcwd_k$ = function () {
        return new MinMaxSize(normalize(Companion_getInstance_2(), this.value_1));
    };
    protoOf(MinMaxSize).withoutMin_lor6vq_k$ = function () {
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$0 = (new Long(0, 1)).minus_mfbszm_k$(toLong(1));
        return new MinMaxSize(this.value_1.and_4spn93_k$(tmp$ret$0));
    };
    protoOf(MinMaxSize).plus_vnukzl_k$ = function (other) {
        return new MinMaxSize(normalize(Companion_getInstance_2(), this.value_1.plus_r93sks_k$(other.value_1)));
    };
    protoOf(MinMaxSize).or_vgl29k_k$ = function (other) {
        // Inline function 'kotlin.math.min' call
        var a = this.get_minRefs_iuxtxl_k$();
        var b = other.get_minRefs_iuxtxl_k$();
        var tmp = Math.min(a, b);
        // Inline function 'kotlin.math.min' call
        var a_0 = this.get_minBits_iunpfz_k$();
        var b_0 = other.get_minBits_iunpfz_k$();
        var tmp_0 = Math.min(a_0, b_0);
        // Inline function 'kotlin.math.max' call
        var a_1 = this.get_maxRefs_f82spn_k$();
        var b_1 = other.get_maxRefs_f82spn_k$();
        var tmp_1 = Math.max(a_1, b_1);
        // Inline function 'kotlin.math.max' call
        var a_2 = this.get_maxBits_f7so81_k$();
        var b_2 = other.get_maxBits_f7so81_k$();
        var tmp$ret$3 = Math.max(a_2, b_2);
        return MinMaxSize_init_$Create$(tmp, tmp_0, tmp_1, tmp$ret$3);
    };
    protoOf(MinMaxSize).times_kr2a3y_k$ = function (count) {
        var tmp;
        switch (count) {
            case 0:
                tmp = new MinMaxSize(new Long(0, 0));
                break;
            case 1:
                tmp = this;
                break;
            default:
                // Inline function 'kotlin.math.min' call

                var a = imul(this.get_minRefs_iuxtxl_k$(), count);
                var tmp_0 = Math.min(a, 7);
                // Inline function 'kotlin.math.min' call

                var a_0 = imul(this.get_minBits_iunpfz_k$(), count);
                var tmp_1 = Math.min(a_0, 2047);
                // Inline function 'kotlin.math.min' call

                var a_1 = imul(this.get_maxRefs_f82spn_k$(), count);
                var tmp_2 = Math.min(a_1, 7);
                // Inline function 'kotlin.math.min' call

                var a_2 = imul(this.get_maxBits_f7so81_k$(), count);
                var tmp$ret$3 = Math.min(a_2, 2047);
                tmp = MinMaxSize_init_$Create$(tmp_0, tmp_1, tmp_2, tmp$ret$3);
                break;
        }
        return tmp;
    };
    protoOf(MinMaxSize).timesAtLeast_sp8ewo_k$ = function (count) {
        // Inline function 'kotlin.math.min' call
        // Inline function 'kotlin.math.max' call
        var a = Math.max(count, 0);
        var clampedCount = Math.min(a, 1024);
        // Inline function 'kotlin.math.min' call
        var a_0 = imul(this.get_minRefs_iuxtxl_k$(), clampedCount);
        var tmp = Math.min(a_0, 7);
        // Inline function 'kotlin.math.min' call
        var a_1 = imul(this.get_minBits_iunpfz_k$(), clampedCount);
        var tmp$ret$3 = Math.min(a_1, 2047);
        return MinMaxSize_init_$Create$(tmp, tmp$ret$3, !(this.get_maxRefs_f82spn_k$() === 0) ? 7 : 0, !(this.get_maxBits_f7so81_k$() === 0) ? 2047 : 0);
    };
    protoOf(MinMaxSize).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.MinMaxSize.toString.<anonymous>' call
        var fixed = this.isFixed_y1sbxm_k$();
        if (fixed) {
            this_0.append_22ad7x_k$('=');
        }
        toString$_anonymous_$appendSize_x4gjbe(this_0, this.get_minBits_iunpfz_k$(), this.get_minRefs_iuxtxl_k$());
        if (!fixed) {
            this_0.append_22ad7x_k$('..');
            toString$_anonymous_$appendSize_x4gjbe(this_0, this.get_maxBits_f7so81_k$(), this.get_maxRefs_f82spn_k$());
        }
        return this_0.toString();
    };
    protoOf(MinMaxSize).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof MinMaxSize))
            return false;
        if (!this.value_1.equals(other.value_1))
            return false;
        return true;
    };
    protoOf(MinMaxSize).hashCode = function () {
        return this.value_1.hashCode();
    };

    function get_ADD_TABLE() {
        _init_properties_SizeTables_kt__7z0k7u();
        return ADD_TABLE;
    }

    var ADD_TABLE;

    function get_MUL_TABLE() {
        _init_properties_SizeTables_kt__7z0k7u();
        return MUL_TABLE;
    }

    var MUL_TABLE;

    function get_GET_BIT_TABLE() {
        _init_properties_SizeTables_kt__7z0k7u();
        return GET_BIT_TABLE;
    }

    var GET_BIT_TABLE;

    function abstractAdd(x, y) {
        _init_properties_SizeTables_kt__7z0k7u();
        return get_ADD_TABLE()[x & 15][y & 15];
    }

    function abstractMul(x, y) {
        _init_properties_SizeTables_kt__7z0k7u();
        return get_MUL_TABLE()[x & 15][y & 15];
    }

    function abstractGetBit(x, y) {
        _init_properties_SizeTables_kt__7z0k7u();
        return get_GET_BIT_TABLE()[x & 15][y & 15];
    }

    function abstractNatConst(value) {
        _init_properties_SizeTables_kt__7z0k7u();
        return 1 << ((value & 1) + (value >= 2 ? 2 : 0) | 0);
    }

    function computeSemilatTable(baseTable) {
        _init_properties_SizeTables_kt__7z0k7u();
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(16), null);
        while (tmp < 16) {
            tmp_0[tmp] = new Int8Array(16);
            tmp = tmp + 1 | 0;
        }
        var table = tmp_0;
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < 16)
            do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'org.ton.tlb.computeSemilatTable.<anonymous>' call
                // Inline function 'kotlin.repeat' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < 16)
                    do {
                        var index_0 = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'org.ton.tlb.computeSemilatTable.<anonymous>.<anonymous>' call
                        var res = 0;
                        // Inline function 'kotlin.repeat' call
                        // Inline function 'kotlin.contracts.contract' call
                        var inductionVariable_1 = 0;
                        if (inductionVariable_1 < 4)
                            do {
                                var index_1 = inductionVariable_1;
                                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                // Inline function 'org.ton.tlb.computeSemilatTable.<anonymous>.<anonymous>.<anonymous>' call
                                if (!(((index >>> index_1 | 0) & 1) === 0)) {
                                    // Inline function 'kotlin.repeat' call
                                    // Inline function 'kotlin.contracts.contract' call
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < 4)
                                        do {
                                            var index_2 = inductionVariable_2;
                                            inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                            // Inline function 'org.ton.tlb.computeSemilatTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                                            if (!(((index_0 >>> index_2 | 0) & 1) === 0)) {
                                                res = 1 << baseTable[index_1][index_2];
                                            }
                                        }
                                        while (inductionVariable_2 < 4);
                                }
                            }
                            while (inductionVariable_1 < 4);
                        table[index][index_0] = toByte(res);
                    }
                    while (inductionVariable_0 < 16);
            }
            while (inductionVariable < 16);
        return table;
    }

    function computeSemilatBaseTable(baseTable) {
        _init_properties_SizeTables_kt__7z0k7u();
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(16), null);
        while (tmp < 16) {
            tmp_0[tmp] = new Int8Array(16);
            tmp = tmp + 1 | 0;
        }
        var table = tmp_0;
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < 16)
            do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'org.ton.tlb.computeSemilatBaseTable.<anonymous>' call
                // Inline function 'kotlin.repeat' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < 16)
                    do {
                        var index_0 = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'org.ton.tlb.computeSemilatBaseTable.<anonymous>.<anonymous>' call
                        var res = 0;
                        // Inline function 'kotlin.repeat' call
                        // Inline function 'kotlin.contracts.contract' call
                        var inductionVariable_1 = 0;
                        if (inductionVariable_1 < 4)
                            do {
                                var index_1 = inductionVariable_1;
                                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                // Inline function 'org.ton.tlb.computeSemilatBaseTable.<anonymous>.<anonymous>.<anonymous>' call
                                if (!(((index >>> index_1 | 0) & 1) === 0)) {
                                    // Inline function 'kotlin.repeat' call
                                    // Inline function 'kotlin.contracts.contract' call
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < 4)
                                        do {
                                            var index_2 = inductionVariable_2;
                                            inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                            // Inline function 'org.ton.tlb.computeSemilatBaseTable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                                            if (!(((index_0 >>> index_2 | 0) & 1) === 0)) {
                                                res = res ^ baseTable[index_1][index_2];
                                            }
                                        }
                                        while (inductionVariable_2 < 4);
                                }
                            }
                            while (inductionVariable_1 < 4);
                        table[index][index_0] = toByte(res);
                    }
                    while (inductionVariable_0 < 16);
            }
            while (inductionVariable < 16);
        return table;
    }

    var properties_initialized_SizeTables_kt_li4dx4;

    function _init_properties_SizeTables_kt__7z0k7u() {
        if (!properties_initialized_SizeTables_kt_li4dx4) {
            properties_initialized_SizeTables_kt_li4dx4 = true;
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.byteArrayOf' call
            var tmp = new Int8Array([0, 1, 2, 3]);
            // Inline function 'kotlin.byteArrayOf' call
            var tmp_0 = new Int8Array([1, 2, 3, 0]);
            // Inline function 'kotlin.byteArrayOf' call
            var tmp_1 = new Int8Array([2, 3, 0, 1]);
            // Inline function 'kotlin.byteArrayOf' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp$ret$6 = [tmp, tmp_0, tmp_1, new Int8Array([3, 0, 1, 2])];
            ADD_TABLE = computeSemilatTable(tmp$ret$6);
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.byteArrayOf' call
            var tmp_2 = new Int8Array([0, 0, 0, 0]);
            // Inline function 'kotlin.byteArrayOf' call
            var tmp_3 = new Int8Array([0, 1, 2, 3]);
            // Inline function 'kotlin.byteArrayOf' call
            var tmp_4 = new Int8Array([0, 2, 2, 2]);
            // Inline function 'kotlin.byteArrayOf' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp$ret$6_0 = [tmp_2, tmp_3, tmp_4, new Int8Array([0, 3, 2, 3])];
            MUL_TABLE = computeSemilatTable(tmp$ret$6_0);
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.byteArrayOf' call
            var tmp_5 = new Int8Array([1, 1, 1, 1]);
            // Inline function 'kotlin.byteArrayOf' call
            var tmp_6 = new Int8Array([2, 1, 1, 1]);
            // Inline function 'kotlin.byteArrayOf' call
            var tmp_7 = new Int8Array([1, 3, 3, 3]);
            // Inline function 'kotlin.byteArrayOf' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp$ret$6_1 = [tmp_5, tmp_6, tmp_7, new Int8Array([2, 3, 3, 3])];
            GET_BIT_TABLE = computeSemilatBaseTable(tmp$ret$6_1);
        }
    }

    function _get_builtinTypes__8q5fv($this) {
        return $this.builtinTypes_1;
    }

    function defineBuiltinType($this, name, args, producesNatural, size, minSize, anyBits, isInt) {
        var minMaxSize = size < 0 ? Companion_getInstance_2().get_ANY_18jxy5_k$() : (minSize >= 0 ? !(minSize === size) : false) ? Companion_getInstance_2().range_gh83gj_k$(minSize, size) : Companion_getInstance_2().fixedSize_141yqr_k$(size);
        // Inline function 'kotlin.text.map' call
        // Inline function 'kotlin.text.mapTo' call
        var destination = ArrayList_init_$Create$_0(charSequenceLength(args));
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(args)) {
            var item = charSequenceGet(args, inductionVariable);
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'org.ton.tlb.compiler.Companion.defineBuiltinType.<anonymous>' call
            var isNatural = item === _Char___init__impl__6a9atx(35);
            var tmp$ret$0 = new TlbType('#', false, isNatural, VOID, VOID, VOID, VOID, VOID, VOID, Companion_getInstance_0().all_22ld_k$(), true);
            destination.add_utx5q5_k$(tmp$ret$0);
        }
        var tmp1_beginsWith = Companion_getInstance_0().all_22ld_k$();
        var type = new TlbType(name, producesNatural, false, VOID, isInt, destination, VOID, anyBits, minMaxSize, tmp1_beginsWith, true);
        // Inline function 'kotlin.collections.set' call
        $this.builtinTypes_1.put_4fpzoq_k$(name, type);
        return type;
    }

    function defineBuiltinType$default($this, name, args, producesNatural, size, minSize, anyBits, isInt, $super) {
        size = size === VOID ? -1 : size;
        minSize = minSize === VOID ? -1 : minSize;
        anyBits = anyBits === VOID ? false : anyBits;
        isInt = isInt === VOID ? 0 : isInt;
        return defineBuiltinType($this, name, args, producesNatural, size, minSize, anyBits, isInt);
    }

    function compileAnonConstructor($this, ast) {
        var fields = ArrayList_init_$Create$();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = ast.get_fields_dbuqbm_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.compiler.TlbCompiler.compileAnonConstructor.<anonymous>' call
            fields.add_utx5q5_k$($this.compileField_1fpgac_k$(element, fields));
        }
        var constructor = new TlbConstructor(null, '', '', fields);
        return new TlbType('', false, Type_getInstance().get_isAnon_evulnj_k$(), VOID, VOID, VOID, listOf(constructor));
    }

    function Companion_3() {
        Companion_instance_3 = this;
        var tmp = this;
        // Inline function 'kotlin.collections.mutableMapOf' call
        tmp.builtinTypes_1 = LinkedHashMap_init_$Create$();
        this.TYPE_TYPE_1 = new TlbType('Type', false);
        this.NAT_TYPE_1 = defineBuiltinType$default(this, '#', '', true, 32, 32, true);
        this.NAT_WIDTH_TYPE_1 = defineBuiltinType$default(this, '##', '#', true, 32, 0, true);
        this.NAT_LESS_TYPE_1 = defineBuiltinType$default(this, '#<', '#', true, 32, 0);
        this.NAT_LEQ_TYPE_1 = defineBuiltinType$default(this, '#<=', '#', true, 32, 0);
        this.ANY_TYPE_1 = defineBuiltinType$default(this, 'Any', '', false);
        this.CELL_TYPE_1 = defineBuiltinType$default(this, 'Cell', '', false);
        this.INT_TYPE_1 = defineBuiltinType(this, 'int', '#', false, 257, 0, true, -1);
        this.UINT_TYPE_1 = defineBuiltinType(this, 'uint', '#', false, 256, 0, true, 1);
        this.BITS_TYPE_1 = defineBuiltinType$default(this, 'bits', '#', false, 1023, 0, true);
        this.EQ_TYPE_1 = defineBuiltinType$default(this, '=', '##', false, 0, 0, true);
        this.LESS_TYPE_1 = defineBuiltinType$default(this, '<', '##', false, 0, 0, true);
        this.LEQ_TYPE_1 = defineBuiltinType$default(this, '<=', '##', false, 0, 0, true);
        var inductionVariable = 1;
        if (inductionVariable <= 257)
            do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                defineBuiltinType(this, 'int' + i, '', false, i, i, true, -1);
            }
            while (inductionVariable <= 257);
        var inductionVariable_0 = 1;
        if (inductionVariable_0 <= 256)
            do {
                var i_0 = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                defineBuiltinType(this, 'uint' + i_0, '', false, i_0, i_0, true, 1);
            }
            while (inductionVariable_0 <= 256);
        var inductionVariable_1 = 1;
        if (inductionVariable_1 <= 1023)
            do {
                var i_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                defineBuiltinType$default(this, 'bits' + i_1, '', false, i_1, i_1, true);
            }
            while (inductionVariable_1 <= 1023);
    }

    protoOf(Companion_3).get_TYPE_TYPE_7cp7yi_k$ = function () {
        return this.TYPE_TYPE_1;
    };
    protoOf(Companion_3).get_NAT_TYPE_fb1g1t_k$ = function () {
        return this.NAT_TYPE_1;
    };
    protoOf(Companion_3).get_NAT_WIDTH_TYPE_qq16be_k$ = function () {
        return this.NAT_WIDTH_TYPE_1;
    };
    protoOf(Companion_3).get_NAT_LESS_TYPE_a3g7gn_k$ = function () {
        return this.NAT_LESS_TYPE_1;
    };
    protoOf(Companion_3).get_NAT_LEQ_TYPE_3hke08_k$ = function () {
        return this.NAT_LEQ_TYPE_1;
    };
    protoOf(Companion_3).get_ANY_TYPE_o5gsx6_k$ = function () {
        return this.ANY_TYPE_1;
    };
    protoOf(Companion_3).get_CELL_TYPE_b0o026_k$ = function () {
        return this.CELL_TYPE_1;
    };
    protoOf(Companion_3).get_INT_TYPE_911abx_k$ = function () {
        return this.INT_TYPE_1;
    };
    protoOf(Companion_3).get_UINT_TYPE_ng4ofe_k$ = function () {
        return this.UINT_TYPE_1;
    };
    protoOf(Companion_3).get_BITS_TYPE_76oo9i_k$ = function () {
        return this.BITS_TYPE_1;
    };
    protoOf(Companion_3).get_EQ_TYPE_blbx18_k$ = function () {
        return this.EQ_TYPE_1;
    };
    protoOf(Companion_3).get_LESS_TYPE_9w0qrt_k$ = function () {
        return this.LESS_TYPE_1;
    };
    protoOf(Companion_3).get_LEQ_TYPE_ey8rmy_k$ = function () {
        return this.LEQ_TYPE_1;
    };
    protoOf(Companion_3).getBuiltInType_t21ycz_k$ = function (name) {
        return this.builtinTypes_1.get_wei43m_k$(name);
    };
    var Companion_instance_3;

    function Companion_getInstance_3() {
        if (Companion_instance_3 == null)
            new Companion_3();
        return Companion_instance_3;
    }

    function TlbCompiler() {
        Companion_getInstance_3();
        var tmp = this;
        // Inline function 'kotlin.collections.mutableMapOf' call
        tmp.types_1 = LinkedHashMap_init_$Create$();
    }

    protoOf(TlbCompiler).get_types_izd7io_k$ = function () {
        return this.types_1;
    };
    protoOf(TlbCompiler).compileConstructor_gsk4u8_k$ = function (ast) {
        var tmp0_elvis_lhs = this.getType_c6jgvd_k$(ast.get_typeName_s1eeum_k$());
        var type = tmp0_elvis_lhs == null ? this.registerNewType_inqmo3_k$(ast.get_typeName_s1eeum_k$()) : tmp0_elvis_lhs;
        var fields = ArrayList_init_$Create$();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = ast.get_fields_dbuqbm_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.compiler.TlbCompiler.compileConstructor.<anonymous>' call
            fields.add_utx5q5_k$(this.compileField_1fpgac_k$(element, fields));
        }
        // Inline function 'kotlin.collections.map' call
        var this_0 = ast.get_args_woj09y_k$();
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'org.ton.tlb.compiler.TlbCompiler.compileConstructor.<anonymous>' call
            var tmp$ret$0 = this.compileTypeExpression_3p4pte_k$(item, fields);
            destination.add_utx5q5_k$(tmp$ret$0);
        }
        var params = destination;
        var constructor = new TlbConstructor(ast.get_tag_18ivnz_k$(), ast.get_name_woqyms_k$(), ast.get_typeName_s1eeum_k$(), fields, params);
        type.plusAssign_ld5p79_k$(constructor);
        var size = type.get_size_woubt6_k$();
        $l$loop: while (true) {
            type.recomputeSize_kx2eid_k$();
            var newSize = type.get_size_woubt6_k$();
            if (newSize.equals(size)) {
                break $l$loop;
            }
            size = newSize;
        }
        return type;
    };
    protoOf(TlbCompiler).compileField_1fpgac_k$ = function (ast, definedFields) {
        var tmp0_elvis_lhs = ast.get_name_woqyms_k$();
        return new TlbField(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.compileTypeExpression_3p4pte_k$(ast.get_typeExpression_kz19qd_k$(), definedFields), ast.get_isImplicit_upa56g_k$(), ast.get_isConstraint_xq6a6o_k$());
    };
    protoOf(TlbCompiler).compileTypeExpression_3p4pte_k$ = function (ast, definedFields) {
        var tmp;
        if (ast instanceof AnonymousConstructor) {
            var type = compileAnonConstructor(this, ast);
            return new Apply(type);
        } else {
            if (ast instanceof Apply_0) {
                var tmp_0 = this.compileTypeExpression_3p4pte_k$(ast.get_expression_l5w7j5_k$(), definedFields);
                var tmp1_elvis_lhs = tmp_0 instanceof Apply ? tmp_0 : null;
                var tmp_1;
                if (tmp1_elvis_lhs == null) {
                    throw new UndefinedTypeException(toString(ast.get_expression_l5w7j5_k$()));
                } else {
                    tmp_1 = tmp1_elvis_lhs;
                }
                var apply = tmp_1;
                // Inline function 'kotlin.collections.map' call
                var this_0 = ast.get_arguments_p5ddub_k$();
                // Inline function 'kotlin.collections.mapTo' call
                var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
                var tmp0_iterator = this_0.iterator_jk1svi_k$();
                while (tmp0_iterator.hasNext_bitz1p_k$()) {
                    var item = tmp0_iterator.next_20eer_k$();
                    // Inline function 'org.ton.tlb.compiler.TlbCompiler.compileTypeExpression.<anonymous>' call
                    var tmp$ret$0 = this.compileTypeExpression_3p4pte_k$(item, definedFields);
                    destination.add_utx5q5_k$(tmp$ret$0);
                }
                return apply.copy$default_i6kq8e_k$(VOID, destination);
            } else {
                if (ast instanceof CellRef_0) {
                    tmp = new CellRef(this.compileTypeExpression_3p4pte_k$(ast.get_expression_l5w7j5_k$(), definedFields));
                } else {
                    if (ast instanceof Conditional_0) {
                        var tmp_2 = this.compileTypeExpression_3p4pte_k$(ast.get_expression_l5w7j5_k$(), definedFields);
                        var tmp2_elvis_lhs = isInterface(tmp_2, TlbNatExpression) ? tmp_2 : null;
                        var tmp_3;
                        if (tmp2_elvis_lhs == null) {
                            throw new CantApplyNonNatTypeException();
                        } else {
                            tmp_3 = tmp2_elvis_lhs;
                        }
                        tmp = new Conditional(tmp_3, this.compileTypeExpression_3p4pte_k$(ast.get_expression2_gspzqp_k$(), definedFields));
                    } else {
                        if (ast instanceof Add_0) {
                            tmp = new Add(this.compileTypeExpression_3p4pte_k$(ast.get_expression_l5w7j5_k$(), definedFields), this.compileTypeExpression_3p4pte_k$(ast.get_expression2_gspzqp_k$(), definedFields));
                        } else {
                            if (ast instanceof GetBit_0) {
                                tmp = new GetBit(this.compileTypeExpression_3p4pte_k$(ast.get_expression_l5w7j5_k$(), definedFields), this.compileTypeExpression_3p4pte_k$(ast.get_expression2_gspzqp_k$(), definedFields));
                            } else {
                                if (ast instanceof IntConstant_0) {
                                    tmp = new IntConstant(ast.get_value_j01efc_k$());
                                } else {
                                    if (ast instanceof Multiply_0) {
                                        var value = this.compileTypeExpression_3p4pte_k$(ast.get_value_j01efc_k$(), definedFields);
                                        var subType = this.compileTypeExpression_3p4pte_k$(ast.get_expression_l5w7j5_k$(), definedFields);
                                        var tmp3_elvis_lhs = isInterface(value, TlbNatExpression) ? value : null;
                                        var tmp_4;
                                        if (tmp3_elvis_lhs == null) {
                                            throw new CantApplyNonNatTypeException();
                                        } else {
                                            tmp_4 = tmp3_elvis_lhs;
                                        }
                                        tmp = new Multiply(tmp_4, subType);
                                    } else {
                                        if (ast instanceof Tuple_0) {
                                            var tmp_5 = this.compileTypeExpression_3p4pte_k$(ast.get_value_j01efc_k$(), definedFields);
                                            var tmp4_elvis_lhs = isInterface(tmp_5, TlbNatExpression) ? tmp_5 : null;
                                            var tmp_6;
                                            if (tmp4_elvis_lhs == null) {
                                                throw new CantApplyNonNatTypeException();
                                            } else {
                                                tmp_6 = tmp4_elvis_lhs;
                                            }
                                            tmp = new Tuple(tmp_6, this.compileTypeExpression_3p4pte_k$(ast.get_expression_l5w7j5_k$(), definedFields));
                                        } else {
                                            if (ast instanceof TypeApply) {
                                                var typeDef = this.getType_c6jgvd_k$(ast.get_name_woqyms_k$());
                                                if (!(typeDef == null)) {
                                                    // Inline function 'kotlin.check' call
                                                    // Inline function 'kotlin.contracts.contract' call
                                                    if (!!ast.get_isNegated_t7d5db_k$()) {
                                                        // Inline function 'org.ton.tlb.compiler.TlbCompiler.compileTypeExpression.<anonymous>' call
                                                        var message = "Can't negate a type";
                                                        throw IllegalStateException_init_$Create$(toString(message));
                                                    }
                                                    return new Apply(typeDef);
                                                }
                                                // Inline function 'kotlin.collections.find' call
                                                var tmp$ret$5;
                                                $l$block: {
                                                    // Inline function 'kotlin.collections.firstOrNull' call
                                                    var tmp0_iterator_0 = definedFields.iterator_jk1svi_k$();
                                                    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                                                        var element = tmp0_iterator_0.next_20eer_k$();
                                                        // Inline function 'org.ton.tlb.compiler.TlbCompiler.compileTypeExpression.<anonymous>' call
                                                        if (element.get_name_woqyms_k$() === ast.get_name_woqyms_k$()) {
                                                            tmp$ret$5 = element;
                                                            break $l$block;
                                                        }
                                                    }
                                                    tmp$ret$5 = null;
                                                }
                                                var fieldDef = tmp$ret$5;
                                                if (!(fieldDef == null)) {
                                                    var fieldType = fieldDef.get_type_wovaf7_k$();
                                                    var tmp_7;
                                                    if (fieldType instanceof Apply) {
                                                        tmp_7 = fieldType.get_typeApplied_csunwa_k$().get_isProducesNatural_v4kv19_k$();
                                                    } else {
                                                        tmp_7 = false;
                                                    }
                                                    var isNat = tmp_7;
                                                    var tmp_8;
                                                    if (isNat) {
                                                        tmp_8 = new NaturalParam(ast.get_name_woqyms_k$(), ast.get_isNegated_t7d5db_k$());
                                                    } else {
                                                        // Inline function 'kotlin.check' call
                                                        // Inline function 'kotlin.contracts.contract' call
                                                        if (!equals(fieldType, Type_getInstance())) {
                                                            // Inline function 'org.ton.tlb.compiler.TlbCompiler.compileTypeExpression.<anonymous>' call
                                                            var message_0 = 'cannot use a field in an expression unless it is either an integer or a type';
                                                            throw IllegalStateException_init_$Create$(toString(message_0));
                                                        }
                                                        tmp_8 = new TypeParam(ast.get_name_woqyms_k$(), ast.get_isNegated_t7d5db_k$());
                                                    }
                                                    return tmp_8;
                                                }
                                                var type_0 = this.registerNewType_inqmo3_k$(ast.get_name_woqyms_k$());
                                                return new Apply(type_0);
                                            } else {
                                                noWhenBranchMatchedException();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return tmp;
    };
    protoOf(TlbCompiler).getType_c6jgvd_k$ = function (name) {
        if (name == null)
            return null;
        var tmp1_elvis_lhs = this.types_1.get_wei43m_k$(name);
        return tmp1_elvis_lhs == null ? Companion_getInstance_3().getBuiltInType_t21ycz_k$(name) : tmp1_elvis_lhs;
    };
    protoOf(TlbCompiler).registerNewType_inqmo3_k$ = function (name) {
        this.validateNewType_5bc256_k$(name);
        var type = new TlbType(name, false);
        // Inline function 'kotlin.collections.set' call
        this.types_1.put_4fpzoq_k$(name, type);
        return type;
    };
    protoOf(TlbCompiler).validateNewType_5bc256_k$ = function (name) {
        if (isLowerCase(charSequenceGet(name, 0))) {
            throw new ConstructorTypeLowerCaseException(name);
        }
        if (this.types_1.containsKey_aw81wo_k$(name)) {
            throw new TypeAlreadyDefinedException(name);
        }
    };

    function TlbConstructor(tag, name, typeName, fields, params) {
        fields = fields === VOID ? emptyList() : fields;
        params = params === VOID ? emptyList() : params;
        this.tag_1 = tag;
        this.name_1 = name;
        this.typeName_1 = typeName;
        this.fields_1 = fields;
        this.params_1 = params;
        var tmp = this;
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var this_0 = this.fields_1;
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.compiler.TlbConstructor.explicitFields.<anonymous>' call
            if (!element.get_isConstraint_xq6a6o_k$() ? !element.get_isImplicit_upa56g_k$() : false) {
                destination.add_utx5q5_k$(element);
            }
        }
        tmp.explicitFields_1 = destination;
        this.beginWith_1 = computeBeginWith_0(this.fields_1, this.tag_1);
        var tmp_0 = this;
        var tmp_1;
        if (this.explicitFields_1.isEmpty_y1axqb_k$()) {
            tmp_1 = true;
        } else {
            var tmp$ret$3;
            $l$block_0: {
                // Inline function 'kotlin.collections.all' call
                var this_1 = this.explicitFields_1;
                var tmp_2;
                if (isInterface(this_1, Collection)) {
                    tmp_2 = this_1.isEmpty_y1axqb_k$();
                } else {
                    tmp_2 = false;
                }
                if (tmp_2) {
                    tmp$ret$3 = true;
                    break $l$block_0;
                }
                var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
                while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                    var element_0 = tmp0_iterator_0.next_20eer_k$();
                    // Inline function 'org.ton.tlb.compiler.TlbConstructor.isAnyBits.<anonymous>' call
                    if (!element_0.get_type_wovaf7_k$().get_isAnyBits_f0tjq9_k$()) {
                        tmp$ret$3 = false;
                        break $l$block_0;
                    }
                }
                tmp$ret$3 = true;
            }
            tmp_1 = tmp$ret$3;
        }
        tmp_0.isAnyBits_1 = tmp_1;
        var tmp_3 = this;
        var tmp_4;
        var tmp_5;
        var tmp_6;
        var tmp_7;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_2 = this.name_1;
        if (charSequenceLength(this_2) > 0) {
            tmp_7 = true;
        } else {
            tmp_7 = !isNullOrEmpty(this.tag_1);
        }
        if (tmp_7) {
            tmp_6 = true;
        } else {
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp_6 = !this.params_1.isEmpty_y1axqb_k$();
        }
        if (tmp_6) {
            tmp_5 = true;
        } else {
            tmp_5 = !(this.fields_1.get_size_woubt6_k$() === 1);
        }
        if (tmp_5) {
            tmp_4 = false;
        } else {
            tmp_4 = this.fields_1.get_c1px32_k$(0).get_isImplicit_upa56g_k$() ? true : this.fields_1.get_c1px32_k$(0).get_isConstraint_xq6a6o_k$();
        }
        tmp_3.isForward_1 = tmp_4;
    }

    protoOf(TlbConstructor).get_tag_18ivnz_k$ = function () {
        return this.tag_1;
    };
    protoOf(TlbConstructor).get_name_woqyms_k$ = function () {
        return this.name_1;
    };
    protoOf(TlbConstructor).get_typeName_s1eeum_k$ = function () {
        return this.typeName_1;
    };
    protoOf(TlbConstructor).get_fields_dbuqbm_k$ = function () {
        return this.fields_1;
    };
    protoOf(TlbConstructor).get_params_hy4oen_k$ = function () {
        return this.params_1;
    };
    protoOf(TlbConstructor).get_trueParams_ntkawt_k$ = function () {
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var this_0 = this.params_1;
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.compiler.TlbConstructor.<get-trueParams>.<anonymous>' call
            var tmp;
            if (!(element instanceof NaturalParam)) {
                tmp = true;
            } else {
                tmp = !element.get_isNegated_t7d5db_k$();
            }
            if (tmp) {
                destination.add_utx5q5_k$(element);
            }
        }
        return destination;
    };
    protoOf(TlbConstructor).get_explicitFields_bnwtue_k$ = function () {
        return this.explicitFields_1;
    };
    protoOf(TlbConstructor).get_size_woubt6_k$ = function () {
        return computeSize_0(this.fields_1, this.tag_1);
    };
    protoOf(TlbConstructor).get_beginWith_985y8q_k$ = function () {
        return this.beginWith_1;
    };
    protoOf(TlbConstructor).get_isAnyBits_f0tjq9_k$ = function () {
        return this.isAnyBits_1;
    };
    protoOf(TlbConstructor).get_isEnum_evx5qs_k$ = function () {
        return this.explicitFields_1.isEmpty_y1axqb_k$();
    };
    protoOf(TlbConstructor).get_isSimpleEnum_grozja_k$ = function () {
        return this.get_isEnum_evx5qs_k$() ? this.get_trueParams_ntkawt_k$().isEmpty_y1axqb_k$() : false;
    };
    protoOf(TlbConstructor).get_isForward_c9tg1a_k$ = function () {
        return this.isForward_1;
    };
    protoOf(TlbConstructor).isomorphicTo_etzkjz_k$ = function (other, allowOtherNames) {
        if (!(this.name_1 === other.name_1))
            return false;
        if (!(this.fields_1.get_size_woubt6_k$() === other.fields_1.get_size_woubt6_k$()))
            return false;
        if (!(this.params_1.get_size_woubt6_k$() === other.params_1.get_size_woubt6_k$()))
            return false;
        var inductionVariable = 0;
        var last = this.fields_1.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
            do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                if (!this.fields_1.get_c1px32_k$(i).isomorphicTo_ib8sfl_k$(other.fields_1.get_c1px32_k$(i), allowOtherNames)) {
                    return false;
                }
            }
            while (inductionVariable <= last);
        var inductionVariable_0 = 0;
        var last_0 = this.params_1.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
            do {
                var i_0 = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                if (!equals(this.params_1.get_c1px32_k$(i_0), other.params_1.get_c1px32_k$(i_0))) {
                    return false;
                }
            }
            while (inductionVariable_0 <= last_0);
        return true;
    };
    protoOf(TlbConstructor).isomorphicTo$default_f6i4es_k$ = function (other, allowOtherNames, $super) {
        allowOtherNames = allowOtherNames === VOID ? true : allowOtherNames;
        return $super === VOID ? this.isomorphicTo_etzkjz_k$(other, allowOtherNames) : $super.isomorphicTo_etzkjz_k$.call(this, other, allowOtherNames);
    };
    protoOf(TlbConstructor).computeTag_4gudjx_k$ = function () {
        var crc = crc32(encodeToByteArray(this.toString_8x7yyh_k$(false)));
        return new ConstructorTag(toLong(crc).shl_bg8if3_k$(32).or_v7fvkl_k$(new Long(-2147483648, 0)));
    };
    protoOf(TlbConstructor).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.TlbConstructor.toString.<anonymous>' call
        this.appendTo$default_6kn9b_k$(this_0);
        return this_0.toString();
    };
    protoOf(TlbConstructor).toString_8x7yyh_k$ = function (showTag) {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.TlbConstructor.toString.<anonymous>' call
        this.appendTo_yamnw4_k$(this_0, showTag);
        return this_0.toString();
    };
    protoOf(TlbConstructor).appendTo_yamnw4_k$ = function (appendable, showTag) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.TlbConstructor.appendTo.<anonymous>' call
        if (showTag ? !isNullOrEmpty(this.tag_1) : false) {
            appendable.append_jgojdo_k$(this.tag_1.toString());
            appendable.append_jgojdo_k$(' ');
        }
        var tmp0_iterator = this.fields_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var field = tmp0_iterator.next_20eer_k$();
            appendable.append_jgojdo_k$(' ');
            appendable.append_jgojdo_k$(field.toString());
        }
        appendable.append_jgojdo_k$(' = ');
        appendable.append_jgojdo_k$(this.typeName_1);
        var tmp1_iterator = this.params_1.iterator_jk1svi_k$();
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
            var param = tmp1_iterator.next_20eer_k$();
            appendable.append_jgojdo_k$(' ');
            appendable.append_jgojdo_k$(toString(param));
        }
        return appendable;
    };
    protoOf(TlbConstructor).appendTo$default_6kn9b_k$ = function (appendable, showTag, $super) {
        showTag = showTag === VOID ? true : showTag;
        return $super === VOID ? this.appendTo_yamnw4_k$(appendable, showTag) : $super.appendTo_yamnw4_k$.call(this, appendable, showTag);
    };
    protoOf(TlbConstructor).component1_7eebsc_k$ = function () {
        return this.tag_1;
    };
    protoOf(TlbConstructor).component2_7eebsb_k$ = function () {
        return this.name_1;
    };
    protoOf(TlbConstructor).component3_7eebsa_k$ = function () {
        return this.typeName_1;
    };
    protoOf(TlbConstructor).component4_7eebs9_k$ = function () {
        return this.fields_1;
    };
    protoOf(TlbConstructor).component5_7eebs8_k$ = function () {
        return this.params_1;
    };
    protoOf(TlbConstructor).copy_la27nw_k$ = function (tag, name, typeName, fields, params) {
        return new TlbConstructor(tag, name, typeName, fields, params);
    };
    protoOf(TlbConstructor).copy$default_xyhn1n_k$ = function (tag, name, typeName, fields, params, $super) {
        tag = tag === VOID ? this.tag_1 : tag;
        name = name === VOID ? this.name_1 : name;
        typeName = typeName === VOID ? this.typeName_1 : typeName;
        fields = fields === VOID ? this.fields_1 : fields;
        params = params === VOID ? this.params_1 : params;
        return $super === VOID ? this.copy_la27nw_k$(tag, name, typeName, fields, params) : $super.copy_la27nw_k$.call(this, tag, name, typeName, fields, params);
    };
    protoOf(TlbConstructor).hashCode = function () {
        var result = this.tag_1 == null ? 0 : hashCode(this.tag_1);
        result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
        result = imul(result, 31) + getStringHashCode(this.typeName_1) | 0;
        result = imul(result, 31) + hashCode(this.fields_1) | 0;
        result = imul(result, 31) + hashCode(this.params_1) | 0;
        return result;
    };
    protoOf(TlbConstructor).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof TlbConstructor))
            return false;
        var tmp0_other_with_cast = other instanceof TlbConstructor ? other : THROW_CCE();
        if (!equals(this.tag_1, tmp0_other_with_cast.tag_1))
            return false;
        if (!(this.name_1 === tmp0_other_with_cast.name_1))
            return false;
        if (!(this.typeName_1 === tmp0_other_with_cast.typeName_1))
            return false;
        if (!equals(this.fields_1, tmp0_other_with_cast.fields_1))
            return false;
        if (!equals(this.params_1, tmp0_other_with_cast.params_1))
            return false;
        return true;
    };

    function computeConstructorTrie(_this__u8e3s4) {
        var z = new Long(1, 0);
        var trie = null;
        var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var constructor = tmp0_iterator.next_20eer_k$();
            trie = Companion_getInstance().insertPaths_b2a69v_k$(trie, constructor.beginWith_1, z);
            z = z.shl_bg8if3_k$(1);
        }
        return trie;
    }

    function computeBeginWith(_this__u8e3s4) {
        var result = BitPfxCollection_init_$Create$();
        var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var constructor = tmp0_iterator.next_20eer_k$();
            result = result.plus_1ucpai_k$(constructor.beginWith_1);
        }
        return result;
    }

    function computeSize(_this__u8e3s4) {
        var size = Companion_getInstance_2().get_IMPOSSIBLE_ngqwim_k$();
        var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var constructor = tmp0_iterator.next_20eer_k$();
            var constructorSize = constructor.get_size_woubt6_k$();
            size = size.or_vgl29k_k$(constructorSize);
        }
        return size;
    }

    function TlbField(name, type, isImplicit, isConstraint) {
        isConstraint = isConstraint === VOID ? false : isConstraint;
        this.name_1 = name;
        this.type_1 = type;
        this.isImplicit_1 = isImplicit;
        this.isConstraint_1 = isConstraint;
    }

    protoOf(TlbField).get_name_woqyms_k$ = function () {
        return this.name_1;
    };
    protoOf(TlbField).get_type_wovaf7_k$ = function () {
        return this.type_1;
    };
    protoOf(TlbField).get_isImplicit_upa56g_k$ = function () {
        return this.isImplicit_1;
    };
    protoOf(TlbField).get_isConstraint_xq6a6o_k$ = function () {
        return this.isConstraint_1;
    };
    protoOf(TlbField).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.TlbField.toString.<anonymous>' call
        var printBrace = this.isImplicit_1 ? true : this.isConstraint_1;
        if (printBrace) {
            this_0.append_22ad7x_k$('{');
        }
        // Inline function 'kotlin.text.isNotBlank' call
        var this_1 = this.name_1;
        if (!isBlank(this_1)) {
            this_0.append_22ad7x_k$(this.name_1);
            this_0.append_22ad7x_k$(':');
        }
        this_0.append_t8pm91_k$(this.type_1);
        if (printBrace) {
            this_0.append_22ad7x_k$('}');
        }
        return this_0.toString();
    };
    protoOf(TlbField).isomorphicTo_ib8sfl_k$ = function (other, allowOtherNames) {
        if (!allowOtherNames ? !(this.name_1 === other.name_1) : false)
            return false;
        return equals(this.type_1, other.type_1);
    };
    protoOf(TlbField).isomorphicTo$default_80nnak_k$ = function (other, allowOtherNames, $super) {
        allowOtherNames = allowOtherNames === VOID ? true : allowOtherNames;
        return $super === VOID ? this.isomorphicTo_ib8sfl_k$(other, allowOtherNames) : $super.isomorphicTo_ib8sfl_k$.call(this, other, allowOtherNames);
    };

    function computeSize_0(_this__u8e3s4, tag) {
        var size = get_size_0(tag);
        var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var field = tmp0_iterator.next_20eer_k$();
            if (!field.isImplicit_1 ? !field.isConstraint_1 : false) {
                size = size.plus_vnukzl_k$(field.type_1.get_size_woubt6_k$());
            }
        }
        return size;
    }

    function computeBeginWith_0(_this__u8e3s4, tag) {
        var tmp1_elvis_lhs = tag == null ? null : tag.get_value_j01efc_k$();
        var tagValue = tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs;
        var tmp2_iterator = _this__u8e3s4.iterator_jk1svi_k$();
        $l$loop_0: while (tmp2_iterator.hasNext_bitz1p_k$()) {
            var field = tmp2_iterator.next_20eer_k$();
            if (!field.isImplicit_1 ? !field.isConstraint_1 : false) {
                var expr = field.type_1;
                if (expr instanceof CellRef) {
                    continue $l$loop_0;
                }
                if (!(expr instanceof Apply)) {
                    break $l$loop_0;
                }
                var typeBeginWith = expr.get_typeApplied_csunwa_k$().get_beginsWith_1hlqjr_k$();
                var add = typeBeginWith.times_nfzjiw_k$(tagValue);
                return BitPfxCollection_init_$Create$().plus_1ucpai_k$(add);
            }
        }
        return BitPfxCollection_init_$Create$().plus_1ucpai_k$(BitPfxCollection_init_$Create$_0(tagValue));
    }

    function _get_constructors___xldrn9($this) {
        return $this.constructors__1;
    }

    function _set_constructorTrie__opb8b5($this, _set____db54di) {
        $this.constructorTrie_1 = _set____db54di;
    }

    function _set_isPrefixDetermined__yl1j62($this, _set____db54di) {
        $this.isPrefixDetermined_1 = _set____db54di;
    }

    function _set_isAnyBits__r4v99($this, _set____db54di) {
        $this.isAnyBits_1 = _set____db54di;
    }

    function _set_size__9twho6($this, _set____db54di) {
        $this.size_1 = _set____db54di;
    }

    function _set_beginsWith__55mgqh($this, _set____db54di) {
        $this.beginsWith_1 = _set____db54di;
    }

    function recalculate($this) {
        var constructorTrie = computeConstructorTrie($this.get_constructors_sgrxfi_k$());
        var tmp = $this;
        var tmp_0;
        if (!(constructorTrie == null)) {
            tmp_0 = constructorTrie.findConflictPath$default_tcesif_k$().equals(new Long(0, 0));
        } else {
            tmp_0 = true;
        }
        tmp.isPrefixDetermined_1 = tmp_0;
        $this.recomputeSize_kx2eid_k$();
        var tmp_1 = $this;
        var tmp$ret$0;
        $l$block_0: {
            // Inline function 'kotlin.collections.all' call
            var this_0 = $this.get_constructors_sgrxfi_k$();
            var tmp_2;
            if (isInterface(this_0, Collection)) {
                tmp_2 = this_0.isEmpty_y1axqb_k$();
            } else {
                tmp_2 = false;
            }
            if (tmp_2) {
                tmp$ret$0 = true;
                break $l$block_0;
            }
            var tmp0_iterator = this_0.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                // Inline function 'org.ton.tlb.compiler.TlbType.recalculate.<anonymous>' call
                if (!element.get_isAnyBits_f0tjq9_k$()) {
                    tmp$ret$0 = false;
                    break $l$block_0;
                }
            }
            tmp$ret$0 = true;
        }
        tmp_1.isAnyBits_1 = tmp$ret$0;
        $this.beginsWith_1 = computeBeginWith($this.get_constructors_sgrxfi_k$());
    }

    function TlbType(name, isProducesNatural, isNatural, isAnon, intSign, args, constructors, isAnyBits, size, beginsWith, isFinal) {
        isNatural = isNatural === VOID ? false : isNatural;
        isAnon = isAnon === VOID ? false : isAnon;
        intSign = intSign === VOID ? 0 : intSign;
        args = args === VOID ? emptyList() : args;
        constructors = constructors === VOID ? emptyList() : constructors;
        isAnyBits = isAnyBits === VOID ? false : isAnyBits;
        size = size === VOID ? Companion_getInstance_2().get_IMPOSSIBLE_ngqwim_k$() : size;
        beginsWith = beginsWith === VOID ? BitPfxCollection_init_$Create$() : beginsWith;
        isFinal = isFinal === VOID ? false : isFinal;
        this.name_1 = name;
        this.isProducesNatural_1 = isProducesNatural;
        this.isNatural_1 = isNatural;
        this.isAnon_1 = isAnon;
        this.intSign_1 = intSign;
        this.args_1 = args;
        this.isFinal_1 = isFinal;
        this.constructors__1 = toMutableList(constructors);
        this.constructorTrie_1 = null;
        this.isPrefixDetermined_1 = true;
        this.isAnyBits_1 = isAnyBits;
        this.size_1 = size;
        this.beginsWith_1 = beginsWith;
        this.isFinal_1;
    }

    protoOf(TlbType).get_name_woqyms_k$ = function () {
        return this.name_1;
    };
    protoOf(TlbType).get_isProducesNatural_v4kv19_k$ = function () {
        return this.isProducesNatural_1;
    };
    protoOf(TlbType).get_isNatural_riopo6_k$ = function () {
        return this.isNatural_1;
    };
    protoOf(TlbType).get_isAnon_evulnj_k$ = function () {
        return this.isAnon_1;
    };
    protoOf(TlbType).get_intSign_xn0cir_k$ = function () {
        return this.intSign_1;
    };
    protoOf(TlbType).get_args_woj09y_k$ = function () {
        return this.args_1;
    };
    protoOf(TlbType).get_isFinal_zbc2gz_k$ = function () {
        return this.isFinal_1;
    };
    protoOf(TlbType).get_constructors_sgrxfi_k$ = function () {
        return this.constructors__1;
    };
    protoOf(TlbType).get_constructorTrie_7jk023_k$ = function () {
        return this.constructorTrie_1;
    };
    protoOf(TlbType).get_isPrefixDetermined_45nde2_k$ = function () {
        return this.isPrefixDetermined_1;
    };
    protoOf(TlbType).get_isAnyBits_f0tjq9_k$ = function () {
        return this.isAnyBits_1;
    };
    protoOf(TlbType).get_size_woubt6_k$ = function () {
        return this.size_1;
    };
    protoOf(TlbType).get_beginsWith_1hlqjr_k$ = function () {
        return this.beginsWith_1;
    };
    protoOf(TlbType).get_isUnit_ew7d93_k$ = function () {
        return this.size_1.isFixed_y1sbxm_k$() ? this.size_1.get_minSize_iuykcq_k$() === 0 : false;
    };
    protoOf(TlbType).get_isBool_evv9dp_k$ = function () {
        return (this.size_1.isFixed_y1sbxm_k$() ? this.size_1.get_minSize_iuykcq_k$() === 1 : false) ? this.size_1.get_minRefs_iuxtxl_k$() === 0 : false;
    };
    protoOf(TlbType).get_isInt_it6ud8_k$ = function () {
        return !(this.intSign_1 === 0);
    };
    protoOf(TlbType).get_isEnum_evx5qs_k$ = function () {
        var tmp$ret$0;
        $l$block_0: {
            // Inline function 'kotlin.collections.all' call
            var this_0 = this.get_constructors_sgrxfi_k$();
            var tmp;
            if (isInterface(this_0, Collection)) {
                tmp = this_0.isEmpty_y1axqb_k$();
            } else {
                tmp = false;
            }
            if (tmp) {
                tmp$ret$0 = true;
                break $l$block_0;
            }
            var tmp0_iterator = this_0.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                // Inline function 'org.ton.tlb.compiler.TlbType.<get-isEnum>.<anonymous>' call
                if (!element.get_isEnum_evx5qs_k$()) {
                    tmp$ret$0 = false;
                    break $l$block_0;
                }
            }
            tmp$ret$0 = true;
        }
        return tmp$ret$0;
    };
    protoOf(TlbType).get_isSimpleEnum_grozja_k$ = function () {
        var tmp$ret$0;
        $l$block_0: {
            // Inline function 'kotlin.collections.all' call
            var this_0 = this.get_constructors_sgrxfi_k$();
            var tmp;
            if (isInterface(this_0, Collection)) {
                tmp = this_0.isEmpty_y1axqb_k$();
            } else {
                tmp = false;
            }
            if (tmp) {
                tmp$ret$0 = true;
                break $l$block_0;
            }
            var tmp0_iterator = this_0.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                // Inline function 'org.ton.tlb.compiler.TlbType.<get-isSimpleEnum>.<anonymous>' call
                if (!element.get_isSimpleEnum_grozja_k$()) {
                    tmp$ret$0 = false;
                    break $l$block_0;
                }
            }
            tmp$ret$0 = true;
        }
        return tmp$ret$0;
    };
    protoOf(TlbType).plusAssign_ld5p79_k$ = function (constructor) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this.isFinal_1) {
            // Inline function 'org.ton.tlb.compiler.TlbType.plusAssign.<anonymous>' call
            var message = 'Cannot add constructor to a final type';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        this.constructors__1.add_utx5q5_k$(constructor);
        recalculate(this);
    };
    protoOf(TlbType).recomputeSize_kx2eid_k$ = function () {
        this.size_1 = computeSize(this.get_constructors_sgrxfi_k$());
    };
    protoOf(TlbType).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.TlbType.toString.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var value = 'Type `' + this.name_1 + '`, ' + this.get_constructors_sgrxfi_k$().get_size_woubt6_k$() + ' constructors';
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.get_constructors_sgrxfi_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.compiler.TlbType.toString.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.text.appendLine' call
            var value_0 = '  constructor `' + element.get_name_woqyms_k$() + '`';
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_22ad7x_k$(value_0).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            // Inline function 'kotlin.text.appendLine' call
            var value_1 = '    ' + element;
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_22ad7x_k$(value_1).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            // Inline function 'kotlin.text.appendLine' call
            var value_2 = '    begins with: ' + element.get_beginWith_985y8q_k$();
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_22ad7x_k$(value_2).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            this_0.append_22ad7x_k$('    size: ' + element.get_size_woubt6_k$());
            if (element.get_size_woubt6_k$().isFixed_y1sbxm_k$()) {
                this_0.append_22ad7x_k$(' (fixed)');
            }
            if (element.get_isAnyBits_f0tjq9_k$()) {
                this_0.append_22ad7x_k$(' (any bits)');
            }
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        }
        // Inline function 'kotlin.text.appendLine' call
        var value_3 = '  type size: ' + this.size_1;
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$(value_3).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_4 = '  type begins with: ' + this.beginsWith_1;
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$(value_4).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        var tmp0_safe_receiver = this.constructorTrie_1;
        if (tmp0_safe_receiver == null)
            null;
        else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.text.appendLine' call
            var value_5 = '  type constructor trie:';
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_22ad7x_k$(value_5).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            var tmp0_iterator_0 = lines(tmp0_safe_receiver.toString()).iterator_jk1svi_k$();
            while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                var element_0 = tmp0_iterator_0.next_20eer_k$();
                // Inline function 'org.ton.tlb.compiler.TlbType.toString.<anonymous>.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.text.appendLine' call
                var value_6 = '    ' + element_0;
                // Inline function 'kotlin.text.appendLine' call
                this_0.append_22ad7x_k$(value_6).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            }
        }
        return this_0.toString();
    };

    function Apply_init_$Init$(typeApplied, arguments_0, $this) {
        Apply.call($this, typeApplied, toList(arguments_0));
        return $this;
    }

    function Apply_init_$Create$(typeApplied, arguments_0) {
        return Apply_init_$Init$(typeApplied, arguments_0, objectCreate(protoOf(Apply)));
    }

    function Type() {
        Type_instance = this;
        this.size_1 = Companion_getInstance_2().fixedSize_141yqr_k$(0);
        this.isAnyBits_1 = true;
    }

    protoOf(Type).get_size_woubt6_k$ = function () {
        return this.size_1;
    };
    protoOf(Type).get_isAnyBits_f0tjq9_k$ = function () {
        return this.isAnyBits_1;
    };
    protoOf(Type).toString = function () {
        return 'Type';
    };
    protoOf(Type).hashCode = function () {
        return -235216334;
    };
    protoOf(Type).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Type))
            return false;
        other instanceof Type || THROW_CCE();
        return true;
    };
    var Type_instance;

    function Type_getInstance() {
        if (Type_instance == null)
            new Type();
        return Type_instance;
    }

    function TypeParam(name, isNegated) {
        isNegated = isNegated === VOID ? false : isNegated;
        this.name_1 = name;
        this.isNegated_1 = isNegated;
    }

    protoOf(TypeParam).get_name_woqyms_k$ = function () {
        return this.name_1;
    };
    protoOf(TypeParam).get_isNegated_t7d5db_k$ = function () {
        return this.isNegated_1;
    };
    protoOf(TypeParam).get_size_woubt6_k$ = function () {
        return Companion_getInstance_2().get_ANY_18jxy5_k$();
    };
    protoOf(TypeParam).get_isAnyBits_f0tjq9_k$ = function () {
        return false;
    };
    protoOf(TypeParam).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.TypeParam.toString.<anonymous>' call
        if (this.isNegated_1) {
            this_0.append_22ad7x_k$('~');
        }
        this_0.append_22ad7x_k$(this.name_1);
        return this_0.toString();
    };
    protoOf(TypeParam).component1_7eebsc_k$ = function () {
        return this.name_1;
    };
    protoOf(TypeParam).component2_7eebsb_k$ = function () {
        return this.isNegated_1;
    };
    protoOf(TypeParam).copy_smzrfk_k$ = function (name, isNegated) {
        return new TypeParam(name, isNegated);
    };
    protoOf(TypeParam).copy$default_y0yiz5_k$ = function (name, isNegated, $super) {
        name = name === VOID ? this.name_1 : name;
        isNegated = isNegated === VOID ? this.isNegated_1 : isNegated;
        return $super === VOID ? this.copy_smzrfk_k$(name, isNegated) : $super.copy_smzrfk_k$.call(this, name, isNegated);
    };
    protoOf(TypeParam).hashCode = function () {
        var result = getStringHashCode(this.name_1);
        result = imul(result, 31) + getBooleanHashCode(this.isNegated_1) | 0;
        return result;
    };
    protoOf(TypeParam).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof TypeParam))
            return false;
        var tmp0_other_with_cast = other instanceof TypeParam ? other : THROW_CCE();
        if (!(this.name_1 === tmp0_other_with_cast.name_1))
            return false;
        if (!(this.isNegated_1 === tmp0_other_with_cast.isNegated_1))
            return false;
        return true;
    };

    function NaturalParam(name, isNegated) {
        isNegated = isNegated === VOID ? false : isNegated;
        this.name_1 = name;
        this.isNegated_1 = isNegated;
    }

    protoOf(NaturalParam).get_name_woqyms_k$ = function () {
        return this.name_1;
    };
    protoOf(NaturalParam).get_isNegated_t7d5db_k$ = function () {
        return this.isNegated_1;
    };
    protoOf(NaturalParam).interpretNat_z1gffw_k$ = function () {
        return 15;
    };
    protoOf(NaturalParam).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.NaturalParam.toString.<anonymous>' call
        if (this.isNegated_1) {
            this_0.append_22ad7x_k$('~');
        }
        this_0.append_22ad7x_k$(this.name_1);
        return this_0.toString();
    };
    protoOf(NaturalParam).component1_7eebsc_k$ = function () {
        return this.name_1;
    };
    protoOf(NaturalParam).component2_7eebsb_k$ = function () {
        return this.isNegated_1;
    };
    protoOf(NaturalParam).copy_smzrfk_k$ = function (name, isNegated) {
        return new NaturalParam(name, isNegated);
    };
    protoOf(NaturalParam).copy$default_c06eyl_k$ = function (name, isNegated, $super) {
        name = name === VOID ? this.name_1 : name;
        isNegated = isNegated === VOID ? this.isNegated_1 : isNegated;
        return $super === VOID ? this.copy_smzrfk_k$(name, isNegated) : $super.copy_smzrfk_k$.call(this, name, isNegated);
    };
    protoOf(NaturalParam).hashCode = function () {
        var result = getStringHashCode(this.name_1);
        result = imul(result, 31) + getBooleanHashCode(this.isNegated_1) | 0;
        return result;
    };
    protoOf(NaturalParam).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof NaturalParam))
            return false;
        var tmp0_other_with_cast = other instanceof NaturalParam ? other : THROW_CCE();
        if (!(this.name_1 === tmp0_other_with_cast.name_1))
            return false;
        if (!(this.isNegated_1 === tmp0_other_with_cast.isNegated_1))
            return false;
        return true;
    };

    function Apply(typeApplied, arguments_0) {
        arguments_0 = arguments_0 === VOID ? emptyList() : arguments_0;
        this.typeApplied_1 = typeApplied;
        this.arguments_1 = arguments_0;
        var tmp = this;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        $l$block_0: {
            // Inline function 'org.ton.tlb.compiler.Apply.isAnyBits.<anonymous>' call
            var expression = getOrNull(this.arguments_1, 0);
            var tmp_0;
            if (this.arguments_1.get_size_woubt6_k$() === 1) {
                tmp_0 = expression instanceof IntConstant;
            } else {
                tmp_0 = false;
            }
            if (tmp_0) {
                var n = expression.value_1;
                var tmp0_subject = this.typeApplied_1;
                if (equals(tmp0_subject, Companion_getInstance_3().get_NAT_LEQ_TYPE_3hke08_k$())) {
                    tmp$ret$0 = (n & (n + 1 | 0)) === 0;
                    break $l$block_0;
                } else if (equals(tmp0_subject, Companion_getInstance_3().get_NAT_LESS_TYPE_a3g7gn_k$())) {
                    tmp$ret$0 = (n & (n - 1 | 0)) === 0;
                    break $l$block_0;
                }
            }
            tmp$ret$0 = this.typeApplied_1.get_isAnyBits_f0tjq9_k$();
        }
        tmp.isAnyBits_1 = tmp$ret$0;
    }

    protoOf(Apply).get_typeApplied_csunwa_k$ = function () {
        return this.typeApplied_1;
    };
    protoOf(Apply).get_arguments_p5ddub_k$ = function () {
        return this.arguments_1;
    };
    protoOf(Apply).get_intSign_xn0cir_k$ = function () {
        return this.typeApplied_1.get_intSign_xn0cir_k$();
    };
    protoOf(Apply).get_isAnon_evulnj_k$ = function () {
        return this.arguments_1.isEmpty_y1axqb_k$() ? this.typeApplied_1.get_isAnon_evulnj_k$() : false;
    };
    protoOf(Apply).get_isNatural_riopo6_k$ = function () {
        return this.typeApplied_1.get_isNatural_riopo6_k$();
    };
    protoOf(Apply).get_isNaturalSubType_lr8i7w_k$ = function () {
        return this.typeApplied_1.get_isProducesNatural_v4kv19_k$();
    };
    protoOf(Apply).get_isAnyBits_f0tjq9_k$ = function () {
        return this.isAnyBits_1;
    };
    protoOf(Apply).get_size_woubt6_k$ = function () {
        var expression = getOrNull(this.arguments_1, 0);
        var tmp;
        if (this.arguments_1.get_size_woubt6_k$() === 1) {
            tmp = expression instanceof IntConstant;
        } else {
            tmp = false;
        }
        if (tmp) {
            var n = expression.value_1;
            var tmp0_subject = this.typeApplied_1;
            if (((equals(tmp0_subject, Companion_getInstance_3().get_NAT_WIDTH_TYPE_qq16be_k$()) ? true : equals(tmp0_subject, Companion_getInstance_3().get_INT_TYPE_911abx_k$())) ? true : equals(tmp0_subject, Companion_getInstance_3().get_UINT_TYPE_ng4ofe_k$())) ? true : equals(tmp0_subject, Companion_getInstance_3().get_BITS_TYPE_76oo9i_k$())) {
                var tmp_0 = Companion_getInstance_2();
                // Inline function 'kotlin.math.min' call
                var tmp$ret$0 = Math.min(n, 2047);
                var s = tmp_0.fixedSize_141yqr_k$(tmp$ret$0);
                return s;
            } else if (equals(tmp0_subject, Companion_getInstance_3().get_NAT_LEQ_TYPE_3hke08_k$())) {
                var tmp_1 = Companion_getInstance_2();
                // Inline function 'kotlin.math.min' call
                // Inline function 'kotlin.countLeadingZeroBits' call
                var a = 32 - clz32(n) | 0;
                var tmp$ret$2 = Math.min(a, 2047);
                return tmp_1.fixedSize_141yqr_k$(tmp$ret$2);
            } else if (equals(tmp0_subject, Companion_getInstance_3().get_NAT_LESS_TYPE_a3g7gn_k$())) {
                var tmp_2 = Companion_getInstance_2();
                // Inline function 'kotlin.math.min' call
                // Inline function 'kotlin.countLeadingZeroBits' call
                var this_0 = n - 1 | 0;
                var a_0 = 32 - clz32(this_0) | 0;
                var tmp$ret$4 = Math.min(a_0, 2047);
                return tmp_2.fixedSize_141yqr_k$(tmp$ret$4);
            }
        }
        return this.typeApplied_1.get_size_woubt6_k$();
    };
    protoOf(Apply).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.Apply.toString.<anonymous>' call
        this_0.append_22ad7x_k$('(');
        this_0.append_22ad7x_k$(this.typeApplied_1.get_name_woqyms_k$());
        var tmp0_iterator = this.arguments_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var arg = tmp0_iterator.next_20eer_k$();
            this_0.append_22ad7x_k$(' ');
            this_0.append_t8pm91_k$(arg);
        }
        this_0.append_22ad7x_k$(')');
        return this_0.toString();
    };
    protoOf(Apply).component1_7eebsc_k$ = function () {
        return this.typeApplied_1;
    };
    protoOf(Apply).component2_7eebsb_k$ = function () {
        return this.arguments_1;
    };
    protoOf(Apply).copy_nctjc9_k$ = function (typeApplied, arguments_0) {
        return new Apply(typeApplied, arguments_0);
    };
    protoOf(Apply).copy$default_i6kq8e_k$ = function (typeApplied, arguments_0, $super) {
        typeApplied = typeApplied === VOID ? this.typeApplied_1 : typeApplied;
        arguments_0 = arguments_0 === VOID ? this.arguments_1 : arguments_0;
        return $super === VOID ? this.copy_nctjc9_k$(typeApplied, arguments_0) : $super.copy_nctjc9_k$.call(this, typeApplied, arguments_0);
    };
    protoOf(Apply).hashCode = function () {
        var result = hashCode(this.typeApplied_1);
        result = imul(result, 31) + hashCode(this.arguments_1) | 0;
        return result;
    };
    protoOf(Apply).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Apply))
            return false;
        var tmp0_other_with_cast = other instanceof Apply ? other : THROW_CCE();
        if (!equals(this.typeApplied_1, tmp0_other_with_cast.typeApplied_1))
            return false;
        if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
            return false;
        return true;
    };

    function Add(expression, expression2) {
        this.expression_1 = expression;
        this.expression2__1 = expression2;
    }

    protoOf(Add).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(Add).get_expression2_gspzqp_k$ = function () {
        return this.expression2__1;
    };
    protoOf(Add).interpretNat_z1gffw_k$ = function () {
        var tmp = this.expression_1;
        var tmp0_safe_receiver = isInterface(tmp, TlbNatExpression) ? tmp : null;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interpretNat_z1gffw_k$();
        var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var tmp_1 = this.expression2__1;
        var tmp2_safe_receiver = isInterface(tmp_1, TlbNatExpression) ? tmp_1 : null;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.interpretNat_z1gffw_k$();
        return abstractAdd(tmp_0, tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs);
    };
    protoOf(Add).toString = function () {
        return '(' + this.expression_1 + ' + ' + this.expression2__1 + ')';
    };
    protoOf(Add).component1_7eebsc_k$ = function () {
        return this.expression_1;
    };
    protoOf(Add).component2_7eebsb_k$ = function () {
        return this.expression2__1;
    };
    protoOf(Add).copy_xjj01f_k$ = function (expression, expression2) {
        return new Add(expression, expression2);
    };
    protoOf(Add).copy$default_pzn9fu_k$ = function (expression, expression2, $super) {
        expression = expression === VOID ? this.expression_1 : expression;
        expression2 = expression2 === VOID ? this.expression2__1 : expression2;
        return $super === VOID ? this.copy_xjj01f_k$(expression, expression2) : $super.copy_xjj01f_k$.call(this, expression, expression2);
    };
    protoOf(Add).hashCode = function () {
        var result = hashCode(this.expression_1);
        result = imul(result, 31) + hashCode(this.expression2__1) | 0;
        return result;
    };
    protoOf(Add).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Add))
            return false;
        var tmp0_other_with_cast = other instanceof Add ? other : THROW_CCE();
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        if (!equals(this.expression2__1, tmp0_other_with_cast.expression2__1))
            return false;
        return true;
    };

    function GetBit(expression, expression2) {
        this.expression_1 = expression;
        this.expression2__1 = expression2;
    }

    protoOf(GetBit).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(GetBit).get_expression2_gspzqp_k$ = function () {
        return this.expression2__1;
    };
    protoOf(GetBit).interpretNat_z1gffw_k$ = function () {
        var tmp = this.expression_1;
        var tmp0_safe_receiver = isInterface(tmp, TlbNatExpression) ? tmp : null;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interpretNat_z1gffw_k$();
        var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var tmp_1 = this.expression2__1;
        var tmp2_safe_receiver = isInterface(tmp_1, TlbNatExpression) ? tmp_1 : null;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.interpretNat_z1gffw_k$();
        return abstractGetBit(tmp_0, tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs);
    };
    protoOf(GetBit).toString = function () {
        return '(' + this.expression_1 + '.' + this.expression2__1 + ')';
    };
    protoOf(GetBit).component1_7eebsc_k$ = function () {
        return this.expression_1;
    };
    protoOf(GetBit).component2_7eebsb_k$ = function () {
        return this.expression2__1;
    };
    protoOf(GetBit).copy_xjj01f_k$ = function (expression, expression2) {
        return new GetBit(expression, expression2);
    };
    protoOf(GetBit).copy$default_gfpc1e_k$ = function (expression, expression2, $super) {
        expression = expression === VOID ? this.expression_1 : expression;
        expression2 = expression2 === VOID ? this.expression2__1 : expression2;
        return $super === VOID ? this.copy_xjj01f_k$(expression, expression2) : $super.copy_xjj01f_k$.call(this, expression, expression2);
    };
    protoOf(GetBit).hashCode = function () {
        var result = hashCode(this.expression_1);
        result = imul(result, 31) + hashCode(this.expression2__1) | 0;
        return result;
    };
    protoOf(GetBit).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof GetBit))
            return false;
        var tmp0_other_with_cast = other instanceof GetBit ? other : THROW_CCE();
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        if (!equals(this.expression2__1, tmp0_other_with_cast.expression2__1))
            return false;
        return true;
    };

    function Multiply(value, expression) {
        this.value_1 = value;
        this.expression_1 = expression;
    }

    protoOf(Multiply).get_value_j01efc_k$ = function () {
        return this.value_1;
    };
    protoOf(Multiply).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(Multiply).interpretNat_z1gffw_k$ = function () {
        var tmp = this.value_1;
        var tmp0_safe_receiver = isInterface(tmp, TlbNatExpression) ? tmp : null;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interpretNat_z1gffw_k$();
        return abstractMul(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, this.value_1.interpretNat_z1gffw_k$());
    };
    protoOf(Multiply).toString = function () {
        return '(' + this.value_1 + ' * ' + this.expression_1 + ')';
    };
    protoOf(Multiply).component1_7eebsc_k$ = function () {
        return this.value_1;
    };
    protoOf(Multiply).component2_7eebsb_k$ = function () {
        return this.expression_1;
    };
    protoOf(Multiply).copy_ui5kcf_k$ = function (value, expression) {
        return new Multiply(value, expression);
    };
    protoOf(Multiply).copy$default_py564p_k$ = function (value, expression, $super) {
        value = value === VOID ? this.value_1 : value;
        expression = expression === VOID ? this.expression_1 : expression;
        return $super === VOID ? this.copy_ui5kcf_k$(value, expression) : $super.copy_ui5kcf_k$.call(this, value, expression);
    };
    protoOf(Multiply).hashCode = function () {
        var result = hashCode(this.value_1);
        result = imul(result, 31) + hashCode(this.expression_1) | 0;
        return result;
    };
    protoOf(Multiply).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Multiply))
            return false;
        var tmp0_other_with_cast = other instanceof Multiply ? other : THROW_CCE();
        if (!equals(this.value_1, tmp0_other_with_cast.value_1))
            return false;
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        return true;
    };

    function IntConstant(value) {
        this.value_1 = value;
    }

    protoOf(IntConstant).get_value_j01efc_k$ = function () {
        return this.value_1;
    };
    protoOf(IntConstant).toString = function () {
        return this.value_1.toString();
    };
    protoOf(IntConstant).interpretNat_z1gffw_k$ = function () {
        return abstractNatConst(this.value_1);
    };
    protoOf(IntConstant).component1_7eebsc_k$ = function () {
        return this.value_1;
    };
    protoOf(IntConstant).copy_ns6qmb_k$ = function (value) {
        return new IntConstant(value);
    };
    protoOf(IntConstant).copy$default_ulbd5h_k$ = function (value, $super) {
        value = value === VOID ? this.value_1 : value;
        return $super === VOID ? this.copy_ns6qmb_k$(value) : $super.copy_ns6qmb_k$.call(this, value);
    };
    protoOf(IntConstant).hashCode = function () {
        return this.value_1;
    };
    protoOf(IntConstant).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof IntConstant))
            return false;
        var tmp0_other_with_cast = other instanceof IntConstant ? other : THROW_CCE();
        if (!(this.value_1 === tmp0_other_with_cast.value_1))
            return false;
        return true;
    };

    function Tuple(value, expression) {
        this.value_1 = value;
        this.expression_1 = expression;
        var tmp = this;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.Tuple.size.<anonymous>' call
        var nat = this.value_1.interpretNat_z1gffw_k$();
        var tmp_0;
        if ((nat & -2) === 0) {
            tmp_0 = Companion_getInstance_2().fixedSize_141yqr_k$(0);
        } else {
            var size = this.expression_1.get_size_woubt6_k$();
            var tmp_1 = this.value_1;
            if (tmp_1 instanceof IntConstant) {
                size = size.times_kr2a3y_k$(this.value_1.value_1);
            } else {
                if (!((nat & 1) === 0)) {
                    size = size.withoutMin_lor6vq_k$();
                }
                if (!((nat & 12) === 0)) {
                    var n = !((nat & 1) === 0) ? 0 : !((nat & 2) === 0) ? 1 : 2;
                    size = size.timesAtLeast_sp8ewo_k$(n);
                }
            }
            tmp_0 = size;
        }
        tmp.size_1 = tmp_0;
        var tmp_2 = this;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.Tuple.isAnyBits.<anonymous>' call
        var n_0 = this.value_1.interpretNat_z1gffw_k$();
        tmp_2.isAnyBits_1 = (n_0 & -2) === 0 ? true : this.expression_1.get_isAnyBits_f0tjq9_k$();
    }

    protoOf(Tuple).get_value_j01efc_k$ = function () {
        return this.value_1;
    };
    protoOf(Tuple).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(Tuple).get_size_woubt6_k$ = function () {
        return this.size_1;
    };
    protoOf(Tuple).get_isAnyBits_f0tjq9_k$ = function () {
        return this.isAnyBits_1;
    };
    protoOf(Tuple).toString = function () {
        return '(' + this.value_1 + ' * ' + this.expression_1 + ')';
    };
    protoOf(Tuple).component1_7eebsc_k$ = function () {
        return this.value_1;
    };
    protoOf(Tuple).component2_7eebsb_k$ = function () {
        return this.expression_1;
    };
    protoOf(Tuple).copy_ui5kcf_k$ = function (value, expression) {
        return new Tuple(value, expression);
    };
    protoOf(Tuple).copy$default_sl8lz0_k$ = function (value, expression, $super) {
        value = value === VOID ? this.value_1 : value;
        expression = expression === VOID ? this.expression_1 : expression;
        return $super === VOID ? this.copy_ui5kcf_k$(value, expression) : $super.copy_ui5kcf_k$.call(this, value, expression);
    };
    protoOf(Tuple).hashCode = function () {
        var result = hashCode(this.value_1);
        result = imul(result, 31) + hashCode(this.expression_1) | 0;
        return result;
    };
    protoOf(Tuple).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Tuple))
            return false;
        var tmp0_other_with_cast = other instanceof Tuple ? other : THROW_CCE();
        if (!equals(this.value_1, tmp0_other_with_cast.value_1))
            return false;
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        return true;
    };

    function CellRef(expression) {
        this.expression_1 = expression;
        var tmp = this;
        var tmp_0;
        if (this.expression_1.get_size_woubt6_k$().isPossible_lrpl1_k$()) {
            tmp_0 = Companion_getInstance_2().get_ONE_REF_8ottyn_k$();
        } else {
            tmp_0 = Companion_getInstance_2().get_IMPOSSIBLE_ngqwim_k$();
        }
        tmp.size_1 = tmp_0;
    }

    protoOf(CellRef).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(CellRef).get_size_woubt6_k$ = function () {
        return this.size_1;
    };
    protoOf(CellRef).get_isAnyBits_f0tjq9_k$ = function () {
        return true;
    };
    protoOf(CellRef).toString = function () {
        return '^' + this.expression_1;
    };
    protoOf(CellRef).component1_7eebsc_k$ = function () {
        return this.expression_1;
    };
    protoOf(CellRef).copy_4f3f41_k$ = function (expression) {
        return new CellRef(expression);
    };
    protoOf(CellRef).copy$default_qmf97a_k$ = function (expression, $super) {
        expression = expression === VOID ? this.expression_1 : expression;
        return $super === VOID ? this.copy_4f3f41_k$(expression) : $super.copy_4f3f41_k$.call(this, expression);
    };
    protoOf(CellRef).hashCode = function () {
        return hashCode(this.expression_1);
    };
    protoOf(CellRef).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof CellRef))
            return false;
        var tmp0_other_with_cast = other instanceof CellRef ? other : THROW_CCE();
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        return true;
    };

    function Conditional(condition, expression) {
        this.condition_1 = condition;
        this.expression_1 = expression;
        var tmp = this;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.Conditional.size.<anonymous>' call
        var value = this.condition_1.interpretNat_z1gffw_k$();
        var tmp_0;
        if ((value & -2) === 0) {
            tmp_0 = Companion_getInstance_2().fixedSize_141yqr_k$(0);
        } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.ton.tlb.compiler.Conditional.size.<anonymous>.<anonymous>' call
            var size = this.expression_1.get_size_woubt6_k$();
            var tmp_1;
            if ((value & 1) === 0) {
                tmp_1 = size.withoutMin_lor6vq_k$();
            } else {
                tmp_1 = size;
            }
            tmp_0 = tmp_1;
        }
        tmp.size_1 = tmp_0;
        var tmp_2 = this;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.compiler.Conditional.isAnyBits.<anonymous>' call
        var n = this.condition_1.interpretNat_z1gffw_k$();
        tmp_2.isAnyBits_1 = (n & -2) === 0 ? true : this.expression_1.get_isAnyBits_f0tjq9_k$();
    }

    protoOf(Conditional).get_condition_5qa366_k$ = function () {
        return this.condition_1;
    };
    protoOf(Conditional).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(Conditional).get_size_woubt6_k$ = function () {
        return this.size_1;
    };
    protoOf(Conditional).get_isAnyBits_f0tjq9_k$ = function () {
        return this.isAnyBits_1;
    };
    protoOf(Conditional).toString = function () {
        return '(' + this.condition_1 + '?' + this.expression_1 + ')';
    };
    protoOf(Conditional).component1_7eebsc_k$ = function () {
        return this.condition_1;
    };
    protoOf(Conditional).component2_7eebsb_k$ = function () {
        return this.expression_1;
    };
    protoOf(Conditional).copy_ui5kcf_k$ = function (condition, expression) {
        return new Conditional(condition, expression);
    };
    protoOf(Conditional).copy$default_2whcce_k$ = function (condition, expression, $super) {
        condition = condition === VOID ? this.condition_1 : condition;
        expression = expression === VOID ? this.expression_1 : expression;
        return $super === VOID ? this.copy_ui5kcf_k$(condition, expression) : $super.copy_ui5kcf_k$.call(this, condition, expression);
    };
    protoOf(Conditional).hashCode = function () {
        var result = hashCode(this.condition_1);
        result = imul(result, 31) + hashCode(this.expression_1) | 0;
        return result;
    };
    protoOf(Conditional).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Conditional))
            return false;
        var tmp0_other_with_cast = other instanceof Conditional ? other : THROW_CCE();
        if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
            return false;
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        return true;
    };

    function TlbTypeExpression() {
    }

    function TlbNatExpression() {
    }

    function TlbParamExpression() {
    }

    function isNaturalSubType(_this__u8e3s4) {
        // Inline function 'kotlin.contracts.contract' call
        var tmp;
        if (_this__u8e3s4 instanceof Apply) {
            tmp = _this__u8e3s4.get_isNaturalSubType_lr8i7w_k$();
        } else {
            tmp = false;
        }
        return tmp;
    }

    function isNegated(_this__u8e3s4) {
        // Inline function 'kotlin.contracts.contract' call
        var tmp;
        if (_this__u8e3s4 instanceof NaturalParam) {
            tmp = _this__u8e3s4.isNegated_1;
        } else {
            tmp = false;
        }
        return tmp;
    }

    function isReferred(_this__u8e3s4) {
        var tmp;
        if (_this__u8e3s4 instanceof CellRef) {
            tmp = true;
        } else {
            if (_this__u8e3s4 instanceof Apply) {
                tmp = equals(_this__u8e3s4.typeApplied_1, Companion_getInstance_3().get_CELL_TYPE_b0o026_k$()) ? true : equals(_this__u8e3s4.typeApplied_1, Companion_getInstance_3().get_ANY_TYPE_o5gsx6_k$());
            } else {
                tmp = false;
            }
        }
        return tmp;
    }

    function ConstructorTypeLowerCaseException(typeName) {
        Exception_init_$Init$('Constructor type `' + typeName + '` name must begin with an uppercase letter', this);
        captureStack(this, ConstructorTypeLowerCaseException);
        this.typeName_1 = typeName;
    }

    protoOf(ConstructorTypeLowerCaseException).get_typeName_s1eeum_k$ = function () {
        return this.typeName_1;
    };

    function InvalidConstructorTagException(tag) {
        Exception_init_$Init$('Invalid constructor tag `' + tag + '`', this);
        captureStack(this, InvalidConstructorTagException);
        this.tag_1 = tag;
    }

    protoOf(InvalidConstructorTagException).get_tag_18ivnz_k$ = function () {
        return this.tag_1;
    };

    function TypeAlreadyDefinedException(typeName) {
        Exception_init_$Init$('Type `' + typeName + '` is already defined', this);
        captureStack(this, TypeAlreadyDefinedException);
        this.typeName_1 = typeName;
    }

    protoOf(TypeAlreadyDefinedException).get_typeName_s1eeum_k$ = function () {
        return this.typeName_1;
    };

    function UndefinedTypeException(typeName) {
        Exception_init_$Init$('Type `' + typeName + '` is not defined', this);
        captureStack(this, UndefinedTypeException);
        this.typeName_1 = typeName;
    }

    protoOf(UndefinedTypeException).get_typeName_s1eeum_k$ = function () {
        return this.typeName_1;
    };

    function UndefinedFieldException(fieldName) {
        Exception_init_$Init$('Field `' + fieldName + '` is not defined', this);
        captureStack(this, UndefinedFieldException);
        this.fieldName_1 = fieldName;
    }

    protoOf(UndefinedFieldException).get_fieldName_tfocn0_k$ = function () {
        return this.fieldName_1;
    };

    function CantApplyNonNatTypeException() {
        Exception_init_$Init$("Can't apply non-nat type", this);
        captureStack(this, CantApplyNonNatTypeException);
    }

    function _get_appendable__8nvfkn($this) {
        return $this.appendable_1;
    }

    function _get_tmpCodeIds__ju5gmh($this) {
        return $this.tmpCodeIds_1;
    }

    function _get_fieldVars__c8gfn9($this) {
        return $this.fieldVars_1;
    }

    function Action_init_$Init$(action, $this) {
        Action.call($this, Companion_getInstance_2().get_IMPOSSIBLE_ngqwim_k$(), action);
        return $this;
    }

    function Action_init_$Create$(action) {
        return Action_init_$Init$(action, objectCreate(protoOf(Action)));
    }

    function Action_init_$Init$_0(fixedSize, $this) {
        Action.call($this, fixedSize, '');
        return $this;
    }

    function Action_init_$Create$_0(fixedSize) {
        return Action_init_$Init$_0(fixedSize, objectCreate(protoOf(Action)));
    }

    function Action_init_$Init$_1(builder, $this) {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        builder(this_0);
        var tmp$ret$1 = this_0.toString();
        Action_init_$Init$(tmp$ret$1, $this);
        return $this;
    }

    function Action_init_$Create$_1(builder) {
        return Action_init_$Init$_1(builder, objectCreate(protoOf(Action)));
    }

    function _get_globalCodeIds__8jq07r($this) {
        return $this.globalCodeIds_1;
    }

    function _get_localCodeIds__sl6gff($this) {
        return $this.localCodeIds_1;
    }

    function _set_funcClassName__r9nvdm($this, _set____db54di) {
        $this.funcClassName_1 = _set____db54di;
    }

    function _get_funcClassName__sjoo36($this) {
        var tmp = $this.funcClassName_1;
        if (!(tmp == null))
            return tmp;
        else {
            throwUninitializedPropertyAccessException('funcClassName');
        }
    }

    function _set_consEnumName__xhjr0m($this, _set____db54di) {
        $this.consEnumName_1 = _set____db54di;
    }

    function _get_consEnumName__hxt0gi($this) {
        var tmp = $this.consEnumName_1;
        if (!(tmp == null))
            return tmp;
        else {
            throwUninitializedPropertyAccessException('consEnumName');
        }
    }

    function _set_typeParamName__6hmj53($this, _set____db54di) {
        $this.typeParamName_1 = _set____db54di;
    }

    function _get_typeParamName__8q4zd9($this) {
        var tmp = $this.typeParamName_1;
        if (!(tmp == null))
            return tmp;
        else {
            throwUninitializedPropertyAccessException('typeParamName');
        }
    }

    function _set_consEnumValue__v51946($this, _set____db54di) {
        $this.consEnumValue_1 = _set____db54di;
    }

    function _get_consEnumValue__fx9qlu($this) {
        var tmp = $this.consEnumValue_1;
        if (!(tmp == null))
            return tmp;
        else {
            throwUninitializedPropertyAccessException('consEnumValue');
        }
    }

    function _set_consIdxByEnum__1mispt($this, _set____db54di) {
        $this.consIdxByEnum_1 = _set____db54di;
    }

    function _get_consIdxByEnum__dl8psj($this) {
        var tmp = $this.consIdxByEnum_1;
        if (!(tmp == null))
            return tmp;
        else {
            throwUninitializedPropertyAccessException('consIdxByEnum');
        }
    }

    function _set_records__ngybgd($this, _set____db54di) {
        $this.records_1 = _set____db54di;
    }

    function _get_records__lxxg5r($this) {
        var tmp = $this.records_1;
        if (!(tmp == null))
            return tmp;
        else {
            throwUninitializedPropertyAccessException('records');
        }
    }

    function _get_simpleGetSize__a628dw($this) {
        return $this.type_1.get_size_woubt6_k$().isFixed_y1sbxm_k$();
    }

    function _get_inlineSkip__cjgb83($this) {
        return _get_simpleGetSize__a628dw($this);
    }

    function generateGetSizeMethod($this, appendable) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.FuncCodeGen.generateGetSizeMethod.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        appendable.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        appendable.append_jgojdo_k$('(int, int) ');
        appendable.append_jgojdo_k$(_get_funcClassName__sjoo36($this));
        appendable.append_jgojdo_k$('::get_size(slice cs)');
        appendable.append_jgojdo_k$(' {\n');
        if (_get_simpleGetSize__a628dw($this)) {
            appendable.append_jgojdo_k$('    return (');
            appendable.append_jgojdo_k$($this.type_1.get_size_woubt6_k$().get_minBits_iunpfz_k$().toString());
            appendable.append_jgojdo_k$(', ');
            appendable.append_jgojdo_k$($this.type_1.get_size_woubt6_k$().get_minRefs_iuxtxl_k$().toString());
            appendable.append_jgojdo_k$(');\n');
        } else {
            appendable.append_jgojdo_k$('    return tlb::get_size_by_skip(cs, ');
            appendable.append_jgojdo_k$(_get_funcClassName__sjoo36($this));
            appendable.append_jgojdo_k$('::skip);\n');
        }
        appendable.append_jgojdo_k$('}\n');
        return appendable;
    }

    function declareSkipMethod(_this__u8e3s4, $this) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.FuncCodeGen.declareSkipMethod.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        _this__u8e3s4.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        _this__u8e3s4.append_jgojdo_k$('(slice) ');
        _this__u8e3s4.append_jgojdo_k$(_get_funcClassName__sjoo36($this));
        _this__u8e3s4.append_jgojdo_k$('::skip(slice cs)');
        return _this__u8e3s4;
    }

    function generateLoadMethod($this, appendable) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.FuncCodeGen.generateLoadMethod.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        appendable.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        appendable.append_jgojdo_k$('(slice, slice) ');
        appendable.append_jgojdo_k$(_get_funcClassName__sjoo36($this));
        appendable.append_jgojdo_k$('::load(slice cs)');
        appendable.append_jgojdo_k$(' {\n');
        appendable.append_jgojdo_k$('    return tlb::load(cs, ');
        appendable.append_jgojdo_k$(_get_funcClassName__sjoo36($this));
        appendable.append_jgojdo_k$('::get_size);\n');
        appendable.append_jgojdo_k$('}\n');
        return appendable;
    }

    function generateSkipMethod($this, appendable) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.FuncCodeGen.generateSkipMethod.<anonymous>' call
        declareSkipMethod(appendable, $this);
        appendable.append_jgojdo_k$(' {\n');
        var tmp0_iterator = _get_records__lxxg5r($this).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var record = tmp0_iterator.next_20eer_k$();
            appendable.append_jgojdo_k$('    if cs~slice_begins_with("');
            var tmp1_safe_receiver = record.cons_1.get_tag_18ivnz_k$();
            appendable.append_jgojdo_k$(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toHex_1tsk9s_k$());
            appendable.append_jgojdo_k$('"s) {\n');
            appendable.append_jgojdo_k$('        return ');
            appendable.append_jgojdo_k$(_get_funcClassName__sjoo36(record.funcType_1));
            appendable.append_jgojdo_k$('::');
            appendable.append_jgojdo_k$(_get_consEnumName__hxt0gi(record.funcType_1).get_wei43m_k$(record.cons_1));
            appendable.append_jgojdo_k$('::skip(cs);\n');
            appendable.append_jgojdo_k$('    }\n');
        }
        appendable.append_jgojdo_k$('    return cs;\n');
        appendable.append_jgojdo_k$('}\n');
        return appendable;
    }

    function generateSkipMethod_0($this, appendable, record) {
        return ctx($this, appendable, FuncCodeGen$generateSkipMethod$lambda(record, $this));
    }

    function generateSkipField(_this__u8e3s4, $this, record, field) {
        var expr = field.get_type_wovaf7_k$();
        var size = expr.get_size_woubt6_k$();
        var anyBits = expr.get_isAnyBits_f0tjq9_k$();
        if (isNaturalSubType(expr) ? !anyBits : false) {
            _this__u8e3s4.fetchNatField_e4l2l1_k$(record.cons_1, field);
            return Unit_getInstance();
        }
        if (size.isFixed_y1sbxm_k$()) {
            // Inline function 'kotlin.collections.plusAssign' call
            var this_0 = _this__u8e3s4.actions_1;
            var element = Action_init_$Create$_0(size);
            this_0.add_utx5q5_k$(element);
            return Unit_getInstance();
        }
        if (isNegated(expr)) {
            // Inline function 'kotlin.TODO' call
            var reason = 'Negated types are not supported';
            throw new NotImplementedError('An operation is not implemented: ' + reason);
        }
        if (isReferred(expr)) {
            // Inline function 'kotlin.collections.plusAssign' call
            var this_1 = _this__u8e3s4.actions_1;
            var element_0 = Action_init_$Create$_0(Companion_getInstance_2().get_ONE_REF_8ottyn_k$());
            this_1.add_utx5q5_k$(element_0);
            return Unit_getInstance();
        }
        if (anyBits ? canComputeSizeOf(expr) : false) {
            // Inline function 'kotlin.collections.plusAssign' call
            var this_2 = _this__u8e3s4.actions_1;
            // Inline function 'kotlin.text.buildString' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.apply' call
            var this_3 = StringBuilder_init_$Create$();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.ton.tlb.generator.FuncCodeGen.generateSkipField.<anonymous>' call
            this_3.append_22ad7x_k$('cs~skip_bits(');
            _this__u8e3s4.appendSizeOfExpr_7p48z_k$(this_3, expr);
            this_3.append_22ad7x_k$(')');
            var tmp$ret$1 = this_3.toString();
            var element_1 = Action_init_$Create$(tmp$ret$1);
            this_2.add_utx5q5_k$(element_1);
            return Unit_getInstance();
        }
        if (!(expr instanceof CellRef)) {
            // Inline function 'kotlin.collections.plusAssign' call
            var this_4 = _this__u8e3s4.actions_1;
            var element_2 = Action_init_$Create$_1(FuncCodeGen$generateSkipField$lambda(_this__u8e3s4, expr));
            this_4.add_utx5q5_k$(element_2);
            return Unit_getInstance();
        }
        var tmp;
        if (expr instanceof Apply) {
            tmp = isReferred(expr);
        } else {
            tmp = false;
        }
        if (tmp) {
            // Inline function 'kotlin.collections.plusAssign' call
            var this_5 = _this__u8e3s4.actions_1;
            var element_3 = Action_init_$Create$('cs~slice_split(0, 1)');
            this_5.add_utx5q5_k$(element_3);
            return Unit_getInstance();
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var this_6 = _this__u8e3s4.actions_1;
        var element_4 = Action_init_$Create$_1(FuncCodeGen$generateSkipField$lambda_0(_this__u8e3s4, expr));
        this_6.add_utx5q5_k$(element_4);
    }

    function generateUnpackMethod($this, appendable, record) {
        return ctx($this, appendable, FuncCodeGen$generateUnpackMethod$lambda(record, appendable, $this));
    }

    function generateUnpackField($this, ctx, field, constructor) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        $l$block_1: {
            // Inline function 'org.ton.tlb.generator.FuncCodeGen.generateUnpackField.<anonymous>' call
            if (ctx.fetchNatField_e4l2l1_k$(constructor, field)) {
                break $l$block_1;
            }
            var expr = field.field_1.get_type_wovaf7_k$();
            var size = expr.get_size_woubt6_k$();
            var vt = field.primitiveType_1;
            if (size.isFixed_y1sbxm_k$() ? !field.primitiveType_1.equals(TlbPrimitiveType_ENUM_getInstance()) : false) {
                if (field.primitiveType_1.equals(TlbPrimitiveType_ANONYMOUS_getInstance())) {
                    // Inline function 'kotlin.TODO' call
                    throw new NotImplementedError();
                } else {
                    ctx.fetchField_mf7wuu_k$(field.name_1, expr, field.primitiveType_1);
                }
                break $l$block_1;
            }
            var tmp;
            if (expr instanceof NaturalParam) {
                tmp = expr.get_isNegated_t7d5db_k$();
            } else {
                tmp = false;
            }
            if (vt.equals(TlbPrimitiveType_SLICE_getInstance()) ? true : vt.equals(TlbPrimitiveType_ENUM_getInstance())) {
                ctx.fetchType_ve6h4_k$(field, expr);
                break $l$block_1;
            }
            ctx.fetchRef_141urx_k$(field, expr);
        }
        return ctx;
    }

    function generatePackMethod($this, appendable, record) {
        return ctx($this, appendable, FuncCodeGen$generatePackMethod$lambda(record, appendable, $this));
    }

    function generatePackField($this, ctx, field, constructor) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        $l$block_2: {
            // Inline function 'org.ton.tlb.generator.FuncCodeGen.generatePackField.<anonymous>' call
            if (ctx.storeNatField_z0omv8_k$(constructor, field)) {
                break $l$block_2;
            }
            var expr = field.field_1.get_type_wovaf7_k$();
            var size = expr.get_size_woubt6_k$();
            var isAnyBits = expr.get_isAnyBits_f0tjq9_k$();
            var vt = field.primitiveType_1;
            if (size.isFixed_y1sbxm_k$() ? !vt.equals(TlbPrimitiveType_ENUM_getInstance()) : false) {
                if (vt.equals(TlbPrimitiveType_ANONYMOUS_getInstance())) {
                    // Inline function 'kotlin.TODO' call
                    throw new NotImplementedError();
                } else {
                    ctx.storeField_pdhbch_k$(field.name_1, expr, vt);
                }
                break $l$block_2;
            }
            var tmp;
            if (expr instanceof NaturalParam) {
                tmp = expr.get_isNegated_t7d5db_k$();
            } else {
                tmp = false;
            }
            if ((isAnyBits ? canComputeSizeOf(expr) : false) ? !vt.equals(TlbPrimitiveType_ENUM_getInstance()) : false) {
                ctx.storeField_pdhbch_k$(field.name_1, expr, vt);
                break $l$block_2;
            }
            if (!(expr instanceof CellRef)) {
                if (vt.equals(TlbPrimitiveType_SLICE_getInstance())) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    var this_0 = ctx.actions_1;
                    var element = Action_init_$Create$('cb = cb.store_slice(' + field.name_1 + ')');
                    this_0.add_utx5q5_k$(element);
                } else {
                    // Inline function 'kotlin.TODO' call
                    throw new NotImplementedError();
                }
                break $l$block_2;
            }
            ctx.storeRef_jqezyy_k$(field, expr);
        }
        return ctx;
    }

    function assignClassName($this) {
        $this.funcClassName_1 = $this.globalCodeIds_1.registerIdentifier$default_p4qkni_k$($this.type_1.get_name_woqyms_k$());
    }

    function assignConsNames($this) {
        var tmp = $this;
        // Inline function 'kotlin.collections.associateWith' call
        var this_0 = $this.type_1.get_constructors_sgrxfi_k$();
        var result = LinkedHashMap_init_$Create$_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
        // Inline function 'kotlin.collections.associateWithTo' call
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.generator.FuncCodeGen.assignConsNames.<anonymous>' call
            var tmp$ret$0 = $this.localCodeIds_1.registerIdentifier$default_p4qkni_k$(element.get_name_woqyms_k$());
            result.put_4fpzoq_k$(element, tmp$ret$0);
        }
        tmp.consEnumName_1 = result;
    }

    function assignClassFieldNames($this) {
        var cn = _Char___init__impl__6a9atx(109);
        var ct = _Char___init__impl__6a9atx(88);
        var tmp = $this;
        var tmp_0 = 0;
        var tmp_1 = $this.type_1.get_args_woj09y_k$().get_size_woubt6_k$();
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_2 = fillArrayVal(Array(tmp_1), null);
        while (tmp_0 < tmp_1) {
            var tmp_3 = tmp_0;
            var arg = $this.type_1.get_args_woj09y_k$().get_c1px32_k$(tmp_3);
            var id;
            if (arg.get_isNatural_riopo6_k$()) {
                id = $this.localCodeIds_1.registerIdentifier$default_p4qkni_k$(toString_0(cn));
                var tmp0 = cn;
                cn = Char__inc_impl_6e1wmz(tmp0);
            } else {
                id = $this.localCodeIds_1.registerIdentifier$default_p4qkni_k$(toString_0(ct));
                var tmp1 = ct;
                ct = Char__inc_impl_6e1wmz(tmp1);
            }
            tmp_2[tmp_3] = id;
            tmp_0 = tmp_0 + 1 | 0;
        }
        tmp.typeParamName_1 = tmp_2;
    }

    function assignConsValues($this) {
        // Inline function 'kotlin.collections.sortedBy' call
        // Inline function 'kotlin.collections.map' call
        var this_0 = $this.type_1.get_constructors_sgrxfi_k$();
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.generator.FuncCodeGen.assignConsValues.<anonymous>' call
            var tmp0_elvis_lhs = firstOrNull(item.get_beginWith_985y8q_k$());
            var tmp$ret$0 = to(tmp0_elvis_lhs == null ? new Long(0, 0) : tmp0_elvis_lhs, item);
            destination.add_utx5q5_k$(tmp$ret$0);
        }
        // Inline function 'kotlin.comparisons.compareBy' call
        var tmp = FuncCodeGen$assignConsValues$lambda;
        var tmp$ret$3 = new sam$kotlin_Comparator$0(tmp);
        var a = sortedWith(destination, tmp$ret$3);
        var tmp_0 = $this;
        var tmp_1 = 0;
        var tmp_2 = a.get_size_woubt6_k$();
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_3 = fillArrayVal(Array(tmp_2), null);
        while (tmp_1 < tmp_2) {
            var tmp_4 = tmp_1;
            tmp_3[tmp_4] = a.get_c1px32_k$(tmp_4).get_second_jf7fjx_k$();
            tmp_1 = tmp_1 + 1 | 0;
        }
        tmp_0.consIdxByEnum_1 = tmp_3;
        var tmp_5 = $this;
        // Inline function 'kotlin.collections.mapIndexed' call
        // Inline function 'kotlin.collections.mapIndexedTo' call
        var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(a, 10));
        var index = 0;
        var tmp0_iterator_0 = a.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var item_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'org.ton.tlb.generator.FuncCodeGen.assignConsValues.<anonymous>' call
            var tmp1 = index;
            index = tmp1 + 1 | 0;
            var index_0 = checkIndexOverflow(tmp1);
            var tmp$ret$7 = to(item_0.get_second_jf7fjx_k$(), index_0);
            destination_0.add_utx5q5_k$(tmp$ret$7);
        }
        tmp_5.consEnumValue_1 = toMap(destination_0);
    }

    function assignRecordConsNames($this) {
        var tmp = $this;
        // Inline function 'kotlin.collections.map' call
        var this_0 = $this.type_1.get_constructors_sgrxfi_k$();
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.generator.FuncCodeGen.assignRecordConsNames.<anonymous>' call
            var hasTrivialName = $this.type_1.get_constructors_sgrxfi_k$().get_size_woubt6_k$() <= 1 ? true : isBlank(item.get_name_woqyms_k$());
            var recIds = new IdentScope();
            // Inline function 'kotlin.collections.mapNotNull' call
            // Inline function 'kotlin.collections.mapNotNullTo' call
            var this_1 = item.get_fields_dbuqbm_k$();
            var destination_0 = ArrayList_init_$Create$();
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
            while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator_0.next_20eer_k$();
                // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
                // Inline function 'org.ton.tlb.generator.FuncCodeGen.assignRecordConsNames.<anonymous>.<anonymous>' call
                var tmp_0;
                if (element.get_isConstraint_xq6a6o_k$()) {
                    tmp_0 = null;
                } else if (!element.get_isImplicit_upa56g_k$()) {
                    var size = element.get_type_wovaf7_k$().get_size_woubt6_k$();
                    var tmp_1;
                    if (size.get_maxSize_f83j4s_k$() === 0) {
                        tmp_1 = null;
                    } else {
                        var fieldName = '';
                        var subRecord = null;
                        // Inline function 'kotlin.text.isNotEmpty' call
                        var this_2 = element.get_name_woqyms_k$();
                        if (charSequenceLength(this_2) > 0) {
                            fieldName = recIds.registerIdentifier$default_p4qkni_k$(element.get_name_woqyms_k$());
                        } else {
                            if (element.get_type_wovaf7_k$().get_isAnon_evulnj_k$()) {
                                fieldName = recIds.registerIdentifier_r59n06_k$('anon', 1);
                                var tmp_2 = element.get_type_wovaf7_k$();
                                subRecord = first(_get_records__lxxg5r(new FuncCodeGen((tmp_2 instanceof Apply ? tmp_2 : THROW_CCE()).get_typeApplied_csunwa_k$(), $this.globalCodeIds_1)));
                            } else {
                                var tmp_3 = element.get_type_wovaf7_k$();
                                if (tmp_3 instanceof CellRef) {
                                    fieldName = recIds.registerIdentifier_r59n06_k$('ref', 1);
                                }
                            }
                        }
                        var primitiveType = detectFieldType($this, element.get_type_wovaf7_k$());
                        tmp_1 = new ConsField(element, fieldName, primitiveType, size.get_maxSize_f83j4s_k$(), subRecord);
                    }
                    tmp_0 = tmp_1;
                } else {
                    tmp_0 = null;
                }
                var tmp0_safe_receiver = tmp_0;
                if (tmp0_safe_receiver == null)
                    null;
                else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    destination_0.add_utx5q5_k$(tmp0_safe_receiver);
                }
            }
            var fields = destination_0;
            var tmp$ret$5 = new ConsRecord($this, item, hasTrivialName, fields);
            destination.add_utx5q5_k$(tmp$ret$5);
        }
        tmp.records_1 = destination;
    }

    function detectFieldType($this, expr) {
        if (expr.get_isAnon_evulnj_k$()) {
            return TlbPrimitiveType_ANONYMOUS_getInstance();
        }
        if (expr instanceof CellRef) {
            return TlbPrimitiveType_CELL_getInstance();
        }
        var size = expr.get_size_woubt6_k$();
        var minBitSize = size.isFixed_y1sbxm_k$() ? size.get_minBits_iunpfz_k$() : 0;
        if (expr.get_isNatural_riopo6_k$()) {
            return minBitSize === 1 ? TlbPrimitiveType_BOOL_getInstance() : TlbPrimitiveType_INT32_getInstance();
        }
        if (expr instanceof Conditional) {
            var subType = detectFieldType($this, expr.get_expression_l5w7j5_k$());
            var tmp;
            switch (subType.get_ordinal_ip24qg_k$()) {
                case 0:
                case 1:
                case 5:
                case 4:
                case 7:
                    tmp = subType;
                    break;
                case 9:
                case 11:
                    var tmp_0;
                    if (expr.get_intSign_xn0cir_k$() > 0) {
                        tmp_0 = subType;
                    } else {
                        tmp_0 = TlbPrimitiveType_SLICE_getInstance();
                    }

                    tmp = tmp_0;
                    break;
                default:
                    tmp = TlbPrimitiveType_SLICE_getInstance();
                    break;
            }
            return tmp;
        }
        if (size.get_maxRefs_f82spn_k$() > 0) {
            return TlbPrimitiveType_SLICE_getInstance();
        }
        if (!expr.get_isInt_it6ud8_k$()) {
            if (expr instanceof Apply) {
                if (expr.get_typeApplied_csunwa_k$().get_isSimpleEnum_grozja_k$()) {
                    return TlbPrimitiveType_ENUM_getInstance();
                }
                var typeName = expr.get_typeApplied_csunwa_k$().get_name_woqyms_k$();
                if (equals(expr.get_typeApplied_csunwa_k$(), Companion_getInstance_3().get_BITS_TYPE_76oo9i_k$()) ? true : startsWith(typeName, _Char___init__impl__6a9atx(98)) ? !(Companion_getInstance_3().getBuiltInType_t21ycz_k$(typeName) == null) : false) {
                    return (0 <= minBitSize ? minBitSize <= 256 : false) ? TlbPrimitiveType_BITS_getInstance() : TlbPrimitiveType_BITSTRING_getInstance();
                }
            }
            var tmp_1;
            var tmp_2;
            if (expr instanceof Tuple) {
                var tmp_3 = expr.get_expression_l5w7j5_k$();
                tmp_2 = tmp_3 instanceof Apply;
            } else {
                tmp_2 = false;
            }
            if (tmp_2) {
                tmp_1 = expr.get_expression_l5w7j5_k$().get_typeApplied_csunwa_k$().get_isBool_evv9dp_k$();
            } else {
                tmp_1 = false;
            }
            if (tmp_1) {
                return (0 <= minBitSize ? minBitSize <= 256 : false) ? TlbPrimitiveType_BITS_getInstance() : TlbPrimitiveType_BITSTRING_getInstance();
            }
            return TlbPrimitiveType_SLICE_getInstance();
        }
        if (minBitSize === 1) {
            return TlbPrimitiveType_BOOL_getInstance();
        }
        if (minBitSize < 32) {
            return TlbPrimitiveType_INT32_getInstance();
        }
        if (minBitSize === 32) {
            return expr.get_intSign_xn0cir_k$() < 0 ? TlbPrimitiveType_INT32_getInstance() : TlbPrimitiveType_UINT32_getInstance();
        }
        if (minBitSize < 64) {
            return TlbPrimitiveType_INT64_getInstance();
        }
        if (minBitSize === 64) {
            return expr.get_intSign_xn0cir_k$() < 0 ? TlbPrimitiveType_INT64_getInstance() : TlbPrimitiveType_UINT64_getInstance();
        }
        return TlbPrimitiveType_INTEGER_getInstance();
    }

    function LocalContext($outer, appendable, tmpCodeIds, actions) {
        tmpCodeIds = tmpCodeIds === VOID ? new IdentScope() : tmpCodeIds;
        actions = actions === VOID ? ArrayList_init_$Create$() : actions;
        this.$this_1 = $outer;
        this.appendable_1 = appendable;
        this.tmpCodeIds_1 = tmpCodeIds;
        this.actions_1 = actions;
        this.tmpCodeIds_1.registerIdentifier$default_p4qkni_k$('cs');
        this.tmpCodeIds_1.registerIdentifier$default_p4qkni_k$('cb');
        this.tmpCodeIds_1.registerIdentifier$default_p4qkni_k$('cell_ref');
        this.tmpCodeIds_1.registerIdentifier$default_p4qkni_k$('t');
        this.fieldVars_1 = HashMap_init_$Create$();
    }

    protoOf(LocalContext).get_actions_hy5jak_k$ = function () {
        return this.actions_1;
    };
    protoOf(LocalContext).append_am5a4z_k$ = function (value) {
        return this.appendable_1.append_am5a4z_k$(value);
    };
    protoOf(LocalContext).append_jgojdo_k$ = function (value) {
        return this.appendable_1.append_jgojdo_k$(value);
    };
    protoOf(LocalContext).append_xdc1zw_k$ = function (value, startIndex, endIndex) {
        return this.appendable_1.append_xdc1zw_k$(value, startIndex, endIndex);
    };
    protoOf(LocalContext).fieldVar_z92rml_k$ = function (field) {
        var tmp0_elvis_lhs = this.fieldVars_1.get_wei43m_k$(field);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            throw new UndefinedFieldException(field.name_1);
        } else {
            tmp = tmp0_elvis_lhs;
        }
        return tmp;
    };
    protoOf(LocalContext).bindRecordFields_qvwile_k$ = function (record) {
        var tmp0_iterator = record.fields_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var field = tmp0_iterator.next_20eer_k$();
            if (!field.get_isImplicit_upa56g_k$()) {
                // Inline function 'kotlin.collections.set' call
                var this_0 = this.fieldVars_1;
                var value = field.name_1;
                this_0.put_4fpzoq_k$(field, value);
            }
        }
    };
    protoOf(LocalContext).fetchNatField_e4l2l1_k$ = function (constructor, field) {
        var tmp0_elvis_lhs = this.fieldVars_1.get_wei43m_k$(field);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var reason = 'Implicit names for fields are not supported';
            throw new NotImplementedError('An operation is not implemented: ' + reason);
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var id = tmp;
        var tmp_0 = field.field_1.get_type_wovaf7_k$();
        var tmp1_elvis_lhs = tmp_0 instanceof Apply ? tmp_0 : null;
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
            return false;
        } else {
            tmp_1 = tmp1_elvis_lhs;
        }
        var expr = tmp_1;
        var ta = expr.get_typeApplied_csunwa_k$();
        if (((equals(ta, Companion_getInstance_3().get_NAT_TYPE_fb1g1t_k$()) ? true : equals(ta, Companion_getInstance_3().get_NAT_WIDTH_TYPE_qq16be_k$())) ? true : equals(ta, Companion_getInstance_3().get_NAT_LESS_TYPE_a3g7gn_k$())) ? true : equals(ta, Companion_getInstance_3().get_NAT_LEQ_TYPE_3hke08_k$())) {
            // Inline function 'kotlin.text.buildString' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.apply' call
            var this_0 = StringBuilder_init_$Create$();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.ton.tlb.generator.LocalContext.fetchNatField.<anonymous>' call
            this_0.append_22ad7x_k$('var ');
            this_0.append_22ad7x_k$(id);
            this_0.append_22ad7x_k$(' = cs~');
            if (equals(ta, Companion_getInstance_3().get_NAT_TYPE_fb1g1t_k$())) {
                this_0.append_22ad7x_k$('load_uint(32)');
            } else {
                if (equals(ta, Companion_getInstance_3().get_NAT_WIDTH_TYPE_qq16be_k$())) {
                    this_0.append_22ad7x_k$('load_uint(');
                } else if (equals(ta, Companion_getInstance_3().get_NAT_LESS_TYPE_a3g7gn_k$())) {
                    this_0.append_22ad7x_k$('load_uint_less(');
                } else if (equals(ta, Companion_getInstance_3().get_NAT_LEQ_TYPE_3hke08_k$())) {
                    this_0.append_22ad7x_k$('load_uint_leq(');
                }
                this.appendExpr_pdo6qj_k$(this_0, first(expr.get_arguments_p5ddub_k$()));
                this_0.append_22ad7x_k$(')');
            }
            var action = this_0.toString();
            this.actions_1.add_utx5q5_k$(Action_init_$Create$(action));
            return true;
        }
        return false;
    };
    protoOf(LocalContext).storeNatField_z0omv8_k$ = function (constructor, field) {
        var tmp0_elvis_lhs = this.fieldVars_1.get_wei43m_k$(field);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var reason = 'Implicit names for fields are not supported';
            throw new NotImplementedError('An operation is not implemented: ' + reason);
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var id = tmp;
        var tmp_0 = field.field_1.get_type_wovaf7_k$();
        var tmp1_elvis_lhs = tmp_0 instanceof Apply ? tmp_0 : null;
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
            return false;
        } else {
            tmp_1 = tmp1_elvis_lhs;
        }
        var expr = tmp_1;
        var ta = expr.get_typeApplied_csunwa_k$();
        if (((equals(ta, Companion_getInstance_3().get_NAT_TYPE_fb1g1t_k$()) ? true : equals(ta, Companion_getInstance_3().get_NAT_WIDTH_TYPE_qq16be_k$())) ? true : equals(ta, Companion_getInstance_3().get_NAT_LESS_TYPE_a3g7gn_k$())) ? true : equals(ta, Companion_getInstance_3().get_NAT_LEQ_TYPE_3hke08_k$())) {
            // Inline function 'kotlin.text.buildString' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.apply' call
            var this_0 = StringBuilder_init_$Create$();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.ton.tlb.generator.LocalContext.storeNatField.<anonymous>' call
            this_0.append_22ad7x_k$('cb = cb.');
            if (equals(ta, Companion_getInstance_3().get_NAT_TYPE_fb1g1t_k$())) {
                this_0.append_22ad7x_k$('store_uint(').append_22ad7x_k$(id).append_22ad7x_k$(', 32)');
            } else {
                if (equals(ta, Companion_getInstance_3().get_NAT_WIDTH_TYPE_qq16be_k$())) {
                    this_0.append_22ad7x_k$('store_uint(');
                } else if (equals(ta, Companion_getInstance_3().get_NAT_LESS_TYPE_a3g7gn_k$())) {
                    this_0.append_22ad7x_k$('store_uint_less(');
                } else if (equals(ta, Companion_getInstance_3().get_NAT_LEQ_TYPE_3hke08_k$())) {
                    this_0.append_22ad7x_k$('store_uint_leq(');
                }
                this_0.append_22ad7x_k$(id);
                this_0.append_22ad7x_k$(', ');
                this.appendExpr_pdo6qj_k$(this_0, first(expr.get_arguments_p5ddub_k$()));
                this_0.append_22ad7x_k$(')');
            }
            var action = this_0.toString();
            this.actions_1.add_utx5q5_k$(Action_init_$Create$(action));
            return true;
        }
        return false;
    };
    protoOf(LocalContext).fetchField_mf7wuu_k$ = function (fieldVar, expr, primitiveType) {
        var size = expr.get_size_woubt6_k$();
        var l = size.isFixed_y1sbxm_k$() ? size.get_minBits_iunpfz_k$() : -1;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.LocalContext.fetchField.<anonymous>' call
        this_0.append_22ad7x_k$('var ');
        this_0.append_22ad7x_k$(fieldVar);
        this_0.append_22ad7x_k$(' = ');
        switch (primitiveType.get_ordinal_ip24qg_k$()) {
            case 0:
                this_0.append_22ad7x_k$('cs~load_slice');
                if (!((size.get_maxSize_f83j4s_k$() & 255) === 0)) {
                    this_0.append_22ad7x_k$('_ext');
                }

                this_0.append_22ad7x_k$('(');
                this.appendSizeOfExpr_7p48z_k$(this_0, expr);
                this_0.append_22ad7x_k$(')');
                break;
            case 4:
                this_0.append_22ad7x_k$('cs~load_bits');
                this_0.append_22ad7x_k$('(');
                this.appendSizeOfExpr_7p48z_k$(this_0, expr);
                this_0.append_22ad7x_k$(')');
                break;
            case 3:
                this_0.append_22ad7x_k$('cs~load_bits');
                this_0.append_22ad7x_k$('(');
                this_0.append_uppzia_k$(l);
                this_0.append_22ad7x_k$(')');
                break;
            case 1:
                this_0.append_22ad7x_k$('cs~load_ref()');
                break;
            case 6:
                this_0.append_22ad7x_k$('cs~load_uint(1)');
                break;
            case 9:
                this_0.append_22ad7x_k$('cs~load_int(32)');
                break;
            case 10:
                this_0.append_22ad7x_k$('cs~load_uint(32)');
                break;
            case 11:
                this_0.append_22ad7x_k$('cs~load_int(64)');
                break;
            case 12:
                this_0.append_22ad7x_k$('cs~load_uint(64)');
                break;
            case 5:
                this_0.append_22ad7x_k$('cs~load_uint(');
                this_0.append_uppzia_k$(l);
                this_0.append_22ad7x_k$(')');
                break;
            default:
                throw IllegalArgumentException_init_$Create$("Can't fetch field of type " + primitiveType);
        }
        var action = this_0.toString();
        this.actions_1.add_utx5q5_k$(Action_init_$Create$(action));
    };
    protoOf(LocalContext).storeField_pdhbch_k$ = function (fieldVar, expr, primitiveType) {
        var isInteger = expr.get_isInt_it6ud8_k$();
        var size = expr.get_size_woubt6_k$();
        var l = size.isFixed_y1sbxm_k$() ? size.get_minSize_iuykcq_k$() : -1;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.LocalContext.storeField.<anonymous>' call
        switch (primitiveType.get_ordinal_ip24qg_k$()) {
            case 4:
            case 3:
            case 0:
                this_0.append_22ad7x_k$('cb = cb.store_slice(').append_22ad7x_k$(fieldVar).append_22ad7x_k$(')');
                break;
            case 1:
                this_0.append_22ad7x_k$('cb = cb.store_ref(').append_22ad7x_k$(fieldVar).append_22ad7x_k$(')');
                break;
            case 6:
                this_0.append_22ad7x_k$('cb = cb.store_uint(').append_22ad7x_k$(fieldVar).append_22ad7x_k$(', 1)');
                break;
            case 9:
                this_0.append_22ad7x_k$('cb = cb.store_int(').append_22ad7x_k$(fieldVar).append_22ad7x_k$(', 32)');
                break;
            case 10:
                this_0.append_22ad7x_k$('cb = cb.store_uint(').append_22ad7x_k$(fieldVar).append_22ad7x_k$(', 32)');
                break;
            case 11:
                this_0.append_22ad7x_k$('cb = cb.store_int(').append_22ad7x_k$(fieldVar).append_22ad7x_k$(', 64)');
                break;
            case 12:
                this_0.append_22ad7x_k$('cb = cb.store_uint(').append_22ad7x_k$(fieldVar).append_22ad7x_k$(', 64)');
                break;
            case 5:
                this.appendSizeOfExpr_7p48z_k$(this_0.append_22ad7x_k$('cb = cb.store_uint(').append_22ad7x_k$(fieldVar).append_22ad7x_k$(', '), expr).append_jgojdo_k$(')');
                break;
            default:
                throw IllegalArgumentException_init_$Create$("Can't fetch field of type " + primitiveType);
        }
        var action = this_0.toString();
        this.actions_1.add_utx5q5_k$(Action_init_$Create$(action));
    };
    protoOf(LocalContext).fetchType_ve6h4_k$ = function (field, expression) {
        var tmp0_elvis_lhs = this.fieldVars_1.get_wei43m_k$(field);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            throw new UndefinedFieldException(field.name_1);
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var fieldName = tmp;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.LocalContext.fetchType.<anonymous>' call
        this_0.append_22ad7x_k$('var ');
        this_0.append_22ad7x_k$(fieldName);
        this_0.append_22ad7x_k$(' = cs~');
        this.appendExpr_pdo6qj_k$(this_0, expression);
        this_0.append_22ad7x_k$('::load()');
        var action = this_0.toString();
        this.actions_1.add_utx5q5_k$(Action_init_$Create$(action));
    };
    protoOf(LocalContext).storeType_633svl_k$ = function (field, expression) {
        var tmp0_elvis_lhs = this.fieldVars_1.get_wei43m_k$(field);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            throw new UndefinedFieldException(field.name_1);
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var fieldName = tmp;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.LocalContext.storeType.<anonymous>' call
        this_0.append_22ad7x_k$('cb = cb.');
        this.appendExpr_pdo6qj_k$(this_0, expression);
        this_0.append_22ad7x_k$('::store(');
        this_0.append_22ad7x_k$(fieldName);
        this_0.append_22ad7x_k$(')');
        var action = this_0.toString();
        this.actions_1.add_utx5q5_k$(Action_init_$Create$(action));
    };
    protoOf(LocalContext).fetchRef_141urx_k$ = function (field, expr) {
        var tmp0_elvis_lhs = this.fieldVars_1.get_wei43m_k$(field);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            throw new UndefinedFieldException(field.name_1);
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var fieldNme = tmp;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.LocalContext.fetchRef.<anonymous>' call
        this_0.append_22ad7x_k$('var ');
        this_0.append_22ad7x_k$(fieldNme);
        this_0.append_22ad7x_k$(' = cs~load_ref()');
        var action = this_0.toString();
        this.actions_1.add_utx5q5_k$(Action_init_$Create$(action));
    };
    protoOf(LocalContext).storeRef_jqezyy_k$ = function (field, expr) {
        var tmp0_elvis_lhs = this.fieldVars_1.get_wei43m_k$(field);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            throw new UndefinedFieldException(field.name_1);
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var fieldNme = tmp;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.LocalContext.storeRef.<anonymous>' call
        this_0.append_22ad7x_k$('cb = cb.store_ref(');
        this_0.append_22ad7x_k$(fieldNme);
        this_0.append_22ad7x_k$(')');
        var action = this_0.toString();
        this.actions_1.add_utx5q5_k$(Action_init_$Create$(action));
    };
    protoOf(LocalContext).appendExpr_pdo6qj_k$ = function (_this__u8e3s4, expression) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.LocalContext.appendExpr.<anonymous>' call
        if (expression instanceof Apply) {
            _this__u8e3s4.append_jgojdo_k$(_get_funcClassName__sjoo36(new FuncCodeGen(this.$this_1.type_1)));
        } else {
            if (expression instanceof Add) {
                _this__u8e3s4.append_jgojdo_k$('(');
                this.appendExpr_pdo6qj_k$(_this__u8e3s4, expression.get_expression_l5w7j5_k$());
                _this__u8e3s4.append_jgojdo_k$(' + ');
                this.appendExpr_pdo6qj_k$(_this__u8e3s4, expression.get_expression2_gspzqp_k$());
                _this__u8e3s4.append_jgojdo_k$(')');
            } else {
                if (expression instanceof IntConstant) {
                    _this__u8e3s4.append_jgojdo_k$(expression.get_value_j01efc_k$().toString());
                } else {
                    if (expression instanceof Multiply) {
                        _this__u8e3s4.append_jgojdo_k$('(');
                        this.appendExpr_pdo6qj_k$(_this__u8e3s4, expression.get_value_j01efc_k$());
                        _this__u8e3s4.append_jgojdo_k$(' * ');
                        this.appendExpr_pdo6qj_k$(_this__u8e3s4, expression.get_expression_l5w7j5_k$());
                        _this__u8e3s4.append_jgojdo_k$(')');
                    } else {
                        if (isInterface(expression, TlbParamExpression)) {
                            // Inline function 'kotlin.collections.find' call
                            var this_0 = this.fieldVars_1.get_keys_wop4xp_k$();
                            var tmp$ret$1;
                            $l$block: {
                                // Inline function 'kotlin.collections.firstOrNull' call
                                var tmp0_iterator = this_0.iterator_jk1svi_k$();
                                while (tmp0_iterator.hasNext_bitz1p_k$()) {
                                    var element = tmp0_iterator.next_20eer_k$();
                                    // Inline function 'org.ton.tlb.generator.LocalContext.appendExpr.<anonymous>.<anonymous>' call
                                    if (element.field_1.get_name_woqyms_k$() === expression.get_name_woqyms_k$()) {
                                        tmp$ret$1 = element;
                                        break $l$block;
                                    }
                                }
                                tmp$ret$1 = null;
                            }
                            var tmp1_safe_receiver = tmp$ret$1;
                            var tmp;
                            if (tmp1_safe_receiver == null) {
                                tmp = null;
                            } else {
                                // Inline function 'kotlin.let' call
                                // Inline function 'kotlin.contracts.contract' call
                                // Inline function 'org.ton.tlb.generator.LocalContext.appendExpr.<anonymous>.<anonymous>' call
                                tmp = this.fieldVars_1.get_wei43m_k$(tmp1_safe_receiver);
                            }
                            var tmp2_elvis_lhs = tmp;
                            var tmp_0;
                            if (tmp2_elvis_lhs == null) {
                                throw new UndefinedFieldException(expression.get_name_woqyms_k$());
                            } else {
                                tmp_0 = tmp2_elvis_lhs;
                            }
                            var fieldName = tmp_0;
                            _this__u8e3s4.append_jgojdo_k$(fieldName);
                        } else {
                            var reason = 'Expression `' + expression + '` is not supported';
                            throw new NotImplementedError('An operation is not implemented: ' + reason);
                        }
                    }
                }
            }
        }
        return _this__u8e3s4;
    };
    protoOf(LocalContext).appendSizeOfExpr_7p48z_k$ = function (_this__u8e3s4, expr) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        $l$block_4: {
            // Inline function 'org.ton.tlb.generator.LocalContext.appendSizeOfExpr.<anonymous>' call
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!isInterface(expr, TlbParamExpression)) {
                // Inline function 'org.ton.tlb.generator.LocalContext.appendSizeOfExpr.<anonymous>.<anonymous>' call
                var message = "Can't compute size of non-type expression " + expr;
                throw IllegalStateException_init_$Create$(toString(message));
            }
            var size = expr.get_size_woubt6_k$();
            if (size.isFixed_y1sbxm_k$()) {
                _this__u8e3s4.append_jgojdo_k$(size.get_minBits_iunpfz_k$().toString());
                break $l$block_4;
            }
            if (expr instanceof Conditional) {
                _this__u8e3s4.append_jgojdo_k$('(');
                this.appendExpr_pdo6qj_k$(_this__u8e3s4, expr.get_condition_5qa366_k$());
                _this__u8e3s4.append_jgojdo_k$(' ? ');
                this.appendSizeOfExpr_7p48z_k$(_this__u8e3s4, expr.get_expression_l5w7j5_k$());
                _this__u8e3s4.append_jgojdo_k$(' : 0');
                _this__u8e3s4.append_jgojdo_k$(')');
                break $l$block_4;
            } else {
                if (expr instanceof Tuple) {
                    var tmp;
                    var tmp_0 = expr.get_value_j01efc_k$();
                    if (tmp_0 instanceof IntConstant) {
                        tmp = expr.get_value_j01efc_k$().get_value_j01efc_k$() === 1;
                    } else {
                        tmp = false;
                    }
                    if (tmp) {
                        this.appendSizeOfExpr_7p48z_k$(_this__u8e3s4, expr.get_expression_l5w7j5_k$());
                        break $l$block_4;
                    }
                    size = expr.get_expression_l5w7j5_k$().get_size_woubt6_k$();
                    if (size.isFixed_y1sbxm_k$() ? size.get_minSize_iuykcq_k$() === 1 : false) {
                        this.appendExpr_pdo6qj_k$(_this__u8e3s4, expr.get_value_j01efc_k$());
                        break $l$block_4;
                    }
                    _this__u8e3s4.append_jgojdo_k$('(');
                    this.appendExpr_pdo6qj_k$(_this__u8e3s4, expr.get_value_j01efc_k$());
                    _this__u8e3s4.append_jgojdo_k$(' * ');
                    this.appendSizeOfExpr_7p48z_k$(_this__u8e3s4, expr.get_expression_l5w7j5_k$());
                    _this__u8e3s4.append_jgojdo_k$(')');
                    break $l$block_4;
                } else {
                    if (expr instanceof Apply) {
                        var ta = expr.get_typeApplied_csunwa_k$();
                        if (((equals(ta, Companion_getInstance_3().get_INT_TYPE_911abx_k$()) ? true : equals(ta, Companion_getInstance_3().get_UINT_TYPE_ng4ofe_k$())) ? true : equals(ta, Companion_getInstance_3().get_NAT_WIDTH_TYPE_qq16be_k$())) ? true : equals(ta, Companion_getInstance_3().get_BITS_TYPE_76oo9i_k$())) {
                            this.appendExpr_pdo6qj_k$(_this__u8e3s4, first(expr.get_arguments_p5ddub_k$()));
                            break $l$block_4;
                        }
                    }
                }
            }
            throw IllegalArgumentException_init_$Create$("Can't compute size of expression `" + expr + '`');
        }
        return _this__u8e3s4;
    };
    protoOf(LocalContext).appendReturnUnpack_52mcjl_k$ = function (_this__u8e3s4, record) {
        _this__u8e3s4.append_jgojdo_k$('return (cs, [');
        var separator = '';
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = record.fields_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            $l$block: {
                // Inline function 'org.ton.tlb.generator.LocalContext.appendReturnUnpack.<anonymous>' call
                _this__u8e3s4.append_jgojdo_k$(separator);
                var tmp0_elvis_lhs = this.fieldVars_1.get_wei43m_k$(element);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                    break $l$block;
                } else {
                    tmp = tmp0_elvis_lhs;
                }
                var fieldName = tmp;
                _this__u8e3s4.append_jgojdo_k$(fieldName);
                separator = ', ';
            }
        }
        _this__u8e3s4.append_jgojdo_k$('])');
    };
    protoOf(LocalContext).outputActions_shapkc_k$ = function () {
        var tmp0_iterator = combine(this.actions_1, this.$this_1).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var action = tmp0_iterator.next_20eer_k$();
            this.append_jgojdo_k$('    ');
            this.append_jgojdo_k$(action.toString());
            this.append_jgojdo_k$(';\n');
        }
    };

    function ctx($this, appendable, ctx) {
        // Inline function 'kotlin.contracts.contract' call
        var localContext = new LocalContext($this, appendable);
        return ctx(localContext);
    }

    function ConsField(field, name, primitiveType, size, subRecord) {
        subRecord = subRecord === VOID ? null : subRecord;
        this.field_1 = field;
        this.name_1 = name;
        this.primitiveType_1 = primitiveType;
        this.size_1 = size;
        this.subRecord_1 = subRecord;
    }

    protoOf(ConsField).get_field_irdnf5_k$ = function () {
        return this.field_1;
    };
    protoOf(ConsField).get_name_woqyms_k$ = function () {
        return this.name_1;
    };
    protoOf(ConsField).get_primitiveType_gan920_k$ = function () {
        return this.primitiveType_1;
    };
    protoOf(ConsField).get_size_woubt6_k$ = function () {
        return this.size_1;
    };
    protoOf(ConsField).get_subRecord_1fe9zc_k$ = function () {
        return this.subRecord_1;
    };
    protoOf(ConsField).get_type_wovaf7_k$ = function () {
        return this.field_1.get_type_wovaf7_k$();
    };
    protoOf(ConsField).get_isConstraint_xq6a6o_k$ = function () {
        return this.field_1.get_isConstraint_xq6a6o_k$();
    };
    protoOf(ConsField).get_isImplicit_upa56g_k$ = function () {
        return this.field_1.get_isImplicit_upa56g_k$();
    };

    function ConsRecord(funcType, cons, hasTrivialName, fields) {
        this.funcType_1 = funcType;
        this.cons_1 = cons;
        this.hasTrivialName_1 = hasTrivialName;
        this.fields_1 = fields;
    }

    protoOf(ConsRecord).get_funcType_8zbj89_k$ = function () {
        return this.funcType_1;
    };
    protoOf(ConsRecord).get_cons_wok86y_k$ = function () {
        return this.cons_1;
    };
    protoOf(ConsRecord).get_hasTrivialName_h2zdrx_k$ = function () {
        return this.hasTrivialName_1;
    };
    protoOf(ConsRecord).get_fields_dbuqbm_k$ = function () {
        return this.fields_1;
    };
    protoOf(ConsRecord).declareRecordUnpack_b6rbef_k$ = function (appendable) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.ConsRecord.declareRecordUnpack.<anonymous>' call
        appendable.append_jgojdo_k$('(slice, ');
        this.declareRecordUnpackType_iy2zfn_k$(appendable);
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index = 0;
        var tmp0_iterator = this.cons_1.get_params_hy4oen_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.generator.ConsRecord.declareRecordUnpack.<anonymous>.<anonymous>' call
            var tmp1 = index;
            index = tmp1 + 1 | 0;
            checkIndexOverflow(tmp1);
            var tmp;
            if (item instanceof NaturalParam) {
                tmp = item.get_isNegated_t7d5db_k$();
            } else {
                tmp = false;
            }
            if (tmp) {
                appendable.append_jgojdo_k$(', int');
            }
        }
        appendable.append_jgojdo_k$(') ');
        appendable.append_jgojdo_k$(_get_funcClassName__sjoo36(this.funcType_1) + '::' + _get_consEnumName__hxt0gi(this.funcType_1).get_wei43m_k$(this.cons_1) + '::parse(');
        appendable.append_jgojdo_k$('slice cs');
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index_0 = 0;
        var tmp0_iterator_0 = this.cons_1.get_params_hy4oen_k$().iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var item_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'org.ton.tlb.generator.ConsRecord.declareRecordUnpack.<anonymous>.<anonymous>' call
            var tmp1_0 = index_0;
            index_0 = tmp1_0 + 1 | 0;
            var index_1 = checkIndexOverflow(tmp1_0);
            var tmp_0;
            if (item_0 instanceof NaturalParam) {
                tmp_0 = !item_0.get_isNegated_t7d5db_k$();
            } else {
                tmp_0 = false;
            }
            if (tmp_0) {
                appendable.append_jgojdo_k$(', int ');
                appendable.append_jgojdo_k$(_get_typeParamName__8q4zd9(this.funcType_1)[index_1]);
            } else {
                if (item_0 instanceof TypeParam) {
                    appendable.append_jgojdo_k$(', cont ');
                    appendable.append_jgojdo_k$(_get_typeParamName__8q4zd9(this.funcType_1)[index_1]);
                }
            }
        }
        appendable.append_jgojdo_k$(')');
        return appendable;
    };
    protoOf(ConsRecord).declareRecordPack_emjvrk_k$ = function (appendable) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.ConsRecord.declareRecordPack.<anonymous>' call
        appendable.append_jgojdo_k$('builder ');
        appendable.append_jgojdo_k$(_get_funcClassName__sjoo36(this.funcType_1) + '::' + _get_consEnumName__hxt0gi(this.funcType_1).get_wei43m_k$(this.cons_1) + '::store(builder cb, ');
        this.declareRecordUnpackType_iy2zfn_k$(appendable);
        appendable.append_jgojdo_k$(' data');
        appendable.append_jgojdo_k$(')');
        return appendable;
    };
    protoOf(ConsRecord).declareRecordUnpackType_iy2zfn_k$ = function (appendable) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.ConsRecord.declareRecordUnpackType.<anonymous>' call
        appendable.append_jgojdo_k$('[\n');
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index = 0;
        var tmp0_iterator = this.fields_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.generator.ConsRecord.declareRecordUnpackType.<anonymous>.<anonymous>' call
            var tmp1 = index;
            index = tmp1 + 1 | 0;
            var index_0 = checkIndexOverflow(tmp1);
            if (!item.get_isImplicit_upa56g_k$()) {
                var funcType_0 = funcType(item.primitiveType_1) + (!(index_0 === get_lastIndex_0(this.fields_1)) ? ',' : '');
                appendable.append_jgojdo_k$('    ');
                appendable.append_jgojdo_k$(funcType_0);
                appendable.append_jgojdo_k$(repeat(' ', 6 - funcType_0.length | 0));
                appendable.append_jgojdo_k$(' ;; ');
                appendable.append_jgojdo_k$(item.name_1);
                appendable.append_jgojdo_k$(' : ');
                appendable.append_jgojdo_k$(toString(item.field_1.get_type_wovaf7_k$()));
                // Inline function 'kotlin.text.appendLine' call
                appendable.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            }
        }
        appendable.append_jgojdo_k$(']');
        return appendable;
    };

    function Action(fixedSize, action) {
        this.fixedSize_1 = fixedSize;
        this.action_1 = action;
    }

    protoOf(Action).get_fixedSize_kvjje4_k$ = function () {
        return this.fixedSize_1;
    };
    protoOf(Action).get_action_avldmn_k$ = function () {
        return this.action_1;
    };
    protoOf(Action).toString = function () {
        return this.fixedSize_1.equals(Companion_getInstance_2().get_IMPOSSIBLE_ngqwim_k$()) ? this.action_1 : this.fixedSize_1.get_value_j01efc_k$().equals(new Long(0, 0)) ? '' : this.fixedSize_1.get_minRefs_iuxtxl_k$() === 0 ? 'cs~skip_bits(' + this.fixedSize_1.get_minBits_iunpfz_k$() + ')' : 'cs~slice_split(' + this.fixedSize_1.get_minBits_iunpfz_k$() + ', ' + this.fixedSize_1.get_minRefs_iuxtxl_k$() + ')';
    };
    protoOf(Action).mayCombine_2n8he7_k$ = function (other) {
        if (this.fixedSize_1.equals(Companion_getInstance_2().get_IMPOSSIBLE_ngqwim_k$()) ? true : other.fixedSize_1.equals(Companion_getInstance_2().get_IMPOSSIBLE_ngqwim_k$())) {
            return false;
        }
        if (((this.fixedSize_1.get_minBits_iunpfz_k$() > 0 ? other.fixedSize_1.get_minBits_iunpfz_k$() > 0 : false) ? this.fixedSize_1.get_minRefs_iuxtxl_k$() === 0 : false) ? other.fixedSize_1.get_minRefs_iuxtxl_k$() === 0 : false) {
            return true;
        }
        if (((this.fixedSize_1.get_minRefs_iuxtxl_k$() > 0 ? other.fixedSize_1.get_minRefs_iuxtxl_k$() > 0 : false) ? this.fixedSize_1.get_minBits_iunpfz_k$() === 0 : false) ? other.fixedSize_1.get_minBits_iunpfz_k$() === 0 : false) {
            return true;
        }
        return false;
    };
    protoOf(Action).combine_v563di_k$ = function (other) {
        return Action_init_$Create$_0(this.fixedSize_1.plus_vnukzl_k$(other.fixedSize_1));
    };
    protoOf(Action).component1_7eebsc_k$ = function () {
        return this.fixedSize_1;
    };
    protoOf(Action).component2_7eebsb_k$ = function () {
        return this.action_1;
    };
    protoOf(Action).copy_ny4eg0_k$ = function (fixedSize, action) {
        return new Action(fixedSize, action);
    };
    protoOf(Action).copy$default_valfwj_k$ = function (fixedSize, action, $super) {
        fixedSize = fixedSize === VOID ? this.fixedSize_1 : fixedSize;
        action = action === VOID ? this.action_1 : action;
        return $super === VOID ? this.copy_ny4eg0_k$(fixedSize, action) : $super.copy_ny4eg0_k$.call(this, fixedSize, action);
    };
    protoOf(Action).hashCode = function () {
        var result = this.fixedSize_1.hashCode();
        result = imul(result, 31) + getStringHashCode(this.action_1) | 0;
        return result;
    };
    protoOf(Action).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Action))
            return false;
        var tmp0_other_with_cast = other instanceof Action ? other : THROW_CCE();
        if (!this.fixedSize_1.equals(tmp0_other_with_cast.fixedSize_1))
            return false;
        if (!(this.action_1 === tmp0_other_with_cast.action_1))
            return false;
        return true;
    };

    function combine(_this__u8e3s4, $this) {
        // Inline function 'kotlin.collections.buildList' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.collections.buildListInternal' call
        // Inline function 'kotlin.apply' call
        var this_0 = ArrayList_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.FuncCodeGen.combine.<anonymous>' call
        var last = null;
        var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var action = tmp0_iterator.next_20eer_k$();
            if (!(last == null) ? last.mayCombine_2n8he7_k$(action) : false) {
                last = last.combine_v563di_k$(action);
            } else {
                var tmp1_safe_receiver = last;
                if (tmp1_safe_receiver == null)
                    null;
                else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    // Inline function 'org.ton.tlb.generator.FuncCodeGen.combine.<anonymous>.<anonymous>' call
                    this_0.add_utx5q5_k$(tmp1_safe_receiver);
                }
                last = action;
            }
        }
        var tmp2_safe_receiver = last;
        if (tmp2_safe_receiver == null)
            null;
        else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            this_0.add_utx5q5_k$(tmp2_safe_receiver);
        }
        return this_0.build_1k0s4u_k$();
    }

    function Companion_4() {
        Companion_instance_4 = this;
        this.TLB_LIB_1 = ';; This file is generated by TLB compiler. Do not edit it manually.\n#pragma version >=0.4.0;\n#include "stdlib.fc";\n\n(slice, int) slice_begins_with(slice cs, slice prefix) asm "SDBEGINSXQ";\n(slice, slice) slice_split(slice cs, int bits, int refs) asm(-> 1 0) "SPLIT";\n\n(int, int) tlb::get_size_by_skip(slice cs, ((slice) -> slice) skip) {\n    int (before_bits, before_refs) = cs.slice_bits_refs();\n    slice new_slice = skip(cs);\n    int (after_bits, after_refs) = new_slice.slice_bits_refs();\n    return (before_bits - after_bits, before_refs - after_refs);\n}\n\n(slice) tlb::skip(slice cs, ((slice) -> (int, int)) get_size) inline {\n    int (bits, refs) = get_size(cs);\n    cs~slice_split(bits, refs);\n    return cs;\n}\n\n(slice, slice) tlb::load(slice cs, ((slice) -> (int, int)) get_size) inline {\n    int (bits, refs) = get_size(cs);\n    return cs.slice_split(bits, refs);\n}';
    }

    protoOf(Companion_4).get_TLB_LIB_7bp7qx_k$ = function () {
        return this.TLB_LIB_1;
    };
    var Companion_instance_4;

    function Companion_getInstance_4() {
        if (Companion_instance_4 == null)
            new Companion_4();
        return Companion_instance_4;
    }

    function sam$kotlin_Comparator$0(function_0) {
        this.function_1 = function_0;
    }

    protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
        return this.function_1(a, b);
    };
    protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
        return this.compare_bczr_k$(a, b);
    };

    function FuncCodeGen$generateSkipMethod$lambda($record, this$0) {
        return function ($this$ctx) {
            // Inline function 'kotlin.text.appendLine' call
            $this$ctx.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            $this$ctx.append_jgojdo_k$('(slice) ');
            $this$ctx.append_jgojdo_k$(_get_funcClassName__sjoo36($record.funcType_1));
            $this$ctx.append_jgojdo_k$('::');
            $this$ctx.append_jgojdo_k$(_get_consEnumName__hxt0gi($record.funcType_1).get_wei43m_k$($record.cons_1));
            $this$ctx.append_jgojdo_k$('::skip(slice cs)');
            $this$ctx.append_jgojdo_k$(' {\n');
            var tmp0_iterator = $record.fields_1.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var field = tmp0_iterator.next_20eer_k$();
                if (!field.get_isImplicit_upa56g_k$()) {
                    generateSkipField($this$ctx, this$0, $record, field);
                }
            }
            $this$ctx.outputActions_shapkc_k$();
            $this$ctx.append_jgojdo_k$('    return cs;\n');
            return $this$ctx.append_jgojdo_k$('}\n');
        };
    }

    function FuncCodeGen$generateSkipField$lambda($this_generateSkipField, $expr) {
        return function ($this$$receiver) {
            $this$$receiver.append_22ad7x_k$('cs~');
            $this_generateSkipField.appendExpr_pdo6qj_k$($this$$receiver, $expr);
            $this$$receiver.append_22ad7x_k$('::skip()');
            return Unit_getInstance();
        };
    }

    function FuncCodeGen$generateSkipField$lambda_0($this_generateSkipField, $expr) {
        return function ($this$$receiver) {
            $this$$receiver.append_22ad7x_k$('cs~');
            $this_generateSkipField.appendExpr_pdo6qj_k$($this$$receiver, $expr);
            $this$$receiver.append_22ad7x_k$('::skip()');
            return Unit_getInstance();
        };
    }

    function FuncCodeGen$generateUnpackMethod$lambda($record, $appendable, this$0) {
        return function ($this$ctx) {
            // Inline function 'kotlin.text.appendLine' call
            $this$ctx.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            $record.declareRecordUnpack_b6rbef_k$($appendable);
            $this$ctx.append_jgojdo_k$(' {\n');
            $this$ctx.bindRecordFields_qvwile_k$($record);
            var tmp0_iterator = $record.fields_1.iterator_jk1svi_k$();
            $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var field = tmp0_iterator.next_20eer_k$();
                if (field.get_isConstraint_xq6a6o_k$()) {
                    continue $l$loop;
                }
                if (!field.get_isImplicit_upa56g_k$()) {
                    generateUnpackField(this$0, $this$ctx, field, $record.cons_1);
                }
            }
            var this_0 = $this$ctx.actions_1;
            // Inline function 'kotlin.text.buildString' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.apply' call
            var this_1 = StringBuilder_init_$Create$();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.ton.tlb.generator.FuncCodeGen.generateUnpackMethod.<anonymous>.<anonymous>' call
            $this$ctx.appendReturnUnpack_52mcjl_k$(this_1, $record);
            var tmp$ret$2 = this_1.toString();
            var element = Action_init_$Create$(tmp$ret$2);
            this_0.add_utx5q5_k$(element);
            $this$ctx.outputActions_shapkc_k$();
            return $this$ctx.append_jgojdo_k$('}\n');
        };
    }

    function FuncCodeGen$generatePackMethod$lambda($record, $appendable, this$0) {
        return function ($this$ctx) {
            // Inline function 'kotlin.text.appendLine' call
            $this$ctx.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            $record.declareRecordPack_emjvrk_k$($appendable);
            $this$ctx.append_jgojdo_k$(' {\n');
            $this$ctx.bindRecordFields_qvwile_k$($record);
            var this_0 = $this$ctx.actions_1;
            // Inline function 'kotlin.text.buildString' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.apply' call
            var this_1 = StringBuilder_init_$Create$();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.ton.tlb.generator.FuncCodeGen.generatePackMethod.<anonymous>.<anonymous>' call
            this_1.append_22ad7x_k$('var (');
            var seprarator = '';
            var tmp0_iterator = $record.fields_1.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var field = tmp0_iterator.next_20eer_k$();
                if (!field.get_isImplicit_upa56g_k$()) {
                    this_1.append_22ad7x_k$(seprarator);
                    this_1.append_22ad7x_k$($this$ctx.fieldVar_z92rml_k$(field));
                    seprarator = ', ';
                }
            }
            this_1.append_22ad7x_k$(') = data');
            var tmp$ret$2 = this_1.toString();
            var element = Action_init_$Create$(tmp$ret$2);
            this_0.add_utx5q5_k$(element);
            var tmp1_iterator = $record.fields_1.iterator_jk1svi_k$();
            $l$loop: while (tmp1_iterator.hasNext_bitz1p_k$()) {
                var field_0 = tmp1_iterator.next_20eer_k$();
                if (field_0.get_isConstraint_xq6a6o_k$()) {
                    continue $l$loop;
                }
                if (!field_0.get_isImplicit_upa56g_k$()) {
                    generatePackField(this$0, $this$ctx, field_0, $record.cons_1);
                }
            }
            var this_2 = $this$ctx.actions_1;
            var element_0 = Action_init_$Create$('return cb');
            this_2.add_utx5q5_k$(element_0);
            $this$ctx.outputActions_shapkc_k$();
            return $this$ctx.append_jgojdo_k$('}\n');
        };
    }

    function FuncCodeGen$assignConsValues$lambda(a, b) {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'org.ton.tlb.generator.FuncCodeGen.assignConsValues.<anonymous>' call
        var tmp = a.get_first_irdx8n_k$();
        // Inline function 'org.ton.tlb.generator.FuncCodeGen.assignConsValues.<anonymous>' call
        var tmp$ret$1 = b.get_first_irdx8n_k$();
        return compareValues(tmp, tmp$ret$1);
    }

    function FuncCodeGen(type, globalCodeIds, localCodeIds) {
        Companion_getInstance_4();
        globalCodeIds = globalCodeIds === VOID ? new IdentScope() : globalCodeIds;
        localCodeIds = localCodeIds === VOID ? new IdentScope() : localCodeIds;
        this.type_1 = type;
        this.globalCodeIds_1 = globalCodeIds;
        this.localCodeIds_1 = localCodeIds;
        assignClassName(this);
        assignConsNames(this);
        assignClassFieldNames(this);
        assignConsValues(this);
        assignRecordConsNames(this);
    }

    protoOf(FuncCodeGen).get_type_wovaf7_k$ = function () {
        return this.type_1;
    };
    protoOf(FuncCodeGen).generate_arbnv5_k$ = function (appendable) {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.FuncCodeGen.generate.<anonymous>' call
        declareSkipMethod(appendable, this).append_jgojdo_k$(';\n');
        generateGetSizeMethod(this, appendable);
        generateLoadMethod(this, appendable);
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = _get_records__lxxg5r(this).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.generator.FuncCodeGen.generate.<anonymous>.<anonymous>' call
            generateSkipMethod_0(this, appendable, element);
            generateUnpackMethod(this, appendable, element);
            generatePackMethod(this, appendable, element);
        }
        generateSkipMethod(this, appendable);
        return appendable;
    };

    function canComputeSizeOf(_this__u8e3s4) {
        if (_this__u8e3s4.get_isNatural_riopo6_k$()) {
            return false;
        }
        if (_this__u8e3s4.get_size_woubt6_k$().isFixed_y1sbxm_k$()) {
            return (_this__u8e3s4.get_size_woubt6_k$().get_minSize_iuykcq_k$() & 255) === 0;
        }
        if (_this__u8e3s4 instanceof Apply) {
            if (((equals(_this__u8e3s4.get_typeApplied_csunwa_k$(), Companion_getInstance_3().get_INT_TYPE_911abx_k$()) ? true : equals(_this__u8e3s4.get_typeApplied_csunwa_k$(), Companion_getInstance_3().get_UINT_TYPE_ng4ofe_k$())) ? true : equals(_this__u8e3s4.get_typeApplied_csunwa_k$(), Companion_getInstance_3().get_NAT_WIDTH_TYPE_qq16be_k$())) ? true : equals(_this__u8e3s4.get_typeApplied_csunwa_k$(), Companion_getInstance_3().get_BITS_TYPE_76oo9i_k$())) {
                return true;
            }
            var tmp0_safe_receiver = firstOrNull_0(_this__u8e3s4.get_arguments_p5ddub_k$());
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : canComputeSizeOf(tmp0_safe_receiver);
            return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
        return false;
    }

    function funcType(_this__u8e3s4) {
        var tmp;
        switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
            case 1:
                tmp = 'cell';
                break;
            case 2:
                tmp = 'cont';
                break;
            case 0:
            case 3:
            case 4:
                tmp = 'slice';
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                tmp = 'int';
                break;
            case 13:
                var reason = 'Anonymous type is not supported, YET.';
                throw new NotImplementedError('An operation is not implemented: ' + reason);
            default:
                noWhenBranchMatchedException();
                break;
        }
        return tmp;
    }

    function isForbiddenIdentifier($this, identifier) {
        switch (identifier) {
            case 'true':
            case 'false':
            case 'int':
            case 'bool':
            case 'unsigned':
            case 'long':
            case 'short':
            case 'char':
            case 'void':
            case 'class':
            case 'struct':
            case 'enum':
            case 'union':
            case 'public':
            case 'private':
            case 'protected':
            case 'extern':
            case 'static':
            case 'final':
            case 'if':
            case 'else':
            case 'while':
            case 'do':
            case 'for':
            case 'break':
            case 'continue':
            case 'return':
            case 'virtual':
            case 'explicit':
            case 'override':
            case 'new':
            case 'delete':
            case 'operator':
            case 'Ref':
            case 'Cell':
            case 'CellSlice':
            case 'Anything':
            case 'RefAnything':
            case 'Nat':
                return true;
            default:
                return false;
        }
    }

    function _get_forbiddenIdentifiers__st17wa($this) {
        return $this.forbiddenIdentifiers_1;
    }

    function _get_identifiers__ihuhnr($this) {
        return $this.identifiers_1;
    }

    function Companion_5() {
        Companion_instance_5 = this;
    }

    protoOf(Companion_5).computeIdentifier_gb455u_k$ = function (originalIdentifier, count) {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.generator.Companion.computeIdentifier.<anonymous>' call
        this_0.append_22ad7x_k$(originalIdentifier);
        if (!(count === 0)) {
            this_0.append_uppzia_k$(count);
        }
        return this_0.toString();
    };
    protoOf(Companion_5).computeIdentifier$default_isor07_k$ = function (originalIdentifier, count, $super) {
        count = count === VOID ? 0 : count;
        return $super === VOID ? this.computeIdentifier_gb455u_k$(originalIdentifier, count) : $super.computeIdentifier_gb455u_k$.call(this, originalIdentifier, count);
    };
    var Companion_instance_5;

    function Companion_getInstance_5() {
        if (Companion_instance_5 == null)
            new Companion_5();
        return Companion_instance_5;
    }

    function IdentScope(forbiddenIdentifiers, identifiers) {
        Companion_getInstance_5();
        forbiddenIdentifiers = forbiddenIdentifiers === VOID ? emptyList() : forbiddenIdentifiers;
        identifiers = identifiers === VOID ? HashSet_init_$Create$() : identifiers;
        this.forbiddenIdentifiers_1 = forbiddenIdentifiers;
        this.identifiers_1 = identifiers;
    }

    protoOf(IdentScope).get_size_woubt6_k$ = function () {
        return this.identifiers_1.get_size_woubt6_k$();
    };
    protoOf(IdentScope).contains_zh0gsb_k$ = function (element) {
        return this.identifiers_1.contains_aljjnj_k$(element);
    };
    protoOf(IdentScope).contains_aljjnj_k$ = function (element) {
        if (!(!(element == null) ? typeof element === 'string' : false))
            return false;
        return this.contains_zh0gsb_k$((!(element == null) ? typeof element === 'string' : false) ? element : THROW_CCE());
    };
    protoOf(IdentScope).containsAll_udwris_k$ = function (elements) {
        return this.identifiers_1.containsAll_xk45sd_k$(elements);
    };
    protoOf(IdentScope).containsAll_xk45sd_k$ = function (elements) {
        return this.containsAll_udwris_k$(elements);
    };
    protoOf(IdentScope).isEmpty_y1axqb_k$ = function () {
        return this.identifiers_1.isEmpty_y1axqb_k$();
    };
    protoOf(IdentScope).iterator_jk1svi_k$ = function () {
        return this.identifiers_1.iterator_jk1svi_k$();
    };
    protoOf(IdentScope).clear_j9egeb_k$ = function () {
        return this.identifiers_1.clear_j9egeb_k$();
    };
    protoOf(IdentScope).registerIdentifier_r59n06_k$ = function (originalIdentifier, count) {
        var i = count;
        while (true) {
            var identifier = Companion_getInstance_5().computeIdentifier_gb455u_k$(originalIdentifier, i);
            if (this.isGoodIdentifier_kloui2_k$(identifier)) {
                this.identifiers_1.add_utx5q5_k$(identifier);
                return identifier;
            }
            i = i + 1 | 0;
        }
    };
    protoOf(IdentScope).registerIdentifier$default_p4qkni_k$ = function (originalIdentifier, count, $super) {
        count = count === VOID ? 0 : count;
        return $super === VOID ? this.registerIdentifier_r59n06_k$(originalIdentifier, count) : $super.registerIdentifier_r59n06_k$.call(this, originalIdentifier, count);
    };
    protoOf(IdentScope).isGoodIdentifier_kloui2_k$ = function (identifier) {
        return (!this.contains_zh0gsb_k$(identifier) ? !isForbiddenIdentifier(Companion_getInstance_5(), identifier) : false) ? !this.forbiddenIdentifiers_1.contains_aljjnj_k$(identifier) : false;
    };
    var TlbPrimitiveType_SLICE_instance;
    var TlbPrimitiveType_CELL_instance;
    var TlbPrimitiveType_TYPE_instance;
    var TlbPrimitiveType_BITS_instance;
    var TlbPrimitiveType_BITSTRING_instance;
    var TlbPrimitiveType_INTEGER_instance;
    var TlbPrimitiveType_BOOL_instance;
    var TlbPrimitiveType_ENUM_instance;
    var TlbPrimitiveType_VARUINT16_instance;
    var TlbPrimitiveType_INT32_instance;
    var TlbPrimitiveType_UINT32_instance;
    var TlbPrimitiveType_INT64_instance;
    var TlbPrimitiveType_UINT64_instance;
    var TlbPrimitiveType_ANONYMOUS_instance;

    function values() {
        return [TlbPrimitiveType_SLICE_getInstance(), TlbPrimitiveType_CELL_getInstance(), TlbPrimitiveType_TYPE_getInstance(), TlbPrimitiveType_BITS_getInstance(), TlbPrimitiveType_BITSTRING_getInstance(), TlbPrimitiveType_INTEGER_getInstance(), TlbPrimitiveType_BOOL_getInstance(), TlbPrimitiveType_ENUM_getInstance(), TlbPrimitiveType_VARUINT16_getInstance(), TlbPrimitiveType_INT32_getInstance(), TlbPrimitiveType_UINT32_getInstance(), TlbPrimitiveType_INT64_getInstance(), TlbPrimitiveType_UINT64_getInstance(), TlbPrimitiveType_ANONYMOUS_getInstance()];
    }

    function valueOf(value) {
        switch (value) {
            case 'SLICE':
                return TlbPrimitiveType_SLICE_getInstance();
            case 'CELL':
                return TlbPrimitiveType_CELL_getInstance();
            case 'TYPE':
                return TlbPrimitiveType_TYPE_getInstance();
            case 'BITS':
                return TlbPrimitiveType_BITS_getInstance();
            case 'BITSTRING':
                return TlbPrimitiveType_BITSTRING_getInstance();
            case 'INTEGER':
                return TlbPrimitiveType_INTEGER_getInstance();
            case 'BOOL':
                return TlbPrimitiveType_BOOL_getInstance();
            case 'ENUM':
                return TlbPrimitiveType_ENUM_getInstance();
            case 'VARUINT16':
                return TlbPrimitiveType_VARUINT16_getInstance();
            case 'INT32':
                return TlbPrimitiveType_INT32_getInstance();
            case 'UINT32':
                return TlbPrimitiveType_UINT32_getInstance();
            case 'INT64':
                return TlbPrimitiveType_INT64_getInstance();
            case 'UINT64':
                return TlbPrimitiveType_UINT64_getInstance();
            case 'ANONYMOUS':
                return TlbPrimitiveType_ANONYMOUS_getInstance();
            default:
                TlbPrimitiveType_initEntries();
                THROW_IAE('No enum constant value.');
                break;
        }
    }

    function get_entries() {
        if ($ENTRIES == null)
            $ENTRIES = enumEntries(values());
        return $ENTRIES;
    }

    var TlbPrimitiveType_entriesInitialized;

    function TlbPrimitiveType_initEntries() {
        if (TlbPrimitiveType_entriesInitialized)
            return Unit_getInstance();
        TlbPrimitiveType_entriesInitialized = true;
        TlbPrimitiveType_SLICE_instance = new TlbPrimitiveType('SLICE', 0);
        TlbPrimitiveType_CELL_instance = new TlbPrimitiveType('CELL', 1);
        TlbPrimitiveType_TYPE_instance = new TlbPrimitiveType('TYPE', 2);
        TlbPrimitiveType_BITS_instance = new TlbPrimitiveType('BITS', 3);
        TlbPrimitiveType_BITSTRING_instance = new TlbPrimitiveType('BITSTRING', 4);
        TlbPrimitiveType_INTEGER_instance = new TlbPrimitiveType('INTEGER', 5);
        TlbPrimitiveType_BOOL_instance = new TlbPrimitiveType('BOOL', 6);
        TlbPrimitiveType_ENUM_instance = new TlbPrimitiveType('ENUM', 7);
        TlbPrimitiveType_VARUINT16_instance = new TlbPrimitiveType('VARUINT16', 8);
        TlbPrimitiveType_INT32_instance = new TlbPrimitiveType('INT32', 9);
        TlbPrimitiveType_UINT32_instance = new TlbPrimitiveType('UINT32', 10);
        TlbPrimitiveType_INT64_instance = new TlbPrimitiveType('INT64', 11);
        TlbPrimitiveType_UINT64_instance = new TlbPrimitiveType('UINT64', 12);
        TlbPrimitiveType_ANONYMOUS_instance = new TlbPrimitiveType('ANONYMOUS', 13);
    }

    var $ENTRIES;

    function TlbPrimitiveType(name, ordinal) {
        Enum.call(this, name, ordinal);
    }

    function TlbPrimitiveType_SLICE_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_SLICE_instance;
    }

    function TlbPrimitiveType_CELL_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_CELL_instance;
    }

    function TlbPrimitiveType_TYPE_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_TYPE_instance;
    }

    function TlbPrimitiveType_BITS_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_BITS_instance;
    }

    function TlbPrimitiveType_BITSTRING_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_BITSTRING_instance;
    }

    function TlbPrimitiveType_INTEGER_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_INTEGER_instance;
    }

    function TlbPrimitiveType_BOOL_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_BOOL_instance;
    }

    function TlbPrimitiveType_ENUM_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_ENUM_instance;
    }

    function TlbPrimitiveType_VARUINT16_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_VARUINT16_instance;
    }

    function TlbPrimitiveType_INT32_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_INT32_instance;
    }

    function TlbPrimitiveType_UINT32_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_UINT32_instance;
    }

    function TlbPrimitiveType_INT64_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_INT64_instance;
    }

    function TlbPrimitiveType_UINT64_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_UINT64_instance;
    }

    function TlbPrimitiveType_ANONYMOUS_getInstance() {
        TlbPrimitiveType_initEntries();
        return TlbPrimitiveType_ANONYMOUS_instance;
    }

    function Companion_6() {
        Companion_instance_6 = this;
    }

    protoOf(Companion_6).create_dl0wsf_k$ = function (expression, args) {
        if (expression instanceof Apply_0) {
            return expression.copy$default_homc4v_k$(VOID, plus(expression.arguments_1, args));
        }
        return new Apply_0(expression, toList(args));
    };
    var Companion_instance_6;

    function Companion_getInstance_6() {
        if (Companion_instance_6 == null)
            new Companion_6();
        return Companion_instance_6;
    }

    function NaturalTypExpression() {
    }

    function TypeApply(name, isNegated) {
        isNegated = isNegated === VOID ? false : isNegated;
        this.name_1 = name;
        this.isNegated_1 = isNegated;
    }

    protoOf(TypeApply).get_name_woqyms_k$ = function () {
        return this.name_1;
    };
    protoOf(TypeApply).get_isNegated_t7d5db_k$ = function () {
        return this.isNegated_1;
    };
    protoOf(TypeApply).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.parser.TypeApply.toString.<anonymous>' call
        if (this.isNegated_1) {
            this_0.append_22ad7x_k$('~');
        }
        this_0.append_22ad7x_k$(this.name_1);
        return this_0.toString();
    };
    protoOf(TypeApply).component1_7eebsc_k$ = function () {
        return this.name_1;
    };
    protoOf(TypeApply).component2_7eebsb_k$ = function () {
        return this.isNegated_1;
    };
    protoOf(TypeApply).copy_smzrfk_k$ = function (name, isNegated) {
        return new TypeApply(name, isNegated);
    };
    protoOf(TypeApply).copy$default_tj8l8j_k$ = function (name, isNegated, $super) {
        name = name === VOID ? this.name_1 : name;
        isNegated = isNegated === VOID ? this.isNegated_1 : isNegated;
        return $super === VOID ? this.copy_smzrfk_k$(name, isNegated) : $super.copy_smzrfk_k$.call(this, name, isNegated);
    };
    protoOf(TypeApply).hashCode = function () {
        var result = getStringHashCode(this.name_1);
        result = imul(result, 31) + getBooleanHashCode(this.isNegated_1) | 0;
        return result;
    };
    protoOf(TypeApply).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof TypeApply))
            return false;
        var tmp0_other_with_cast = other instanceof TypeApply ? other : THROW_CCE();
        if (!(this.name_1 === tmp0_other_with_cast.name_1))
            return false;
        if (!(this.isNegated_1 === tmp0_other_with_cast.isNegated_1))
            return false;
        return true;
    };

    function Apply_0(expression, arguments_0) {
        Companion_getInstance_6();
        arguments_0 = arguments_0 === VOID ? emptyList() : arguments_0;
        this.expression_1 = expression;
        this.arguments_1 = arguments_0;
    }

    protoOf(Apply_0).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(Apply_0).get_arguments_p5ddub_k$ = function () {
        return this.arguments_1;
    };
    protoOf(Apply_0).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.parser.Apply.toString.<anonymous>' call
        this_0.append_22ad7x_k$('(');
        this_0.append_t8pm91_k$(this.expression_1);
        var tmp0_iterator = this.arguments_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var arg = tmp0_iterator.next_20eer_k$();
            this_0.append_22ad7x_k$(' ');
            this_0.append_t8pm91_k$(arg);
        }
        this_0.append_22ad7x_k$(')');
        return this_0.toString();
    };
    protoOf(Apply_0).plus_74se05_k$ = function (arg) {
        return this.copy$default_homc4v_k$(VOID, plus_0(this.arguments_1, arg));
    };
    protoOf(Apply_0).component1_7eebsc_k$ = function () {
        return this.expression_1;
    };
    protoOf(Apply_0).component2_7eebsb_k$ = function () {
        return this.arguments_1;
    };
    protoOf(Apply_0).copy_20pdik_k$ = function (expression, arguments_0) {
        return new Apply_0(expression, arguments_0);
    };
    protoOf(Apply_0).copy$default_homc4v_k$ = function (expression, arguments_0, $super) {
        expression = expression === VOID ? this.expression_1 : expression;
        arguments_0 = arguments_0 === VOID ? this.arguments_1 : arguments_0;
        return $super === VOID ? this.copy_20pdik_k$(expression, arguments_0) : $super.copy_20pdik_k$.call(this, expression, arguments_0);
    };
    protoOf(Apply_0).hashCode = function () {
        var result = hashCode(this.expression_1);
        result = imul(result, 31) + hashCode(this.arguments_1) | 0;
        return result;
    };
    protoOf(Apply_0).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Apply_0))
            return false;
        var tmp0_other_with_cast = other instanceof Apply_0 ? other : THROW_CCE();
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
            return false;
        return true;
    };

    function Add_0(expression, expression2) {
        this.expression_1 = expression;
        this.expression2__1 = expression2;
    }

    protoOf(Add_0).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(Add_0).get_expression2_gspzqp_k$ = function () {
        return this.expression2__1;
    };
    protoOf(Add_0).toString = function () {
        return '(' + this.expression_1 + ' + ' + this.expression2__1 + ')';
    };
    protoOf(Add_0).component1_7eebsc_k$ = function () {
        return this.expression_1;
    };
    protoOf(Add_0).component2_7eebsb_k$ = function () {
        return this.expression2__1;
    };
    protoOf(Add_0).copy_ef54dn_k$ = function (expression, expression2) {
        return new Add_0(expression, expression2);
    };
    protoOf(Add_0).copy$default_1vy2c3_k$ = function (expression, expression2, $super) {
        expression = expression === VOID ? this.expression_1 : expression;
        expression2 = expression2 === VOID ? this.expression2__1 : expression2;
        return $super === VOID ? this.copy_ef54dn_k$(expression, expression2) : $super.copy_ef54dn_k$.call(this, expression, expression2);
    };
    protoOf(Add_0).hashCode = function () {
        var result = hashCode(this.expression_1);
        result = imul(result, 31) + hashCode(this.expression2__1) | 0;
        return result;
    };
    protoOf(Add_0).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Add_0))
            return false;
        var tmp0_other_with_cast = other instanceof Add_0 ? other : THROW_CCE();
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        if (!equals(this.expression2__1, tmp0_other_with_cast.expression2__1))
            return false;
        return true;
    };

    function GetBit_0(expression, expression2) {
        this.expression_1 = expression;
        this.expression2__1 = expression2;
    }

    protoOf(GetBit_0).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(GetBit_0).get_expression2_gspzqp_k$ = function () {
        return this.expression2__1;
    };
    protoOf(GetBit_0).toString = function () {
        return '(' + this.expression_1 + '.' + this.expression2__1 + ')';
    };
    protoOf(GetBit_0).component1_7eebsc_k$ = function () {
        return this.expression_1;
    };
    protoOf(GetBit_0).component2_7eebsb_k$ = function () {
        return this.expression2__1;
    };
    protoOf(GetBit_0).copy_ef54dn_k$ = function (expression, expression2) {
        return new GetBit_0(expression, expression2);
    };
    protoOf(GetBit_0).copy$default_k2utgb_k$ = function (expression, expression2, $super) {
        expression = expression === VOID ? this.expression_1 : expression;
        expression2 = expression2 === VOID ? this.expression2__1 : expression2;
        return $super === VOID ? this.copy_ef54dn_k$(expression, expression2) : $super.copy_ef54dn_k$.call(this, expression, expression2);
    };
    protoOf(GetBit_0).hashCode = function () {
        var result = hashCode(this.expression_1);
        result = imul(result, 31) + hashCode(this.expression2__1) | 0;
        return result;
    };
    protoOf(GetBit_0).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof GetBit_0))
            return false;
        var tmp0_other_with_cast = other instanceof GetBit_0 ? other : THROW_CCE();
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        if (!equals(this.expression2__1, tmp0_other_with_cast.expression2__1))
            return false;
        return true;
    };

    function Multiply_0(value, expression) {
        this.value_1 = value;
        this.expression_1 = expression;
    }

    protoOf(Multiply_0).get_value_j01efc_k$ = function () {
        return this.value_1;
    };
    protoOf(Multiply_0).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(Multiply_0).toString = function () {
        return '(' + this.value_1 + ' * ' + this.expression_1 + ')';
    };
    protoOf(Multiply_0).component1_7eebsc_k$ = function () {
        return this.value_1;
    };
    protoOf(Multiply_0).component2_7eebsb_k$ = function () {
        return this.expression_1;
    };
    protoOf(Multiply_0).copy_ef54dn_k$ = function (value, expression) {
        return new Multiply_0(value, expression);
    };
    protoOf(Multiply_0).copy$default_ox7ga0_k$ = function (value, expression, $super) {
        value = value === VOID ? this.value_1 : value;
        expression = expression === VOID ? this.expression_1 : expression;
        return $super === VOID ? this.copy_ef54dn_k$(value, expression) : $super.copy_ef54dn_k$.call(this, value, expression);
    };
    protoOf(Multiply_0).hashCode = function () {
        var result = hashCode(this.value_1);
        result = imul(result, 31) + hashCode(this.expression_1) | 0;
        return result;
    };
    protoOf(Multiply_0).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Multiply_0))
            return false;
        var tmp0_other_with_cast = other instanceof Multiply_0 ? other : THROW_CCE();
        if (!equals(this.value_1, tmp0_other_with_cast.value_1))
            return false;
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        return true;
    };

    function IntConstant_0(value) {
        this.value_1 = value;
    }

    protoOf(IntConstant_0).get_value_j01efc_k$ = function () {
        return this.value_1;
    };
    protoOf(IntConstant_0).toString = function () {
        return this.value_1.toString();
    };
    protoOf(IntConstant_0).component1_7eebsc_k$ = function () {
        return this.value_1;
    };
    protoOf(IntConstant_0).copy_ns6qmb_k$ = function (value) {
        return new IntConstant_0(value);
    };
    protoOf(IntConstant_0).copy$default_u62jbg_k$ = function (value, $super) {
        value = value === VOID ? this.value_1 : value;
        return $super === VOID ? this.copy_ns6qmb_k$(value) : $super.copy_ns6qmb_k$.call(this, value);
    };
    protoOf(IntConstant_0).hashCode = function () {
        return this.value_1;
    };
    protoOf(IntConstant_0).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof IntConstant_0))
            return false;
        var tmp0_other_with_cast = other instanceof IntConstant_0 ? other : THROW_CCE();
        if (!(this.value_1 === tmp0_other_with_cast.value_1))
            return false;
        return true;
    };

    function Tuple_0(value, expression) {
        this.value_1 = value;
        this.expression_1 = expression;
    }

    protoOf(Tuple_0).get_value_j01efc_k$ = function () {
        return this.value_1;
    };
    protoOf(Tuple_0).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(Tuple_0).toString = function () {
        return '(' + this.value_1 + ' * ' + this.expression_1 + ')';
    };
    protoOf(Tuple_0).component1_7eebsc_k$ = function () {
        return this.value_1;
    };
    protoOf(Tuple_0).component2_7eebsb_k$ = function () {
        return this.expression_1;
    };
    protoOf(Tuple_0).copy_ef54dn_k$ = function (value, expression) {
        return new Tuple_0(value, expression);
    };
    protoOf(Tuple_0).copy$default_ipk5v2_k$ = function (value, expression, $super) {
        value = value === VOID ? this.value_1 : value;
        expression = expression === VOID ? this.expression_1 : expression;
        return $super === VOID ? this.copy_ef54dn_k$(value, expression) : $super.copy_ef54dn_k$.call(this, value, expression);
    };
    protoOf(Tuple_0).hashCode = function () {
        var result = hashCode(this.value_1);
        result = imul(result, 31) + hashCode(this.expression_1) | 0;
        return result;
    };
    protoOf(Tuple_0).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Tuple_0))
            return false;
        var tmp0_other_with_cast = other instanceof Tuple_0 ? other : THROW_CCE();
        if (!equals(this.value_1, tmp0_other_with_cast.value_1))
            return false;
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        return true;
    };

    function CellRef_0(expression) {
        this.expression_1 = expression;
    }

    protoOf(CellRef_0).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(CellRef_0).toString = function () {
        return '^' + this.expression_1;
    };
    protoOf(CellRef_0).component1_7eebsc_k$ = function () {
        return this.expression_1;
    };
    protoOf(CellRef_0).copy_owt2i2_k$ = function (expression) {
        return new CellRef_0(expression);
    };
    protoOf(CellRef_0).copy$default_y3kpet_k$ = function (expression, $super) {
        expression = expression === VOID ? this.expression_1 : expression;
        return $super === VOID ? this.copy_owt2i2_k$(expression) : $super.copy_owt2i2_k$.call(this, expression);
    };
    protoOf(CellRef_0).hashCode = function () {
        return hashCode(this.expression_1);
    };
    protoOf(CellRef_0).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof CellRef_0))
            return false;
        var tmp0_other_with_cast = other instanceof CellRef_0 ? other : THROW_CCE();
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        return true;
    };

    function Conditional_0(expression, expression2) {
        this.expression_1 = expression;
        this.expression2__1 = expression2;
    }

    protoOf(Conditional_0).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(Conditional_0).get_expression2_gspzqp_k$ = function () {
        return this.expression2__1;
    };
    protoOf(Conditional_0).toString = function () {
        return '(' + this.expression_1 + '?' + this.expression2__1 + ')';
    };
    protoOf(Conditional_0).component1_7eebsc_k$ = function () {
        return this.expression_1;
    };
    protoOf(Conditional_0).component2_7eebsb_k$ = function () {
        return this.expression2__1;
    };
    protoOf(Conditional_0).copy_ef54dn_k$ = function (expression, expression2) {
        return new Conditional_0(expression, expression2);
    };
    protoOf(Conditional_0).copy$default_cuphtc_k$ = function (expression, expression2, $super) {
        expression = expression === VOID ? this.expression_1 : expression;
        expression2 = expression2 === VOID ? this.expression2__1 : expression2;
        return $super === VOID ? this.copy_ef54dn_k$(expression, expression2) : $super.copy_ef54dn_k$.call(this, expression, expression2);
    };
    protoOf(Conditional_0).hashCode = function () {
        var result = hashCode(this.expression_1);
        result = imul(result, 31) + hashCode(this.expression2__1) | 0;
        return result;
    };
    protoOf(Conditional_0).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Conditional_0))
            return false;
        var tmp0_other_with_cast = other instanceof Conditional_0 ? other : THROW_CCE();
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        if (!equals(this.expression2__1, tmp0_other_with_cast.expression2__1))
            return false;
        return true;
    };

    function AnonymousConstructor(fields) {
        this.fields_1 = fields;
    }

    protoOf(AnonymousConstructor).get_fields_dbuqbm_k$ = function () {
        return this.fields_1;
    };
    protoOf(AnonymousConstructor).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.parser.AnonymousConstructor.toString.<anonymous>' call
        this_0.append_22ad7x_k$('[');
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.fields_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.parser.AnonymousConstructor.toString.<anonymous>.<anonymous>' call
            this_0.append_22ad7x_k$(' ');
            this_0.append_t8pm91_k$(element);
        }
        this_0.append_22ad7x_k$(' ]');
        return this_0.toString();
    };
    protoOf(AnonymousConstructor).component1_7eebsc_k$ = function () {
        return this.fields_1;
    };
    protoOf(AnonymousConstructor).copy_6e465b_k$ = function (fields) {
        return new AnonymousConstructor(fields);
    };
    protoOf(AnonymousConstructor).copy$default_9778vy_k$ = function (fields, $super) {
        fields = fields === VOID ? this.fields_1 : fields;
        return $super === VOID ? this.copy_6e465b_k$(fields) : $super.copy_6e465b_k$.call(this, fields);
    };
    protoOf(AnonymousConstructor).hashCode = function () {
        return hashCode(this.fields_1);
    };
    protoOf(AnonymousConstructor).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof AnonymousConstructor))
            return false;
        var tmp0_other_with_cast = other instanceof AnonymousConstructor ? other : THROW_CCE();
        if (!equals(this.fields_1, tmp0_other_with_cast.fields_1))
            return false;
        return true;
    };

    function Field(name, typeExpression, isImplicit) {
        isImplicit = isImplicit === VOID ? false : isImplicit;
        this.name_1 = name;
        this.typeExpression_1 = typeExpression;
        this.isImplicit_1 = isImplicit;
    }

    protoOf(Field).get_name_woqyms_k$ = function () {
        return this.name_1;
    };
    protoOf(Field).get_typeExpression_kz19qd_k$ = function () {
        return this.typeExpression_1;
    };
    protoOf(Field).get_isImplicit_upa56g_k$ = function () {
        return this.isImplicit_1;
    };
    protoOf(Field).get_isConstraint_xq6a6o_k$ = function () {
        return this.name_1 == null;
    };
    protoOf(Field).toString = function () {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.parser.Field.toString.<anonymous>' call
        var printBrace = this.isImplicit_1 ? true : this.get_isConstraint_xq6a6o_k$();
        if (printBrace) {
            this_0.append_22ad7x_k$('{');
        }
        // Inline function 'kotlin.text.isNullOrBlank' call
        var this_1 = this.name_1;
        // Inline function 'kotlin.contracts.contract' call
        if (!(this_1 == null ? true : isBlank(this_1))) {
            this_0.append_22ad7x_k$(this.name_1);
            this_0.append_22ad7x_k$(':');
        }
        this_0.append_t8pm91_k$(this.typeExpression_1);
        if (printBrace) {
            this_0.append_22ad7x_k$('}');
        }
        return this_0.toString();
    };
    protoOf(Field).component1_7eebsc_k$ = function () {
        return this.name_1;
    };
    protoOf(Field).component2_7eebsb_k$ = function () {
        return this.typeExpression_1;
    };
    protoOf(Field).component3_7eebsa_k$ = function () {
        return this.isImplicit_1;
    };
    protoOf(Field).copy_fjwjik_k$ = function (name, typeExpression, isImplicit) {
        return new Field(name, typeExpression, isImplicit);
    };
    protoOf(Field).copy$default_nyt6zm_k$ = function (name, typeExpression, isImplicit, $super) {
        name = name === VOID ? this.name_1 : name;
        typeExpression = typeExpression === VOID ? this.typeExpression_1 : typeExpression;
        isImplicit = isImplicit === VOID ? this.isImplicit_1 : isImplicit;
        return $super === VOID ? this.copy_fjwjik_k$(name, typeExpression, isImplicit) : $super.copy_fjwjik_k$.call(this, name, typeExpression, isImplicit);
    };
    protoOf(Field).hashCode = function () {
        var result = this.name_1 == null ? 0 : getStringHashCode(this.name_1);
        result = imul(result, 31) + hashCode(this.typeExpression_1) | 0;
        result = imul(result, 31) + getBooleanHashCode(this.isImplicit_1) | 0;
        return result;
    };
    protoOf(Field).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Field))
            return false;
        var tmp0_other_with_cast = other instanceof Field ? other : THROW_CCE();
        if (!(this.name_1 == tmp0_other_with_cast.name_1))
            return false;
        if (!equals(this.typeExpression_1, tmp0_other_with_cast.typeExpression_1))
            return false;
        if (!(this.isImplicit_1 === tmp0_other_with_cast.isImplicit_1))
            return false;
        return true;
    };

    function ConstructorArg(expression, isNegated) {
        isNegated = isNegated === VOID ? false : isNegated;
        this.expression_1 = expression;
        this.isNegated_1 = isNegated;
    }

    protoOf(ConstructorArg).get_expression_l5w7j5_k$ = function () {
        return this.expression_1;
    };
    protoOf(ConstructorArg).get_isNegated_t7d5db_k$ = function () {
        return this.isNegated_1;
    };
    protoOf(ConstructorArg).component1_7eebsc_k$ = function () {
        return this.expression_1;
    };
    protoOf(ConstructorArg).component2_7eebsb_k$ = function () {
        return this.isNegated_1;
    };
    protoOf(ConstructorArg).copy_mp241n_k$ = function (expression, isNegated) {
        return new ConstructorArg(expression, isNegated);
    };
    protoOf(ConstructorArg).copy$default_92uojo_k$ = function (expression, isNegated, $super) {
        expression = expression === VOID ? this.expression_1 : expression;
        isNegated = isNegated === VOID ? this.isNegated_1 : isNegated;
        return $super === VOID ? this.copy_mp241n_k$(expression, isNegated) : $super.copy_mp241n_k$.call(this, expression, isNegated);
    };
    protoOf(ConstructorArg).toString = function () {
        return 'ConstructorArg(expression=' + this.expression_1 + ', isNegated=' + this.isNegated_1 + ')';
    };
    protoOf(ConstructorArg).hashCode = function () {
        var result = hashCode(this.expression_1);
        result = imul(result, 31) + getBooleanHashCode(this.isNegated_1) | 0;
        return result;
    };
    protoOf(ConstructorArg).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof ConstructorArg))
            return false;
        var tmp0_other_with_cast = other instanceof ConstructorArg ? other : THROW_CCE();
        if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
            return false;
        if (!(this.isNegated_1 === tmp0_other_with_cast.isNegated_1))
            return false;
        return true;
    };

    function Constructor(name, tag, fields, typeName, args, isExotic) {
        isExotic = isExotic === VOID ? false : isExotic;
        this.name_1 = name;
        this.tag_1 = tag;
        this.fields_1 = fields;
        this.typeName_1 = typeName;
        this.args_1 = args;
        this.isExotic_1 = isExotic;
    }

    protoOf(Constructor).get_name_woqyms_k$ = function () {
        return this.name_1;
    };
    protoOf(Constructor).get_tag_18ivnz_k$ = function () {
        return this.tag_1;
    };
    protoOf(Constructor).get_fields_dbuqbm_k$ = function () {
        return this.fields_1;
    };
    protoOf(Constructor).get_typeName_s1eeum_k$ = function () {
        return this.typeName_1;
    };
    protoOf(Constructor).get_args_woj09y_k$ = function () {
        return this.args_1;
    };
    protoOf(Constructor).get_isExotic_t1xmkl_k$ = function () {
        return this.isExotic_1;
    };
    protoOf(Constructor).toString = function () {
        return this.toString_8x7yyh_k$(true);
    };
    protoOf(Constructor).toString_8x7yyh_k$ = function (printTag) {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.ton.tlb.parser.Constructor.toString.<anonymous>' call
        this_0.append_22ad7x_k$(this.name_1);
        if (printTag ? !(this.tag_1 == null) : false) {
            this_0.append_t8pm91_k$(this.tag_1);
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.fields_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'org.ton.tlb.parser.Constructor.toString.<anonymous>.<anonymous>' call
            this_0.append_22ad7x_k$(' ');
            this_0.append_t8pm91_k$(element);
        }
        this_0.append_22ad7x_k$(' = ');
        this_0.append_22ad7x_k$(this.typeName_1);
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_0 = this.args_1.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'org.ton.tlb.parser.Constructor.toString.<anonymous>.<anonymous>' call
            this_0.append_22ad7x_k$(' ');
            this_0.append_t8pm91_k$(element_0);
        }
        return this_0.toString();
    };
    protoOf(Constructor).component1_7eebsc_k$ = function () {
        return this.name_1;
    };
    protoOf(Constructor).component2_7eebsb_k$ = function () {
        return this.tag_1;
    };
    protoOf(Constructor).component3_7eebsa_k$ = function () {
        return this.fields_1;
    };
    protoOf(Constructor).component4_7eebs9_k$ = function () {
        return this.typeName_1;
    };
    protoOf(Constructor).component5_7eebs8_k$ = function () {
        return this.args_1;
    };
    protoOf(Constructor).component6_7eebs7_k$ = function () {
        return this.isExotic_1;
    };
    protoOf(Constructor).copy_2i34vn_k$ = function (name, tag, fields, typeName, args, isExotic) {
        return new Constructor(name, tag, fields, typeName, args, isExotic);
    };
    protoOf(Constructor).copy$default_e33vuc_k$ = function (name, tag, fields, typeName, args, isExotic, $super) {
        name = name === VOID ? this.name_1 : name;
        tag = tag === VOID ? this.tag_1 : tag;
        fields = fields === VOID ? this.fields_1 : fields;
        typeName = typeName === VOID ? this.typeName_1 : typeName;
        args = args === VOID ? this.args_1 : args;
        isExotic = isExotic === VOID ? this.isExotic_1 : isExotic;
        return $super === VOID ? this.copy_2i34vn_k$(name, tag, fields, typeName, args, isExotic) : $super.copy_2i34vn_k$.call(this, name, tag, fields, typeName, args, isExotic);
    };
    protoOf(Constructor).hashCode = function () {
        var result = getStringHashCode(this.name_1);
        result = imul(result, 31) + (this.tag_1 == null ? 0 : hashCode(this.tag_1)) | 0;
        result = imul(result, 31) + hashCode(this.fields_1) | 0;
        result = imul(result, 31) + getStringHashCode(this.typeName_1) | 0;
        result = imul(result, 31) + hashCode(this.args_1) | 0;
        result = imul(result, 31) + getBooleanHashCode(this.isExotic_1) | 0;
        return result;
    };
    protoOf(Constructor).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof Constructor))
            return false;
        var tmp0_other_with_cast = other instanceof Constructor ? other : THROW_CCE();
        if (!(this.name_1 === tmp0_other_with_cast.name_1))
            return false;
        if (!equals(this.tag_1, tmp0_other_with_cast.tag_1))
            return false;
        if (!equals(this.fields_1, tmp0_other_with_cast.fields_1))
            return false;
        if (!(this.typeName_1 === tmp0_other_with_cast.typeName_1))
            return false;
        if (!equals(this.args_1, tmp0_other_with_cast.args_1))
            return false;
        if (!(this.isExotic_1 === tmp0_other_with_cast.isExotic_1))
            return false;
        return true;
    };

    function TypeExpression() {
    }

    function AST() {
    }

    function $parseCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$0).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        var tmp_1 = this;
                        tmp_1.$this$null1__1 = this.$this$parser0__1;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this._this__u8e3s4__1.$this_1.parse_anlqtf_k$(this.$this$parser0__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var it = suspendResult;
                        return toInt(this.$this$null1__1.get_text_2n4w3t_k$(it));
                    case 2:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 2) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$1(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$1).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        var tmp_1 = this;
                        tmp_1.$this$null1__1 = this.$this$parser0__1;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this._this__u8e3s4__1.$this_1.parse_anlqtf_k$(this.$this$parser0__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var it = suspendResult;
                        return this.$this$null1__1.get_text_2n4w3t_k$(it);
                    case 2:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 2) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$2(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$2).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        var tmp_1 = this;
                        tmp_1.$this$null1__1 = this.$this$parser0__1;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this._this__u8e3s4__1.$this_1.parse_anlqtf_k$(this.$this$parser0__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var it = suspendResult;
                        return this.$this$null1__1.get_text_2n4w3t_k$(it);
                    case 2:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 2) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$3).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        var tmp_1 = this;
                        tmp_1.$this$map1__1 = this.$this$parser0__1;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this._this__u8e3s4__1.$this_1.parse_anlqtf_k$(this.$this$parser0__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var it = suspendResult;
                        return this.$this$map1__1.get_text_2n4w3t_k$(it);
                    case 2:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 2) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$4(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$4).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        var tmp_1 = this;
                        tmp_1.$this$null1__1 = this.$this$parser0__1;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this._this__u8e3s4__1.$this_1.parse_anlqtf_k$(this.$this$parser0__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var it = suspendResult;
                        return new IntConstant_0(it);
                    case 2:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 2) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$5(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$5).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        var tmp_1 = this;
                        tmp_1.$this$null1__1 = this.$this$parser0__1;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this._this__u8e3s4__1.$this_1.parse_anlqtf_k$(this.$this$parser0__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var it = suspendResult;
                        return new AnonymousConstructor(it);
                    case 2:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 2) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$6(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$6).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(3);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_circumflex__wnw9ib(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(ref(term$factory_1(this._this__u8e3s4__1.this$0__1)), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 2:
                        var ARGUMENT = suspendResult;
                        return new CellRef_0(ARGUMENT);
                    case 3:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 3) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$7(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$7).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(15);
                        this.set_state_rjd8d0_k$(1);
                        continue $sm;
                    case 1:
                        var tmp_0 = this;
                        tmp_0.$this$parser1__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = poll(this.$this$parser1__1, _get_lParen__soww5p(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 2:
                        this.ARGUMENT2__1 = suspendResult;
                        this.ARGUMENT3__1 = this.ARGUMENT2__1 == null;
                        if (!this.ARGUMENT3__1) {
                            this.set_state_rjd8d0_k$(12);
                            suspendResult = this.$this$parser1__1.invoke_58si3r_k$(ref(expr$factory_1(this._this__u8e3s4__1.this$0__1)), this);
                            if (suspendResult === get_COROUTINE_SUSPENDED()) {
                                return suspendResult;
                            }
                            continue $sm;
                        } else {
                            this.set_state_rjd8d0_k$(3);
                            continue $sm;
                        }

                    case 3:
                        this.set_state_rjd8d0_k$(4);
                        suspendResult = poll(this.$this$parser1__1, _get_intConst__gogryv(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 4:
                        this.intConst4__1 = suspendResult;
                        if (!(this.intConst4__1 == null)) {
                            this.tmp$ret$00__1 = this.intConst4__1;
                            this.set_state_rjd8d0_k$(14);
                            continue $sm;
                        } else {
                            this.set_state_rjd8d0_k$(5);
                            continue $sm;
                        }

                    case 5:
                        this.set_state_rjd8d0_k$(6);
                        suspendResult = poll(this.$this$parser1__1, _get_anonymousConstructor__n73pum(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 6:
                        this.anonymousConstructor5__1 = suspendResult;
                        if (!(this.anonymousConstructor5__1 == null)) {
                            this.tmp$ret$00__1 = this.anonymousConstructor5__1;
                            this.set_state_rjd8d0_k$(14);
                            continue $sm;
                        } else {
                            this.set_state_rjd8d0_k$(7);
                            continue $sm;
                        }

                    case 7:
                        this.set_state_rjd8d0_k$(8);
                        suspendResult = poll(this.$this$parser1__1, _get_cellRef__jzfgps(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 8:
                        this.cellRef6__1 = suspendResult;
                        if (!(this.cellRef6__1 == null)) {
                            this.tmp$ret$00__1 = this.cellRef6__1;
                            this.set_state_rjd8d0_k$(14);
                            continue $sm;
                        } else {
                            this.set_state_rjd8d0_k$(9);
                            continue $sm;
                        }

                    case 9:
                        this.set_state_rjd8d0_k$(10);
                        suspendResult = poll(this.$this$parser1__1, _get_tilda__axsrur(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 10:
                        this.ARGUMENT7__1 = suspendResult;
                        this.ARGUMENT8__1 = this.ARGUMENT7__1 == null;
                        this.negate9__1 = !this.ARGUMENT8__1;
                        this.set_state_rjd8d0_k$(11);
                        suspendResult = this.$this$parser1__1.invoke_58si3r_k$(_get_identifier__8kgyke(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 11:
                        this.name10__1 = suspendResult;
                        this.tmp$ret$00__1 = new TypeApply(this.name10__1, this.negate9__1);
                        if (false) {
                            this.set_state_rjd8d0_k$(1);
                            continue $sm;
                        }

                        this.set_state_rjd8d0_k$(14);
                        continue $sm;
                    case 12:
                        this.expr11__1 = suspendResult;
                        this.set_state_rjd8d0_k$(13);
                        suspendResult = this.$this$parser1__1.invoke_58si3r_k$(_get_rParen__paxigd(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 13:
                        this.tmp$ret$00__1 = this.expr11__1;
                        this.set_state_rjd8d0_k$(14);
                        continue $sm;
                    case 14:
                        return this.tmp$ret$00__1;
                    case 15:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 15) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$8(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$8).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(5);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_term__de5k67(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        this.expr1__1 = suspendResult;
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = poll(this.$this$parser0__1, _get_dot__e677mw(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 2:
                        this.ARGUMENT2__1 = suspendResult;
                        this.ARGUMENT3__1 = this.ARGUMENT2__1 == null;
                        if (!this.ARGUMENT3__1) {
                            this.set_state_rjd8d0_k$(3);
                            suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_term__de5k67(this._this__u8e3s4__1.this$0__1), this);
                            if (suspendResult === get_COROUTINE_SUSPENDED()) {
                                return suspendResult;
                            }
                            continue $sm;
                        } else {
                            this.set_state_rjd8d0_k$(4);
                            continue $sm;
                        }

                    case 3:
                        var expr2 = suspendResult;
                        this.expr1__1 = new GetBit_0(this.expr1__1, expr2);
                        this.set_state_rjd8d0_k$(4);
                        continue $sm;
                    case 4:
                        return this.expr1__1;
                    case 5:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 5) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$9(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$9).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(5);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_expr97__g59taw(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        this.expr1__1 = suspendResult;
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = poll(this.$this$parser0__1, _get_question__4yumhn(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 2:
                        this.ARGUMENT2__1 = suspendResult;
                        this.ARGUMENT3__1 = this.ARGUMENT2__1 == null;
                        if (!this.ARGUMENT3__1) {
                            this.set_state_rjd8d0_k$(3);
                            suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_term__de5k67(this._this__u8e3s4__1.this$0__1), this);
                            if (suspendResult === get_COROUTINE_SUSPENDED()) {
                                return suspendResult;
                            }
                            continue $sm;
                        } else {
                            this.set_state_rjd8d0_k$(4);
                            continue $sm;
                        }

                    case 3:
                        var expr2 = suspendResult;
                        this.expr1__1 = new Conditional_0(this.expr1__1, expr2);
                        this.set_state_rjd8d0_k$(4);
                        continue $sm;
                    case 4:
                        return this.expr1__1;
                    case 5:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 5) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$10(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$10).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(6);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_expr95__g59t96(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        this.expr1__1 = suspendResult;
                        this.set_state_rjd8d0_k$(2);
                        continue $sm;
                    case 2:
                        if (!true) {
                            this.set_state_rjd8d0_k$(5);
                            continue $sm;
                        }

                        this.set_state_rjd8d0_k$(3);
                        suspendResult = poll(this.$this$parser0__1, _get_expr95__g59t96(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 3:
                        var tmp0_elvis_lhs = suspendResult;
                        var WHEN_RESULT;
                        if (tmp0_elvis_lhs == null) {
                            this.set_state_rjd8d0_k$(5);
                            continue $sm;
                        } else {
                            WHEN_RESULT = tmp0_elvis_lhs;
                            this.set_state_rjd8d0_k$(4);
                            continue $sm;
                        }

                    case 4:
                        var expr2 = WHEN_RESULT;
                        this.expr1__1 = Companion_getInstance_6().create_dl0wsf_k$(this.expr1__1, [expr2]);
                        this.set_state_rjd8d0_k$(2);
                        continue $sm;
                    case 5:
                        return this.expr1__1;
                    case 6:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 6) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$11(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$11).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(6);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_expr90__g59t4v(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        this.expr1__1 = suspendResult;
                        this.set_state_rjd8d0_k$(2);
                        continue $sm;
                    case 2:
                        this.set_state_rjd8d0_k$(3);
                        suspendResult = poll(this.$this$parser0__1, _get_star__dduzw9(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 3:
                        this.ARGUMENT2__1 = suspendResult;
                        this.ARGUMENT3__1 = this.ARGUMENT2__1 == null;
                        if (!!this.ARGUMENT3__1) {
                            this.set_state_rjd8d0_k$(5);
                            continue $sm;
                        }

                        this.set_state_rjd8d0_k$(4);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_expr90__g59t4v(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 4:
                        var expr2 = suspendResult;
                        if (isInterface(expr2, NaturalTypExpression)) {
                            this.expr1__1 = new Multiply_0(this.expr1__1, expr2);
                        } else {
                            this.expr1__1 = new Tuple_0(this.expr1__1, expr2);
                        }

                        this.set_state_rjd8d0_k$(2);
                        continue $sm;
                    case 5:
                        return this.expr1__1;
                    case 6:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 6) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$12(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$12).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(6);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_expr30__g59oop(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        this.expr1__1 = suspendResult;
                        this.set_state_rjd8d0_k$(2);
                        continue $sm;
                    case 2:
                        this.set_state_rjd8d0_k$(3);
                        suspendResult = poll(this.$this$parser0__1, _get_plus__dc2x2p(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 3:
                        this.ARGUMENT2__1 = suspendResult;
                        this.ARGUMENT3__1 = this.ARGUMENT2__1 == null;
                        if (!!this.ARGUMENT3__1) {
                            this.set_state_rjd8d0_k$(5);
                            continue $sm;
                        }

                        this.set_state_rjd8d0_k$(4);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_expr30__g59oop(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 4:
                        var expr2 = suspendResult;
                        this.expr1__1 = new Add_0(this.expr1__1, expr2);
                        this.set_state_rjd8d0_k$(2);
                        continue $sm;
                    case 5:
                        return this.expr1__1;
                    case 6:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 6) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$13(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$13).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(7);
                        this.set_state_rjd8d0_k$(1);
                        continue $sm;
                    case 1:
                        var tmp_0 = this;
                        tmp_0.$this$parser1__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = this.$this$parser1__1.invoke_58si3r_k$(_get_expr20__g59ny0(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 2:
                        this.expr2__1 = suspendResult;
                        this.set_state_rjd8d0_k$(3);
                        suspendResult = poll(this.$this$parser1__1, _get_compareOp__zfneqz(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 3:
                        this.tmp0_elvis_lhs3__1 = suspendResult;
                        if (this.tmp0_elvis_lhs3__1 == null) {
                            this.tmp$ret$00__1 = this.expr2__1;
                            this.set_state_rjd8d0_k$(6);
                            var tmp_1 = this;
                            continue $sm;
                        } else {
                            this.WHEN_RESULT4__1 = this.tmp0_elvis_lhs3__1;
                            this.set_state_rjd8d0_k$(4);
                            continue $sm;
                        }

                    case 4:
                        this.op5__1 = this.WHEN_RESULT4__1;
                        this.set_state_rjd8d0_k$(5);
                        suspendResult = this.$this$parser1__1.invoke_58si3r_k$(_get_expr20__g59ny0(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 5:
                        var expr2 = suspendResult;
                        var expr0 = new TypeApply(this.op5__1);
                        this.tmp$ret$00__1 = new Apply_0(expr0, listOf_0([this.expr2__1, expr2]));
                        if (false) {
                            this.set_state_rjd8d0_k$(1);
                            continue $sm;
                        }

                        this.set_state_rjd8d0_k$(6);
                        continue $sm;
                    case 6:
                        return this.tmp$ret$00__1;
                    case 7:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 7) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$14(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$14).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(6);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_lBrace__mbbs90(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_identifier__8kgyke(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 2:
                        this.name1__1 = suspendResult;
                        this.set_state_rjd8d0_k$(3);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_colon__iw9cj2(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 3:
                        this.set_state_rjd8d0_k$(4);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_identifier__8kgyke(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 4:
                        this.type2__1 = suspendResult;
                        this.set_state_rjd8d0_k$(5);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_rBrace__voimd2(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 5:
                        return new Field(this.name1__1, new TypeApply(this.type2__1), true);
                    case 6:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 6) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$15(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$15).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        var tmp_1 = this;
                        tmp_1.$this$null1__1 = this.$this$parser0__1;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this._this__u8e3s4__1.$this_1.parse_anlqtf_k$(this.$this$parser0__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var it = suspendResult;
                        return new Field(null, it, true);
                    case 2:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 2) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$16(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$16).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_expr95__g59t96(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var type = suspendResult;
                        return new Field(null, type);
                    case 2:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 2) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$17(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$17).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(4);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = poll(this.$this$parser0__1, _get_identifier__8kgyke(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        this.name1__1 = suspendResult;
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_colon__iw9cj2(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 2:
                        this.set_state_rjd8d0_k$(3);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_expr95__g59t96(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 3:
                        var type = suspendResult;
                        return new Field(this.name1__1, type);
                    case 4:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 4) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function $parseCOROUTINE$18(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this._this__u8e3s4__2 = _this__u8e3s4_0;
    }

    protoOf($parseCOROUTINE$18).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(11);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = poll(this.$this$parser0__1, _get_exotic__g4sbbt(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        this.ARGUMENT1__1 = suspendResult;
                        this.ARGUMENT2__1 = this.ARGUMENT1__1 == null;
                        this.isExotic3__1 = !this.ARGUMENT2__1;
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_identifier__8kgyke(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 2:
                        this.name4__1 = suspendResult;
                        this.ARGUMENT5__1 = Companion_getInstance_1();
                        this.set_state_rjd8d0_k$(3);
                        suspendResult = poll(this.$this$parser0__1, _get_tag__e6h4qf(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 3:
                        this.ARGUMENT6__1 = suspendResult;
                        this.tag7__1 = this.ARGUMENT5__1.parse_3soltv_k$(this.ARGUMENT6__1);
                        this.set_state_rjd8d0_k$(4);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_fields__njv4he(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 4:
                        this.fields8__1 = suspendResult;
                        this.set_state_rjd8d0_k$(5);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_eq__ndc0gv(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 5:
                        this.set_state_rjd8d0_k$(6);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_identifier__8kgyke(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 6:
                        this.typeName9__1 = suspendResult;
                        this.args10__1 = ArrayList_init_$Create$_0(2);
                        this.set_state_rjd8d0_k$(7);
                        continue $sm;
                    case 7:
                        this.set_state_rjd8d0_k$(8);
                        suspendResult = poll(this.$this$parser0__1, _get_semicolon__wkqzwg(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 8:
                        this.ARGUMENT11__1 = suspendResult;
                        if (!(this.ARGUMENT11__1 == null)) {
                            this.set_state_rjd8d0_k$(10);
                            continue $sm;
                        }

                        this.set_state_rjd8d0_k$(9);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(_get_term__de5k67(this._this__u8e3s4__1.this$0__1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 9:
                        var expr = suspendResult;
                        this.args10__1.add_utx5q5_k$(expr);
                        this.set_state_rjd8d0_k$(7);
                        continue $sm;
                    case 10:
                        return new Constructor(this.name4__1, this.tag7__1, this.fields8__1, this.typeName9__1, this.args10__1, this.isExotic3__1);
                    case 11:
                        throw this.get_exception_x0n6w6_k$();
                }
            } catch ($p) {
                var e = $p;
                if (this.get_exceptionState_wflpxn_k$() === 11) {
                    throw e;
                } else {
                    this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
                    this.set_exception_px07aa_k$(e);
                }
            }
        while (true);
    };

    function _get_lParen__soww5p($this) {
        return $this.getValue_d0vnq0_k$($this.lParen$delegate_1, $this, lParen$factory_0());
    }

    function _get_rParen__paxigd($this) {
        return $this.getValue_d0vnq0_k$($this.rParen$delegate_1, $this, rParen$factory_0());
    }

    function _get_lBracket__6yaqmp($this) {
        return $this.getValue_d0vnq0_k$($this.lBracket$delegate_1, $this, lBracket$factory_0());
    }

    function _get_rBracket__qsdak5($this) {
        return $this.getValue_d0vnq0_k$($this.rBracket$delegate_1, $this, rBracket$factory_0());
    }

    function _get_lBrace__mbbs90($this) {
        return $this.getValue_d0vnq0_k$($this.lBrace$delegate_1, $this, lBrace$factory_0());
    }

    function _get_rBrace__voimd2($this) {
        return $this.getValue_d0vnq0_k$($this.rBrace$delegate_1, $this, rBrace$factory_0());
    }

    function _get_dot__e677mw($this) {
        return $this.getValue_d0vnq0_k$($this.dot$delegate_1, $this, dot$factory_0());
    }

    function _get_question__4yumhn($this) {
        return $this.getValue_d0vnq0_k$($this.question$delegate_1, $this, question$factory_0());
    }

    function _get_circumflex__wnw9ib($this) {
        return $this.getValue_d0vnq0_k$($this.circumflex$delegate_1, $this, circumflex$factory_0());
    }

    function _get_tilda__axsrur($this) {
        return $this.getValue_d0vnq0_k$($this.tilda$delegate_1, $this, tilda$factory_0());
    }

    function _get_star__dduzw9($this) {
        return $this.getValue_d0vnq0_k$($this.star$delegate_1, $this, star$factory_0());
    }

    function _get_plus__dc2x2p($this) {
        return $this.getValue_d0vnq0_k$($this.plus$delegate_1, $this, plus$factory_0());
    }

    function _get_eq__ndc0gv($this) {
        return $this.getValue_d0vnq0_k$($this.eq$delegate_1, $this, eq$factory_0());
    }

    function _get_leq__e6c41l($this) {
        return $this.getValue_d0vnq0_k$($this.leq$delegate_1, $this, leq$factory_0());
    }

    function _get_geq__e68x3y($this) {
        return $this.getValue_d0vnq0_k$($this.geq$delegate_1, $this, geq$factory_0());
    }

    function _get_less__d9r8b6($this) {
        return $this.getValue_d0vnq0_k$($this.less$delegate_1, $this, less$factory_0());
    }

    function _get_greater__wj8lgp($this) {
        return $this.getValue_d0vnq0_k$($this.greater$delegate_1, $this, greater$factory_0());
    }

    function _get_colon__iw9cj2($this) {
        return $this.getValue_d0vnq0_k$($this.colon$delegate_1, $this, colon$factory_0());
    }

    function _get_semicolon__wkqzwg($this) {
        return $this.getValue_d0vnq0_k$($this.semicolon$delegate_1, $this, semicolon$factory_0());
    }

    function _get_exotic__g4sbbt($this) {
        return $this.getValue_d0vnq0_k$($this.exotic$delegate_1, $this, exotic$factory_0());
    }

    function _get_number__4pkqn6($this) {
        return $this.getValue_eqshh7_k$($this.number$delegate_1, $this, number$factory_0());
    }

    function _get_tag__e6h4qf($this) {
        return $this.getValue_eqshh7_k$($this.tag$delegate_1, $this, tag$factory_0());
    }

    function _get_compareOp__zfneqz($this) {
        return $this.getValue_eqshh7_k$($this.compareOp$delegate_1, $this, compareOp$factory_0());
    }

    function _get_identifier__8kgyke($this) {
        return $this.getValue_eqshh7_k$($this.identifier$delegate_1, $this, identifier$factory_0());
    }

    function _get_intConst__gogryv($this) {
        return $this.getValue_eqshh7_k$($this.intConst$delegate_1, $this, intConst$factory_0());
    }

    function _get_anonymousConstructor__n73pum($this) {
        return $this.getValue_eqshh7_k$($this.anonymousConstructor$delegate_1, $this, anonymousConstructor$factory_0());
    }

    function _get_cellRef__jzfgps($this) {
        return $this.getValue_eqshh7_k$($this.cellRef$delegate_1, $this, cellRef$factory_0());
    }

    function _get_term__de5k67($this) {
        return $this.getValue_eqshh7_k$($this.term$delegate_1, $this, term$factory_0());
    }

    function _get_expr97__g59taw($this) {
        return $this.getValue_eqshh7_k$($this.expr97$delegate_1, $this, expr97$factory_0());
    }

    function _get_expr95__g59t96($this) {
        return $this.getValue_eqshh7_k$($this.expr95$delegate_1, $this, expr95$factory_0());
    }

    function _get_expr90__g59t4v($this) {
        return $this.getValue_eqshh7_k$($this.expr90$delegate_1, $this, expr90$factory_0());
    }

    function _get_expr30__g59oop($this) {
        return $this.getValue_eqshh7_k$($this.expr30$delegate_1, $this, expr30$factory_0());
    }

    function _get_expr20__g59ny0($this) {
        return $this.getValue_eqshh7_k$($this.expr20$delegate_1, $this, expr20$factory_0());
    }

    function _get_expr10__g59n7b($this) {
        return $this.getValue_eqshh7_k$($this.expr10$delegate_1, $this, expr10$factory_0());
    }

    function _get_expr__d68qnq($this) {
        return $this.getValue_eqshh7_k$($this.expr$delegate_1, $this, expr$factory_0());
    }

    function _get_implicitParam__bjitd5($this) {
        return $this.getValue_eqshh7_k$($this.implicitParam$delegate_1, $this, implicitParam$factory_0());
    }

    function _get_constraint__d9gthq($this) {
        return $this.getValue_eqshh7_k$($this.constraint$delegate_1, $this, constraint$factory_0());
    }

    function _get_unnamedField__4757g1($this) {
        return $this.getValue_eqshh7_k$($this.unnamedField$delegate_1, $this, unnamedField$factory_0());
    }

    function _get_field__hkjsa1($this) {
        return $this.getValue_eqshh7_k$($this.field$delegate_1, $this, field$factory_0());
    }

    function _get_fields__njv4he($this) {
        return $this.getValue_eqshh7_k$($this.fields$delegate_1, $this, fields$factory_1());
    }

    function _get_constructor__5nhhrd($this) {
        return $this.getValue_eqshh7_k$($this.constructor$delegate_1, $this, constructor$factory_0());
    }

    function _no_name_provided__qut3iv($firstTokens, $this) {
        this.$this_1 = $this;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv).parse_hts459_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$0(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_hts459_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_0($firstTokens, $this) {
        this.$this_1 = $this;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_0).parse_sl64j1_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$1(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_0).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_sl64j1_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_1($firstTokens, $this) {
        this.$this_1 = $this;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_1).parse_sl64j1_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$2(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_1).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_sl64j1_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_2($firstTokens, $this) {
        this.$this_1 = $this;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_2).parse_sl64j1_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$3(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_2).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_sl64j1_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_3($firstTokens, $this) {
        this.$this_1 = $this;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_3).parse_pom53q_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$4(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_3).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_pom53q_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_4($firstTokens, $this) {
        this.$this_1 = $this;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_4).parse_vxrerw_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$5(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_4).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_vxrerw_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_5($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_5).parse_e014dw_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$6(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_5).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_e014dw_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_6($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_6).parse_ayrltd_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$7(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_6).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_ayrltd_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_7($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_7).parse_ayrltd_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$8(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_7).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_ayrltd_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_8($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_8).parse_ayrltd_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$9(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_8).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_ayrltd_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_9($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_9).parse_ayrltd_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$10(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_9).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_ayrltd_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_10($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_10).parse_ayrltd_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$11(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_10).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_ayrltd_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_11($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_11).parse_ayrltd_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$12(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_11).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_ayrltd_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_12($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_12).parse_ayrltd_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$13(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_12).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_ayrltd_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_13($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_13).parse_c2ryf9_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$14(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_13).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_c2ryf9_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_14($firstTokens, $this) {
        this.$this_1 = $this;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_14).parse_c2ryf9_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$15(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_14).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_c2ryf9_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_15($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_15).parse_c2ryf9_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$16(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_15).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_c2ryf9_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_16($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_16).parse_c2ryf9_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$17(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_16).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_c2ryf9_k$(_this__u8e3s4, $completion);
    };

    function _no_name_provided__qut3iv_17($firstTokens, this$0) {
        this.this$0__1 = this$0;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_17).parse_pwfpmt_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$18(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_17).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_pwfpmt_k$(_this__u8e3s4, $completion);
    };

    function TlbGrammar() {
        Grammar.call(this);
        regexToken(this, '(/)([*])+(.|\\n)+?(\\2\\1)', VOID, true);
        regexToken(this, '//(.*)', VOID, true);
        regexToken(this, '\\s+', VOID, true);
        this.lParen$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '('), this, lParen$factory());
        this.rParen$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, ')'), this, rParen$factory());
        this.lBracket$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '['), this, lBracket$factory());
        this.rBracket$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, ']'), this, rBracket$factory());
        this.lBrace$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '{'), this, lBrace$factory());
        this.rBrace$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '}'), this, rBrace$factory());
        this.dot$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '.'), this, dot$factory());
        this.question$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '?'), this, question$factory());
        this.circumflex$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '^'), this, circumflex$factory());
        this.tilda$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '~'), this, tilda$factory());
        this.star$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '*'), this, star$factory());
        this.plus$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '+'), this, plus$factory());
        this.eq$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '='), this, eq$factory());
        this.leq$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '<='), this, leq$factory());
        this.geq$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '>='), this, geq$factory());
        this.less$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '<'), this, less$factory());
        this.greater$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '>'), this, greater$factory());
        this.colon$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, ':'), this, colon$factory());
        this.semicolon$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, ';'), this, semicolon$factory());
        this.exotic$delegate_1 = this.provideDelegate_2uubsd_k$(literalToken(this, '!'), this, exotic$factory());
        var tmp = this;
        // Inline function 'me.alllex.parsus.parser.map' call
        var this_0 = regexToken(this, '\\d+');
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens = this_0.get_firstTokens_2spa0v_k$();
        var tmp$ret$1 = new _no_name_provided__qut3iv(firstTokens, this_0);
        tmp.number$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$1, this, number$factory());
        var tmp_0 = this;
        // Inline function 'me.alllex.parsus.parser.map' call
        var this_1 = regexToken(this, '((#[0-9a-f]*)|(\\$[01]*))_?');
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_0 = this_1.get_firstTokens_2spa0v_k$();
        var tmp$ret$3 = new _no_name_provided__qut3iv_0(firstTokens_0, this_1);
        tmp_0.tag$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$3, this, tag$factory());
        var tmp_1 = this;
        // Inline function 'me.alllex.parsus.parser.map' call
        var this_2 = or(or(or(or(_get_eq__ndc0gv(this), _get_leq__e6c41l(this)), _get_geq__e68x3y(this)), _get_less__d9r8b6(this)), _get_greater__wj8lgp(this));
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_1 = this_2.get_firstTokens_2spa0v_k$();
        var tmp$ret$5 = new _no_name_provided__qut3iv_1(firstTokens_1, this_2);
        tmp_1.compareOp$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$5, this, compareOp$factory());
        var tmp_2 = this;
        // Inline function 'me.alllex.parsus.parser.map' call
        var this_3 = regexToken(this, '#<|#<=|(##?)|([a-zA-Z_][a-zA-Z0-9_]*)');
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_2 = this_3.get_firstTokens_2spa0v_k$();
        var tmp$ret$7 = new _no_name_provided__qut3iv_2(firstTokens_2, this_3);
        tmp_2.identifier$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$7, this, identifier$factory());
        var tmp_3 = this;
        // Inline function 'me.alllex.parsus.parser.map' call
        var this_4 = _get_number__4pkqn6(this);
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_3 = this_4.get_firstTokens_2spa0v_k$();
        var tmp$ret$9 = new _no_name_provided__qut3iv_3(firstTokens_3, this_4);
        tmp_3.intConst$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$9, this, intConst$factory());
        var tmp_4 = this;
        // Inline function 'me.alllex.parsus.parser.map' call
        var this_5 = times_0(times(unaryMinus(_get_lBracket__6yaqmp(this)), ref(fields$factory(this))), unaryMinus(_get_rBracket__qsdak5(this)));
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_4 = this_5.get_firstTokens_2spa0v_k$();
        var tmp$ret$11 = new _no_name_provided__qut3iv_4(firstTokens_4, this_5);
        tmp_4.anonymousConstructor$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$11, this, anonymousConstructor$factory());
        var tmp_5 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_5 = emptySet();
        var tmp$ret$12 = new _no_name_provided__qut3iv_5(firstTokens_5, this);
        tmp_5.cellRef$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$12, this, cellRef$factory());
        var tmp_6 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_6 = emptySet();
        var tmp$ret$13 = new _no_name_provided__qut3iv_6(firstTokens_6, this);
        tmp_6.term$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$13, this, term$factory());
        var tmp_7 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_7 = emptySet();
        var tmp$ret$14 = new _no_name_provided__qut3iv_7(firstTokens_7, this);
        tmp_7.expr97$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$14, this, expr97$factory());
        var tmp_8 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_8 = emptySet();
        var tmp$ret$15 = new _no_name_provided__qut3iv_8(firstTokens_8, this);
        tmp_8.expr95$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$15, this, expr95$factory());
        var tmp_9 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_9 = emptySet();
        var tmp$ret$16 = new _no_name_provided__qut3iv_9(firstTokens_9, this);
        tmp_9.expr90$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$16, this, expr90$factory());
        var tmp_10 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_10 = emptySet();
        var tmp$ret$17 = new _no_name_provided__qut3iv_10(firstTokens_10, this);
        tmp_10.expr30$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$17, this, expr30$factory());
        var tmp_11 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_11 = emptySet();
        var tmp$ret$18 = new _no_name_provided__qut3iv_11(firstTokens_11, this);
        tmp_11.expr20$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$18, this, expr20$factory());
        var tmp_12 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_12 = emptySet();
        var tmp$ret$19 = new _no_name_provided__qut3iv_12(firstTokens_12, this);
        tmp_12.expr10$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$19, this, expr10$factory());
        this.expr$delegate_1 = this.provideDelegate_xw2634_k$(_get_expr10__g59n7b(this), this, expr$factory());
        var tmp_13 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_13 = emptySet();
        var tmp$ret$20 = new _no_name_provided__qut3iv_13(firstTokens_13, this);
        tmp_13.implicitParam$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$20, this, implicitParam$factory());
        var tmp_14 = this;
        // Inline function 'me.alllex.parsus.parser.map' call
        var this_6 = times_0(times(unaryMinus(_get_lBrace__mbbs90(this)), _get_expr__d68qnq(this)), unaryMinus(_get_rBrace__voimd2(this)));
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_14 = this_6.get_firstTokens_2spa0v_k$();
        var tmp$ret$22 = new _no_name_provided__qut3iv_14(firstTokens_14, this_6);
        tmp_14.constraint$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$22, this, constraint$factory());
        var tmp_15 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_15 = emptySet();
        var tmp$ret$23 = new _no_name_provided__qut3iv_15(firstTokens_15, this);
        tmp_15.unnamedField$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$23, this, unnamedField$factory());
        var tmp_16 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_16 = emptySet();
        var tmp$ret$24 = new _no_name_provided__qut3iv_16(firstTokens_16, this);
        tmp_16.field$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$24, this, field$factory());
        this.fields$delegate_1 = this.provideDelegate_xw2634_k$(zeroOrMore(or(or(or(_get_implicitParam__bjitd5(this), _get_constraint__d9gthq(this)), _get_field__hkjsa1(this)), _get_unnamedField__4757g1(this))), this, fields$factory_0());
        var tmp_17 = this;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens_17 = emptySet();
        var tmp$ret$25 = new _no_name_provided__qut3iv_17(firstTokens_17, this);
        tmp_17.constructor$delegate_1 = this.provideDelegate_xw2634_k$(tmp$ret$25, this, constructor$factory());
        this.root$delegate_1 = this.provideDelegate_xw2634_k$(oneOrMore(_get_constructor__5nhhrd(this)), this, root$factory());
    }

    protoOf(TlbGrammar).get_root_wott0r_k$ = function () {
        return this.getValue_eqshh7_k$(this.root$delegate_1, this, root$factory_0());
    };

    function lParen$factory() {
        return getPropertyCallableRef('lParen', 1, KProperty1, function (receiver) {
            return _get_lParen__soww5p(receiver);
        }, null);
    }

    function rParen$factory() {
        return getPropertyCallableRef('rParen', 1, KProperty1, function (receiver) {
            return _get_rParen__paxigd(receiver);
        }, null);
    }

    function lBracket$factory() {
        return getPropertyCallableRef('lBracket', 1, KProperty1, function (receiver) {
            return _get_lBracket__6yaqmp(receiver);
        }, null);
    }

    function rBracket$factory() {
        return getPropertyCallableRef('rBracket', 1, KProperty1, function (receiver) {
            return _get_rBracket__qsdak5(receiver);
        }, null);
    }

    function lBrace$factory() {
        return getPropertyCallableRef('lBrace', 1, KProperty1, function (receiver) {
            return _get_lBrace__mbbs90(receiver);
        }, null);
    }

    function rBrace$factory() {
        return getPropertyCallableRef('rBrace', 1, KProperty1, function (receiver) {
            return _get_rBrace__voimd2(receiver);
        }, null);
    }

    function dot$factory() {
        return getPropertyCallableRef('dot', 1, KProperty1, function (receiver) {
            return _get_dot__e677mw(receiver);
        }, null);
    }

    function question$factory() {
        return getPropertyCallableRef('question', 1, KProperty1, function (receiver) {
            return _get_question__4yumhn(receiver);
        }, null);
    }

    function circumflex$factory() {
        return getPropertyCallableRef('circumflex', 1, KProperty1, function (receiver) {
            return _get_circumflex__wnw9ib(receiver);
        }, null);
    }

    function tilda$factory() {
        return getPropertyCallableRef('tilda', 1, KProperty1, function (receiver) {
            return _get_tilda__axsrur(receiver);
        }, null);
    }

    function star$factory() {
        return getPropertyCallableRef('star', 1, KProperty1, function (receiver) {
            return _get_star__dduzw9(receiver);
        }, null);
    }

    function plus$factory() {
        return getPropertyCallableRef('plus', 1, KProperty1, function (receiver) {
            return _get_plus__dc2x2p(receiver);
        }, null);
    }

    function eq$factory() {
        return getPropertyCallableRef('eq', 1, KProperty1, function (receiver) {
            return _get_eq__ndc0gv(receiver);
        }, null);
    }

    function leq$factory() {
        return getPropertyCallableRef('leq', 1, KProperty1, function (receiver) {
            return _get_leq__e6c41l(receiver);
        }, null);
    }

    function geq$factory() {
        return getPropertyCallableRef('geq', 1, KProperty1, function (receiver) {
            return _get_geq__e68x3y(receiver);
        }, null);
    }

    function less$factory() {
        return getPropertyCallableRef('less', 1, KProperty1, function (receiver) {
            return _get_less__d9r8b6(receiver);
        }, null);
    }

    function greater$factory() {
        return getPropertyCallableRef('greater', 1, KProperty1, function (receiver) {
            return _get_greater__wj8lgp(receiver);
        }, null);
    }

    function colon$factory() {
        return getPropertyCallableRef('colon', 1, KProperty1, function (receiver) {
            return _get_colon__iw9cj2(receiver);
        }, null);
    }

    function semicolon$factory() {
        return getPropertyCallableRef('semicolon', 1, KProperty1, function (receiver) {
            return _get_semicolon__wkqzwg(receiver);
        }, null);
    }

    function exotic$factory() {
        return getPropertyCallableRef('exotic', 1, KProperty1, function (receiver) {
            return _get_exotic__g4sbbt(receiver);
        }, null);
    }

    function number$factory() {
        return getPropertyCallableRef('number', 1, KProperty1, function (receiver) {
            return _get_number__4pkqn6(receiver);
        }, null);
    }

    function tag$factory() {
        return getPropertyCallableRef('tag', 1, KProperty1, function (receiver) {
            return _get_tag__e6h4qf(receiver);
        }, null);
    }

    function compareOp$factory() {
        return getPropertyCallableRef('compareOp', 1, KProperty1, function (receiver) {
            return _get_compareOp__zfneqz(receiver);
        }, null);
    }

    function identifier$factory() {
        return getPropertyCallableRef('identifier', 1, KProperty1, function (receiver) {
            return _get_identifier__8kgyke(receiver);
        }, null);
    }

    function intConst$factory() {
        return getPropertyCallableRef('intConst', 1, KProperty1, function (receiver) {
            return _get_intConst__gogryv(receiver);
        }, null);
    }

    function fields$factory($b0) {
        return getPropertyCallableRef('fields', 0, KProperty0, function () {
            return _get_fields__njv4he($b0);
        }, null);
    }

    function anonymousConstructor$factory() {
        return getPropertyCallableRef('anonymousConstructor', 1, KProperty1, function (receiver) {
            return _get_anonymousConstructor__n73pum(receiver);
        }, null);
    }

    function cellRef$factory() {
        return getPropertyCallableRef('cellRef', 1, KProperty1, function (receiver) {
            return _get_cellRef__jzfgps(receiver);
        }, null);
    }

    function term$factory() {
        return getPropertyCallableRef('term', 1, KProperty1, function (receiver) {
            return _get_term__de5k67(receiver);
        }, null);
    }

    function expr97$factory() {
        return getPropertyCallableRef('expr97', 1, KProperty1, function (receiver) {
            return _get_expr97__g59taw(receiver);
        }, null);
    }

    function expr95$factory() {
        return getPropertyCallableRef('expr95', 1, KProperty1, function (receiver) {
            return _get_expr95__g59t96(receiver);
        }, null);
    }

    function expr90$factory() {
        return getPropertyCallableRef('expr90', 1, KProperty1, function (receiver) {
            return _get_expr90__g59t4v(receiver);
        }, null);
    }

    function expr30$factory() {
        return getPropertyCallableRef('expr30', 1, KProperty1, function (receiver) {
            return _get_expr30__g59oop(receiver);
        }, null);
    }

    function expr20$factory() {
        return getPropertyCallableRef('expr20', 1, KProperty1, function (receiver) {
            return _get_expr20__g59ny0(receiver);
        }, null);
    }

    function expr10$factory() {
        return getPropertyCallableRef('expr10', 1, KProperty1, function (receiver) {
            return _get_expr10__g59n7b(receiver);
        }, null);
    }

    function expr$factory() {
        return getPropertyCallableRef('expr', 1, KProperty1, function (receiver) {
            return _get_expr__d68qnq(receiver);
        }, null);
    }

    function implicitParam$factory() {
        return getPropertyCallableRef('implicitParam', 1, KProperty1, function (receiver) {
            return _get_implicitParam__bjitd5(receiver);
        }, null);
    }

    function constraint$factory() {
        return getPropertyCallableRef('constraint', 1, KProperty1, function (receiver) {
            return _get_constraint__d9gthq(receiver);
        }, null);
    }

    function unnamedField$factory() {
        return getPropertyCallableRef('unnamedField', 1, KProperty1, function (receiver) {
            return _get_unnamedField__4757g1(receiver);
        }, null);
    }

    function field$factory() {
        return getPropertyCallableRef('field', 1, KProperty1, function (receiver) {
            return _get_field__hkjsa1(receiver);
        }, null);
    }

    function fields$factory_0() {
        return getPropertyCallableRef('fields', 1, KProperty1, function (receiver) {
            return _get_fields__njv4he(receiver);
        }, null);
    }

    function constructor$factory() {
        return getPropertyCallableRef('constructor', 1, KProperty1, function (receiver) {
            return _get_constructor__5nhhrd(receiver);
        }, null);
    }

    function root$factory() {
        return getPropertyCallableRef('root', 1, KProperty1, function (receiver) {
            return receiver.get_root_wott0r_k$();
        }, null);
    }

    function lParen$factory_0() {
        return getPropertyCallableRef('lParen', 1, KProperty1, function (receiver) {
            return _get_lParen__soww5p(receiver);
        }, null);
    }

    function rParen$factory_0() {
        return getPropertyCallableRef('rParen', 1, KProperty1, function (receiver) {
            return _get_rParen__paxigd(receiver);
        }, null);
    }

    function lBracket$factory_0() {
        return getPropertyCallableRef('lBracket', 1, KProperty1, function (receiver) {
            return _get_lBracket__6yaqmp(receiver);
        }, null);
    }

    function rBracket$factory_0() {
        return getPropertyCallableRef('rBracket', 1, KProperty1, function (receiver) {
            return _get_rBracket__qsdak5(receiver);
        }, null);
    }

    function lBrace$factory_0() {
        return getPropertyCallableRef('lBrace', 1, KProperty1, function (receiver) {
            return _get_lBrace__mbbs90(receiver);
        }, null);
    }

    function rBrace$factory_0() {
        return getPropertyCallableRef('rBrace', 1, KProperty1, function (receiver) {
            return _get_rBrace__voimd2(receiver);
        }, null);
    }

    function dot$factory_0() {
        return getPropertyCallableRef('dot', 1, KProperty1, function (receiver) {
            return _get_dot__e677mw(receiver);
        }, null);
    }

    function question$factory_0() {
        return getPropertyCallableRef('question', 1, KProperty1, function (receiver) {
            return _get_question__4yumhn(receiver);
        }, null);
    }

    function circumflex$factory_0() {
        return getPropertyCallableRef('circumflex', 1, KProperty1, function (receiver) {
            return _get_circumflex__wnw9ib(receiver);
        }, null);
    }

    function tilda$factory_0() {
        return getPropertyCallableRef('tilda', 1, KProperty1, function (receiver) {
            return _get_tilda__axsrur(receiver);
        }, null);
    }

    function star$factory_0() {
        return getPropertyCallableRef('star', 1, KProperty1, function (receiver) {
            return _get_star__dduzw9(receiver);
        }, null);
    }

    function plus$factory_0() {
        return getPropertyCallableRef('plus', 1, KProperty1, function (receiver) {
            return _get_plus__dc2x2p(receiver);
        }, null);
    }

    function eq$factory_0() {
        return getPropertyCallableRef('eq', 1, KProperty1, function (receiver) {
            return _get_eq__ndc0gv(receiver);
        }, null);
    }

    function leq$factory_0() {
        return getPropertyCallableRef('leq', 1, KProperty1, function (receiver) {
            return _get_leq__e6c41l(receiver);
        }, null);
    }

    function geq$factory_0() {
        return getPropertyCallableRef('geq', 1, KProperty1, function (receiver) {
            return _get_geq__e68x3y(receiver);
        }, null);
    }

    function less$factory_0() {
        return getPropertyCallableRef('less', 1, KProperty1, function (receiver) {
            return _get_less__d9r8b6(receiver);
        }, null);
    }

    function greater$factory_0() {
        return getPropertyCallableRef('greater', 1, KProperty1, function (receiver) {
            return _get_greater__wj8lgp(receiver);
        }, null);
    }

    function colon$factory_0() {
        return getPropertyCallableRef('colon', 1, KProperty1, function (receiver) {
            return _get_colon__iw9cj2(receiver);
        }, null);
    }

    function semicolon$factory_0() {
        return getPropertyCallableRef('semicolon', 1, KProperty1, function (receiver) {
            return _get_semicolon__wkqzwg(receiver);
        }, null);
    }

    function exotic$factory_0() {
        return getPropertyCallableRef('exotic', 1, KProperty1, function (receiver) {
            return _get_exotic__g4sbbt(receiver);
        }, null);
    }

    function number$factory_0() {
        return getPropertyCallableRef('number', 1, KProperty1, function (receiver) {
            return _get_number__4pkqn6(receiver);
        }, null);
    }

    function tag$factory_0() {
        return getPropertyCallableRef('tag', 1, KProperty1, function (receiver) {
            return _get_tag__e6h4qf(receiver);
        }, null);
    }

    function compareOp$factory_0() {
        return getPropertyCallableRef('compareOp', 1, KProperty1, function (receiver) {
            return _get_compareOp__zfneqz(receiver);
        }, null);
    }

    function identifier$factory_0() {
        return getPropertyCallableRef('identifier', 1, KProperty1, function (receiver) {
            return _get_identifier__8kgyke(receiver);
        }, null);
    }

    function intConst$factory_0() {
        return getPropertyCallableRef('intConst', 1, KProperty1, function (receiver) {
            return _get_intConst__gogryv(receiver);
        }, null);
    }

    function anonymousConstructor$factory_0() {
        return getPropertyCallableRef('anonymousConstructor', 1, KProperty1, function (receiver) {
            return _get_anonymousConstructor__n73pum(receiver);
        }, null);
    }

    function cellRef$factory_0() {
        return getPropertyCallableRef('cellRef', 1, KProperty1, function (receiver) {
            return _get_cellRef__jzfgps(receiver);
        }, null);
    }

    function term$factory_0() {
        return getPropertyCallableRef('term', 1, KProperty1, function (receiver) {
            return _get_term__de5k67(receiver);
        }, null);
    }

    function expr97$factory_0() {
        return getPropertyCallableRef('expr97', 1, KProperty1, function (receiver) {
            return _get_expr97__g59taw(receiver);
        }, null);
    }

    function expr95$factory_0() {
        return getPropertyCallableRef('expr95', 1, KProperty1, function (receiver) {
            return _get_expr95__g59t96(receiver);
        }, null);
    }

    function expr90$factory_0() {
        return getPropertyCallableRef('expr90', 1, KProperty1, function (receiver) {
            return _get_expr90__g59t4v(receiver);
        }, null);
    }

    function expr30$factory_0() {
        return getPropertyCallableRef('expr30', 1, KProperty1, function (receiver) {
            return _get_expr30__g59oop(receiver);
        }, null);
    }

    function expr20$factory_0() {
        return getPropertyCallableRef('expr20', 1, KProperty1, function (receiver) {
            return _get_expr20__g59ny0(receiver);
        }, null);
    }

    function expr10$factory_0() {
        return getPropertyCallableRef('expr10', 1, KProperty1, function (receiver) {
            return _get_expr10__g59n7b(receiver);
        }, null);
    }

    function expr$factory_0() {
        return getPropertyCallableRef('expr', 1, KProperty1, function (receiver) {
            return _get_expr__d68qnq(receiver);
        }, null);
    }

    function implicitParam$factory_0() {
        return getPropertyCallableRef('implicitParam', 1, KProperty1, function (receiver) {
            return _get_implicitParam__bjitd5(receiver);
        }, null);
    }

    function constraint$factory_0() {
        return getPropertyCallableRef('constraint', 1, KProperty1, function (receiver) {
            return _get_constraint__d9gthq(receiver);
        }, null);
    }

    function unnamedField$factory_0() {
        return getPropertyCallableRef('unnamedField', 1, KProperty1, function (receiver) {
            return _get_unnamedField__4757g1(receiver);
        }, null);
    }

    function field$factory_0() {
        return getPropertyCallableRef('field', 1, KProperty1, function (receiver) {
            return _get_field__hkjsa1(receiver);
        }, null);
    }

    function fields$factory_1() {
        return getPropertyCallableRef('fields', 1, KProperty1, function (receiver) {
            return _get_fields__njv4he(receiver);
        }, null);
    }

    function constructor$factory_0() {
        return getPropertyCallableRef('constructor', 1, KProperty1, function (receiver) {
            return _get_constructor__5nhhrd(receiver);
        }, null);
    }

    function root$factory_0() {
        return getPropertyCallableRef('root', 1, KProperty1, function (receiver) {
            return receiver.get_root_wott0r_k$();
        }, null);
    }

    function term$factory_1($b0) {
        return getPropertyCallableRef('term', 0, KProperty0, function () {
            return _get_term__de5k67($b0);
        }, null);
    }

    function expr$factory_1($b0) {
        return getPropertyCallableRef('expr', 0, KProperty0, function () {
            return _get_expr__d68qnq($b0);
        }, null);
    }

    function SrcLocation(offset, length) {
        this.offset_1 = offset;
        this.length_1 = length;
    }

    protoOf(SrcLocation).get_offset_hjmqak_k$ = function () {
        return this.offset_1;
    };
    protoOf(SrcLocation).get_length_g42xv3_k$ = function () {
        return this.length_1;
    };
    protoOf(SrcLocation).component1_7eebsc_k$ = function () {
        return this.offset_1;
    };
    protoOf(SrcLocation).component2_7eebsb_k$ = function () {
        return this.length_1;
    };
    protoOf(SrcLocation).copy_fhtu3_k$ = function (offset, length) {
        return new SrcLocation(offset, length);
    };
    protoOf(SrcLocation).copy$default_6gegtk_k$ = function (offset, length, $super) {
        offset = offset === VOID ? this.offset_1 : offset;
        length = length === VOID ? this.length_1 : length;
        return $super === VOID ? this.copy_fhtu3_k$(offset, length) : $super.copy_fhtu3_k$.call(this, offset, length);
    };
    protoOf(SrcLocation).toString = function () {
        return 'SrcLocation(offset=' + this.offset_1 + ', length=' + this.length_1 + ')';
    };
    protoOf(SrcLocation).hashCode = function () {
        var result = this.offset_1;
        result = imul(result, 31) + this.length_1 | 0;
        return result;
    };
    protoOf(SrcLocation).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof SrcLocation))
            return false;
        var tmp0_other_with_cast = other instanceof SrcLocation ? other : THROW_CCE();
        if (!(this.offset_1 === tmp0_other_with_cast.offset_1))
            return false;
        if (!(this.length_1 === tmp0_other_with_cast.length_1))
            return false;
        return true;
    };

    function main() {
        var tmp0_safe_receiver = document.getElementById('compile');
        if (tmp0_safe_receiver == null)
            null;
        else {
            tmp0_safe_receiver.addEventListener('click', main$lambda);
        }
    }

    function funcCodeGen(src) {
        try {
            var ast = (new TlbGrammar()).parseOrThrow_n30fme_k$(src);
            var compiler = new TlbCompiler();
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = ast.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                // Inline function 'org.ton.tlb.funcCodeGen.<anonymous>' call
                compiler.compileConstructor_gsk4u8_k$(element);
            }
            // Inline function 'kotlin.text.buildString' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.apply' call
            var this_0 = StringBuilder_init_$Create$();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.ton.tlb.funcCodeGen.<anonymous>' call
            // Inline function 'kotlin.text.appendLine' call
            var value = Companion_getInstance_4().get_TLB_LIB_7bp7qx_k$();
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator_0 = compiler.get_types_izd7io_k$().get_values_ksazhn_k$().iterator_jk1svi_k$();
            while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                var element_0 = tmp0_iterator_0.next_20eer_k$();
                // Inline function 'org.ton.tlb.funcCodeGen.<anonymous>.<anonymous>' call
                var funcCodeGen = new FuncCodeGen(element_0);
                funcCodeGen.generate_arbnv5_k$(this_0);
            }
            var output = this_0.toString();
            // Inline function 'kotlin.text.buildString' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.apply' call
            var this_1 = StringBuilder_init_$Create$();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'org.ton.tlb.funcCodeGen.<anonymous>' call
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator_1 = compiler.get_types_izd7io_k$().get_values_ksazhn_k$().iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
                var element_1 = tmp0_iterator_1.next_20eer_k$();
                // Inline function 'org.ton.tlb.funcCodeGen.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.text.appendLine' call
                // Inline function 'kotlin.text.appendLine' call
                this_1.append_t8pm91_k$(element_1).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            }
            var tmp$ret$7 = this_1.toString();
            return listOf_0([output, tmp$ret$7]);
        } catch ($p) {
            if ($p instanceof Exception) {
                var e = $p;
                return listOf_0([stackTraceToString(e), '']);
            } else {
                throw $p;
            }
        }
    }

    function main$lambda(it) {
        var tmp0_safe_receiver = document.getElementById('src');
        var tmp;
        if (tmp0_safe_receiver == null) {
            tmp = null;
        } else {
            // Inline function 'kotlin.js.asDynamic' call
            tmp = tmp0_safe_receiver;
        }
        var tmp_0 = tmp.value;
        var src = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
        var tmp1_container = funcCodeGen(src);
        // Inline function 'kotlin.collections.component1' call
        var output = tmp1_container.get_c1px32_k$(0);
        // Inline function 'kotlin.collections.component2' call
        var debug = tmp1_container.get_c1px32_k$(1);
        var tmp2_safe_receiver = document.getElementById('output');
        if (tmp2_safe_receiver != null) {
            tmp2_safe_receiver.textContent = output;
        }
        var tmp3_safe_receiver = document.getElementById('debug');
        if (tmp3_safe_receiver != null) {
            tmp3_safe_receiver.textContent = debug;
        }
        return Unit_getInstance();
    }

    //region block: post-declaration
    protoOf(Type).get_intSign_xn0cir_k$ = get_intSign;
    protoOf(Type).get_isInt_it6ud8_k$ = get_isInt;
    protoOf(Type).get_isAnon_evulnj_k$ = get_isAnon;
    protoOf(Type).get_isNatural_riopo6_k$ = get_isNatural;
    protoOf(TypeParam).get_intSign_xn0cir_k$ = get_intSign;
    protoOf(TypeParam).get_isInt_it6ud8_k$ = get_isInt;
    protoOf(TypeParam).get_isAnon_evulnj_k$ = get_isAnon;
    protoOf(TypeParam).get_isNatural_riopo6_k$ = get_isNatural;
    protoOf(NaturalParam).get_size_woubt6_k$ = get_size;
    protoOf(NaturalParam).get_isAnyBits_f0tjq9_k$ = get_isAnyBits;
    protoOf(NaturalParam).get_intSign_xn0cir_k$ = get_intSign;
    protoOf(NaturalParam).get_isInt_it6ud8_k$ = get_isInt;
    protoOf(NaturalParam).get_isAnon_evulnj_k$ = get_isAnon;
    protoOf(NaturalParam).get_isNatural_riopo6_k$ = get_isNatural;
    protoOf(Apply).get_isInt_it6ud8_k$ = get_isInt;
    protoOf(Add).get_size_woubt6_k$ = get_size;
    protoOf(Add).get_isAnyBits_f0tjq9_k$ = get_isAnyBits;
    protoOf(Add).get_intSign_xn0cir_k$ = get_intSign;
    protoOf(Add).get_isInt_it6ud8_k$ = get_isInt;
    protoOf(Add).get_isAnon_evulnj_k$ = get_isAnon;
    protoOf(Add).get_isNatural_riopo6_k$ = get_isNatural;
    protoOf(GetBit).get_size_woubt6_k$ = get_size;
    protoOf(GetBit).get_isAnyBits_f0tjq9_k$ = get_isAnyBits;
    protoOf(GetBit).get_intSign_xn0cir_k$ = get_intSign;
    protoOf(GetBit).get_isInt_it6ud8_k$ = get_isInt;
    protoOf(GetBit).get_isAnon_evulnj_k$ = get_isAnon;
    protoOf(GetBit).get_isNatural_riopo6_k$ = get_isNatural;
    protoOf(Multiply).get_size_woubt6_k$ = get_size;
    protoOf(Multiply).get_isAnyBits_f0tjq9_k$ = get_isAnyBits;
    protoOf(Multiply).get_intSign_xn0cir_k$ = get_intSign;
    protoOf(Multiply).get_isInt_it6ud8_k$ = get_isInt;
    protoOf(Multiply).get_isAnon_evulnj_k$ = get_isAnon;
    protoOf(Multiply).get_isNatural_riopo6_k$ = get_isNatural;
    protoOf(IntConstant).get_size_woubt6_k$ = get_size;
    protoOf(IntConstant).get_isAnyBits_f0tjq9_k$ = get_isAnyBits;
    protoOf(IntConstant).get_intSign_xn0cir_k$ = get_intSign;
    protoOf(IntConstant).get_isInt_it6ud8_k$ = get_isInt;
    protoOf(IntConstant).get_isAnon_evulnj_k$ = get_isAnon;
    protoOf(IntConstant).get_isNatural_riopo6_k$ = get_isNatural;
    protoOf(Tuple).get_intSign_xn0cir_k$ = get_intSign;
    protoOf(Tuple).get_isInt_it6ud8_k$ = get_isInt;
    protoOf(Tuple).get_isAnon_evulnj_k$ = get_isAnon;
    protoOf(Tuple).get_isNatural_riopo6_k$ = get_isNatural;
    protoOf(CellRef).get_intSign_xn0cir_k$ = get_intSign;
    protoOf(CellRef).get_isInt_it6ud8_k$ = get_isInt;
    protoOf(CellRef).get_isAnon_evulnj_k$ = get_isAnon;
    protoOf(CellRef).get_isNatural_riopo6_k$ = get_isNatural;
    protoOf(Conditional).get_intSign_xn0cir_k$ = get_intSign;
    protoOf(Conditional).get_isInt_it6ud8_k$ = get_isInt;
    protoOf(Conditional).get_isAnon_evulnj_k$ = get_isAnon;
    protoOf(Conditional).get_isNatural_riopo6_k$ = get_isNatural;
    //endregion
    //region block: init
    ALL = new Long(0, -2147483648);
    HEX_DIGITS = '0123456789abcdef';
    //endregion
    main();
    return _;
}));

//# sourceMappingURL=tlb.js.map
