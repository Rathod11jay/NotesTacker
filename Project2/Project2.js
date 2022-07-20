console.log("WELCOME TO MYLIBRARY!");

// Constructor
function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display(){

}

// Add methods to Diplay prototype

// Add Submit Event Listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit",libraryFormSubmit);

function libraryFormSubmit(e){
    console.log("You Submited Library Form");
    let name = document.getElementById("bookName").value; 
    let author = document.getElementById("author").value;
    let type;
    // Embedded,Computer Programming,Cooking
    let embeded = document.getElementById("embedded");
    let Programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (embedded.checked) {
        type = embedded.value;
    }
    else if(programming.chcked){
        type = programming.value;
    }
    else if(cooking.chcked){
        type = cooking.value;
    }

    let book = new Book(name,author,type);
    console.log(book);
    e.preventDefault();
}