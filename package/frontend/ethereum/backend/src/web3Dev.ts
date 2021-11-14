import Web3 from 'web3';
import ethers from 'ethers';
import dotenv from 'dotenv';
dotenv.config();
const rpcURL = process.env.INFURA_1;
const web3 = new Web3(rpcURL);

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

