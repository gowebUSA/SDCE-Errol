"use strict"; // Be sure to turn on Strict Mode when writing modern JS code

console.log("Ready!"); //Quick check to see if JS is connected to HTML
//For testing purposes only.

/*
    Create JS Objects (Variables) representing the <forms>, the <div>,
    and the place to store all the albums saved

    An array will be where we store the album

    Old - var
    New - let - for an object that "changes"
          const - for an object that "doesn't change"

    We use "const" for the Forms to place in memory where the <form> exists "does not Change"
    We use "let" for the <div> and the Array to those will change
    An Array is a Variable full of Variables. 
        //>Simple database stored in memory.
    //>Line 24 is representing line 47 to 49 in index.html file. and etc..
*/

const elFmSaveAlbum = document.getElementById("fmSaveAlbum"); // Process Data
//el is just to note an element on to the name of the FmSaveAlbum id element.
const elFmShowAlbum = document.getElementById("fmShowAlbum");
let elDivOutput = document.getElementById("divOutput");
let arrAlbums = []; // The Array to store the complete Album data  //Store the data (2:02)


/*
    Object constructor to "bundle" together all the different fields of data
    Common practice to use "capital letter" when create our own "Objects"
    NO ending semicolon for a Function
    You must use the same name of the Parameter when assigning the Property of this Object

    Process data
    This Function definition is to only "Bundle Together" different bits of data
*/

function Album(artist, name, year, notes) {
    //Parameters
    this.artist = artist;
    //Assigning "this."" Object(Album) to have ".artist" Property. 
    //can also be this.myartist = artist; as the property
    this.name = name;
    this.year = year;
    this.notes = notes;

}

/*
    Function that is a series of commands that reads the fields, bundles them together,
    stores them in the Array (local storage/database)

    Functions don't end in semicolon

    Default <form> behavior is to refresh the screen, so we want to prevent that.

*/
function fnSaveAlbum(event) {
    event.preventDefault(); // Stop the refresh of the screen/browser
    console.log("fnSaveAlbum(event) is running"); //For testing purposes only.


    // Variables for each of inputs
    //JavaScript Object
    let valInAlbumArtist = document.getElementById("inAlbumArtist").value;
    //There will be a value in the form(inAlbumArtist) in the documnet that will be saved in the variable valInAlbumArtist.
    let valInAlbumName = document.getElementById("inAlbumName").value;
    let valInAlbumYear = document.getElementById("inAlbumYear").value;
    let valInAlbumNotes = document.getElementById("inAlbumNotes").value;
    console.log(valInAlbumArtist); //For testing purposes only (02:48)

    //Bundle all the 4 pieces of data into one Object
    let anAlbum = new Album(valInAlbumArtist, valInAlbumName, valInAlbumYear, valInAlbumNotes);
    //Object Constructor

    //Store to complete Album in the Array
    arrAlbums.push(anAlbum);
    //push or install the value of anAlbum

    //Tell the user it worked!
    window.alert("You saved an album!");

    // THen Clear the <form> to save more
    elFmSaveAlbum.reset()

}

// Function to get a ramdom Album from the Array and show it in the <div>
function fnShowAlbum(event) {
    event.preventDefault();
    console.log("fnShowAlbum(event) is running"); //For testing purposes only (03:09)

    // Create a random number to pick one of the Albums
    // Math.random() generates a number from 0 to 1 === 0.383323333546574654 (not real value)
    // arrAlbums.length tells us how many items in an Array
    // Math.random() * arrAlbums.length will multiply the result to number of albums & give 
    //a fraction 3.9 will round up to 4 and so forth
    // Math.round() will round UP or DOWN to a whole number by using Math Rule.
    // Math.floor() will always round DOWN so that we don't pick an album out of range
    // Math.ceil() or ceiling() will always round UP 3.9 = 4  3.5 = 4  3.1 = 4 3.09000001 = 4

    //let randomAlbum = Math.random() * arrAlbums.length;
    let randomAlbum = Math.floor(Math.random() * arrAlbums.length);

    //Show the result in the <div>
    //elDivOutput.innerHTML = "Hello";  //(03:21)
    elDivOutput.innerHTML = arrAlbums[0].artist;
    //elDivOutput.innerHTML = "Artist: " + arrAlbums[randomAlbum].artist + "<br>Album: " + arrAlbums[randomAlbum].name + "<br>Year: " + arrAlbums[randomAlbum].year + "<br>Notes: " + arrAlbums[randomAlbum].notes;
}

/*
    Should be at the end, all event Listeners, so that the rest of the code loads before we use them.
    Event Listeners for Saving and Retrieving data
    Default
*/
elFmSaveAlbum.addEventListener("submit", function(event) { fnSaveAlbum(event) });
elFmShowAlbum.addEventListener("submit", function(event) { fnShowAlbum(event) });