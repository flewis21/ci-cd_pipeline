"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var solc = (0, tslib_1.__importStar)(require("solc"));
var solc_version = 'v0.4.16+commit.d7661dd9';
solc.loadRemoteVersion(solc_version, function (err, solc_specific) {
    if (!err) {
        var output = solc_specific.compile('contract t { function g() {} }', 1);
    }
});
