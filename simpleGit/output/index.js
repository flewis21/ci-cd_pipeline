'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const promise_1 = __importDefault(require('simple-git/promise'))
async function build () {
  const git = (0, promise_1.default)()
  // list commits
  // git log accepts an options object - from ts definition
  /*
      format?: T;
      file?: string;
      from?: string;
      multiLine?: boolean;
      symmetric?: boolean;
      to?: string;
    */
  const log = await git.log({ file: 'README.md' })
  // get first commit date of a file
  const createdDate = new Date(log.all.slice(-1)[0].date)
  // get latest modified date of file
  const modifiedDate = new Date(log.latest.date)
  // output formatted time stamps
  console.log(createdDate.toLocaleDateString())
  console.log(modifiedDate.toLocaleDateString())
}
build()
