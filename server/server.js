const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

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

  // Add to quotesData.

  res.sendStatus(200);
  //status is a code that says 'that worked' 'ok'
  // Respond with something
});
