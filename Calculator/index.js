/*// alert("Whats up world")

// This didn't work because of the html no backspace entity
// function for displaying the values
function dis(val) {
    document.getElementById("edu").value+=val &nbsp;
}

// function for evaluation 
function solve() {
    let x = document.getElementById("edu").value
    let y = eval(x)
    document.getElementById("edu").value = y; 
}

// function for clearing display
function clr() { 
    document.getElementById("edu").value = " ";  
} 
*/

/* Chris - Works well. a shortcut not recommended for big project, i guess
function _(x) {
    return document.getElementById(x); 
} 

function dis(val) {
    _('edu').value += val;
}

function clr (val) {
    _('edu').value = '';
}

function solve (val) {
    _('edu').value = eval(_('edu').value);
}
*/
 
// This works well!
function dis(val) {
    document.getElementById('edu').value += val;
}

function clr (val) { 
    document.getElementById('edu').value = '';
}

function solve (val) {
    let x = document.getElementById('edu').value
    let y = eval(x)
    document.getElementById('edu').value = y
 } 

//  var x = 2;
//  var y = 2
//  x+=y //same as x = x + y
//  console.log(x)


