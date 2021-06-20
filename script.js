const displayCalc = document.querySelector(".display-calc");
const enterCalc = document.querySelector(".entered-calculation");
const numberButtons = document.querySelectorAll(".number-button");
const expressions = document.querySelectorAll(".expression-button");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector(".equals-button");


numberButtons.forEach(element => { element.addEventListener("click", () => {

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += element.value;

        if(enterCalc.textContent.includes(".")) {
            decimal.value = "";
        }

    }

})
    
});

let number1
let operator

expressions.forEach(element => {element.addEventListener("click", () => { 

    if(displayCalc.textContent.includes(number1) && enterCalc.textContent.includes("")){
        
        let number2 = enterCalc.textContent;
        

        displayCalc.textContent += ` ${number2}`
        
    
        operate(number1, number2, operator)
        

    }
    
    
    displayCalc.textContent = `${enterCalc.textContent} ${element.value}`;

    number1 = enterCalc.textContent;
    operator = element.value

    enterCalc.textContent = "";
    

    
    
})});


equals.addEventListener("click", ()=>{

    let number2 = enterCalc.textContent;

    displayCalc.textContent += ` ${number2}`
    
    operate(number1, number2, operator)

    number1 = enterCalc.textContent;
})

//  povekje plusovi ako se stisnat reshi toa reshi ednakvo ako se stiska poeke pati


function addition(number1, number2) {
    return parseInt(number1) + parseInt(number2);
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


