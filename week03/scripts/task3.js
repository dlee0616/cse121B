/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2){
    let sum = number1 + number2;
    return sum;
    
}
// Step 2: In the function, return the sum of the parameters number1 and number2
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    var number1 = Number.parseFloat(document.getElementById('addend1').value); 
    var number2 = Number.parseFloat(document.getElementById('addend2').value);
    document.getElementById('sum').value = add(number1, number2);
    
    
}
// Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

document.getElementById("addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

let subtract = function subtractNumbers(minuend, subtrahend){
    let difference = minuend - subtrahend;
    return difference;
}
function subtractNumbers(){

    var minuend = Number.parseFloat(document.getElementById('minuend').value);
    var subtraend = Number.parseFloat(document.getElementById('subtrahend').value);
    document.getElementById('difference').value = subtract(minuend,subtraend)
}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
let multiply = (factor1, factor2) => factor1 * factor2;


function multiplyNumbers(){
    var factor1 = Number.parseFloat(document.getElementById('factor1').value);
    var factor2 = Number.parseFloat(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);
}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(dividend, divisor){
    return (dividend/divisor)
}
function divideNumbers(){
    var dividend = Number.parseFloat(document.getElementById('dividend').value);
    var divisor = Number.parseFloat(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(dividend,divisor);
}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();
// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

currentYear = date.getFullYear();    
// // Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById('year').value = currentYear;

// /* ARRAY METHODS */


// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let katy = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById('array').innerHTML = katy;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let result = katy.filter((n) => n % 2 == 1);
document.getElementById('odds').innerHTML = result;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenResult = katy.filter((n) => n % 2 == 0);
document.getElementById('evens').innerHTML = evenResult
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.getElementById('sumOfArray').innerHTML = katy.reduce((a,b) => a + b, 0);
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.getElementById('multiplied').innerHTML = katy.map(x => x * 2);
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById('sumOfMultiplied').innerHTML = katy.map(x => x * 2).reduce((a,b) => a + b,0);