# Calculator Project

## Description

This application will allow the user to do simple addition, subtraction, multiplication, and division between two numbers. The application will also display the previous calculations that the user did.

## Built With

- JavaScript
- jQuery
- HTML/CSS

## Usage

- Application allows user to input two numbers and an operation i.e addition, subtraction, multiplication, or division
- The application will then solve the equation based on user input.
- Application will show the answer for the equation on the DOM
- Application will show all previous calculations made by user

## Acknowledgments

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at fowziiae@gmail.com

## TODO

- [x] Source in clients.js,server and index.html
- [x] Add inputs to the html
- [x] Add input for numbers
- [x] Add button for add, subtract, multiply and divide
- [x] Add button for calculate
- [x] Add button for clear

- [x] Source in jquery

### Server Side

- [x] install express
- [x] create listening port
- [x] test to see if it runs

### Client side

- [x] Create a function that when submit button is pressed, it send the input to the server side using Ajax and post method
- [x] Test it to see if the server is getting the data
- [x] Create a function that changes the operator ie(+,-,/or\*) when button is pressed
- [x] Create a function that clears the input data when pressed

### Server side

- [x] Create a function that takes the data from the client side
- [x] This function will have to look at the equation type i.e if its +,-,/,or \* then run that against the two input numbers
- [x] Calculate the equation in the POST on the server side then push the calculation into an array
- [x] Create GET point to return the calculation to the client side
- [x] Send the array[0] to the client side

### Client Side

- [x] Display the answer to the DOM
- [x] Push the calculation we got from the server side to an empty array
- [x] Loop through the array and display on the DOM
