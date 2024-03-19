/*
- make HTML elements, specifically DIVs by using javascript

*/
let i = 0; //initialize the variable i for our loop

const flexContainer = document.getElementById("flexContainer"); //this grabs the id "flex-container" from my HTML document so we can use and reference it in our javascript code
 

while (i < 16) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("container");
    flexContainer.appendchild(newDiv);
    console.log("added"); //testing
    i++;
}