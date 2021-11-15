import dotenv from 'dotenv';
dotenv.config();
const nurl = process.env.INFURA_1;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'ropsten',
  networks: {
    hardhat: {},
    ropsten: {
      url: `${nurl}`,
      accounts: [],
    },
  },
  solidity: {
    version: '0.8.9',
  },
  paths: {
    sources: './contracts',
  },
  mocha: {
    timeout: 20000,
  },
};
