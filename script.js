// input capable of holding two values

// clear removes all inputs values
// delete removes last number you click

// function that takes in two numbers and a operator. Does the logic and returns answer on = click. Should be able to string different operations together before = click.
// Does first two inputs before handling next operation
// 

let inputs = {
    inputOne:[],
    inputTwo:[],
}

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
    input.value = newValue.join("")
}

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("mousedown",clearInputs);

function clearInputs(e){
    e.preventDefault()
    input.value = 0
    inputs = {
        inputOne:[],
        inputTwo:[],
    }
}

let deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("mousedown",deleteInput);