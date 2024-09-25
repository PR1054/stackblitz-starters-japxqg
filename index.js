const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('welcome to the stock portfolio api');
});
//calculate-returns?boughtAt=300&marketPrice=400&quantity=2

function calculateReturns(boughtAt, marketPrice, quantity) {
  return (marketPrice - boughtAt) * quantity;
}
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);
  res.send(calculateReturns(boughtAt, marketPrice, quantity).toString());
});

//total-returns?stock1=100&stock2=200&stock3=200&stock4=400

function totalReturns(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}
app.get('/total-returns', (req, res) => {
  let stock1 = parseInt(req.query.stock1);
  let stock2 = parseInt(req.query.stock2);
  let stock3 = parseInt(req.query.stock3);
  let stock4 = parseInt(req.query.stock4);

  res.send(totalReturns(stock1, stock2, stock3, stock4).toString());
});

//calculate-return-percentage?boughtAt=400&returns=200

function calReturnPercentage(boughtAt, returns) {
  return (returns / boughtAt) * 100;
}
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  res.send(calReturnPercentage(boughtAt, returns).toString());
});

//total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40
function calTotalReturnPercentage(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(calTotalReturnPercentage(stock1, stock2, stock3, stock4).toString());
});

//status?returnPercentage=90

function checkStatus(returnPercentage) {
  if (returnPercentage > 0) {
    return 'Profit';
  } else {
    return 'Loss';
  }
}
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  res.send(checkStatus(returnPercentage));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
