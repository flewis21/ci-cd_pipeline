import dotenv from 'dotenv';
import Web3 from 'web3';
const ropsten = process.env.ropsten1;
const rpcURL = ropsten;
const web3 = new Web3(rpcURL);
const address = "0x90e63c3d53E0Ea496845b7a03ec7548B70014A91";
web3.eth.getBalance(address, (err, wei) => {
	let balance = web3.utils.fromWei(wei, 'ether')
})
