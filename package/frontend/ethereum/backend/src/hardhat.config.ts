import dotenv from 'dotenv';
dotenv.config();
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'ropsten',
  networks: {
    hardhat: {},
    ropsten: {
      url: process.env.INFURA_1,
      accounts: [],
    },
  },
  solidity: {
    version: '0.7.3',
  },
  paths: {
    sources: './contracts',
  },
  mocha: {
    timeout: 20000,
  },
};
