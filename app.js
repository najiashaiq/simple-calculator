const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('calculator', { result: null });
});

app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  let result;

  switch (operation) {
    case 'add':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtract':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiply':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      result = num2 != 0 ? parseFloat(num1) / parseFloat(num2) : 'Cannot divide by zero!';
      break;
    default:
      result = 'Invalid operation.';
  }

  res.render('calculator', { result });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});