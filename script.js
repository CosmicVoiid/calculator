//operator functions
function sum(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function opposite(n){
    return -n;
}

function percentage(n){
    n = (n / 100);
    disp.textContent = round(n);
}

function round(n){
    return Math.round(n * 10000000) / 10000000;
}

function decimal(){
    let str = disp.textContent;
    if (!(str.includes('.'))){
        disp.textContent += ".";
    }
}

function operate(a, b, operator){
    if (operator==="plus") return sum(a, b);
    else if (operator==="subtract") return subtract(a, b);
    else if (operator==="multiply") return multiply(a, b);
    else if (operator==="divide") return divide(a, b);
}

//initial values
const container = document.querySelector("#container");
const disp = document.querySelector("#display");
let operator = "";
let firstOperator;
let secondOperator;
let temp = "";
let rounded = 0;


//displays values
function display(n){
    if (disp.textContent === "0") disp.textContent = "";
    if (disp.textContent === temp) {
        disp.textContent = "";
        temp = "";
    }
    if (disp.textContent.length <= 9){
        disp.textContent += n;
    }
}

//clear all
const all_clear = document.querySelector("#all-clear");
all_clear.addEventListener('click', () =>{
    disp.textContent = "0";
    operator = "";
});

//evaluate
const equals = document.querySelector("#equals");
equals.addEventListener('click', () => {
    secondOperator = parseFloat(disp.textContent);
    rounded = round((operate(firstOperator, secondOperator, operator)))
    disp.textContent = rounded.toString();
});

//decimal
const deci = document.querySelector("#decimal");
deci.addEventListener('click', () => decimal());

//percentage
const percent = document.querySelector("#percent");
percent.addEventListener('click', () => {
    disp.textContent = (percentage(parseFloat(disp.textContent))).toString();
});

//change sign
const oppo = document.querySelector("#sign-change");
oppo.addEventListener('click', () => {
    disp.textContent = (opposite(parseFloat(disp.textContent))).toString();
});

//add
const add = document.querySelector("#add");
add.addEventListener('click', () => {
    firstOperator = parseFloat(disp.textContent);
    operator = "plus";
    temp = disp.textContent;
});

//subtract
const subtracter = document.querySelector("#subtract");
subtracter.addEventListener('click', () => {
    firstOperator = parseFloat(disp.textContent);
    operator = "subtract";
    temp = disp.textContent;
});

//multiply
const multiplyer = document.querySelector("#multiply");
multiplyer.addEventListener('click', () => {
    firstOperator = parseFloat(disp.textContent);
    operator = "multiply";
    temp = disp.textContent;
});

//divide
const divider = document.querySelector("#divide");
divider.addEventListener('click', () => {
    firstOperator = parseFloat(disp.textContent);
    operator = "divide";
    temp = disp.textContent;
});

//number inputs
const button_9 = document.querySelector("#button-9");
button_9.addEventListener('click', () => display(9));

const button_8 = document.querySelector("#button-8");
button_8.addEventListener('click', () => display(8));

const button_7 = document.querySelector("#button-7");
button_7.addEventListener('click', () => display(7));

const button_6 = document.querySelector("#button-6");
button_6.addEventListener('click', () => display(6));

const button_5 = document.querySelector("#button-5");
button_5.addEventListener('click', () => display(5));

const button_4 = document.querySelector("#button-4");
button_4.addEventListener('click', () => display(4));

const button_3 = document.querySelector("#button-3");
button_3.addEventListener('click', () => display(3));

const button_2 = document.querySelector("#button-2");
button_2.addEventListener('click', () => display(2));

const button_1 = document.querySelector("#button-1");
button_1.addEventListener('click', () => display(1));

const button_0 = document.querySelector("#button-0");
button_0.addEventListener('click', () => display(0));