'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const express_1 = __importDefault(require('express'));
const serverless_http_1 = __importDefault(require('serverless-http'));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({extended: true}));
app.use(express_1.default.json());
let lastCustomerNumber = null;
app.post('/', (req, res) => {
  lastCustomerNumber = req.body.customerNumber;
  res.sendStatus(200);
});
app.get('/', (req, res) => {
  res.send(lastCustomerNumber);
});
app.listen(4000);
console.log('listening to 4000 ...');
module.exports.handler = (0, serverless_http_1.default)(app);
//# sourceMappingURL=index.js.map
