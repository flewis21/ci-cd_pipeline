import solc from 'solc';
import * as fs from 'fs';

const solc_version = 'v0.4.16+commit.d7661dd9';
const contracts_directory = '../../ethereum/contracts';
const contract_name = 'myContract';
const contract_filename = 'myContract.sol';
const is_Optimized = 1;

const input = {};

solc.loadRemoteVersion(solc_version, function (err: Error, solc_specific: any) {
  if (!err) {
    const output = solc_specific.compile('contract t { function g() {} }', 1);
  }
});
