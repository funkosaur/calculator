const btnZero = document.querySelector("#btnZero");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");
const btnFour = document.querySelector("#btnFour");
const btnFive = document.querySelector("#btnFive");
const btnSix = document.querySelector("#btnSix");
const btnSeven = document.querySelector("#btnSeven");
const btnEight = document.querySelector("#btnEight");
const btnNine = document.querySelector("#btnNine");
const displayCalc = document.querySelector(".display-calc");
const enterCalc = document.querySelector(".entered-calculation");



btnZero.addEventListener("click", () => {
    
    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += btnZero.value;

    }

});

btnOne.addEventListener("click", () => {

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += btnOne.value;

    }
});

btnTwo.addEventListener("click", () => {

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += btnTwo.value;

    }
});

btnThree.addEventListener("click", () => {

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += btnThree.value;

    }
});

btnFour.addEventListener("click", () => {

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += btnFour.value;

    }
});

btnFive.addEventListener("click", () => {

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += btnFive.value;

    }
});

btnSix.addEventListener("click", () => {

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += btnSix.value;

    }
});

btnSeven.addEventListener("click", () => {

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += btnSeven.value;

    }
});

btnEight.addEventListener("click", () => {

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += btnEight.value;

    }
});

btnNine.addEventListener("click", () => {

    if (enterCalc.textContent.length < 16) {

        enterCalc.textContent += btnNine.value;

    }
});





let displayValue = enterCalc.textContent;

function addition(number1, number2) {
    return number1 + number2;
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
        return addition(number1, number2)
    } else if(operator === "-") {
        return subtraction(number1, number2)
    } else if(operator === "*") {
        return multiply(number1, number2)
    } else {
        return division(number1, number2)
    }

}

