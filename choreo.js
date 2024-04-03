/*
- make HTML elements, specifically DIVs by using javascript

*/
let i = 0; //initialize the variable i for our loop
let m = 0;
let n = 0;

//const flexContainer = document.getElementById("mainContainer"); //this grabs the id "flex-container" from my HTML document so we can use and reference it in our javascript code

//button to create the grids
const btnAdd = document.querySelector(".btnAdd"); //grabs the button and stores it in a variable so we can edit it below
btnAdd.addEventListener("click", containers); 

const btnReset = document.querySelector(".btnReset"); //reset button
btnReset.addEventListener("click", promptReset); //when clicked it activates the function below



let gridCount = parseInt(prompt("How many grids do you want?")); //takes the answer and turns it into an integer to be used in the loops!
//parseInt(gridCount);

function promptReset () {
    //make a while loop to delete the previous grids
    if (gridCount>0) {
        while (n<gridCount) {
            //console.log(n);
            const currentGrid = document.getElementById("mainContainer" + [n]);
            console.log(currentGrid);
            currentGrid.remove();
            n++;
        }
    }   
    gridCount = parseInt(prompt("How many grids do you want?"));
    while (gridCount <= 0 || gridCount >= 100) { //reused loop from below to set limits to grid count
        gridCount = parseInt(prompt("How many grids do you want?"));
    };
};

    while (gridCount <= 0 || gridCount >= 100) { //loop for setting limit to the grid count
        gridCount = parseInt(prompt("How many grids do you want?"));
    };

    console.log(typeof gridCount + gridCount);

//two while functions, one for rows and one for columns!
function containers() {
    i=0 //resets i to 0 (or else it stays as it was the previous iteration) everytime the "create" button is clicked!
    while (i<gridCount) {
        m = 0; // resets M to zero everytime a new mainDiv is created

        const mainDiv = document.createElement("div");
        mainDiv.id = "mainContainer" + [i]; //adds an ID instead of a class, added an interval here so it can differentiate the new containers from the old
        document.body.append(mainDiv);
        const flexContainer = document.getElementById("mainContainer" + [i]); //dont forget to include the interval here as well!!
        flexContainer.style.display ="flex"; // doing it here because you would have to do it 16+ times with each numerical interval per invrement to get all the mainContainer's taken care of!
        console.log (flexContainer);
        console.log("main" + i);
        while (m < gridCount) { 
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

/*to do list:
- hover effect
- add a button to change grid number (max limit of 100)

**extras:
- RGB squares, random color every interaction
- each tile gets darker with each over, 10% more per hover
*/