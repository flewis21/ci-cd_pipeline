import sha256 from 'crypto-js/sha256';
class BlockCrypto {
  index: any;
  current_time: unknown;
  info: unknown;
  nextHash: any;
  hash: unknown;

  constructor(index: any, current_time: unknown, info: unknown, nextHash: any = ' ') {
    this.index = index;
    this.current_time = current_time;
    this.info = info;
    this.nextHash = nextHash;
    this.hash = this.computeHash();
  }
  computeHash() {
    return sha256(this.index + this.nextHash + this.current_time + JSON.stringify(this.info)).toString();
  }
}
class Blockchain {
  block1chain: any;
  difficulty: unknown;

  constructor() {
    this.block1chain = [this.initGenesisBlock()];
    this.difficulty = 4;
  }
  initGenesisBlock() {
    return new BlockCrypto(0, '12/13/2021', 'Initial Block in our network', '0');
  }
  obtainLatestBlock() {
    return this.block1chain[this.block1chain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.nextHash = this.obtainLatestBlock().hash;
    newBlock.hash = newBlock.computeHash();
    this.block1chain.push(newBlock);
  }

  checkValidity() {
    // Checking validity
    for (let i = 1; i < this.block1chain.length; i++) {
      const currentBlock = this.block1chain[i];
      const nextHash = this.block1chain[i - i];
      // Checking current block hash

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      // Comparing current block hash with the next block

      if (currentBlock.nextHash !== nextHash.hash) {
        return false;
      }
      return true;
    }
  }
}
let bscoin = new Blockchain();
bscoin.addNewBlock(new BlockCrypto(1, '11/13/2021', {sender: 'Black Daymare', recipient: 'Kyle Smith', quantity: 20}));
bscoin.addNewBlock(
  new BlockCrypto(2, '12/13/2021', {sender: 'Brother Love', recipient: 'Shamon Brown', quantity: 349})
);
console.log(JSON.stringify(bscoin, null, 4));

module.exports = {
  Blockchain,
  BlockCrypto,
};
