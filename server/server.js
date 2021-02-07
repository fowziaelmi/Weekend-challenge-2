const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
let calcData = [];
//time to do some math
// create a function that checks what the equation type is and runs that against the two input numbers
function calculateEquation(num1, num2, equationType) {
  let answer = '';
  if (equationType === '+') {
    answer = +num1 + +num2;
  } else if (equationType === '-') {
    answer = +num1 - +num2;
  } else if (equationType === '*') {
    answer = +num1 * +num2;
  } else if (equationType === '/') {
    answer = +num1 / +num2;
  }

  return answer;
}

app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
// get endpoint

// Post Endpoint
app.post('/valuesToCalculate', (req, res) => {
  console.log('in post calc');

  let equation = req.body.equation_to_add;
  console.log(equation.firstNumber);
  console.log(equation.secondNumber);
  console.log(equation.equationType);
  equation.answer = calculateEquation(
    equation.firstNumber,
    equation.secondNumber,
    equation.equationType
  );
  calcData.pop();
  calcData.push(equation);
  // Now i need to send back the equation data
  // First i need to call the function with the values
  console.log(calcData);
  res.send(200);

  //status is a code that says 'that worked' 'ok'
  // Respond with something
  console.log(calcData);
});

app.get('/calculations', function (req, res) {
  console.log('in get calculations');
  calculationSend = calcData[0];

  /*calcData[0].firstNumber,
    calcData[0].secondNumber,
    calcData[0].equationType*/

  res.send(calculationSend);
});
