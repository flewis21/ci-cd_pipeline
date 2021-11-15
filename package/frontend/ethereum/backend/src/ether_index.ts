import ethers from 'ethers';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.INFURA_1;
const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
customHttpProvider.getBlockNumber().then((result) => {
	console.log("Current block number: " + result);
});
