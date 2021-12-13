import express from 'express';
import serverless from 'serverless-http';
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let lastCustomerNumber: unknown = null;

app.post('/', (req, res) => {
  lastCustomerNumber = req.body.customerNumber;
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send(lastCustomerNumber);
});

app.listen(4000);
console.log('listening to 4000 ...');

module.exports.handler = serverless(app);
