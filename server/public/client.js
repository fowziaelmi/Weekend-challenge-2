console.log('in js');
$(document).ready(onReady);
let allCalcs = [];

let operator = '';

function onReady() {
  console.log('so ready');
  $(document).on('click', '.equationType', getOp);
  $('#submitBtn').on('click', onSubmit);
  $('#clear').on('click', onClear);
  displayOnDom();
}
// Function to change radio button
function getOp(evt) {
  evt.preventDefault();
  operator = this.value;
  console.log('clicked op', operator);
}
// Function to get inputs on submit
function onSubmit(evt) {
  evt.preventDefault();

  let newCalculation = {
    firstNumber: $('#firstNumInput').val(),
    secondNumber: $('#secondNumInput').val(),
    equationType: operator,
  };
  console.log(newCalculation);
  // Send the data to the server
  $.ajax({
    data: { equation_to_add: newCalculation },
    url: '/valuesToCalculate',
    method: 'POST',
  })

    .then(function (response) {
      console.log(response);
      getCalc();
    })

    .catch(function () {
      alert('sorry');
    });
}
// Function to get the data(calculation) from the server
function getCalc() {
  console.log('in get calc');
  $.ajax({
    url: '/calculations',
    method: 'GET',
  })
    .then(function (response) {
      console.log('got a response', response);
      $('#answer').empty();
      $('#answer').append(`<h3>Answer is:  ${response.answer} </h3>`);
      $('#list').empty();

      allCalcs.push(response);
      console.log(allCalcs);

      displayOnDom();
    })
    .catch(function () {
      alert('sorry');
    });
}
// Function to clear inputs when C button is pressed
function onClear(evt) {
  evt.preventDefault();
  $('#firstNumInput').val('');
  $('#secondNumInput').val('');
  operator = '';
}
//Function to display previous values to the DOM
function displayOnDom() {
  for (let calculation of allCalcs) {
    $('#list').append(
      `<li>  ${calculation.firstNumber} ${calculation.equationType} ${calculation.secondNumber} = ${calculation.answer} </li>`
    );
  }
}
