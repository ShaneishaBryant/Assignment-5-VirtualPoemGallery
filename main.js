
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
let eastWallPoems = document.querySelectorAll('#wall-east article')

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

    console.log(`Moved "${title ? title.textContent : 'poem'}" to the East Wall.`);
}
relocatePoem();