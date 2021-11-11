"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var solc_1 = __importDefault(require("solc"));
var solc_version = 'v0.4.16+commit.d7661dd9';
var contracts_directory = '../../ethereum/contracts';
var contract_name = 'myContract';
var contract_filename = 'myContract.sol';
var is_Optimized = 1;
var input = {};
solc_1["default"].loadRemoteVersion(solc_version, function (err, solc_specific) {
    if (!err) {
        var output = solc_specific.compile('contract t { function g() {} }', 1);
    }
});
