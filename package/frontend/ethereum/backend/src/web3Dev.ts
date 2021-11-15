import Web3 from 'web3';
import dotenv from 'dotenv';
dotenv.config();

/*
const rpcURL = process.env.INFURA_1;
const web3 = new Web3(rpcURL);
*/

/*
const address = "0x90e63c3d53E0Ea496845b7a03ec7548B70014A91";
web3.eth.getBalance(address, (err, wei) => {
	let balance = web3.utils.fromWei(wei, 'ether')
})
*/

/*
const abi = process.env.OMISEGO_TOKEN_1;
const address = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07';

const contract = new web3.eth.Contract(abi, address);

contract.methods.totalSupply().call((err, result) => {
  console.log(result);
});
contract.methods.name().call((err, result) => {
  console.log(result);
});
contract.methods.symbol().call((err, result) => {
  console.log(result);
});
contract.methods.balancOf(address).call((err, result) => {
  console.log(result);
});
*/

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_ID_1));

web3.eth.getBalance('0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c', function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(web3.utils.fromWei(result, 'ether') + ' ETH');
  }
});
