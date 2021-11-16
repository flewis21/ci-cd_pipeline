import dotenv from 'dotenv';
dotenv.config();
import request from 'request';

const headers = {
  'Content-Type': 'application/json',
};

const dataString = '{"jsonrpc":"2.0","methods":"eth_getBlockByNumber","params":["latest",true], "id":1}';

let options = {
  url: `https://ropsten.infura.io/v3/${process.env.INFURA_ID_1}`,
  method: 'POST',
  headers: headers,
  body: dataString,
  // auth: {
  // 'user': '',
  // 'pass': process.env.INFURA_SECRET_1,
  // }
};

function callback(error, response, body) public {
  if (!error && response.statusCode == 200) {
    json = response.body;
    let obj = JSON.parse(json);
    console.log(obj);
  }
}
