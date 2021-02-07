console.log('in js');
$(document).ready(onReady);
function onReady() {
  console.log('so ready');

  //Creat a function that when button is submitted it will send the data to the server

  // I want to send the input data to the server using ajax
  // Use a POST

  $('.equationType').on('click', function () {
    console.log('in on submit');
    const newEquationType = $(this).attr('id');

    $('.submit').on('click', function () {
      let newCalculation = {
        firstNumber: $('#firstNumInput').val(),
        secondNumber: $('#secondNumInput').val(),
        equationType: newEquationType,
      };
      console.log(newCalculation);
      return newCalculation;
    });
  });
}
// end of data send
