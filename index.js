//When I click on the button, I want the <p> to increase by 1
//onclick a function on the button
//add an id to the <p>
//set the count = 0
//set a variable to equal the element id (getElementId)
//create the function by:
//increment the "count" variable
//the variable set to the element id's innerText is equal to "count"


let count = 0;
let increaseEl = document.getElementById("increase-el");

function increment() {
  count += 1;
  increaseEl.innerText = count;
}