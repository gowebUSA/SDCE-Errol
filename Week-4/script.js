"use strict"; // Be sure to turn on Strict Mode when writing modern JS code

console.log("Ready!"); //Quick check to see if JS is connected to HTML

/*
    Create JS Objects (Variables) representing the <forms>, the <div>,
    and the place to store all the albums saved

    An array will be where we store the album

    Old - var
    New - let - for an object that "changes"
          const - for an object that "doesn't change"

    We use "const" for the Forms to place in memory where the <form> exists "does not Change"
    We use "let" for the <div> and the Array to those will change
    An Array is a Variable full of Variables

*/

const elFmSaveAlbum = document.getElementById("fmSaveAlbum"); // Process Data
const elFmShowAlbum = document.getElementById("fmShowAlbum");
let elDivOutput = document.getElementById("divOutput");
let arrAlbums = []; // The Array to store the complete Album data  //Store the data


/*
    Object constructor to "bundle" together all the different fields of data
    Common practice to use capital letter when create our own Obcject

    Process data
    This Function definition is to only "Bundle Together" different bits data
*/

function Album(artist, name, year, notes){
    this.artist = artist;
    this.name = name;
    this.year = year;
    this.notes = notes;

}

/*
    Function that is a series of commands that reads the fileds, bundles them together,
    stores them in the Array (database)

    Functions don't end i semicolon

    Default <form> behavior is to refresh the screen
    So we want to prevent that

*/
function fmSaveAlbum(event) {
    event.preventDefault(); // Stop the refresh of the screen/browser
    console.log("fmSaveAlbum(event) is running");

    // Variables for each of inputs
    let valInAlbumArtist = document.getElementById("inAlbumArtist").value;
    let valInAlbumName = document.getElementById("inAlbumName").value;
    let valInAlbumYear = document.getElementById("inAlbumYear").value;
    let valInAlbumNotes = document.getElementById("inAlbumNotes").value;

    console.log(valInAlbumArtist);

   //Bundle all the 4 pieces of data into one Object
    let anAlbum = new Album(valInAlbumArtist, valInAlbumName, valInAlbumYear, valInAlbumNotes);

    //Store to complete Album in the Array
    arrAlbums.push(anAlbum);

    //Tell the user it worked!
    window.alert("You saved an album!");

    // tHEN CLEAR THE <form> to save more
    elFmSaveAlbum.reset()
   
}

// Function to get a ramdom Album from the Array and show it in the <div>
function fmShowAlbum(event) {
    event.preventDefault();
    console.log("fmShowAlbum(event) is running");

    // Create a random number to pick one of the Albums
    // Math. random() generates a number from 0 to 1 === 0.383323333546574654
    // arrAlbums.length tells us how many items in an Array
    // Math.random() * arrAlbums.length will multiply the reset to number of albums & give a fraction 3.9 will round up to 4 and so forth
    // Math.round() will round up or down to a whole number
    // Math.floor() will always round DOWN so that we don't pick an album out of range
    // Math.ceiling() will always round up 3.9 = 4  3.5 = 4  3.1 = 4 3.09000001 = 4
    let randomAlbum = Math.floor(Math.random() * arrAlbums.length);

    //Show the result in the <div>
    elDivOutput.innerHTML = "Artist: " + arrAlbums[randomAlbum].artist + "<br>Album: " + arrAlbums[randomAlbum].name + "<br>Year: " + arrAlbums[randomAlbum].year + "<br>Notes: " + arrAlbums[randomAlbum].notes;
}

/*
    Should be at the end, all event Listeners, so that the rest of the code loads before we sue
    Event Listeners for Saving and Retrieving data
    Default
*/
elFmSaveAlbum.addEventListener("submit", function(event){fmSaveAlbum(event)});
elFmShowAlbum.addEventListener("submit", function(event){fmShowAlbum(event)});

