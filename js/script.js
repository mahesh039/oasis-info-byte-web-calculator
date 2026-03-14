let display = document.getElementById("display");

function appendValue(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function backspace(){
display.value = display.value.slice(0,-1);
}

function calculate(){
try{
display.value = eval(display.value);
}
catch{
display.value = "Error";
}
}

function percentage(){

let value = display.value;

let match = value.match(/(\d+\.?\d*)([+\-*/])(\d+\.?\d*)$/);

if(match){

let num1 = parseFloat(match[1]);
let operator = match[2];
let num2 = parseFloat(match[3]);

let percent;

if(operator === "+" || operator === "-"){
percent = (num1 * num2) / 100;
}
else{
percent = num2 / 100;
}

display.value = num1 + operator + percent;
}
}
