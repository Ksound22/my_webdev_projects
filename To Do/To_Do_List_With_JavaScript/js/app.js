// Thanks to CODE EXPLAINED channel
// Select the element
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date"); 
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// get item from lS
let data = localStorage.getItem("TODO");

// check if data that arrive is not empty
if (data) {
    LIST = JSON.parse(data)
    id = LIST.length; //set the id to the last one in the list
    loadList(LIST); //load the list to the UI
} else { 
    // If data is empty
    LIST = [];
    id = 0;
}

// clear the lS
clear.addEventListener("click", function(){   
    localStorage.clear();
    location.reload(); 
})

// to load the items
function loadList(array) {
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash) 
    });
}  

// Show today's date
const options = {weekday : "long", month : "long", day : "numeric"}; 
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-Us", options); 

// add to do function 
function addToDo (toDo, id, done, trash) {

    if(trash) {return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = ` <li class = "item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                    </li>
                `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item)
}
// addToDo("Drink coffee")

// add an Item to the list when user hit the enter key
document.addEventListener("keyup", function(even){
    if(event.keyCode == 13) {
        const toDo = input.value;

        // If the input is not empty
        if(toDo) {
            addToDo(toDo, id, false, false)

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });

            // add item to the lS
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = ""
    }
}); 
// addToDo("Coffee", 1, false, true)

function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH)

    LIST [element.id].done = LIST[element.id].done ? false : true;
}


// remove TO DO
function removeToDo (element) {
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].trash = true; 
} 

// target the items created dynamically

list.addEventListener("click", function(event){
    const element = event.target; // returns the clicked element inside list
    const elementJob = element.attributes.job.value; //complete or delete

    if(elementJob == "complete") {
        completeToDo(element);
    } else if (elementJob == "delete") {
        removeToDo(element);  
    }

    // add item to the lS
    localStorage.setItem("TODO", JSON.stringify(LIST));

})  