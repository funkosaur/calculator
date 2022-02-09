const displayCalc = document.querySelector(".display-calc");
const enterCalc = document.querySelector(".entered-calculation");
const numberButtons = document.querySelectorAll(".number-button");
const expressions = document.querySelectorAll(".expression-button");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector(".equals-button");
const del = document.querySelector(".delete-one");
const clear = document.querySelector(".delete-all");


numberButtons.forEach(element => { element.addEventListener("click", () => {

    dividingByZero()

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += element.value;

        noRepeatingDecimals()

    }

})
    
});

let number1
let operator
let number2

expressions.forEach(element => {element.addEventListener("click", () => { 
    
    dividingByZero()

    if(displayCalc.textContent.includes(number1) && enterCalc.textContent.length != 0){
        
        number2 = enterCalc.textContent;
        

        displayCalc.textContent += ` ${number2}`
        

        operate(number1, number2, operator)
        

    }


    if(enterCalc.textContent.length != 0) {

        displayCalc.textContent = `${enterCalc.textContent} ${element.value}`;

        number1 = enterCalc.textContent;
        operator = element.value

        enterCalc.textContent = "";

    }
    
})});


equals.addEventListener("click", ()=>{

    

    if(displayCalc.textContent.includes(number1) && enterCalc.textContent.length != 0){
    number2 = enterCalc.textContent;

    displayCalc.textContent += ` ${number2}`
    
    operate(number1, number2, operator)

    number1 = enterCalc.textContent;

    noRepeatingDecimals()
    }


});

clear.addEventListener("click", () => { 
    enterCalc.textContent = "";
    displayCalc.textContent = "";
    number2 = "";
    operator = "";
})

del.addEventListener("click", () => {

    dividingByZero()
    
       let newString = enterCalc.textContent.substring(0, enterCalc.textContent.length - 1);

       enterCalc.textContent = newString


    
})



function addition(number1, number2) {
    return parseFloat(number1) + parseFloat(number2);
}

function subtraction(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function division(number1, number2) {
    if(number1 == 0 || number2 == 0){
        return "Oh nonono can't do that"
    }
    return number1 / number2;
}

function percentage(number1, number2) {
    return (number1 * 0.01)*number2;
}

function operate(number1, number2, operator) {
    dividingByZero()

    if(operator === "+") {
       enterCalc.textContent = addition(number1, number2);
    } else if(operator === "-") {
        enterCalc.textContent = subtraction(number1, number2);
    } else if(operator === "*") {
        enterCalc.textContent = multiply(number1, number2);
    } else if(operator ==="/"){
        enterCalc.textContent = division(number1, number2);
    } else {
        enterCalc.textContent = percentage(number1, number2);
    }

}


function dividingByZero(){
    if(enterCalc.textContent == "Oh nonono can't do that" || displayCalc.textContent == "Oh nonono can't do that " + operator ){
        enterCalc.textContent = "";
        displayCalc.textContent = "";
    }

}

function noRepeatingDecimals() {
    if(enterCalc.textContent.includes(".")) {
        decimal.value = "";
} else {decimal.value = "."}
}



