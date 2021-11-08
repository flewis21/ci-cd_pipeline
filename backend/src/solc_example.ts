import * as solc from 'solc';

let solc_version = 'v0.4.16+commit.d7661dd9';

solc.loadRemoteVersion(solc_version, function (err, solc_specific) {
  if (!err) {
    let output = solc_specific.compile('contract t { function g() {} }', 1);
  }
});
