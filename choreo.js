/*
- make HTML elements, specifically DIVs by using javascript

*/
let i = 0; //initialize the variable i for our loop
let m = 0;

//const flexContainer = document.getElementById("mainContainer"); //this grabs the id "flex-container" from my HTML document so we can use and reference it in our javascript code
const btnAdd = document.querySelector(".btnAdd");

btnAdd.addEventListener("click", containers);

function containers() {
    while (i<16) {
        m = 0; // resets M to zero everytime a new mainDiv is created

        const mainDiv = document.createElement("div");
        mainDiv.id = "mainContainer" + [i]; //adds an ID instead of a class, added an interval here so it can differentiate the new containers from the old
        document.body.append(mainDiv);
        const flexContainer = document.getElementById("mainContainer" + [i]); //dont forget to include the interval here as well!!
        flexContainer.style.display ="flex"; // doing it here because you would have to do it 16+ times with each numerical interval per invrement to get all the mainContainer's taken care of!
        console.log (flexContainer);
        console.log("main" + i);
        while (m < 16) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("container");
            flexContainer.append(newDiv); //appendChild didnt work because its jquery apparently
            console.log("added" + m); //testing
            m++;
        }
    i++;
    }    
}


/* Problems faced:
current problem
 - all of the containers keep falling under the very first mainContainer instead of the newer ones being created.
 + solution might be to add an interval after the name of the mainContainer as it's being created
 ++ another solution here is to get rid of the nested while loop and just use flex-wrap as it does what im trying to achieve with this...

*/