const displayCalc = document.querySelector(".display-calc");
const enterCalc = document.querySelector(".entered-calculation");
const numberButtons = document.querySelectorAll(".number-button");
const expressions = document.querySelectorAll(".expression-button");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector(".equals-button");
const del = document.querySelector(".delete-one");
const clear = document.querySelector(".delete-all");


numberButtons.forEach(element => { element.addEventListener("click", () => {

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += element.value;

        if(enterCalc.textContent.includes(".")) {
                decimal.value = "";
        } else {decimal.value = "."}

    }

    makeTextSmall ()

})
    
});

let number1
let operator
let number2

expressions.forEach(element => {element.addEventListener("click", () => { 

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
    }

    makeTextSmall ()

});

clear.addEventListener("click", () => { 
    enterCalc.textContent = "";
    displayCalc.textContent = "";
    number2 = "";
    operator = "";
})

del.addEventListener("click", () => {
    
       let newString = enterCalc.textContent.substring(0, enterCalc.textContent.length - 1);

       enterCalc.textContent = newString

       makeTextSmall ()


    
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
    return number1 / number2;
}

function operate(number1, number2, operator) {

    if(operator === "+") {
       enterCalc.textContent = addition(number1, number2);
    } else if(operator === "-") {
        enterCalc.textContent = subtraction(number1, number2);
    } else if(operator === "*") {
        enterCalc.textContent = multiply(number1, number2);
    } else {
        enterCalc.textContent = division(number1, number2);
    }

}

function makeTextSmall (){
    if(enterCalc.textContent.length > 14) {
        enterCalc.style.fontSize = "0.8rem";
    } else if(enterCalc.textContent.length > 9) {
        enterCalc.style.fontSize = "1rem"


    }else if(enterCalc.textContent.length > 5) {
        enterCalc.style.fontSize = "1.5rem"


    } else {enterCalc.style.fontSize = "2rem"}

}


