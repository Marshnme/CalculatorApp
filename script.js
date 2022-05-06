// input capable of holding two values

// function that takes in two numbers and a operator. Does the logic and returns answer on = click. Should be able to string different operations together before = click.
// Does first two inputs before handling next operation
// 

let inputs = {
    inputOne:[],
    inputTwo:[],
    operator:"",
}

let answers = 0;

let input = document.querySelector(".input-field")
let calcNums = document.querySelectorAll(".calc-nums div *")


calcNums.forEach(num => {
    num.addEventListener("mousedown",addToInputOne)
});

function addToInputOne(e){
    inputs.inputOne = [...inputs.inputOne, e.target.innerText];
    updateInput(inputs.inputOne)
}

function updateInput(newValue){
    console.log("updatedInputValue",newValue)
    if(newValue.length === 0 ){
        input.value = 0;
    }else if( typeof newValue !== typeof 1){
        input.value = newValue.join("")
    }else{
        input.value = newValue
    }
}
    


let clearButton = document.querySelector(".clear");
clearButton.addEventListener("mousedown",clearInputs);

function clearInputs(e){
    e.preventDefault()
    input.value = 0;
    inputs = {
        inputOne:[],
        inputTwo:[],
        operator:"",
    }
}

let deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("mousedown",deleteInput);

function deleteInput(){
    inputs.inputOne.pop()
    updateInput(inputs.inputOne)
}


function inputOneToInputTwo(innerText){
    inputs = {
        inputTwo:[...inputs.inputOne],
        inputOne:[],
        operator:innerText,
    }
    updateInput(inputs.inputOne)
    console.log(inputs)
}

let operators = document.querySelectorAll(".operators span")

operators.forEach(operator => {
    // operator.addEventListener("mousedown",inputOneToInputTwo)
    operator.addEventListener("mousedown",mathLogic)
    if(operator.innerText != "="){
        operator.addEventListener("mousedown",updateOperator)
    }
})

function updateOperator(e){  
    // inputs.operator = e.target.innerText
}

function mathLogic(e){
    e.preventDefault()
    if(inputs.inputTwo.length != 0 ){
        if(e.target.innerText === "="){
            answers = results(inputs.inputTwo,inputs.inputOne,inputs.operator)
            updateInput(answers)
            inputs = {
                inputTwo:[],
                inputOne:[answers],
            }
        }else{
            answers = [results(inputs.inputTwo,inputs.inputOne,inputs.operator)]
            inputs = {
                inputTwo:[],
                inputOne:[answers],
                operator:e.target.innerText,
            }
            
        
            
            inputOneToInputTwo(e.target.innerText)
            console.log(inputs)
        }
    }else{
        inputOneToInputTwo(e.target.innerText)
    }
}

function results(a,b,op){
    if(op === "+"){
       return add(a,b)
    }else if(op === "-"){
        return subtract(a,b)
    }else if(op === "x"){
        return multiply(a,b)
    }else if(op === "/"){
        return divide(a,b)
    }
    
}

function add(a,b){
    return parseInt(a.join("")) + parseInt(b.join(""))
}
function subtract(a,b){
    return parseInt(a.join("")) - parseInt(b.join(""))
}
function multiply(a,b){
    return parseInt(a.join("")) * parseInt(b.join(""))
}
function divide(a,b){
    return parseInt(a.join("")) / parseInt(b.join(""))
}

console.log("answers",answers)