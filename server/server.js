const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

//time to do some math
// create a function that checks what the equation type is and runs that against the two input numbers
function calculateEquation(num1, num2, equationType) {
  if (equationType === 'additionBtn') {
    answer = [+num1 + +num2];
  } else if (equationType === 'subtractBtn') {
    answer = [+num1 - +num2];
  } else if (equationType === 'multiplyBtn') {
    answer = [+num1 * +num2];
  } else if (equationType === 'divideBtn') {
    answer = [+num1 / +num2];
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
// I wont need get because server isn't sending anything to client
// client is sending

app.post('/calculation', (req, res) => {
  console.log('in post calc');
  let equation = req.body.equation_to_add;
  console.log(equation.firstNumber);
  console.log(equation.secondNumber);
  console.log(equation.equationType);

  // Now i need to send back the equation data
  // First i need to call the function with the values

  res.send(
    calculateEquation(
      equation.firstNumber,
      equation.secondNumber,
      equation.equationType
    )
  );
  console.log(answer);
  //status is a code that says 'that worked' 'ok'
  // Respond with something
});
