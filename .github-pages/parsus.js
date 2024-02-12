(function (root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['exports', './kotlin-kotlin-stdlib.js'], factory);
    else if (typeof exports === 'object')
        factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
    else {
        if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
            throw new Error("Error loading module 'parsus'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'parsus'.");
        }
        root.parsus = factory(typeof parsus === 'undefined' ? {} : parsus, this['kotlin-kotlin-stdlib']);
    }
}(this, function (_, kotlin_kotlin) {
    'use strict';
    //region block: imports
    var imul = Math.imul;
    var protoOf = kotlin_kotlin.$_$.b4;
    var THROW_CCE = kotlin_kotlin.$_$.g5;
    var Annotation = kotlin_kotlin.$_$.x4;
    var classMeta = kotlin_kotlin.$_$.o3;
    var setMetadataFor = kotlin_kotlin.$_$.c4;
    var VOID = kotlin_kotlin.$_$.a;
    var getStringHashCode = kotlin_kotlin.$_$.t3;
    var listOf = kotlin_kotlin.$_$.n2;
    var listOf_0 = kotlin_kotlin.$_$.m2;
    var plus = kotlin_kotlin.$_$.t2;
    var plus_0 = kotlin_kotlin.$_$.u2;
    var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
    var addAll = kotlin_kotlin.$_$.u1;
    var toSet = kotlin_kotlin.$_$.b3;
    var emptySet = kotlin_kotlin.$_$.d2;
    var CoroutineImpl = kotlin_kotlin.$_$.g3;
    var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d3;
    var throwKotlinNothingValueException = kotlin_kotlin.$_$.p5;
    var Unit_getInstance = kotlin_kotlin.$_$.q1;
    var Collection = kotlin_kotlin.$_$.r1;
    var isInterface = kotlin_kotlin.$_$.w3;
    var toString = kotlin_kotlin.$_$.g4;
    var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
    var interfaceMeta = kotlin_kotlin.$_$.v3;
    var objectMeta = kotlin_kotlin.$_$.a4;
    var noWhenBranchMatchedException = kotlin_kotlin.$_$.n5;
    var Exception = kotlin_kotlin.$_$.c5;
    var Exception_init_$Init$ = kotlin_kotlin.$_$.n;
    var captureStack = kotlin_kotlin.$_$.k3;
    var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m;
    var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u;
    var repeat = kotlin_kotlin.$_$.t4;
    var coerceAtLeast = kotlin_kotlin.$_$.h4;
    var hashCode = kotlin_kotlin.$_$.u3;
    var equals = kotlin_kotlin.$_$.p3;
    var anyToString = kotlin_kotlin.$_$.j3;
    var lazy = kotlin_kotlin.$_$.m5;
    var KProperty1 = kotlin_kotlin.$_$.k4;
    var getPropertyCallableRef = kotlin_kotlin.$_$.s3;
    var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.n1;
    var Result = kotlin_kotlin.$_$.f5;
    var Continuation = kotlin_kotlin.$_$.f3;
    var Companion_getInstance = kotlin_kotlin.$_$.p1;
    var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.a1;
    var createCoroutineUnintercepted = kotlin_kotlin.$_$.e3;
    var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.c1;
    var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.b1;
    var returnIfSuspended = kotlin_kotlin.$_$.d;
    var throwOnFailure = kotlin_kotlin.$_$.q5;
    var coerceAtMost = kotlin_kotlin.$_$.i4;
    var SuspendFunction1 = kotlin_kotlin.$_$.h3;
    var first = kotlin_kotlin.$_$.g2;
    var checkCountOverflow = kotlin_kotlin.$_$.x1;
    var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r;
    var charSequenceLength = kotlin_kotlin.$_$.n3;
    var charSequenceGet = kotlin_kotlin.$_$.m3;
    var toString_0 = kotlin_kotlin.$_$.z;
    var startsWith = kotlin_kotlin.$_$.v4;
    var Regex_init_$Create$ = kotlin_kotlin.$_$.k;
    var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.b;
    var plus_1 = kotlin_kotlin.$_$.s2;
    var Regex = kotlin_kotlin.$_$.m4;
    var setOf = kotlin_kotlin.$_$.w2;
    //endregion
    //region block: pre-declaration
    setMetadataFor(ExperimentalParsusApi, 'ExperimentalParsusApi', classMeta, VOID, [Annotation]);
    setMetadataFor(Language, 'Language', classMeta, VOID, [Annotation]);

    function get_firstTokens() {
        return emptySet();
    }

    setMetadataFor(Parser, 'Parser', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(ParserImpl, 'ParserImpl', classMeta, VOID, [Parser], VOID, VOID, VOID, [0]);
    setMetadataFor(AbstractChoiceParser, 'AbstractChoiceParser', classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor($parseCOROUTINE$0, '$parseCOROUTINE$0', classMeta, CoroutineImpl);
    setMetadataFor(ScannerlessChoiceParser, 'ScannerlessChoiceParser', classMeta, AbstractChoiceParser, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor($parseCOROUTINE$1, '$parseCOROUTINE$1', classMeta, CoroutineImpl);
    setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(GrammarContext, 'GrammarContext', interfaceMeta);
    setMetadataFor(Grammar, 'Grammar', classMeta, VOID, [GrammarContext]);
    setMetadataFor(IgnoredValue, 'IgnoredValue', objectMeta);
    setMetadataFor(ParseResult, 'ParseResult', classMeta);
    setMetadataFor(ParseException, 'ParseException', classMeta, Exception);
    setMetadataFor(ParseError, 'ParseError', classMeta, ParseResult);
    setMetadataFor(ParsedValue, 'ParsedValue', classMeta, ParseResult);
    setMetadataFor(NoViableAlternative, 'NoViableAlternative', classMeta, ParseError);
    setMetadataFor(ParseErrorContextProvider, 'ParseErrorContextProvider', interfaceMeta);
    setMetadataFor(ParseErrorContext, 'ParseErrorContext', classMeta);
    setMetadataFor(UnmatchedToken, 'UnmatchedToken', classMeta, ParseError);
    setMetadataFor(MismatchedToken, 'MismatchedToken', classMeta, ParseError);
    setMetadataFor(NotEnoughRepetition, 'NotEnoughRepetition', classMeta, ParseError);
    setMetadataFor(ref$1, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [Continuation]);
    setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [Continuation]);
    setMetadataFor(Companion, 'Companion', objectMeta);
    setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, [Continuation]);
    setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta, VOID, [Continuation]);
    setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta, VOID, [Continuation]);
    setMetadataFor(_no_name_provided__qut3iv_6, VOID, classMeta, VOID, [Continuation]);
    setMetadataFor(_no_name_provided__qut3iv_7, VOID, classMeta, VOID, [Continuation]);
    setMetadataFor(_no_name_provided__qut3iv_8, VOID, classMeta, VOID, [Continuation]);
    setMetadataFor(ParsingContext$createParserCoroutine$slambda, 'ParsingContext$createParserCoroutine$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
    setMetadataFor($failCOROUTINE$2, '$failCOROUTINE$2', classMeta, CoroutineImpl);

    function unaryMinus(_this__u8e3s4, $completion) {
        return skip(this, _this__u8e3s4, $completion);
    }

    function unaryPlus(_this__u8e3s4, $completion) {
        return has(this, _this__u8e3s4, $completion);
    }

    setMetadataFor(ParsingScope, 'ParsingScope', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0, 1]);
    setMetadataFor(ParsingContext, 'ParsingContext', classMeta, VOID, [ParsingScope], VOID, VOID, VOID, [0, 1]);
    setMetadataFor(LastTokenMatchContext, 'LastTokenMatchContext', classMeta, VOID, [ParseErrorContextProvider]);
    setMetadataFor($parseCOROUTINE$3, '$parseCOROUTINE$3', classMeta, CoroutineImpl);
    setMetadataFor(TupleParser, 'TupleParser', classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor($parseCOROUTINE$4, '$parseCOROUTINE$4', classMeta, CoroutineImpl);
    setMetadataFor(_no_name_provided__qut3iv_9, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor($parseCOROUTINE$5, '$parseCOROUTINE$5', classMeta, CoroutineImpl);
    setMetadataFor(_no_name_provided__qut3iv_10, VOID, classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor($repeatCOROUTINE$6, '$repeatCOROUTINE$6', classMeta, CoroutineImpl);
    setMetadataFor($checkPresentCOROUTINE$7, '$checkPresentCOROUTINE$7', classMeta, CoroutineImpl);
    setMetadataFor(Companion_0, 'Companion', objectMeta);
    setMetadataFor($parseCOROUTINE$10, '$parseCOROUTINE$10', classMeta, CoroutineImpl);
    setMetadataFor(SkipParser, 'SkipParser', classMeta, ParserImpl, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor($skipCOROUTINE$8, '$skipCOROUTINE$8', classMeta, CoroutineImpl);
    setMetadataFor($tryOrNullCOROUTINE$9, '$tryOrNullCOROUTINE$9', classMeta, CoroutineImpl);
    setMetadataFor(Token, 'Token', classMeta, VOID, [Parser], VOID, VOID, VOID, [0]);
    setMetadataFor(EofToken, 'EofToken', objectMeta, Token, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(LiteralToken, 'LiteralToken', classMeta, Token, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor(RegexToken, 'RegexToken', classMeta, Token, VOID, VOID, VOID, VOID, [0]);
    setMetadataFor($parseCOROUTINE$11, '$parseCOROUTINE$11', classMeta, CoroutineImpl);
    setMetadataFor(TokenMatch, 'TokenMatch', classMeta);
    setMetadataFor(Tokenizer, 'Tokenizer', interfaceMeta);
    setMetadataFor(AbstractTokenizer, 'AbstractTokenizer', classMeta, VOID, [Tokenizer]);
    setMetadataFor(ScannerlessTokenizer, 'ScannerlessTokenizer', classMeta, AbstractTokenizer);
    setMetadataFor(TokenMatchingTrace, 'TokenMatchingTrace', classMeta);
    setMetadataFor(TokenMatchingEvent, 'TokenMatchingEvent', classMeta);
    setMetadataFor(TracedParseResult, 'TracedParseResult', classMeta);

    //endregion
    function ExperimentalParsusApi() {
    }

    protoOf(ExperimentalParsusApi).equals = function (other) {
        if (!(other instanceof ExperimentalParsusApi))
            return false;
        other instanceof ExperimentalParsusApi || THROW_CCE();
        return true;
    };
    protoOf(ExperimentalParsusApi).hashCode = function () {
        return 0;
    };
    protoOf(ExperimentalParsusApi).toString = function () {
        return '@me.alllex.parsus.annotations.ExperimentalParsusApi()';
    };

    function Language(value, prefix, suffix) {
        prefix = prefix === VOID ? '' : prefix;
        suffix = suffix === VOID ? '' : suffix;
        this.value_1 = value;
        this.prefix_1 = prefix;
        this.suffix_1 = suffix;
    }

    protoOf(Language).get_value_j01efc_k$ = function () {
        return this.value_1;
    };
    protoOf(Language).get_prefix_i78za3_k$ = function () {
        return this.prefix_1;
    };
    protoOf(Language).get_suffix_jo1v8a_k$ = function () {
        return this.suffix_1;
    };
    protoOf(Language).equals = function (other) {
        if (!(other instanceof Language))
            return false;
        var tmp0_other_with_cast = other instanceof Language ? other : THROW_CCE();
        if (!(this.value_1 === tmp0_other_with_cast.value_1))
            return false;
        if (!(this.prefix_1 === tmp0_other_with_cast.prefix_1))
            return false;
        if (!(this.suffix_1 === tmp0_other_with_cast.suffix_1))
            return false;
        return true;
    };
    protoOf(Language).hashCode = function () {
        var result = imul(getStringHashCode('value'), 127) ^ getStringHashCode(this.value_1);
        result = result + (imul(getStringHashCode('prefix'), 127) ^ getStringHashCode(this.prefix_1)) | 0;
        result = result + (imul(getStringHashCode('suffix'), 127) ^ getStringHashCode(this.suffix_1)) | 0;
        return result;
    };
    protoOf(Language).toString = function () {
        return '@org.intellij.lang.annotations.Language(value=' + this.value_1 + ', prefix=' + this.prefix_1 + ', suffix=' + this.suffix_1 + ')';
    };

    function or(_this__u8e3s4, p) {
        var tmp;
        var tmp_0;
        if (_this__u8e3s4 instanceof AbstractChoiceParser) {
            tmp_0 = p instanceof AbstractChoiceParser;
        } else {
            tmp_0 = false;
        }
        if (tmp_0) {
            tmp = ChoiceParser(plus(_this__u8e3s4.parsers_1, p.parsers_1));
        } else {
            if (_this__u8e3s4 instanceof AbstractChoiceParser) {
                tmp = ChoiceParser(plus_0(_this__u8e3s4.parsers_1, p));
            } else {
                if (p instanceof AbstractChoiceParser) {
                    tmp = ChoiceParser(plus(listOf_0(_this__u8e3s4), p.parsers_1));
                } else {
                    tmp = ChoiceParser(listOf([_this__u8e3s4, p]));
                }
            }
        }
        return tmp;
    }

    function AbstractChoiceParser(parsers) {
        var tmp;
        if (hasUnknownFirstTokens(parsers)) {
            tmp = emptySet();
        } else {
            // Inline function 'kotlin.collections.flatMap' call
            // Inline function 'kotlin.collections.flatMapTo' call
            var destination = ArrayList_init_$Create$();
            var tmp0_iterator = parsers.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                // Inline function 'me.alllex.parsus.parser.AbstractChoiceParser.<init>.<anonymous>' call
                var list = element.get_firstTokens_2spa0v_k$();
                addAll(destination, list);
            }
            tmp = toSet(destination);
        }
        ParserImpl.call(this, null, tmp);
        this.parsers_1 = parsers;
    }

    protoOf(AbstractChoiceParser).get_parsers_buk3at_k$ = function () {
        return this.parsers_1;
    };

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
                        this.set_exceptionState_fex74n_k$(5);
                        this.tmp0_iterator0__1 = this._this__u8e3s4__1.parsers_1.iterator_jk1svi_k$();
                        this.set_state_rjd8d0_k$(1);
                        continue $sm;
                    case 1:
                        if (!this.tmp0_iterator0__1.hasNext_bitz1p_k$()) {
                            this.set_state_rjd8d0_k$(3);
                            continue $sm;
                        }

                        this.parser1__1 = this.tmp0_iterator0__1.next_20eer_k$();
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = this._this__u8e3s4__2.tryParse_5qpzu_k$(this.parser1__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 2:
                        this.r2__1 = suspendResult;
                        var tmp_0 = this.r2__1;
                        if (tmp_0 instanceof ParsedValue)
                            return this.r2__1.get_value_j01efc_k$();
                        this.set_state_rjd8d0_k$(1);
                        continue $sm;
                    case 3:
                        this.set_state_rjd8d0_k$(4);
                        suspendResult = this._this__u8e3s4__2.fail_gyoc2x_k$(new NoViableAlternative(this._this__u8e3s4__2.get_currentOffset_xrs403_k$()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 4:
                        throwKotlinNothingValueException();
                        break;
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

    function ScannerlessChoiceParser(parsers) {
        AbstractChoiceParser.call(this, parsers);
    }

    protoOf(ScannerlessChoiceParser).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$0(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };

    function ChoiceParser(parsers) {
        return new ScannerlessChoiceParser(parsers);
    }

    function hasUnknownFirstTokens(_this__u8e3s4) {
        var tmp$ret$0;
        $l$block_0: {
            // Inline function 'kotlin.collections.any' call
            var tmp;
            if (isInterface(_this__u8e3s4, Collection)) {
                tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
            } else {
                tmp = false;
            }
            if (tmp) {
                tmp$ret$0 = false;
                break $l$block_0;
            }
            var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                // Inline function 'me.alllex.parsus.parser.hasUnknownFirstTokens.<anonymous>' call
                if (hasUnknownFirstTokens_0(element)) {
                    tmp$ret$0 = true;
                    break $l$block_0;
                }
            }
            tmp$ret$0 = false;
        }
        return tmp$ret$0;
    }

    function hasUnknownFirstTokens_0(_this__u8e3s4) {
        return _this__u8e3s4.get_firstTokens_2spa0v_k$().isEmpty_y1axqb_k$();
    }

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
                        this.set_exceptionState_fex74n_k$(3);
                        var tmp_0 = this;
                        tmp_0.$this$parser0__1 = this._this__u8e3s4__2;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(this._this__u8e3s4__1.$parser_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        this.r1__1 = suspendResult;
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = this.$this$parser0__1.invoke_58si3r_k$(EofToken_getInstance(), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 2:
                        return this.r1__1;
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

    function _get_debugMode__iovywr($this) {
        return $this.debugMode_1;
    }

    function _get__tokens__fsevt4($this) {
        return $this._tokens_1;
    }

    function _set_freezeTokens__4kepgm($this, _set____db54di) {
        $this.freezeTokens_1 = _set____db54di;
    }

    function _get_freezeTokens__k45g0q($this) {
        return $this.freezeTokens_1;
    }

    function checkRegistered($this, token) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!$this._tokens_1.contains_aljjnj_k$(token)) {
            // Inline function 'me.alllex.parsus.parser.Grammar.checkRegistered.<anonymous>' call
            var message = 'Token ' + token + ' is not registered';
            throw IllegalStateException_init_$Create$(toString(message));
        }
    }

    function parseEntire($this, parser, input) {
        beforeParsing($this);
        var tokenizer = new ScannerlessTokenizer(input, $this._tokens_1);
        var parsingContext = new ParsingContext(tokenizer, $this.debugMode_1);
        return parsingContext.runParser_9ezv2o_k$(createUntilEofParser($this, parser));
    }

    function parseTracingEntire($this, parser, input) {
        beforeParsing($this);
        var tokenizer = new ScannerlessTokenizer(input, $this._tokens_1, true);
        var parsingContext = new ParsingContext(tokenizer, $this.debugMode_1);
        var result = parsingContext.runParser_9ezv2o_k$(createUntilEofParser($this, parser));
        var tmp0_elvis_lhs = tokenizer.getTokenMatchingTrace_fziywr_k$();
        var tmp;
        if (tmp0_elvis_lhs == null) {
            var message = 'Token matching trace is not available';
            throw IllegalStateException_init_$Create$(toString(message));
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var trace = tmp;
        return new TracedParseResult(result, trace);
    }

    function beforeParsing($this) {
        $this.freezeTokens_1 = true;
    }

    function createUntilEofParser($this, parser) {
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens = emptySet();
        var untilEofParser = new _no_name_provided__qut3iv(firstTokens, parser);
        return untilEofParser;
    }

    function _no_name_provided__qut3iv($firstTokens, $parser) {
        this.$parser_1 = $parser;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$1(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };

    function Grammar(ignoreCase, debugMode) {
        ignoreCase = ignoreCase === VOID ? false : ignoreCase;
        debugMode = debugMode === VOID ? false : debugMode;
        this.ignoreCase_1 = ignoreCase;
        this.debugMode_1 = debugMode;
        var tmp = this;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp._tokens_1 = ArrayList_init_$Create$();
        this.freezeTokens_1 = false;
        this.register_loi3ch_k$(EofToken_getInstance());
    }

    protoOf(Grammar).get_ignoreCase_5ma991_k$ = function () {
        return this.ignoreCase_1;
    };
    protoOf(Grammar).parse_pc1q8p_k$ = function (input) {
        return parseEntire(this, this.get_root_wott0r_k$(), input);
    };
    protoOf(Grammar).parseOrThrow_n30fme_k$ = function (input) {
        return getOrThrow(this.parse_pc1q8p_k$(input));
    };
    protoOf(Grammar).parse_ad8pz3_k$ = function (parser, input) {
        return parseEntire(this, parser, input);
    };
    protoOf(Grammar).parseOrThrow_73okzo_k$ = function (parser, input) {
        return getOrThrow(this.parse_ad8pz3_k$(parser, input));
    };
    protoOf(Grammar).parseEntire_ybkg8a_k$ = function (input) {
        return this.parse_pc1q8p_k$(input);
    };
    protoOf(Grammar).parseEntireOrThrow_8o3aw5_k$ = function (input) {
        return this.parseOrThrow_n30fme_k$(input);
    };
    protoOf(Grammar).parseTracingTokenMatching_sonmwd_k$ = function (input) {
        return parseTracingEntire(this, this.get_root_wott0r_k$(), input);
    };
    protoOf(Grammar).toString = function () {
        return 'Grammar(' + this._tokens_1.get_size_woubt6_k$() + ' tokens, root = ' + this.get_root_wott0r_k$() + ')';
    };
    protoOf(Grammar).register_loi3ch_k$ = function (token) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this.freezeTokens_1) {
            // Inline function 'me.alllex.parsus.parser.Grammar.register.<anonymous>' call
            var message = 'Tokens must be registered before parsing';
            throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!this._tokens_1.contains_aljjnj_k$(token)) {
            // Inline function 'me.alllex.parsus.parser.Grammar.register.<anonymous>' call
            var message_0 = 'Token ' + token + ' is already registered';
            throw IllegalStateException_init_$Create$(toString(message_0));
        }
        // Inline function 'kotlin.collections.plusAssign' call
        this._tokens_1.add_utx5q5_k$(token);
    };
    protoOf(Grammar).provideDelegate_2uubsd_k$ = function (_this__u8e3s4, thisRef, property) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'me.alllex.parsus.parser.Grammar.provideDelegate.<anonymous>' call
        if (_this__u8e3s4.get_name_woqyms_k$() == null) {
            _this__u8e3s4.set_name_wkmnld_k$(property.callableName);
        }
        checkRegistered(this, _this__u8e3s4);
        return _this__u8e3s4;
    };
    protoOf(Grammar).getValue_d0vnq0_k$ = function (_this__u8e3s4, thisRef, property) {
        return _this__u8e3s4;
    };
    protoOf(Grammar).provideDelegate_xw2634_k$ = function (_this__u8e3s4, thisRef, property) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'me.alllex.parsus.parser.Grammar.provideDelegate.<anonymous>' call
        var tmp;
        if (_this__u8e3s4 instanceof ParserImpl) {
            tmp = _this__u8e3s4.get_name_woqyms_k$() == null;
        } else {
            tmp = false;
        }
        if (tmp) {
            _this__u8e3s4.set_name_wkmnld_k$(property.callableName);
        }
        return _this__u8e3s4;
    };
    protoOf(Grammar).getValue_eqshh7_k$ = function (_this__u8e3s4, thisRef, property) {
        return _this__u8e3s4;
    };

    function GrammarContext() {
    }

    function IgnoredValue() {
        IgnoredValue_instance = this;
    }

    var IgnoredValue_instance;

    function IgnoredValue_getInstance() {
        if (IgnoredValue_instance == null)
            new IgnoredValue();
        return IgnoredValue_instance;
    }

    function ParseResult() {
    }

    function getOrThrow(_this__u8e3s4) {
        var tmp;
        if (_this__u8e3s4 instanceof ParsedValue) {
            tmp = _this__u8e3s4.value_1;
        } else {
            if (_this__u8e3s4 instanceof ParseError) {
                throw new ParseException(_this__u8e3s4);
            } else {
                noWhenBranchMatchedException();
            }
        }
        return tmp;
    }

    function ParseException(error) {
        Exception_init_$Init$(this);
        captureStack(this, ParseException);
        this.error_1 = error;
    }

    protoOf(ParseException).get_error_iqzvfj_k$ = function () {
        return this.error_1;
    };
    protoOf(ParseException).toString = function () {
        return 'ParseException: ' + this.error_1.describe_gu7v0r_k$();
    };

    function ParseError() {
        ParseResult.call(this);
    }

    protoOf(ParseError).get_contextProvider_uzjb2v_k$ = function () {
        return null;
    };
    protoOf(ParseError).toString = function () {
        return this.describe_gu7v0r_k$();
    };
    protoOf(ParseError).format_odpit3_k$ = function (message, messageAtOffset) {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'me.alllex.parsus.parser.ParseError.format.<anonymous>' call
        this_0.append_22ad7x_k$(message);
        var tmp0_safe_receiver = this.get_contextProvider_uzjb2v_k$();
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getParseErrorContext_qs1i9g_k$(this.get_offset_hjmqak_k$());
        if (tmp1_safe_receiver == null)
            null;
        else {
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            this_0.append_22ad7x_k$(repeat(' ', tmp1_safe_receiver.lookBehind_1)).append_22ad7x_k$(messageAtOffset);
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            this_0.append_22ad7x_k$(repeat(' ', tmp1_safe_receiver.lookBehind_1)).append_22ad7x_k$('\u2193 offset=' + this.get_offset_hjmqak_k$() + ' (or after ignored tokens)');
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            // Inline function 'kotlin.text.appendLine' call
            var value = replaceNonPrintable(tmp1_safe_receiver.inputSection_1);
            // Inline function 'kotlin.text.appendLine' call
            this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
            var tmp;
            if (!(tmp1_safe_receiver.previousTokenMatch_1 == null)) {
                this_0.append_22ad7x_k$(repeat('\u2191', coerceAtLeast(tmp1_safe_receiver.previousTokenMatch_1.get_length_g42xv3_k$(), 1)));
                this_0.append_22ad7x_k$(' Previous token: ' + tmp1_safe_receiver.previousTokenMatch_1.get_token_iz6pxs_k$() + ' at offset=' + tmp1_safe_receiver.previousTokenMatch_1.get_offset_hjmqak_k$());
                // Inline function 'kotlin.text.appendLine' call
                this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
                tmp = Unit_getInstance();
            }
        }
        return this_0.toString();
    };

    function ParsedValue(value) {
        ParseResult.call(this);
        this.value_1 = value;
    }

    protoOf(ParsedValue).get_value_j01efc_k$ = function () {
        return this.value_1;
    };
    protoOf(ParsedValue).component1_7eebsc_k$ = function () {
        return this.value_1;
    };
    protoOf(ParsedValue).copy_62qimy_k$ = function (value) {
        return new ParsedValue(value);
    };
    protoOf(ParsedValue).copy$default_2ciass_k$ = function (value, $super) {
        value = value === VOID ? this.value_1 : value;
        return $super === VOID ? this.copy_62qimy_k$(value) : $super.copy_62qimy_k$.call(this, value);
    };
    protoOf(ParsedValue).toString = function () {
        return 'ParsedValue(value=' + this.value_1 + ')';
    };
    protoOf(ParsedValue).hashCode = function () {
        return this.value_1 == null ? 0 : hashCode(this.value_1);
    };
    protoOf(ParsedValue).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof ParsedValue))
            return false;
        var tmp0_other_with_cast = other instanceof ParsedValue ? other : THROW_CCE();
        if (!equals(this.value_1, tmp0_other_with_cast.value_1))
            return false;
        return true;
    };

    function NoViableAlternative(offset) {
        ParseError.call(this);
        this.offset_1 = offset;
    }

    protoOf(NoViableAlternative).get_offset_hjmqak_k$ = function () {
        return this.offset_1;
    };
    protoOf(NoViableAlternative).toString = function () {
        return this.describe_gu7v0r_k$();
    };
    protoOf(NoViableAlternative).describe_gu7v0r_k$ = function () {
        return this.format_odpit3_k$('None of the alternatives succeeded at offset=' + this.offset_1, 'None of the alternatives succeeded');
    };
    protoOf(NoViableAlternative).component1_7eebsc_k$ = function () {
        return this.offset_1;
    };
    protoOf(NoViableAlternative).copy_ns6qmb_k$ = function (offset) {
        return new NoViableAlternative(offset);
    };
    protoOf(NoViableAlternative).copy$default_2yda99_k$ = function (offset, $super) {
        offset = offset === VOID ? this.offset_1 : offset;
        return $super === VOID ? this.copy_ns6qmb_k$(offset) : $super.copy_ns6qmb_k$.call(this, offset);
    };
    protoOf(NoViableAlternative).hashCode = function () {
        return this.offset_1;
    };
    protoOf(NoViableAlternative).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof NoViableAlternative))
            return false;
        var tmp0_other_with_cast = other instanceof NoViableAlternative ? other : THROW_CCE();
        if (!(this.offset_1 === tmp0_other_with_cast.offset_1))
            return false;
        return true;
    };

    function getOrElse(_this__u8e3s4, f) {
        var tmp;
        if (_this__u8e3s4 instanceof ParsedValue) {
            tmp = _this__u8e3s4.value_1;
        } else {
            if (_this__u8e3s4 instanceof ParseError) {
                tmp = f(_this__u8e3s4);
            } else {
                noWhenBranchMatchedException();
            }
        }
        return tmp;
    }

    function ParseErrorContextProvider() {
    }

    function ParseErrorContext(inputSection, lookBehind, lookAhead, previousTokenMatch) {
        this.inputSection_1 = inputSection;
        this.lookBehind_1 = lookBehind;
        this.lookAhead_1 = lookAhead;
        this.previousTokenMatch_1 = previousTokenMatch;
    }

    protoOf(ParseErrorContext).get_inputSection_hl9csc_k$ = function () {
        return this.inputSection_1;
    };
    protoOf(ParseErrorContext).get_lookBehind_mz6ugu_k$ = function () {
        return this.lookBehind_1;
    };
    protoOf(ParseErrorContext).get_lookAhead_qqo1q1_k$ = function () {
        return this.lookAhead_1;
    };
    protoOf(ParseErrorContext).get_previousTokenMatch_outyok_k$ = function () {
        return this.previousTokenMatch_1;
    };
    protoOf(ParseErrorContext).component1_7eebsc_k$ = function () {
        return this.inputSection_1;
    };
    protoOf(ParseErrorContext).component2_7eebsb_k$ = function () {
        return this.lookBehind_1;
    };
    protoOf(ParseErrorContext).component3_7eebsa_k$ = function () {
        return this.lookAhead_1;
    };
    protoOf(ParseErrorContext).component4_7eebs9_k$ = function () {
        return this.previousTokenMatch_1;
    };
    protoOf(ParseErrorContext).copy_5qesep_k$ = function (inputSection, lookBehind, lookAhead, previousTokenMatch) {
        return new ParseErrorContext(inputSection, lookBehind, lookAhead, previousTokenMatch);
    };
    protoOf(ParseErrorContext).copy$default_8v4vcu_k$ = function (inputSection, lookBehind, lookAhead, previousTokenMatch, $super) {
        inputSection = inputSection === VOID ? this.inputSection_1 : inputSection;
        lookBehind = lookBehind === VOID ? this.lookBehind_1 : lookBehind;
        lookAhead = lookAhead === VOID ? this.lookAhead_1 : lookAhead;
        previousTokenMatch = previousTokenMatch === VOID ? this.previousTokenMatch_1 : previousTokenMatch;
        return $super === VOID ? this.copy_5qesep_k$(inputSection, lookBehind, lookAhead, previousTokenMatch) : $super.copy_5qesep_k$.call(this, inputSection, lookBehind, lookAhead, previousTokenMatch);
    };
    protoOf(ParseErrorContext).toString = function () {
        return 'ParseErrorContext(inputSection=' + this.inputSection_1 + ', lookBehind=' + this.lookBehind_1 + ', lookAhead=' + this.lookAhead_1 + ', previousTokenMatch=' + this.previousTokenMatch_1 + ')';
    };
    protoOf(ParseErrorContext).hashCode = function () {
        var result = getStringHashCode(this.inputSection_1);
        result = imul(result, 31) + this.lookBehind_1 | 0;
        result = imul(result, 31) + this.lookAhead_1 | 0;
        result = imul(result, 31) + (this.previousTokenMatch_1 == null ? 0 : this.previousTokenMatch_1.hashCode()) | 0;
        return result;
    };
    protoOf(ParseErrorContext).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof ParseErrorContext))
            return false;
        var tmp0_other_with_cast = other instanceof ParseErrorContext ? other : THROW_CCE();
        if (!(this.inputSection_1 === tmp0_other_with_cast.inputSection_1))
            return false;
        if (!(this.lookBehind_1 === tmp0_other_with_cast.lookBehind_1))
            return false;
        if (!(this.lookAhead_1 === tmp0_other_with_cast.lookAhead_1))
            return false;
        if (!equals(this.previousTokenMatch_1, tmp0_other_with_cast.previousTokenMatch_1))
            return false;
        return true;
    };

    function get_arrowDown() {
        return arrowDown;
    }

    var arrowDown;

    function get_arrowUp() {
        return arrowUp;
    }

    var arrowUp;

    function UnmatchedToken(expected, offset, contextProvider) {
        contextProvider = contextProvider === VOID ? null : contextProvider;
        ParseError.call(this);
        this.expected_1 = expected;
        this.offset_1 = offset;
        this.contextProvider_1 = contextProvider;
    }

    protoOf(UnmatchedToken).get_expected_77p56p_k$ = function () {
        return this.expected_1;
    };
    protoOf(UnmatchedToken).get_offset_hjmqak_k$ = function () {
        return this.offset_1;
    };
    protoOf(UnmatchedToken).get_contextProvider_uzjb2v_k$ = function () {
        return this.contextProvider_1;
    };
    protoOf(UnmatchedToken).toString = function () {
        return this.describe_gu7v0r_k$();
    };
    protoOf(UnmatchedToken).describe_gu7v0r_k$ = function () {
        return this.format_odpit3_k$('Unmatched token at offset=' + this.offset_1 + ', when expected: ' + toPrintableString(this.expected_1), 'Expected token: ' + toPrintableString(this.expected_1));
    };
    protoOf(UnmatchedToken).component1_7eebsc_k$ = function () {
        return this.expected_1;
    };
    protoOf(UnmatchedToken).component2_7eebsb_k$ = function () {
        return this.offset_1;
    };
    protoOf(UnmatchedToken).component3_7eebsa_k$ = function () {
        return this.contextProvider_1;
    };
    protoOf(UnmatchedToken).copy_zhi3tc_k$ = function (expected, offset, contextProvider) {
        return new UnmatchedToken(expected, offset, contextProvider);
    };
    protoOf(UnmatchedToken).copy$default_ypzu8p_k$ = function (expected, offset, contextProvider, $super) {
        expected = expected === VOID ? this.expected_1 : expected;
        offset = offset === VOID ? this.offset_1 : offset;
        contextProvider = contextProvider === VOID ? this.contextProvider_1 : contextProvider;
        return $super === VOID ? this.copy_zhi3tc_k$(expected, offset, contextProvider) : $super.copy_zhi3tc_k$.call(this, expected, offset, contextProvider);
    };
    protoOf(UnmatchedToken).hashCode = function () {
        var result = hashCode(this.expected_1);
        result = imul(result, 31) + this.offset_1 | 0;
        result = imul(result, 31) + (this.contextProvider_1 == null ? 0 : hashCode(this.contextProvider_1)) | 0;
        return result;
    };
    protoOf(UnmatchedToken).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof UnmatchedToken))
            return false;
        var tmp0_other_with_cast = other instanceof UnmatchedToken ? other : THROW_CCE();
        if (!equals(this.expected_1, tmp0_other_with_cast.expected_1))
            return false;
        if (!(this.offset_1 === tmp0_other_with_cast.offset_1))
            return false;
        if (!equals(this.contextProvider_1, tmp0_other_with_cast.contextProvider_1))
            return false;
        return true;
    };

    function MismatchedToken(expected, found, contextProvider) {
        contextProvider = contextProvider === VOID ? null : contextProvider;
        ParseError.call(this);
        this.expected_1 = expected;
        this.found_1 = found;
        this.contextProvider_1 = contextProvider;
    }

    protoOf(MismatchedToken).get_expected_77p56p_k$ = function () {
        return this.expected_1;
    };
    protoOf(MismatchedToken).get_found_irht95_k$ = function () {
        return this.found_1;
    };
    protoOf(MismatchedToken).get_contextProvider_uzjb2v_k$ = function () {
        return this.contextProvider_1;
    };
    protoOf(MismatchedToken).get_offset_hjmqak_k$ = function () {
        return this.found_1.get_offset_hjmqak_k$();
    };
    protoOf(MismatchedToken).toString = function () {
        return this.describe_gu7v0r_k$();
    };
    protoOf(MismatchedToken).describe_gu7v0r_k$ = function () {
        return this.format_odpit3_k$('Mismatched token at offset=' + this.get_offset_hjmqak_k$() + ', when expected: ' + toPrintableString(this.expected_1) + ', got: ' + toPrintableString(this.found_1.get_token_iz6pxs_k$()), 'Expected token: ' + toPrintableString(this.expected_1) + ' at offset=' + this.get_offset_hjmqak_k$() + ', got: ' + toPrintableString(this.found_1.get_token_iz6pxs_k$()));
    };
    protoOf(MismatchedToken).component1_7eebsc_k$ = function () {
        return this.expected_1;
    };
    protoOf(MismatchedToken).component2_7eebsb_k$ = function () {
        return this.found_1;
    };
    protoOf(MismatchedToken).component3_7eebsa_k$ = function () {
        return this.contextProvider_1;
    };
    protoOf(MismatchedToken).copy_cy71nx_k$ = function (expected, found, contextProvider) {
        return new MismatchedToken(expected, found, contextProvider);
    };
    protoOf(MismatchedToken).copy$default_xj13ji_k$ = function (expected, found, contextProvider, $super) {
        expected = expected === VOID ? this.expected_1 : expected;
        found = found === VOID ? this.found_1 : found;
        contextProvider = contextProvider === VOID ? this.contextProvider_1 : contextProvider;
        return $super === VOID ? this.copy_cy71nx_k$(expected, found, contextProvider) : $super.copy_cy71nx_k$.call(this, expected, found, contextProvider);
    };
    protoOf(MismatchedToken).hashCode = function () {
        var result = hashCode(this.expected_1);
        result = imul(result, 31) + this.found_1.hashCode() | 0;
        result = imul(result, 31) + (this.contextProvider_1 == null ? 0 : hashCode(this.contextProvider_1)) | 0;
        return result;
    };
    protoOf(MismatchedToken).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof MismatchedToken))
            return false;
        var tmp0_other_with_cast = other instanceof MismatchedToken ? other : THROW_CCE();
        if (!equals(this.expected_1, tmp0_other_with_cast.expected_1))
            return false;
        if (!this.found_1.equals(tmp0_other_with_cast.found_1))
            return false;
        if (!equals(this.contextProvider_1, tmp0_other_with_cast.contextProvider_1))
            return false;
        return true;
    };

    function NotEnoughRepetition(offset, expectedAtLeast, actualCount) {
        ParseError.call(this);
        this.offset_1 = offset;
        this.expectedAtLeast_1 = expectedAtLeast;
        this.actualCount_1 = actualCount;
    }

    protoOf(NotEnoughRepetition).get_offset_hjmqak_k$ = function () {
        return this.offset_1;
    };
    protoOf(NotEnoughRepetition).get_expectedAtLeast_bhjnij_k$ = function () {
        return this.expectedAtLeast_1;
    };
    protoOf(NotEnoughRepetition).get_actualCount_xzuj48_k$ = function () {
        return this.actualCount_1;
    };
    protoOf(NotEnoughRepetition).toString = function () {
        return this.describe_gu7v0r_k$();
    };
    protoOf(NotEnoughRepetition).describe_gu7v0r_k$ = function () {
        return 'Expected at least ' + this.expectedAtLeast_1 + ', found ' + this.actualCount_1;
    };
    protoOf(NotEnoughRepetition).component1_7eebsc_k$ = function () {
        return this.offset_1;
    };
    protoOf(NotEnoughRepetition).component2_7eebsb_k$ = function () {
        return this.expectedAtLeast_1;
    };
    protoOf(NotEnoughRepetition).component3_7eebsa_k$ = function () {
        return this.actualCount_1;
    };
    protoOf(NotEnoughRepetition).copy_6of2tf_k$ = function (offset, expectedAtLeast, actualCount) {
        return new NotEnoughRepetition(offset, expectedAtLeast, actualCount);
    };
    protoOf(NotEnoughRepetition).copy$default_18aq5y_k$ = function (offset, expectedAtLeast, actualCount, $super) {
        offset = offset === VOID ? this.offset_1 : offset;
        expectedAtLeast = expectedAtLeast === VOID ? this.expectedAtLeast_1 : expectedAtLeast;
        actualCount = actualCount === VOID ? this.actualCount_1 : actualCount;
        return $super === VOID ? this.copy_6of2tf_k$(offset, expectedAtLeast, actualCount) : $super.copy_6of2tf_k$.call(this, offset, expectedAtLeast, actualCount);
    };
    protoOf(NotEnoughRepetition).hashCode = function () {
        var result = this.offset_1;
        result = imul(result, 31) + this.expectedAtLeast_1 | 0;
        result = imul(result, 31) + this.actualCount_1 | 0;
        return result;
    };
    protoOf(NotEnoughRepetition).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof NotEnoughRepetition))
            return false;
        var tmp0_other_with_cast = other instanceof NotEnoughRepetition ? other : THROW_CCE();
        if (!(this.offset_1 === tmp0_other_with_cast.offset_1))
            return false;
        if (!(this.expectedAtLeast_1 === tmp0_other_with_cast.expectedAtLeast_1))
            return false;
        if (!(this.actualCount_1 === tmp0_other_with_cast.actualCount_1))
            return false;
        return true;
    };

    function Parser() {
    }

    function ref(parserProperty) {
        return new ref$1(parserProperty);
    }

    function parser(firstTokens, block) {
        firstTokens = firstTokens === VOID ? emptySet() : firstTokens;
        return new _no_name_provided__qut3iv_0(firstTokens, block);
    }

    function ParserImpl(name, firstTokens) {
        name = name === VOID ? null : name;
        firstTokens = firstTokens === VOID ? emptySet() : firstTokens;
        this.name_1 = name;
        this.firstTokens_1 = firstTokens;
    }

    protoOf(ParserImpl).set_name_wkmnld_k$ = function (_set____db54di) {
        this.name_1 = _set____db54di;
    };
    protoOf(ParserImpl).get_name_woqyms_k$ = function () {
        return this.name_1;
    };
    protoOf(ParserImpl).get_firstTokens_2spa0v_k$ = function () {
        return this.firstTokens_1;
    };
    protoOf(ParserImpl).toString = function () {
        var tmp0_elvis_lhs = this.name_1;
        return tmp0_elvis_lhs == null ? anyToString(this) : tmp0_elvis_lhs;
    };

    function _get_parser__ooioy4($this) {
        // Inline function 'kotlin.getValue' call
        var this_0 = $this.parser$delegate_1;
        parser$factory();
        return this_0.get_value_j01efc_k$();
    }

    function ref$o$parser$delegate$lambda($parserProperty) {
        return function () {
            return $parserProperty();
        };
    }

    function ref$1($parserProperty) {
        ParserImpl.call(this, $parserProperty.callableName, emptySet());
        var tmp = this;
        tmp.parser$delegate_1 = lazy(ref$o$parser$delegate$lambda($parserProperty));
    }

    protoOf(ref$1).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return _this__u8e3s4.invoke_58si3r_k$(_get_parser__ooioy4(this), $completion);
    };
    protoOf(ref$1).toString = function () {
        var tmp0_elvis_lhs = this.name_1;
        return 'ref(' + (tmp0_elvis_lhs == null ? toString(_get_parser__ooioy4(this)) : tmp0_elvis_lhs) + ')';
    };

    function _no_name_provided__qut3iv_0($firstTokens, $block) {
        this.$block_1 = $block;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_0).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.$block_1(_this__u8e3s4, $completion);
    };

    function parser$factory() {
        return getPropertyCallableRef('parser', 1, KProperty1, function (receiver) {
            return _get_parser__ooioy4(receiver);
        }, null);
    }

    function _get_PENDING_RESULT__vr7xza($this) {
        return $this.PENDING_RESULT_1;
    }

    function continuingWith($this, debugName, resumeWith) {
        var tmp;
        if (debugName == null) {
            // Inline function 'kotlin.coroutines.Continuation' call
            var context = EmptyCoroutineContext_getInstance();
            tmp = new _no_name_provided__qut3iv_1(context, resumeWith);
        } else {
            tmp = new _no_name_provided__qut3iv_2(resumeWith, debugName);
        }
        return tmp;
    }

    function _no_name_provided__qut3iv_1($context, $resumeWith) {
        this.$context_1 = $context;
        this.$resumeWith_1 = $resumeWith;
    }

    protoOf(_no_name_provided__qut3iv_1).get_context_h02k06_k$ = function () {
        return this.$context_1;
    };
    protoOf(_no_name_provided__qut3iv_1).resumeWith_dtxwbr_k$ = function (result) {
        return this.$resumeWith_1(new Result(result));
    };

    function _no_name_provided__qut3iv_2($resumeWith, $debugName) {
        this.$resumeWith_1 = $resumeWith;
        this.$debugName_1 = $debugName;
    }

    protoOf(_no_name_provided__qut3iv_2).get_context_h02k06_k$ = function () {
        return EmptyCoroutineContext_getInstance();
    };
    protoOf(_no_name_provided__qut3iv_2).resumeWith_dtxwbr_k$ = function (result) {
        return this.$resumeWith_1(new Result(result));
    };
    protoOf(_no_name_provided__qut3iv_2).toString = function () {
        return this.$debugName_1;
    };

    function _get_tokenizer__jsl4h2($this) {
        return $this.tokenizer_1;
    }

    function _get_debugMode__iovywr_0($this) {
        return $this.debugMode_1;
    }

    function _get_inputLength__qbt70f($this) {
        return $this.inputLength_1;
    }

    function _set_backtrackCont__p38iz5($this, _set____db54di) {
        $this.backtrackCont_1 = _set____db54di;
    }

    function _get_backtrackCont__uq40hn($this) {
        return $this.backtrackCont_1;
    }

    function _set_cont__9l7dk5($this, _set____db54di) {
        $this.cont_1 = _set____db54di;
    }

    function _get_cont__d4zd5l($this) {
        return $this.cont_1;
    }

    function _set_position__5hlfea($this, _set____db54di) {
        $this.position_1 = _set____db54di;
    }

    function _get_position__iahqv2($this) {
        return $this.position_1;
    }

    function _set_lastTokenMatchContext__rk6vbs($this, _set____db54di) {
        $this.lastTokenMatchContext_1 = _set____db54di;
    }

    function _get_lastTokenMatchContext__lekiw4($this) {
        return $this.lastTokenMatchContext_1;
    }

    function _set_result__gjrnty($this, _set____db54di) {
        $this.result_1 = _set____db54di;
    }

    function _get_result__f31376($this) {
        return $this.result_1;
    }

    function getParseErrorContextProviderOrNull($this) {
        return $this.lastTokenMatchContext_1;
    }

    function tryParseImpl($this, parser, $completion) {
        // Inline function 'me.alllex.parsus.parser.ParsingContext.tryParseImpl.<anonymous>' call
        var prevBacktrack = $this.backtrackCont_1;
        var curPosition = $this.position_1;
        // Inline function 'me.alllex.parsus.parser.Companion.continuingWith' call
        Companion_getInstance_0();
        // Inline function 'me.alllex.parsus.parser.ParsingContext.debugName' call
        var tmp;
        if ($this.debugMode_1) {
            // Inline function 'me.alllex.parsus.parser.ParsingContext.tryParseImpl.<anonymous>.<anonymous>' call
            tmp = 'Forward ' + parser;
        } else {
            tmp = null;
        }
        var debugName = tmp;
        var tmp_0;
        if (debugName == null) {
            // Inline function 'kotlin.coroutines.Continuation' call
            var context = EmptyCoroutineContext_getInstance();
            tmp_0 = new _no_name_provided__qut3iv_5(context, $this, prevBacktrack, $completion);
        } else {
            tmp_0 = new _no_name_provided__qut3iv_6($this, prevBacktrack, $completion, debugName);
        }
        var backtrackRestoringCont = tmp_0;
        var newCont = createParserCoroutine($this, parser, backtrackRestoringCont);
        // Inline function 'me.alllex.parsus.parser.Companion.continuingWith' call
        Companion_getInstance_0();
        // Inline function 'me.alllex.parsus.parser.ParsingContext.debugName' call
        var tmp_1;
        if ($this.debugMode_1) {
            // Inline function 'me.alllex.parsus.parser.ParsingContext.tryParseImpl.<anonymous>.<anonymous>' call
            tmp_1 = 'Backtrack[' + curPosition + '] ' + parser;
        } else {
            tmp_1 = null;
        }
        var debugName_0 = tmp_1;
        var tmp_2;
        if (debugName_0 == null) {
            // Inline function 'kotlin.coroutines.Continuation' call
            var context_0 = EmptyCoroutineContext_getInstance();
            tmp_2 = new _no_name_provided__qut3iv_7(context_0, $this, prevBacktrack, curPosition, $completion);
        } else {
            tmp_2 = new _no_name_provided__qut3iv_8($this, prevBacktrack, curPosition, $completion, debugName_0);
        }
        var newBacktrack = tmp_2;
        var tmp_3 = $this;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp_3.result_1 = _Result___init__impl__xyqfz8(Unit_getInstance());
        withCont($this, newCont);
        $this.backtrackCont_1 = newBacktrack;
        return get_COROUTINE_SUSPENDED();
    }

    function runParseLoop($this) {
        $l$loop: while (true) {
            var tmp0_elvis_lhs = $this.cont_1;
            var tmp;
            if (tmp0_elvis_lhs == null) {
                break $l$loop;
            } else {
                tmp = tmp0_elvis_lhs;
            }
            var cont = tmp;
            var resumeValue = $this.result_1;
            $this.cont_1 = null;
            $this.result_1 = Companion_getInstance_0().PENDING_RESULT_1;
            cont.resumeWith_dtxwbr_k$(resumeValue);
        }
    }

    function createParserCoroutine($this, parser, then) {
        var doParse = ParsingContext$createParserCoroutine$slambda_0(parser, null);
        return createCoroutineUnintercepted(doParse, $this, then);
    }

    function withCont($this, continuation) {
        var tmp = $this;
        tmp.cont_1 = (continuation == null ? true : isInterface(continuation, Continuation)) ? continuation : THROW_CCE();
    }

    function debugName($this, block) {
        return $this.debugMode_1 ? block() : null;
    }

    function Companion() {
        Companion_instance = this;
        var tmp = this;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var value = get_COROUTINE_SUSPENDED();
        tmp.PENDING_RESULT_1 = _Result___init__impl__xyqfz8(value);
    }

    var Companion_instance;

    function Companion_getInstance_0() {
        if (Companion_instance == null)
            new Companion();
        return Companion_instance;
    }

    function _no_name_provided__qut3iv_3($context, this$0) {
        this.$context_1 = $context;
        this.this$0__1 = this$0;
    }

    protoOf(_no_name_provided__qut3iv_3).get_context_h02k06_k$ = function () {
        return this.$context_1;
    };
    protoOf(_no_name_provided__qut3iv_3).resumeWith_dtxwbr_k$ = function (result) {
        this.this$0__1.backtrackCont_1 = null;
        this.this$0__1.cont_1 = null;
        var tmp = this.this$0__1;
        // Inline function 'kotlin.map' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0;
        if (_Result___get_isSuccess__impl__sndoy8(result)) {
            // Inline function 'kotlin.Companion.success' call
            Companion_getInstance();
            var tmp_1 = _Result___get_value__impl__bjfvqg(result);
            var value = new ParsedValue((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
            tmp_0 = _Result___init__impl__xyqfz8(value);
        } else {
            tmp_0 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(result));
        }
        tmp.result_1 = tmp_0;
        return Unit_getInstance();
    };

    function _no_name_provided__qut3iv_4(this$0, $debugName) {
        this.this$0__1 = this$0;
        this.$debugName_1 = $debugName;
    }

    protoOf(_no_name_provided__qut3iv_4).get_context_h02k06_k$ = function () {
        return EmptyCoroutineContext_getInstance();
    };
    protoOf(_no_name_provided__qut3iv_4).resumeWith_dtxwbr_k$ = function (result) {
        this.this$0__1.backtrackCont_1 = null;
        this.this$0__1.cont_1 = null;
        var tmp = this.this$0__1;
        // Inline function 'kotlin.map' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0;
        if (_Result___get_isSuccess__impl__sndoy8(result)) {
            // Inline function 'kotlin.Companion.success' call
            Companion_getInstance();
            var tmp_1 = _Result___get_value__impl__bjfvqg(result);
            var value = new ParsedValue((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
            tmp_0 = _Result___init__impl__xyqfz8(value);
        } else {
            tmp_0 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(result));
        }
        tmp.result_1 = tmp_0;
        return Unit_getInstance();
    };
    protoOf(_no_name_provided__qut3iv_4).toString = function () {
        return this.$debugName_1;
    };

    function _no_name_provided__qut3iv_5($context, this$0, $prevBacktrack, $mergeCont) {
        this.$context_1 = $context;
        this.this$0__1 = this$0;
        this.$prevBacktrack_1 = $prevBacktrack;
        this.$mergeCont_1 = $mergeCont;
    }

    protoOf(_no_name_provided__qut3iv_5).get_context_h02k06_k$ = function () {
        return this.$context_1;
    };
    protoOf(_no_name_provided__qut3iv_5).resumeWith_dtxwbr_k$ = function (result) {
        this.this$0__1.backtrackCont_1 = this.$prevBacktrack_1;
        withCont(this.this$0__1, this.$mergeCont_1);
        var tmp = this.this$0__1;
        // Inline function 'kotlin.map' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0;
        if (_Result___get_isSuccess__impl__sndoy8(result)) {
            // Inline function 'kotlin.Companion.success' call
            Companion_getInstance();
            // Inline function 'me.alllex.parsus.parser.ParsingContext.tryParseImpl.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_1 = _Result___get_value__impl__bjfvqg(result);
            var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
            var value = new ParsedValue(it);
            tmp_0 = _Result___init__impl__xyqfz8(value);
        } else {
            tmp_0 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(result));
        }
        tmp.result_1 = tmp_0;
        return Unit_getInstance();
    };

    function _no_name_provided__qut3iv_6(this$0, $prevBacktrack, $mergeCont, $debugName) {
        this.this$0__1 = this$0;
        this.$prevBacktrack_1 = $prevBacktrack;
        this.$mergeCont_1 = $mergeCont;
        this.$debugName_1 = $debugName;
    }

    protoOf(_no_name_provided__qut3iv_6).get_context_h02k06_k$ = function () {
        return EmptyCoroutineContext_getInstance();
    };
    protoOf(_no_name_provided__qut3iv_6).resumeWith_dtxwbr_k$ = function (result) {
        this.this$0__1.backtrackCont_1 = this.$prevBacktrack_1;
        withCont(this.this$0__1, this.$mergeCont_1);
        var tmp = this.this$0__1;
        // Inline function 'kotlin.map' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0;
        if (_Result___get_isSuccess__impl__sndoy8(result)) {
            // Inline function 'kotlin.Companion.success' call
            Companion_getInstance();
            // Inline function 'me.alllex.parsus.parser.ParsingContext.tryParseImpl.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_1 = _Result___get_value__impl__bjfvqg(result);
            var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
            var value = new ParsedValue(it);
            tmp_0 = _Result___init__impl__xyqfz8(value);
        } else {
            tmp_0 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(result));
        }
        tmp.result_1 = tmp_0;
        return Unit_getInstance();
    };
    protoOf(_no_name_provided__qut3iv_6).toString = function () {
        return this.$debugName_1;
    };

    function _no_name_provided__qut3iv_7($context, this$0, $prevBacktrack, $curPosition, $mergeCont) {
        this.$context_1 = $context;
        this.this$0__1 = this$0;
        this.$prevBacktrack_1 = $prevBacktrack;
        this.$curPosition_1 = $curPosition;
        this.$mergeCont_1 = $mergeCont;
    }

    protoOf(_no_name_provided__qut3iv_7).get_context_h02k06_k$ = function () {
        return this.$context_1;
    };
    protoOf(_no_name_provided__qut3iv_7).resumeWith_w5bfsd_k$ = function (result) {
        this.this$0__1.backtrackCont_1 = this.$prevBacktrack_1;
        this.this$0__1.position_1 = this.$curPosition_1;
        withCont(this.this$0__1, this.$mergeCont_1);
        this.this$0__1.result_1 = result;
        return Unit_getInstance();
    };
    protoOf(_no_name_provided__qut3iv_7).resumeWith_dtxwbr_k$ = function (result) {
        return this.resumeWith_w5bfsd_k$(result);
    };

    function _no_name_provided__qut3iv_8(this$0, $prevBacktrack, $curPosition, $mergeCont, $debugName) {
        this.this$0__1 = this$0;
        this.$prevBacktrack_1 = $prevBacktrack;
        this.$curPosition_1 = $curPosition;
        this.$mergeCont_1 = $mergeCont;
        this.$debugName_1 = $debugName;
    }

    protoOf(_no_name_provided__qut3iv_8).get_context_h02k06_k$ = function () {
        return EmptyCoroutineContext_getInstance();
    };
    protoOf(_no_name_provided__qut3iv_8).resumeWith_w5bfsd_k$ = function (result) {
        this.this$0__1.backtrackCont_1 = this.$prevBacktrack_1;
        this.this$0__1.position_1 = this.$curPosition_1;
        withCont(this.this$0__1, this.$mergeCont_1);
        this.this$0__1.result_1 = result;
        return Unit_getInstance();
    };
    protoOf(_no_name_provided__qut3iv_8).resumeWith_dtxwbr_k$ = function (result) {
        return this.resumeWith_w5bfsd_k$(result);
    };
    protoOf(_no_name_provided__qut3iv_8).toString = function () {
        return this.$debugName_1;
    };

    function ParsingContext$createParserCoroutine$slambda($parser, resultContinuation) {
        this.$parser_1 = $parser;
        CoroutineImpl.call(this, resultContinuation);
    }

    protoOf(ParsingContext$createParserCoroutine$slambda).invoke_a83s7o_k$ = function ($this$null, $completion) {
        var tmp = this.create_662q7y_k$($this$null, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(ParsingContext$createParserCoroutine$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
        return this.invoke_a83s7o_k$((!(p1 == null) ? isInterface(p1, ParsingScope) : false) ? p1 : THROW_CCE(), $completion);
    };
    protoOf(ParsingContext$createParserCoroutine$slambda).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        var tmp_0 = this;
                        tmp_0.this0__1 = this.$parser_1;
                        var tmp_1 = this;
                        tmp_1.$this$run1__1 = this.this0__1;
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this.$this$run1__1.parse_anlqtf_k$(this.$this$null_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        return suspendResult;
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
    protoOf(ParsingContext$createParserCoroutine$slambda).create_662q7y_k$ = function ($this$null, completion) {
        var i = new ParsingContext$createParserCoroutine$slambda(this.$parser_1, completion);
        i.$this$null_1 = $this$null;
        return i;
    };
    protoOf(ParsingContext$createParserCoroutine$slambda).create_wyq9v6_k$ = function (value, completion) {
        return this.create_662q7y_k$((!(value == null) ? isInterface(value, ParsingScope) : false) ? value : THROW_CCE(), completion);
    };

    function ParsingContext$createParserCoroutine$slambda_0($parser, resultContinuation) {
        var i = new ParsingContext$createParserCoroutine$slambda($parser, resultContinuation);
        var l = function ($this$null, $completion) {
            return i.invoke_a83s7o_k$($this$null, $completion);
        };
        l.$arity = 1;
        return l;
    }

    function $failCOROUTINE$2(_this__u8e3s4, error, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this.error_1 = error;
    }

    protoOf($failCOROUTINE$2).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        this.set_state_rjd8d0_k$(1);
                        withCont(this._this__u8e3s4__1, this._this__u8e3s4__1.backtrackCont_1);
                        var tmp_0 = this._this__u8e3s4__1;
                        Companion_getInstance();
                        var value = this.error_1;
                        tmp_0.result_1 = _Result___init__impl__xyqfz8(value);
                        suspendResult = returnIfSuspended(get_COROUTINE_SUSPENDED(), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var message = 'the coroutine must have been cancelled';
                        throw IllegalStateException_init_$Create$(toString(message));
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

    function ParsingContext(tokenizer, debugMode) {
        Companion_getInstance_0();
        debugMode = debugMode === VOID ? false : debugMode;
        this.tokenizer_1 = tokenizer;
        this.debugMode_1 = debugMode;
        this.inputLength_1 = this.tokenizer_1.get_input_it4gip_k$().length;
        this.backtrackCont_1 = null;
        this.cont_1 = null;
        this.position_1 = 0;
        this.lastTokenMatchContext_1 = new LastTokenMatchContext(this.tokenizer_1.get_input_it4gip_k$(), 0);
        this.result_1 = Companion_getInstance_0().PENDING_RESULT_1;
    }

    protoOf(ParsingContext).runParser_9ezv2o_k$ = function (parser) {
        // Inline function 'me.alllex.parsus.parser.Companion.continuingWith' call
        Companion_getInstance_0();
        // Inline function 'me.alllex.parsus.parser.ParsingContext.debugName' call
        var tmp;
        if (this.debugMode_1) {
            // Inline function 'me.alllex.parsus.parser.ParsingContext.runParser.<anonymous>' call
            tmp = 'Root ' + parser;
        } else {
            tmp = null;
        }
        var debugName = tmp;
        var tmp_0;
        if (debugName == null) {
            // Inline function 'kotlin.coroutines.Continuation' call
            var context = EmptyCoroutineContext_getInstance();
            tmp_0 = new _no_name_provided__qut3iv_3(context, this);
        } else {
            tmp_0 = new _no_name_provided__qut3iv_4(this, debugName);
        }
        var tmp$ret$3 = tmp_0;
        withCont(this, createParserCoroutine(this, parser, tmp$ret$3));
        runParseLoop(this);
        // Inline function 'kotlin.getOrThrow' call
        var this_0 = this.result_1;
        throwOnFailure(this_0);
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
        var tmp_2 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        return tmp_2 instanceof ParseResult ? tmp_2 : THROW_CCE();
    };
    protoOf(ParsingContext).get_text_2n4w3t_k$ = function (_this__u8e3s4) {
        // Inline function 'kotlin.text.substring' call
        var this_0 = this.tokenizer_1.get_input_it4gip_k$();
        var startIndex = _this__u8e3s4.get_offset_hjmqak_k$();
        var endIndex = _this__u8e3s4.get_offset_hjmqak_k$() + _this__u8e3s4.get_length_g42xv3_k$() | 0;
        // Inline function 'kotlin.js.asDynamic' call
        return this_0.substring(startIndex, endIndex);
    };
    protoOf(ParsingContext).get_currentOffset_xrs403_k$ = function () {
        return this.position_1;
    };
    protoOf(ParsingContext).get_currentToken_snzadl_k$ = function () {
        return this.tokenizer_1.findContextFreeMatch_721179_k$(this.position_1);
    };
    protoOf(ParsingContext).invoke_58si3r_k$ = function (_this__u8e3s4, $completion) {
        return _this__u8e3s4.parse_anlqtf_k$(this, $completion);
    };
    protoOf(ParsingContext).tryParse_5qpzu_k$ = function (p, $completion) {
        if (p instanceof Token) {
            var tr = this.tryParse_5yqy52_k$(p);
            return tr instanceof ParseResult ? tr : THROW_CCE();
        }
        return tryParseImpl(this, p, $completion);
    };
    protoOf(ParsingContext).tryParse_5yqy52_k$ = function (token) {
        var fromIndex = this.position_1;
        var tmp0_elvis_lhs = this.tokenizer_1.findMatchOf_wmljd9_k$(fromIndex, token);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            return new UnmatchedToken(token, fromIndex, getParseErrorContextProviderOrNull(this));
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var match = tmp;
        if (!equals(match.get_token_iz6pxs_k$(), token))
            return new MismatchedToken(token, match, getParseErrorContextProviderOrNull(this));
        var newPosition = coerceAtMost(match.get_nextOffset_ru7kkv_k$(), this.inputLength_1);
        this.position_1 = newPosition;
        this.lastTokenMatchContext_1.currentOffset_1 = newPosition;
        this.lastTokenMatchContext_1.lastMatch_1 = match;
        return new ParsedValue(match);
    };
    protoOf(ParsingContext).fail_gyoc2x_k$ = function (error, $completion) {
        var tmp = new $failCOROUTINE$2(this, error, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(ParsingContext).toString = function () {
        return 'ParsingContext(position=' + this.position_1 + ', result=' + new Result(this.result_1) + ')';
    };

    function getInputSection($this, inputSectionStart, inputSectionStop) {
        // Inline function 'kotlin.text.substring' call
        var this_0 = $this.input_1;
        var endIndex = coerceAtMost(inputSectionStop, $this.input_1.length);
        // Inline function 'kotlin.js.asDynamic' call
        return this_0.substring(inputSectionStart, endIndex);
    }

    function LastTokenMatchContext(input, currentOffset, lastMatch) {
        lastMatch = lastMatch === VOID ? null : lastMatch;
        this.input_1 = input;
        this.currentOffset_1 = currentOffset;
        this.lastMatch_1 = lastMatch;
    }

    protoOf(LastTokenMatchContext).get_input_it4gip_k$ = function () {
        return this.input_1;
    };
    protoOf(LastTokenMatchContext).set_currentOffset_bphsx3_k$ = function (_set____db54di) {
        this.currentOffset_1 = _set____db54di;
    };
    protoOf(LastTokenMatchContext).get_currentOffset_xrs403_k$ = function () {
        return this.currentOffset_1;
    };
    protoOf(LastTokenMatchContext).set_lastMatch_yll58u_k$ = function (_set____db54di) {
        this.lastMatch_1 = _set____db54di;
    };
    protoOf(LastTokenMatchContext).get_lastMatch_ti59ei_k$ = function () {
        return this.lastMatch_1;
    };
    protoOf(LastTokenMatchContext).toString = function () {
        return 'LastTokenMatchContext(currentOffset=' + this.currentOffset_1 + ', lastMatch=' + this.lastMatch_1 + ')';
    };
    protoOf(LastTokenMatchContext).getParseErrorContext_qs1i9g_k$ = function (offset) {
        if (!(offset === this.currentOffset_1)) {
            return null;
        }
        var lastMatch = this.lastMatch_1;
        var lookAhead = 20;
        var tmp;
        if (lastMatch == null ? true : !(lastMatch.get_nextOffset_ru7kkv_k$() === offset)) {
            tmp = new ParseErrorContext(getInputSection(this, offset, offset + lookAhead | 0), 0, lookAhead, null);
        } else {
            tmp = new ParseErrorContext(getInputSection(this, lastMatch.get_offset_hjmqak_k$(), lastMatch.get_nextOffset_ru7kkv_k$() + lookAhead | 0), lastMatch.get_length_g42xv3_k$(), lookAhead, lastMatch);
        }
        return tmp;
    };

    function ParsingScope() {
    }

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
                        this.set_exceptionState_fex74n_k$(6);
                        var tmp_0 = this;
                        tmp_0.this0__1 = ArrayList_init_$Create$();
                        var tmp_1 = this;
                        tmp_1.$this$buildList1__1 = this.this0__1;
                        this.tmp0_iterator2__1 = this._this__u8e3s4__1.parsers_1.iterator_jk1svi_k$();
                        this.set_state_rjd8d0_k$(1);
                        continue $sm;
                    case 1:
                        if (!this.tmp0_iterator2__1.hasNext_bitz1p_k$()) {
                            this.set_state_rjd8d0_k$(5);
                            continue $sm;
                        }

                        this.parser3__1 = this.tmp0_iterator2__1.next_20eer_k$();
                        var tmp_2 = this.parser3__1;
                        if (tmp_2 instanceof SkipParser) {
                            this.set_state_rjd8d0_k$(3);
                            suspendResult = this._this__u8e3s4__2.invoke_58si3r_k$(this.parser3__1, this);
                            if (suspendResult === get_COROUTINE_SUSPENDED()) {
                                return suspendResult;
                            }
                            continue $sm;
                        } else {
                            this.set_state_rjd8d0_k$(2);
                            suspendResult = this._this__u8e3s4__2.invoke_58si3r_k$(this.parser3__1, this);
                            if (suspendResult === get_COROUTINE_SUSPENDED()) {
                                return suspendResult;
                            }
                            continue $sm;
                        }

                    case 2:
                        var item = suspendResult;
                        this.$this$buildList1__1.add_utx5q5_k$(item);
                        this.set_state_rjd8d0_k$(4);
                        continue $sm;
                    case 3:
                        this.set_state_rjd8d0_k$(4);
                        continue $sm;
                    case 4:
                        this.set_state_rjd8d0_k$(1);
                        continue $sm;
                    case 5:
                        var ARGUMENT = this.this0__1;
                        var items = ARGUMENT.build_1k0s4u_k$();
                        return this._this__u8e3s4__1.transform_1(items);
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

    function TupleParser(parsers, transform) {
        ParserImpl.call(this, null, first(parsers).get_firstTokens_2spa0v_k$());
        this.parsers_1 = parsers;
        this.transform_1 = transform;
    }

    protoOf(TupleParser).get_parsers_buk3at_k$ = function () {
        return this.parsers_1;
    };
    protoOf(TupleParser).get_transform_px941v_k$ = function () {
        return this.transform_1;
    };
    protoOf(TupleParser).get_arity_iosiic_k$ = function () {
        var tmp$ret$0;
        $l$block: {
            // Inline function 'kotlin.collections.count' call
            var this_0 = this.parsers_1;
            var tmp;
            if (isInterface(this_0, Collection)) {
                tmp = this_0.isEmpty_y1axqb_k$();
            } else {
                tmp = false;
            }
            if (tmp) {
                tmp$ret$0 = 0;
                break $l$block;
            }
            var count = 0;
            var tmp0_iterator = this_0.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
                // Inline function 'me.alllex.parsus.parser.TupleParser.<get-arity>.<anonymous>' call
                if (!(element instanceof SkipParser)) {
                    count = count + 1 | 0;
                    checkCountOverflow(count);
                }
            }
            tmp$ret$0 = count;
        }
        return tmp$ret$0;
    };
    protoOf(TupleParser).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$3(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(TupleParser).toString = function () {
        return 'TupleParser(parsers=' + this.parsers_1 + ')';
    };

    function retuple(parser1, parser2, transform) {
        var newParsers = plus_0(tryUnwrapTupleParsers(parser1), parser2);
        return new TupleParser(newParsers, transform);
    }

    function tryUnwrapTupleParsers(_this__u8e3s4) {
        var tmp;
        if (_this__u8e3s4 instanceof TupleParser) {
            tmp = _this__u8e3s4.parsers_1;
        } else {
            tmp = listOf_0(_this__u8e3s4);
        }
        return tmp;
    }

    function map(_this__u8e3s4, f) {
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens = _this__u8e3s4.get_firstTokens_2spa0v_k$();
        return new _no_name_provided__qut3iv_9(firstTokens, f, _this__u8e3s4);
    }

    function zeroOrMore(p) {
        return repeated(p, 0);
    }

    function oneOrMore(p) {
        return repeated(p, 1);
    }

    function repeated(p, atLeast, atMost) {
        atMost = atMost === VOID ? -1 : atMost;
        // Inline function 'me.alllex.parsus.parser.parser' call
        var firstTokens = atLeast > 0 ? p.get_firstTokens_2spa0v_k$() : emptySet();
        return new _no_name_provided__qut3iv_10(firstTokens, p, atLeast, atMost);
    }

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
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this._this__u8e3s4__1.$this_map_1.parse_anlqtf_k$(this.$this$parser0__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var ARGUMENT = suspendResult;
                        return this._this__u8e3s4__1.$f_1(this.$this$parser0__1, ARGUMENT);
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

    function _no_name_provided__qut3iv_9($firstTokens, $f, $this_map) {
        this.$f_1 = $f;
        this.$this_map_1 = $this_map;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_9).parse_kcz18h_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$4(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_9).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_kcz18h_k$(_this__u8e3s4, $completion);
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
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = repeat_0(this.$this$parser0__1, this._this__u8e3s4__1.$p_1, this._this__u8e3s4__1.$atLeast_1, this._this__u8e3s4__1.$atMost_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        return suspendResult;
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

    function _no_name_provided__qut3iv_10($firstTokens, $p, $atLeast, $atMost) {
        this.$p_1 = $p;
        this.$atLeast_1 = $atLeast;
        this.$atMost_1 = $atMost;
        ParserImpl.call(this, VOID, $firstTokens);
    }

    protoOf(_no_name_provided__qut3iv_10).parse_w64piz_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$5(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(_no_name_provided__qut3iv_10).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_w64piz_k$(_this__u8e3s4, $completion);
    };

    function repeat_0(_this__u8e3s4, p, atLeast, atMost, $completion) {
        atMost = atMost === VOID ? -1 : atMost;
        var tmp = new $repeatCOROUTINE$6(_this__u8e3s4, p, atLeast, atMost, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    }

    function has(_this__u8e3s4, p, $completion) {
        return checkPresent(_this__u8e3s4, p, $completion);
    }

    function checkPresent(_this__u8e3s4, p, $completion) {
        var tmp = new $checkPresentCOROUTINE$7(_this__u8e3s4, p, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    }

    function $repeatCOROUTINE$6(_this__u8e3s4, p, atLeast, atMost, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this.p_1 = p;
        this.atLeast_1 = atLeast;
        this.atMost_1 = atMost;
    }

    protoOf($repeatCOROUTINE$6).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(7);
                        if (!(this.atLeast_1 >= 0)) {
                            var message = 'atLeast must not be negative';
                            throw IllegalArgumentException_init_$Create$(toString(message));
                        }

                        if (!(this.atMost_1 === -1 ? true : this.atLeast_1 <= this.atMost_1)) {
                            var message_0 = 'atMost has invalid value';
                            throw IllegalArgumentException_init_$Create$(toString(message_0));
                        }

                        this.startOffset0__1 = this._this__u8e3s4__1.get_currentOffset_xrs403_k$();
                        var tmp_0 = this;
                        tmp_0.results1__1 = ArrayList_init_$Create$();
                        this.repetition2__1 = 0;
                        this.set_state_rjd8d0_k$(1);
                        continue $sm;
                    case 1:
                        if (!(this.atMost_1 === -1 ? true : this.repetition2__1 < this.atMost_1)) {
                            this.set_state_rjd8d0_k$(4);
                            continue $sm;
                        }

                        var tmp_1 = this;
                        tmp_1.this3__1 = this.results1__1;
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = poll(this._this__u8e3s4__1, this.p_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 2:
                        this.tmp0_elvis_lhs4__1 = suspendResult;
                        if (this.tmp0_elvis_lhs4__1 == null) {
                            this.set_state_rjd8d0_k$(4);
                            var tmp_2 = this;
                            continue $sm;
                        } else {
                            this.WHEN_RESULT5__1 = this.tmp0_elvis_lhs4__1;
                            this.set_state_rjd8d0_k$(3);
                            continue $sm;
                        }

                    case 3:
                        this.element6__1 = this.WHEN_RESULT5__1;
                        this.this3__1.add_utx5q5_k$(this.element6__1);
                        this.repetition2__1 = this.repetition2__1 + 1 | 0;
                        this.set_state_rjd8d0_k$(1);
                        continue $sm;
                    case 4:
                        if (this.repetition2__1 < this.atLeast_1) {
                            this.set_state_rjd8d0_k$(6);
                            suspendResult = this._this__u8e3s4__1.fail_gyoc2x_k$(new NotEnoughRepetition(this.startOffset0__1, this.atLeast_1, this.repetition2__1), this);
                            if (suspendResult === get_COROUTINE_SUSPENDED()) {
                                return suspendResult;
                            }
                            continue $sm;
                        } else {
                            this.set_state_rjd8d0_k$(5);
                            continue $sm;
                        }

                    case 5:
                        return this.results1__1;
                    case 6:
                        throwKotlinNothingValueException();
                        break;
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

    function $checkPresentCOROUTINE$7(_this__u8e3s4, p, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this.p_1 = p;
    }

    protoOf($checkPresentCOROUTINE$7).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = tryOrNull(this._this__u8e3s4__1, this.p_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var ARGUMENT = suspendResult;
                        var ARGUMENT_0 = ARGUMENT == null;
                        return !ARGUMENT_0;
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

    function unaryMinus_0(_this__u8e3s4) {
        return ignored(_this__u8e3s4);
    }

    function poll(_this__u8e3s4, parser, $completion) {
        return tryOrNull(_this__u8e3s4, parser, $completion);
    }

    function skip(_this__u8e3s4, p, $completion) {
        var tmp = new $skipCOROUTINE$8(_this__u8e3s4, p, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    }

    function ignored(parser) {
        return Companion_getInstance_1().of_cjlh19_k$(parser);
    }

    function tryOrNull(_this__u8e3s4, parser, $completion) {
        var tmp = new $tryOrNullCOROUTINE$9(_this__u8e3s4, parser, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    }

    function _get_parser__ooioy4_0($this) {
        return $this.parser_1;
    }

    function Companion_0() {
        Companion_instance_0 = this;
    }

    protoOf(Companion_0).of_cjlh19_k$ = function (parser) {
        var tmp;
        if (parser instanceof SkipParser) {
            tmp = parser instanceof SkipParser ? parser : THROW_CCE();
        } else {
            tmp = new SkipParser(parser);
        }
        return tmp;
    };
    var Companion_instance_0;

    function Companion_getInstance_1() {
        if (Companion_instance_0 == null)
            new Companion_0();
        return Companion_instance_0;
    }

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
                        this.set_exceptionState_fex74n_k$(2);
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this._this__u8e3s4__2.invoke_58si3r_k$(this._this__u8e3s4__1.parser_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var ignored = suspendResult;
                        return Unit_getInstance();
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

    function SkipParser(parser) {
        Companion_getInstance_1();
        ParserImpl.call(this, VOID, parser.get_firstTokens_2spa0v_k$());
        this.parser_1 = parser;
    }

    protoOf(SkipParser).parse_7fqjtr_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$10(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(SkipParser).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_7fqjtr_k$(_this__u8e3s4, $completion);
    };
    protoOf(SkipParser).toString = function () {
        return 'SkipParser(parser=' + this.parser_1 + ')';
    };

    function $skipCOROUTINE$8(_this__u8e3s4, p, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this.p_1 = p;
    }

    protoOf($skipCOROUTINE$8).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this._this__u8e3s4__1.invoke_58si3r_k$(this.p_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        return IgnoredValue_getInstance();
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

    function $tryOrNullCOROUTINE$9(_this__u8e3s4, parser, resultContinuation) {
        CoroutineImpl.call(this, resultContinuation);
        this._this__u8e3s4__1 = _this__u8e3s4;
        this.parser_1 = parser;
    }

    protoOf($tryOrNullCOROUTINE$9).doResume_5yljmg_k$ = function () {
        var suspendResult = this.get_result_iyg5d2_k$();
        $sm: do
            try {
                var tmp = this.get_state_iypx7s_k$();
                switch (tmp) {
                    case 0:
                        this.set_exceptionState_fex74n_k$(2);
                        this.set_state_rjd8d0_k$(1);
                        suspendResult = this._this__u8e3s4__1.tryParse_5qpzu_k$(this.parser_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                        }

                        continue $sm;
                    case 1:
                        var this_0 = suspendResult;
                        var tmp_0;
                        if (this_0 instanceof ParsedValue) {
                            tmp_0 = this_0.get_value_j01efc_k$();
                        } else {
                            if (this_0 instanceof ParseError) {
                                tmp_0 = null;
                            } else {
                                noWhenBranchMatchedException();
                            }
                        }

                        return tmp_0;
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

    function times(_this__u8e3s4, p) {
        return and(_this__u8e3s4, p);
    }

    function times_0(_this__u8e3s4, p) {
        return and_0(_this__u8e3s4, p);
    }

    function and(_this__u8e3s4, p) {
        var tmp = ignored(p);
        return retuple(_this__u8e3s4, tmp, and$lambda);
    }

    function and_0(_this__u8e3s4, p) {
        var tmp = ignored(_this__u8e3s4);
        return retuple(tmp, p, and$lambda_0);
    }

    function and$lambda(it) {
        var tmp = it.get_c1px32_k$(0);
        return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }

    function and$lambda_0(it) {
        var tmp = it.get_c1px32_k$(0);
        return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }

    function EofToken() {
        EofToken_instance = this;
        Token.call(this, 'EOF');
    }

    protoOf(EofToken).match_y6bacg_k$ = function (input, fromIndex) {
        return fromIndex >= charSequenceLength(input) ? 1 : 0;
    };
    var EofToken_instance;

    function EofToken_getInstance() {
        if (EofToken_instance == null)
            new EofToken();
        return EofToken_instance;
    }

    function LiteralToken(string, name, ignored, ignoreCase) {
        name = name === VOID ? null : name;
        ignored = ignored === VOID ? false : ignored;
        ignoreCase = ignoreCase === VOID ? false : ignoreCase;
        Token.call(this, name, ignored);
        this.string_1 = string;
        this.ignoreCase_1 = ignoreCase;
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.string_1;
        // Inline function 'kotlin.contracts.contract' call
        if (!(charSequenceLength(this_0) > 0)) {
            // Inline function 'me.alllex.parsus.token.LiteralToken.<anonymous>' call
            var message = 'text must not be empty';
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        this.firstChars_1 = toString_0(charSequenceGet(this.string_1, 0));
    }

    protoOf(LiteralToken).get_string_jnpst6_k$ = function () {
        return this.string_1;
    };
    protoOf(LiteralToken).get_ignoreCase_5ma991_k$ = function () {
        return this.ignoreCase_1;
    };
    protoOf(LiteralToken).match_y6bacg_k$ = function (input, fromIndex) {
        if (startsWith(input, this.string_1, fromIndex, this.ignoreCase_1)) {
            return this.string_1.length;
        }
        return 0;
    };
    protoOf(LiteralToken).get_firstChars_n9lm5m_k$ = function () {
        return this.firstChars_1;
    };
    protoOf(LiteralToken).toString = function () {
        return "LiteralToken('" + this.string_1 + "')";
    };

    function literalToken(_this__u8e3s4, text, name, ignored, ignoreCase) {
        name = name === VOID ? null : name;
        ignored = ignored === VOID ? false : ignored;
        ignoreCase = ignoreCase === VOID ? _this__u8e3s4.get_ignoreCase_5ma991_k$() : ignoreCase;
        // Inline function 'kotlin.also' call
        var this_0 = new LiteralToken(text, name, ignored, ignoreCase);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'me.alllex.parsus.token.literalToken.<anonymous>' call
        _this__u8e3s4.register_loi3ch_k$(this_0);
        return this_0;
    }

    function _get_regex__by6cnq($this) {
        return $this.regex_1;
    }

    function _get_pattern__f9i1rz($this) {
        return $this.regex_1.get_pattern_btfv4p_k$();
    }

    function RegexToken(regex, name, ignored) {
        name = name === VOID ? null : name;
        ignored = ignored === VOID ? false : ignored;
        Token.call(this, name, ignored);
        this.regex_1 = regex;
    }

    protoOf(RegexToken).match_y6bacg_k$ = function (input, fromIndex) {
        var tmp0_elvis_lhs = this.regex_1.matchAt_2l29wz_k$(input, fromIndex);
        var tmp;
        if (tmp0_elvis_lhs == null) {
            return 0;
        } else {
            tmp = tmp0_elvis_lhs;
        }
        var match = tmp;
        return match.get_value_j01efc_k$().length;
    };
    protoOf(RegexToken).toString = function () {
        var tmp0_safe_receiver = this.get_name_woqyms_k$();
        var tmp;
        if (tmp0_safe_receiver == null) {
            tmp = null;
        } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'me.alllex.parsus.token.RegexToken.toString.<anonymous>' call
            tmp = tmp0_safe_receiver + ' ';
        }
        var tmp1_elvis_lhs = tmp;
        return 'RegexToken(' + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + '[' + _get_pattern__f9i1rz(this) + ']' + (this.get_ignored_u8wag9_k$() ? ' [ignored]' : '') + ')';
    };

    function regexToken(_this__u8e3s4, pattern, name, ignored, ignoreCase) {
        name = name === VOID ? null : name;
        ignored = ignored === VOID ? false : ignored;
        ignoreCase = ignoreCase === VOID ? _this__u8e3s4.get_ignoreCase_5ma991_k$() : ignoreCase;
        return regexToken_0(_this__u8e3s4, Regex_init_$Create$(pattern), name, ignored, ignoreCase);
    }

    function regexToken_0(_this__u8e3s4, regex, name, ignored, ignoreCase) {
        name = name === VOID ? null : name;
        ignored = ignored === VOID ? false : ignored;
        ignoreCase = ignoreCase === VOID ? _this__u8e3s4.get_ignoreCase_5ma991_k$() : ignoreCase;
        // Inline function 'kotlin.also' call
        var this_0 = new RegexToken(withIgnoreCase(regex, ignoreCase), name, ignored);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'me.alllex.parsus.token.regexToken.<anonymous>' call
        _this__u8e3s4.register_loi3ch_k$(this_0);
        return this_0;
    }

    function withIgnoreCase(_this__u8e3s4, ignoreCase) {
        return (!ignoreCase ? true : _this__u8e3s4.get_options_jecmyz_k$().contains_aljjnj_k$(RegexOption_IGNORE_CASE_getInstance())) ? _this__u8e3s4 : new Regex(_this__u8e3s4.get_pattern_btfv4p_k$(), plus_1(_this__u8e3s4.get_options_jecmyz_k$(), RegexOption_IGNORE_CASE_getInstance()));
    }

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
                        this.set_exceptionState_fex74n_k$(2);
                        var tmp_0 = this;
                        tmp_0.this0__1 = this._this__u8e3s4__2.tryParse_5yqy52_k$(this._this__u8e3s4__1);
                        this.tmp0_subject1__1 = this.this0__1;
                        var tmp_1 = this.tmp0_subject1__1;
                        if (tmp_1 instanceof ParsedValue) {
                            this.WHEN_RESULT2__1 = this.this0__1.get_value_j01efc_k$();
                            this.set_state_rjd8d0_k$(3);
                            continue $sm;
                        } else {
                            var tmp_2 = this.tmp0_subject1__1;
                            if (tmp_2 instanceof ParseError) {
                                var tmp_3 = this;
                                tmp_3.it3__1 = this.this0__1;
                                this.set_state_rjd8d0_k$(1);
                                suspendResult = this._this__u8e3s4__2.fail_gyoc2x_k$(this.it3__1, this);
                                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                                    return suspendResult;
                                }
                                continue $sm;
                            } else {
                                var tmp_4 = this;
                                noWhenBranchMatchedException();
                            }
                        }

                        break;
                    case 1:
                        this.WHEN_RESULT2__1 = throwKotlinNothingValueException();
                        this.set_state_rjd8d0_k$(3);
                        continue $sm;
                    case 2:
                        throw this.get_exception_x0n6w6_k$();
                    case 3:
                        return this.WHEN_RESULT2__1;
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

    function Token(name, ignored) {
        name = name === VOID ? null : name;
        ignored = ignored === VOID ? false : ignored;
        this.name_1 = name;
        this.ignored_1 = ignored;
        this.firstTokens_1 = setOf(this);
    }

    protoOf(Token).set_name_wkmnld_k$ = function (_set____db54di) {
        this.name_1 = _set____db54di;
    };
    protoOf(Token).get_name_woqyms_k$ = function () {
        return this.name_1;
    };
    protoOf(Token).get_ignored_u8wag9_k$ = function () {
        return this.ignored_1;
    };
    protoOf(Token).parse_tz1j62_k$ = function (_this__u8e3s4, $completion) {
        var tmp = new $parseCOROUTINE$11(this, _this__u8e3s4, $completion);
        tmp.set_result_xj64lm_k$(Unit_getInstance());
        tmp.set_exception_px07aa_k$(null);
        return tmp.doResume_5yljmg_k$();
    };
    protoOf(Token).parse_anlqtf_k$ = function (_this__u8e3s4, $completion) {
        return this.parse_tz1j62_k$(_this__u8e3s4, $completion);
    };
    protoOf(Token).get_firstTokens_2spa0v_k$ = function () {
        return this.firstTokens_1;
    };
    protoOf(Token).get_firstChars_n9lm5m_k$ = function () {
        return '';
    };
    protoOf(Token).toString = function () {
        if (!(this.name_1 == null))
            return 'Token(' + this.name_1 + ')' + (this.ignored_1 ? ' [ignored]' : '');
        return anyToString(this);
    };

    function TokenMatch(token, offset, length) {
        this.token_1 = token;
        this.offset_1 = offset;
        this.length_1 = length;
    }

    protoOf(TokenMatch).get_token_iz6pxs_k$ = function () {
        return this.token_1;
    };
    protoOf(TokenMatch).get_offset_hjmqak_k$ = function () {
        return this.offset_1;
    };
    protoOf(TokenMatch).get_length_g42xv3_k$ = function () {
        return this.length_1;
    };
    protoOf(TokenMatch).get_nextOffset_ru7kkv_k$ = function () {
        return this.offset_1 + this.length_1 | 0;
    };
    protoOf(TokenMatch).component1_7eebsc_k$ = function () {
        return this.token_1;
    };
    protoOf(TokenMatch).component2_7eebsb_k$ = function () {
        return this.offset_1;
    };
    protoOf(TokenMatch).component3_7eebsa_k$ = function () {
        return this.length_1;
    };
    protoOf(TokenMatch).copy_5kd959_k$ = function (token, offset, length) {
        return new TokenMatch(token, offset, length);
    };
    protoOf(TokenMatch).copy$default_uc9brr_k$ = function (token, offset, length, $super) {
        token = token === VOID ? this.token_1 : token;
        offset = offset === VOID ? this.offset_1 : offset;
        length = length === VOID ? this.length_1 : length;
        return $super === VOID ? this.copy_5kd959_k$(token, offset, length) : $super.copy_5kd959_k$.call(this, token, offset, length);
    };
    protoOf(TokenMatch).toString = function () {
        return 'TokenMatch(token=' + this.token_1 + ', offset=' + this.offset_1 + ', length=' + this.length_1 + ')';
    };
    protoOf(TokenMatch).hashCode = function () {
        var result = hashCode(this.token_1);
        result = imul(result, 31) + this.offset_1 | 0;
        result = imul(result, 31) + this.length_1 | 0;
        return result;
    };
    protoOf(TokenMatch).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof TokenMatch))
            return false;
        var tmp0_other_with_cast = other instanceof TokenMatch ? other : THROW_CCE();
        if (!equals(this.token_1, tmp0_other_with_cast.token_1))
            return false;
        if (!(this.offset_1 === tmp0_other_with_cast.offset_1))
            return false;
        if (!(this.length_1 === tmp0_other_with_cast.length_1))
            return false;
        return true;
    };

    function _get_traceEvents__8y1jf7($this) {
        return $this.traceEvents_1;
    }

    function traceMismatch($this, token, offset) {
        var tmp0_safe_receiver = $this.traceEvents_1;
        if (tmp0_safe_receiver == null)
            null;
        else
            tmp0_safe_receiver.add_utx5q5_k$(new TokenMatchingEvent(token, offset, null));
    }

    function traceMatch($this, token, match) {
        var tmp0_safe_receiver = $this.traceEvents_1;
        if (tmp0_safe_receiver == null)
            null;
        else
            tmp0_safe_receiver.add_utx5q5_k$(new TokenMatchingEvent(token, match.get_offset_hjmqak_k$(), match));
    }

    function AbstractTokenizer(input, tokens, traceTokenMatching) {
        traceTokenMatching = traceTokenMatching === VOID ? false : traceTokenMatching;
        this.input_1 = input;
        this.tokens_1 = tokens;
        var tmp = this;
        var tmp_0;
        if (traceTokenMatching) {
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp_0 = ArrayList_init_$Create$();
        } else {
            tmp_0 = null;
        }
        tmp.traceEvents_1 = tmp_0;
    }

    protoOf(AbstractTokenizer).get_input_it4gip_k$ = function () {
        return this.input_1;
    };
    protoOf(AbstractTokenizer).get_tokens_k1vwdf_k$ = function () {
        return this.tokens_1;
    };
    protoOf(AbstractTokenizer).getTokenMatchingTrace_fziywr_k$ = function () {
        var tmp0_safe_receiver = this.traceEvents_1;
        var tmp;
        if (tmp0_safe_receiver == null) {
            tmp = null;
        } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'me.alllex.parsus.tokenizer.AbstractTokenizer.getTokenMatchingTrace.<anonymous>' call
            tmp = new TokenMatchingTrace(this.get_input_it4gip_k$(), tmp0_safe_receiver);
        }
        return tmp;
    };
    protoOf(AbstractTokenizer).matchImpl_najwvl_k$ = function (fromIndex, token) {
        var length = token.match_y6bacg_k$(this.get_input_it4gip_k$(), fromIndex);
        if (length === 0) {
            traceMismatch(this, token, fromIndex);
            return null;
        }
        var match = new TokenMatch(token, fromIndex, length);
        traceMatch(this, token, match);
        return match;
    };

    function _get_ignoredTokens__ugvv0b($this) {
        return $this.ignoredTokens_1;
    }

    function _set_cacheIgnoredMismatchFromIndex__7aie0r($this, _set____db54di) {
        $this.cacheIgnoredMismatchFromIndex_1 = _set____db54di;
    }

    function _get_cacheIgnoredMismatchFromIndex__gv8bnr($this) {
        return $this.cacheIgnoredMismatchFromIndex_1;
    }

    function _set_cachedIgnoredFromIndex__kfilof($this, _set____db54di) {
        $this.cachedIgnoredFromIndex_1 = _set____db54di;
    }

    function _get_cachedIgnoredFromIndex__schzv1($this) {
        return $this.cachedIgnoredFromIndex_1;
    }

    function _set_cachedIgnoredTokenMatch__468hft($this, _set____db54di) {
        $this.cachedIgnoredTokenMatch_1 = _set____db54di;
    }

    function _get_cachedIgnoredTokenMatch__gawwtn($this) {
        return $this.cachedIgnoredTokenMatch_1;
    }

    function matchIgnored($this, fromIndex) {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(fromIndex >= 0)) {
            // Inline function 'me.alllex.parsus.tokenizer.ScannerlessTokenizer.matchIgnored.<anonymous>' call
            var message = 'fromIndex must be non-negative, but was ' + fromIndex;
            throw IllegalArgumentException_init_$Create$(toString(message));
        }
        if (fromIndex === $this.cacheIgnoredMismatchFromIndex_1) {
            return null;
        }
        if (fromIndex === $this.cachedIgnoredFromIndex_1) {
            return $this.cachedIgnoredTokenMatch_1;
        }
        var match = null;
        var tmp0_iterator = $this.ignoredTokens_1.iterator_jk1svi_k$();
        $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var ignoredToken = tmp0_iterator.next_20eer_k$();
            match = $this.matchImpl_najwvl_k$(fromIndex, ignoredToken);
            if (!(match == null)) {
                break $l$loop;
            }
        }
        if (match == null) {
            $this.cacheIgnoredMismatchFromIndex_1 = fromIndex;
        } else {
            $this.cachedIgnoredFromIndex_1 = fromIndex;
            $this.cachedIgnoredTokenMatch_1 = match;
        }
        return match;
    }

    function matchTarget($this, pos, targetToken) {
        return $this.matchImpl_najwvl_k$(pos, targetToken);
    }

    function ScannerlessTokenizer(input, tokens, traceTokenMatching) {
        traceTokenMatching = traceTokenMatching === VOID ? false : traceTokenMatching;
        AbstractTokenizer.call(this, input, tokens, traceTokenMatching);
        var tmp = this;
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = tokens.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'me.alllex.parsus.tokenizer.ScannerlessTokenizer.ignoredTokens.<anonymous>' call
            if (element.get_ignored_u8wag9_k$()) {
                destination.add_utx5q5_k$(element);
            }
        }
        tmp.ignoredTokens_1 = destination;
        this.cacheIgnoredMismatchFromIndex_1 = -1;
        this.cachedIgnoredFromIndex_1 = -1;
        this.cachedIgnoredTokenMatch_1 = null;
    }

    protoOf(ScannerlessTokenizer).findContextFreeMatch_721179_k$ = function (fromIndex) {
        return null;
    };
    protoOf(ScannerlessTokenizer).findMatchOf_wmljd9_k$ = function (fromIndex, targetToken) {
        var pos = fromIndex;
        $l$loop: while (true) {
            var tmp0_safe_receiver = matchTarget(this, pos, targetToken);
            if (tmp0_safe_receiver == null)
                null;
            else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                return tmp0_safe_receiver;
            }
            var ignoredMatch = matchIgnored(this, pos);
            if (!(ignoredMatch == null)) {
                var posAfterIgnored = ignoredMatch.get_offset_hjmqak_k$() + ignoredMatch.get_length_g42xv3_k$() | 0;
                if (posAfterIgnored > pos) {
                    pos = posAfterIgnored;
                    continue $l$loop;
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    };

    function Tokenizer() {
    }

    function TokenMatchingTrace(input, events) {
        this.input_1 = input;
        this.events_1 = events;
    }

    protoOf(TokenMatchingTrace).get_input_it4gip_k$ = function () {
        return this.input_1;
    };
    protoOf(TokenMatchingTrace).get_events_d1yhia_k$ = function () {
        return this.events_1;
    };
    protoOf(TokenMatchingTrace).component1_7eebsc_k$ = function () {
        return this.input_1;
    };
    protoOf(TokenMatchingTrace).component2_7eebsb_k$ = function () {
        return this.events_1;
    };
    protoOf(TokenMatchingTrace).copy_8a9fg8_k$ = function (input, events) {
        return new TokenMatchingTrace(input, events);
    };
    protoOf(TokenMatchingTrace).copy$default_uysfug_k$ = function (input, events, $super) {
        input = input === VOID ? this.input_1 : input;
        events = events === VOID ? this.events_1 : events;
        return $super === VOID ? this.copy_8a9fg8_k$(input, events) : $super.copy_8a9fg8_k$.call(this, input, events);
    };
    protoOf(TokenMatchingTrace).toString = function () {
        return 'TokenMatchingTrace(input=' + this.input_1 + ', events=' + this.events_1 + ')';
    };
    protoOf(TokenMatchingTrace).hashCode = function () {
        var result = getStringHashCode(this.input_1);
        result = imul(result, 31) + hashCode(this.events_1) | 0;
        return result;
    };
    protoOf(TokenMatchingTrace).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof TokenMatchingTrace))
            return false;
        var tmp0_other_with_cast = other instanceof TokenMatchingTrace ? other : THROW_CCE();
        if (!(this.input_1 === tmp0_other_with_cast.input_1))
            return false;
        if (!equals(this.events_1, tmp0_other_with_cast.events_1))
            return false;
        return true;
    };

    function TokenMatchingEvent(token, offset, match) {
        this.token_1 = token;
        this.offset_1 = offset;
        this.match_1 = match;
    }

    protoOf(TokenMatchingEvent).get_token_iz6pxs_k$ = function () {
        return this.token_1;
    };
    protoOf(TokenMatchingEvent).get_offset_hjmqak_k$ = function () {
        return this.offset_1;
    };
    protoOf(TokenMatchingEvent).get_match_iv3el8_k$ = function () {
        return this.match_1;
    };
    protoOf(TokenMatchingEvent).component1_7eebsc_k$ = function () {
        return this.token_1;
    };
    protoOf(TokenMatchingEvent).component2_7eebsb_k$ = function () {
        return this.offset_1;
    };
    protoOf(TokenMatchingEvent).component3_7eebsa_k$ = function () {
        return this.match_1;
    };
    protoOf(TokenMatchingEvent).copy_lo8jxl_k$ = function (token, offset, match) {
        return new TokenMatchingEvent(token, offset, match);
    };
    protoOf(TokenMatchingEvent).copy$default_vib1e3_k$ = function (token, offset, match, $super) {
        token = token === VOID ? this.token_1 : token;
        offset = offset === VOID ? this.offset_1 : offset;
        match = match === VOID ? this.match_1 : match;
        return $super === VOID ? this.copy_lo8jxl_k$(token, offset, match) : $super.copy_lo8jxl_k$.call(this, token, offset, match);
    };
    protoOf(TokenMatchingEvent).toString = function () {
        return 'TokenMatchingEvent(token=' + this.token_1 + ', offset=' + this.offset_1 + ', match=' + this.match_1 + ')';
    };
    protoOf(TokenMatchingEvent).hashCode = function () {
        var result = hashCode(this.token_1);
        result = imul(result, 31) + this.offset_1 | 0;
        result = imul(result, 31) + (this.match_1 == null ? 0 : this.match_1.hashCode()) | 0;
        return result;
    };
    protoOf(TokenMatchingEvent).equals = function (other) {
        if (this === other)
            return true;
        if (!(other instanceof TokenMatchingEvent))
            return false;
        var tmp0_other_with_cast = other instanceof TokenMatchingEvent ? other : THROW_CCE();
        if (!equals(this.token_1, tmp0_other_with_cast.token_1))
            return false;
        if (!(this.offset_1 === tmp0_other_with_cast.offset_1))
            return false;
        if (!equals(this.match_1, tmp0_other_with_cast.match_1))
            return false;
        return true;
    };

    function TracedParseResult(result, trace) {
        this.result_1 = result;
        this.trace_1 = trace;
    }

    protoOf(TracedParseResult).get_result_iyg5d2_k$ = function () {
        return this.result_1;
    };
    protoOf(TracedParseResult).get_trace_iz8ffg_k$ = function () {
        return this.trace_1;
    };

    function replaceNonPrintable(string) {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'me.alllex.parsus.util.replaceNonPrintable.<anonymous>' call
        var inductionVariable = 0;
        var last = string.length;
        while (inductionVariable < last) {
            var char = charSequenceGet(string, inductionVariable);
            inductionVariable = inductionVariable + 1 | 0;
            this_0.append_am5a4z_k$(replaceNonPrintable_0(char));
        }
        return this_0.toString();
    }

    function replaceNonPrintable_0(char) {
        return char === _Char___init__impl__6a9atx(32) ? _Char___init__impl__6a9atx(9251) : char === _Char___init__impl__6a9atx(10) ? _Char___init__impl__6a9atx(9252) : char === _Char___init__impl__6a9atx(13) ? _Char___init__impl__6a9atx(9229) : char === _Char___init__impl__6a9atx(9) ? _Char___init__impl__6a9atx(9225) : char;
    }

    function toPrintableString(_this__u8e3s4) {
        return replaceNonPrintable(toString(_this__u8e3s4));
    }

    //region block: post-declaration
    protoOf(ParsingContext).unaryMinus_3umwxo_k$ = unaryMinus;
    protoOf(ParsingContext).unaryPlus_tnr8ky_k$ = unaryPlus;
    //endregion
    //region block: init
    arrowDown = '\u2193';
    arrowUp = '\u2191';
    //endregion
    //region block: exports
    _.$_$ = _.$_$ || {};
    _.$_$.a = poll;
    _.$_$.b = Grammar;
    _.$_$.c = ParserImpl;
    _.$_$.d = oneOrMore;
    _.$_$.e = or;
    _.$_$.f = ref;
    _.$_$.g = times_0;
    _.$_$.h = times;
    _.$_$.i = unaryMinus_0;
    _.$_$.j = zeroOrMore;
    _.$_$.k = literalToken;
    _.$_$.l = regexToken;
    //endregion
    return _;
}));

//# sourceMappingURL=parsus.js.map
