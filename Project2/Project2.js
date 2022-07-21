console.log("WELCOME TO MYLIBRARY! This is ES6 Version!");

class Book{
    constructor(name,author,type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
    add(book){
        let tableBody = document.getElementById("tableBody");
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                            <td><button type="button" id = "deleteBtn" onclick = "delete(this.id)" class="btn btn-primary">Delete</button></td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear(){
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    validate(book){
        if (book.name.length<2 || book.author.length<2){
            return false;
        } else{
            return true;
        }
    }

    show(type,displayMessage){
        let message = document.getElementById("message");
        let messageTxt;
        type === "Success" ? messageTxt = "Success : " : messageTxt = "Error!";
        message.innerHTML += `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${messageTxt}</strong> ${displayMessage}
                                <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
        setTimeout(function() {
            message.innerHTML = "";
        }, 3000);
    }
}

// Add Submit Event Listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit",libraryFormSubmit);

function libraryFormSubmit(e){
    console.log("You Added The Book!");
    let name = document.getElementById("bookName").value; 
    let author = document.getElementById("author").value;
    let type;
    // Embedded,Computer Programming,Cooking
    let embedded = document.getElementById("embedded");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (embedded.checked) {
        type = embedded.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }

    let book = new Book(name,author,type);
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("Success","Your Book Is Successfully Added"); 
    } else{
        display.show("Error","Sorry You Cannot Add This Book!");
    }

    e.preventDefault();
}