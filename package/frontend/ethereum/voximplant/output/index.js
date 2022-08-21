'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
exports.__esModule = true;
var express_1 = __importDefault(require('express'));
var serverless_http_1 = __importDefault(require('serverless-http'));
var app = (0, express_1['default'])();
app.use(express_1['default'].urlencoded({extended: true}));
app.use(express_1['default'].json());
var lastCustomerNumber = null;
app.post('/', function (req, res) {
  lastCustomerNumber = req.body.customerNumber;
  res.sendStatus(200);
});
app.get('/', function (req, res) {
  res.send(lastCustomerNumber);
});
app.listen(4000);
console.log('listening to 4000 ...');
module.exports.handler = (0, serverless_http_1['default'])(app);
//# sourceMappingURL=index.js.map
