/*
- make HTML elements, specifically DIVs by using javascript

*/
let i = 0; //initialize the variable i for our loop
let m = 0;
//let n = 0;
let testing2 = []; //global initializing to use later
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

    for (i=0; i<gridCount; i++) { //rows
        const item = document.createElement("div");
        item.id = "row" + [i];
        const parentDiv = document.getElementById("bodyMain");
        item.style.display = "flex"; //really weird layout without this
        item.style.flexWrap = "wrap"; //the children will go out of bounds beyond the container without making them wrap around
        //item.style.backgroundColor = "white";
        item.style.flexGrow = 1; //to fill up the space of the main container, without it it becomes really skinny
        parentDiv.appendChild(item);
        const itemContainer = document.getElementById("row" + [i]);
         
        // item.firstElementChild.style.borderRadius = "2px"; //testing
        // if(i=0) {
        //     item.firstChild.style.borderTopLeftRadius = "10px"; //didnt work : ()
        // }

        for(m=0; m<gridCount; m++) { //columns
            const columnItems = document.createElement("div");
            columnItems.classList.add("item");
            itemContainer.appendChild(columnItems); //append to the previous container just made and not the bodyMain in HTML
        }
    }

    //hovering(); //added a call to a diff function like this to stop the contexts of the next function from going off instantly before the divs in this function was even created
    
    //gets all elements that are div with the class item in it **remember this variable is going to be an array/nodelist so treat it as such **current problem, the queryselector isnt grabbing anything because it executes before the items are created
    // MAKE THIS A GLOBAL VARIABLE NOT JUST IN HERE, initialize it in the beggining tomorrow
    //console.log(testing2); 
}

/*this function is for the hovering one on line 71
function hovering() {

testing2 = document.querySelectorAll("div.item");
console.log(testing2); //doesnt seem to grab the queryselector from in the function
//now you have to add the class item2 to each node in testing2
/*
testing2.forEach((element) => {
    element.classList.add("item2");
});
}*/

/*
testing2.addEventListener("mouseover", changeColor)

function changeColor() {
    testing2.classList.add("item2");
}
*/

/* Problems faced:
current problem
 - all of the containers keep falling under the very first mainContainer instead of the newer ones being created.
 + solution might be to add an interval after the name of the mainContainer as it's being created
 ++ another solution here is to get rid of the nested while loop and just use flex-wrap as it does what im trying to achieve with this...

*/

/*to do list:
[DONE] MAKE AN ALGORITHM to scale based on the gridcount (didn't need an "algorithm," just use flexbox properly. )
 ---- for example, if its a gridcount of 10, make the algorithm make each cube 10% of the width and if its 64, make it cubewidth/64 and what not
- hover effect
- add a button to change grid number (max limit of 100)

**extras:
- RGB squares, random color every interaction
- each tile gets darker with each over, 10% more per hover
- make the first last item of the first and last row curved by giving it a border radius in the appropriate direction, figure out the algorithm to target those areas! 
*/

/*Learned:
- DOM, adding and removing elements
- appending elements (append child normally but it didnt work because apparently its jquery)
- flex (need to refresh myself on this)
*/