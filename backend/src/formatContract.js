'use strict';
exports.__esModule = true;
exports.formatContract = void 0;
var tslib_1 = require('tslib');
var solc = (0, tslib_1.__importStar)(require('solc'));
var fs = (0, tslib_1.__importStar)(require('fs'));
function formatContract() {
  var path = '../rthereum/contracts/tempMon.sol';
  var source = fs.readFileSync(path, 'UTF8');
  return solc.compile(source, 1).contracts[':TemperatureMonitor'];
}
exports.formatContract = formatContract;
