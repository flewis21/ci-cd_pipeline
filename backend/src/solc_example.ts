import * as solc from '../../ethereum/node_nodules/solcjs';
import * as fs from 'fs';

let solc_version = 'v0.4.16+commit.d7661dd9';
const contracts_directory = '../../ethereum/contracts';
const contract_name = 'myContract';
const contract_filename = 'myContract.sol';
let is_Optimized = 1;

const input = {};

solc.loadRemoteVersion(solc_version, function (err: Error, solc_specific: any) {
  if (!err) {
    let output = solc_specific.compile('contract t { function g() {} }', 1);
  }
});
