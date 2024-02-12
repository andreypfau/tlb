(function (root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['exports'], factory);
    else if (typeof exports === 'object')
        factory(module.exports);
    else
        root['kotlinx-io-kotlinx-io-bytestring'] = factory(typeof this['kotlinx-io-kotlinx-io-bytestring'] === 'undefined' ? {} : this['kotlinx-io-kotlinx-io-bytestring']);
}(this, function (_) {
    'use strict';
    //region block: pre-declaration
    //endregion
    return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.js.map
