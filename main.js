
//add style to one poem 
function styleFeaturedPoem(){
    const featuredPoem = document.getElementById('so-fly');

    if (featuredPoem){
    featuredPoem.style.backgroundColor = '#bff542';
    featuredPoem.style.border = '4px solid #1218db';
    featuredPoem.style.padding = '30px';
    }

}

styleFeaturedPoem();

//select all poems on one wall
let eastWallPoems = document.querySelectorAll('#east-wall article')

//log to console
console.log("East Wall Poems: ", eastWallPoems);

eastWallPoems.forEach((poem, index) => {
    const titleElement = poem.querySelector('h3');

    if (titleElement) {
        console.log(`East Wall Poem #${index + 1} Title:`, titleElement.textContent);
    }
});

//relocate an existing poem 
function relocatePoem(){
    //target specific poem
    const poemMoving = document.getElementById('return-of-me'); 

    //target new destination
    const eastWall = document.getElementById('east-wall'); 

    //move poem
    eastWall.appendChild(poemMoving);

    //update the moved poem's background color
    poemMoving.style.backgroundColor = '#eb9438';
    poemMoving.style.border = '4px solid #d9150b';
    poemMoving.style.padding = '30px';

    console.log("Poem: 'Return to Me' has been moved to the East Wall.");
}
relocatePoem();


// Find the button on the page
const addPoemButton = document.getElementById("add-poem-btn"); 

// Attach an event listener to respond when clicked
addPoemButton.addEventListener("click", function () {
      console.log("Add Poem button was clicked!");

    //read the values from the inputs 
    const titleInput = document.getElementById('poem-title');
    const entryInput = document.getElementById('entry');
    const colorInput = document.getElementById('color-input');
    const wallSelect = document.getElementById('wall-selection');

    //create new poem container
    const newPoemEntry = document.createElement("article");
    const newTitle = document.createElement("h3");
    const newContent = document.createElement("p");

    //create text content 
    newTitle.textContent = titleInput.value;
    newContent.textContent = entryInput.value;
    newPoemEntry.appendChild(newTitle);
    newPoemEntry.appendChild(newContent)

    //inline layout 
    newContent.style.whiteSpace = "pre-line";

    //apply selected background color
    newPoemEntry.style.backgroundColor = colorInput.value;
    newPoemEntry.style.padding = '30px';
    newPoemEntry.style.border = '4px solid #0a0100';


    //add to selected wall
    const selectedWall = document.getElementById(wallSelect.value);
    if(selectedWall){
        selectedWall.appendChild(newPoemEntry);
    }

    console.log("Added poem " + titleInput.value + " to " + wallSelect.value);

    //clear fields for next entry 
    titleInput.value = "";
    entryInput.value = "";
});