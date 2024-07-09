const display = document.getElementById("display");

function addvalue(input){
    display.value += input;
}
function cleardisplay(){
    display.value = "";
}
function deletenumber(){
    display.value = display.value.toString().slice(0,-1);
}
function calculate(){
    display.value = eval(display.value);
}