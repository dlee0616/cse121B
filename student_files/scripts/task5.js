

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let sDate = new Date();
console.log(sDate)
// Step 2: Declare another variable to hold the day of the week
let day = sDate.getDay();
console.log(day)
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() 
// Step 4: Declare a variable to hold a message that will be displayed
let msg;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if  (day === 0 || day === 6){
    msg = ("woohoo! It's the weekend")
    
}
else {
    msg = ("hang in there!")
}
console.log(msg)
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (day){
    case 1:
        message = "monday";
    case 2:
        message = "tuesday";
    case 3:
        message = "wednesday";
    case 4:
        message = "thursday";
    case 5:
        message = "friday";
    case 6:
        message = "saturday";
    case 0:
        message = "sunday";
    break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById('message1').innerHTML = msg;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById('message2').innerHTML = message;





/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let text = "";
let templeData = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(temples){
    temples.forEach(temples => {
        let article = document.createElement('article');
        let templeName = document.createElement('h3');
        let dedicated = document.createElement('h4');
        let location = document.createElement('h4');

        templeName.textcontent = temples.templeName;
        location.textContent = temples.location; 
        dedicated.textContent = temples.dedicated;
        
        let photo = document.createElement('picture');
        let image = document.createElement('image');
        
        article.appendChild(templeName);
        article.appendChild(location);
        article.appendChild(photo);
        article.appendChild(dedicated);
        console.log(templeName.textContent)
        
        image.setAttribute('src', temples.imageURL);
        image.setAttribute('alt', temples.templeName);
        photo.appendChild(image);



    })

}
// Step 3: Create another function called getTemples. Make it an async function.
const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
async function getTemples(url){
    console.log('running')
    const answer = await fetch(url)
    console.log(answer)
    if (answer.ok){
        templeData = await answer.json();
        console.log(templeData)
        output(templeData);
    }
    else {
        console.log("problem with API")
    }
}
window.onload = getTemples(url);

// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.  
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset = (temples) => {
    temples.forEach (temples => {
        document.getElementById('#temples').innerHTML = "";
    })
}
function sortBy(){
   
}
//element.addEventListener('change', sortBy())
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
