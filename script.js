
//Variables

var numOne= 1;
var buttonClass = document.getElementsByClassName("calcButton");
var operatorClass = document.getElementsByClassName("operator");
let operatorOne;
var display = document.getElementById("display");
var equalsSign = document.getElementById("equalsSign");
const clearButton = document.getElementById("CE");
let operatorArray = [];
//var displayString = display.toString;
//Functions

//Sets display on calculator to 0, clears operatorArray
function clearDisplay(){
    display.innerHTML=("0");
    operatorArray= [];
}

function updateDisplay(param){
    display.innerHTML += param.innerHTML;
}

function operatorDisplay(param){
    display.innerHTML += param.innerHTML;
    operatorArray.push(param.innerHTML)
    console.log( "before" + operatorArray);
    let tempOperator = operatorArray[1];
    if (operatorArray.length> 1){
        secondChangeDisplay();
        operatorArray.push(tempOperator);
        display.innerHTML+=tempOperator;
        //console.log( "after" + operatorArray);
    }
}

function twoOperators(string){

}



//Checks if param is an operator
function isOperator(param){
   
    if (param == "+" || param == "-" || param == "*" ||  param == "/"){
        return true;
    }
    else{
        return false;
    }
}

//Returns the answer of given two numbers and an operator
function calculate(numOne, numTwo, operator){
    if (operator == "+"){
    answer = numOne + numTwo;
}

        else if (operator== "*"){
            answer = numOne * numTwo;
        }

        else if(operator== "-")
            answer = numOne - numTwo;

        else{
            answer = numOne / numTwo;
        }

    return answer;

        }



//Takes a string, and uses calculate() to return solution
function solveDisplay(string){
    console.log( "problem to solve" + string)
    for(let i= 0; i < string.length; i++){
        if (isOperator(string[i])){
            var operatorOne = string[i];
        }  
    }
    numbers = string.split(operatorOne);
    let numOne = Number(numbers[0]);
    let numTwo= Number(numbers[1]);
    //console.log( "test test" + numTwo + numTwo + operatorOne);
    answer = calculate(numOne,numTwo, operatorOne);
    //console.log(answer);
    return answer;
}


//Updates display using solveDisplay()
function changeDisplay(){
    let newDisplay = solveDisplay(display.innerHTML);
    display.innerHTML= newDisplay;
    operatorArray= [];

}

//Updates display with a second operator
function secondChangeDisplay(){
    let editedDisplay = display.innerHTML.slice(0,-1);
    //console.log( "edited display" + editedDisplay);
    let answer = solveDisplay(editedDisplay);
    display.innerHTML = answer;
    operatorArray= [];
}


  
//Takes an equation as a string and returns the result
function solveEquation(){
    alert("lets solve this")
    var equation = document.getElementById("display").innerHTML;
    var solved = eval(equation);
    alert(solved); 
    document.getElementById("display").innerHTML= solved;
}

function operatorButton(){
    updateDisplay(this);
    example();
}

function example(){
    alert("Hello example");
}

function printDisplay(){
    console.log(display.innerHTML);
    console.log(solveDisplay(display.innerHTML));
}



//Event Handlers








//Sets onclick function for all elements in calcButton class

for (i=0; i< buttonClass.length; i++){
    buttonClass[i].onclick= function(){updateDisplay(this)}; 
    //buttonClass[i].style.color="red";
}

//Keeps track of operators when clicked
//operatorDisplay
for (i=0; i< operatorClass.length; i++){
    operatorClass[i].onclick= function(){operatorDisplay(this)};
}



//Clears display when CE button is clicked
clearButton.onclick= function(){clearDisplay()};


//Sets onclick functions for equals sign to solveDisplay, using the display from calculator
equalsSign.onclick = function(){changeDisplay()};




//equalsSign.onclick= function(){solveDisplay(displayString)};
//console.log(solveDisplay("1+2"));
//equalsSign.onclick = function(){solveEquation()};
//equalsSign.onclick = function(){solveDisplay(display.innerHTML)};
//console.log(calculate(1,2,"*"));
//console.log(calculate(1,2, "+"));
//console.log(solveDisplay(display.innerHTML));
//console.log(display.innerHTML);

//equalsSign.onclick= function(){changeDisplay};

