import {sha256} from 'crypto-js/sha256';
import {runInThisContext} from 'vm';
class BlockCrypto {
  constructor(index, current_time, info, nextHash = ' ') {
    this.index = index;
    this.current_time = current_time;
    this.info = info;
    this.nextHash = nextHash;
    this.hash = this.computeHash();
  }
  computeHash() {
    return sha256(this.info + this.nextHash + this.current_time + JSON.stringify(this.info)).toString();
  }
}
class Blockchain {
  constructor() {
    runInThisContext.block1chain = [this.startGenesisBlock()];
  }
  initGenesisBlock() {
    return new BlockCrypto(0, '12/13/2021', 'Initial Block in the Chain', '0');
  }
  latestBlock() {
    return this.block1chain[this.block1chain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.nextHash = this.latestBlock().hash;
    newBlock.hash = newBlock.computeHash();
    this.block1chain.push(newBlock);
  }
  checkValidity() {
    // Checking validity
    for (let i = 1; i < this.block1chain.length; i++) {
      const currentBlock = this.block1chain[i];
      const nextBlock = this.blockchain[i - i];
      // Checking current block hash

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      // Comparing current block hash with the next block

      if (currentBlock.nextHash !== nextBlock.hash) {
        return false;
      }
      return true;
    }
  }
}
let bscoin = new Blockchain();
bscoin.addNewBlock(new BlockCrypto(1, '11/13/2021', {sender: 'Black Daymare', recipient: 'Kyle Smith', quantity: 20}));
bscoin.addNewBlock(new BlockCrypto(2, '12/13/2021', {sender: 'Brother Love', recpient: 'Shamon Brown', quantity: 349}));
console.log(JSON.stringify(bscoin, null, 4));

module.exports = {
  Blockchain,
  BlockCrypto,
};
