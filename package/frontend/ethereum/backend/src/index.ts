import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let lastCustomerNumber: any = null;

app.post('/', (req, res) => {
  lastCustomerNumber = req.body.customerNumber;
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send(lastCustomerNumber);
});

app.listen(4000);
console.log('listening to 4000 ...');

module.exports = app;
