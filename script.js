// Any time we find ourselves writing the same piece of code more than once, we should probably put it in a function

// Simple function that console.logs something
function sayHello(){
    console.log("Hello, world!");
}

sayHello();

// Function that takes a name as a parameter and console.logs a greeting

function greetSomeone(nameParameter){
    console.log(`Hello, ${nameParameter}`)
}

greetSomeone("Kim");
greetSomeone("Josh");

// Function that takes an HTML string and an id and prints something to the DOM
function printToDOM(htmlString, idOfElement){
    var element = document.querySelector(`#${idOfElement}`);
    element.innerHTML = htmlString;
}

// Call the function with a random html string
printToDOM("<h1>Howdy folks</h1>", "container");

var paragraphHTMLString = "<p>blah blah blah blah blah</p>"
printToDOM(paragraphHTMLString, "container-two");

var favoriteFoods = ["bagels", "bagels with cream cheese", "bagels with butter", "bagles with jelly"]
var foodHTMLString = "";
for(var i = 0; i < favoriteFoods.length; i++){
    foodHTMLString = foodHTMLString + `<li>${favoriteFoods[i]}</li>`
}

printToDOM(foodHTMLString, "food-list");
// Return statements

function makeATaco(shellType, toppingsString){
    var finishedTaco = `A ${shellType} taco with ${toppingsString}.`
    return finishedTaco;
}

// Write a function that accepts an array of taco toppings and builds an html string about the finished taco
// Try to log the finishedTaco variable to the console outside the function! It won't work
// Return the taco
// Store it in a variable
// Log the variable
var myTaco = makeATaco("crunchy", "beef and cheese");
var kimsTaco = makeATaco("hard", "lettuce, black beans, and guac")
console.log(myTaco);
console.log(kimsTaco);




