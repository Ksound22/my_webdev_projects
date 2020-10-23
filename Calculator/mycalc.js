// alert("Hello World")

function dis(val) {
    document.getElementById("kolade").value += val;
}

function clr(val) {
    document.getElementById("kolade").value = "";
}

function equ(val) {
    let x = document.getElementById("kolade").value;
    let y = eval(x)
    document.getElementById("kolade").value = y;
}