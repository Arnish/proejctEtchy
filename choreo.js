/*
- make HTML elements, specifically DIVs by using javascript

*/
let i = 0; //initialize the variable i for our loop
let m = 0;
//let n = 0;

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
    for (i=0; i<gridCount; i++) {
        const currentGrid = document.getElementById("row" + [i]);
        console.log(currentGrid);
        currentGrid.remove();
    }


    gridCount = parseInt(prompt("How many grids do you want?"));
    while (gridCount <= 0 || gridCount >= 100) { //reused loop from below to set limits to grid count
        gridCount = parseInt(prompt("How many grids do you want?"));
    }
}

    while (gridCount <= 0 || gridCount >= 100) { //loop for setting limit to the grid count
        gridCount = parseInt(prompt("How many grids do you want?"));
    }

    console.log(typeof gridCount + gridCount);

//two while functions, one for rows and one for columns!
function containers() {
    //let totalGrid = gridCount*gridCount;

    for (i=0; i<gridCount; i++) {
        const item = document.createElement("div");
        item.id = "row" + [i];
        const parentDiv = document.getElementById("bodyMain");
        item.style.display = "flex"; //really weird layout without this
        //item.style.flexWrap = "wrap"; //don't seem to need this
        item.style.flexGrow = 1; //to fill up the space of the main container, without it it becomes really skinny
        parentDiv.appendChild(item);
        const itemContainer = document.getElementById("row" + [i]);

        for(m=0; m<gridCount; m++) {
            const columnItems = document.createElement("div");
            columnItems.classList.add("item");
            itemContainer.appendChild(columnItems); //append to the previous container just made and not the bodyMain in HTML
        }
    }
}

/* Problems faced:
current problem
 - all of the containers keep falling under the very first mainContainer instead of the newer ones being created.
 + solution might be to add an interval after the name of the mainContainer as it's being created
 ++ another solution here is to get rid of the nested while loop and just use flex-wrap as it does what im trying to achieve with this...

*/

/*to do list:
**** MAKE AN ALGORITHM to scale based on the gridcount
 ---- for example, if its a gridcount of 10, make the algorithm make each cube 10% of the width and if its 64, make it cubewidth/64 and what not
- hover effect
- add a button to change grid number (max limit of 100)

**extras:
- RGB squares, random color every interaction
- each tile gets darker with each over, 10% more per hover
*/

/*Learned:
- DOM, adding and removing elements
- appending elements (append child normally but it didnt work because apparently its jquery)
- flex (need to refresh myself on this)
*/