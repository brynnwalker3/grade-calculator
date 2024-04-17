// var inputs, button, and display
let engInput = document.querySelector(".englishInput");
let mathInput = document.querySelector(".mathInput");
let sciInput = document.querySelector(".scienceInput");
let hisInput = document.querySelector(".historyInput");
let button = document.querySelector("button");
let display = document.querySelector(".display");

// pre-declaring variables
let engLetter;
let mathLetter;
let sciLetter;
let hisLetter;

let engNum;
let mathNum;
let sciNum;
let hisNum;

//saving the input's value, making them lowercase (working)

function gradeInput() {
    engLetter = engInput.value.toLowerCase();
    mathLetter = mathInput.value.toLowerCase();
    sciLetter = sciInput.value.toLowerCase();
    hisLetter = hisInput.value.toLowerCase();

    // console.log(engLetter);
    // console.log(mathLetter);
    // console.log(sciLetter);
    // console.log(hisLetter);
};

// converting the letter variables into numbers (working w/console.log)
function convert(letter) {
    if (letter === "a") {
        return 4;
    } else if (letter === "b") {
        return 3;
    } else if (letter === "c") {
        return 2;
    } else if (letter === "d") {
        return 1;
    } else if (letter === "f") {
        return 0;
    } else {
        alert("Please enter your grades in correctly.")
    };
};

// adding and gpa

function calculate() {
    let gpa = (engNum + mathNum + sciNum + hisNum)/4;
    display.innerHTML= `Your GPA is ${gpa}`;
};

// button clicked, lowercasing letters (working), converting to num (working)

button.onclick = function() {
    gradeInput();
    engNum = convert(engLetter);
    mathNum = convert(mathLetter);
    sciNum = convert(sciLetter);
    hisNum = convert(hisLetter);
    calculate();
};