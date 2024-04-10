// var inputs, button, and display
let engInput = document.querySelector(".englishInput");
let mathInput = document.querySelector(".mathInput");
let sciInput = document.querySelector(".scienceInput");
let hisInput = document.querySelector(".historyInput");
let button = document.querySelector("button");
let display = document.querySelector(".display");

// pre-declaring variables
let engLetterGrade;
let mathLetterGrade;
let sciLetterGrade;
let hisLetterGrade;

//saving the input's value, making them lowercase (working)

function gradeInput() {
    engLetterGrade = engInput.value.toLowerCase();
    mathLetterGrade = mathInput.value.toLowerCase();
    sciLetterGrade = sciInput.value.toLowerCase();
    hisLetterGrade = hisInput.value.toLowerCase();

    // console.log(engLetterGrade);
    // console.log(mathLetterGrade);
    // console.log(sciLetterGrade);
    // console.log(hisLetterGrade);
};

// converting the letter variables into numbers, trying to work around return

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
    };
};

// adding and gpa

function calculate() {
    
};

// button clicked, testing the convert function

button.onclick = function() {
    gradeInput();
    convert(engLetterGrade);
    convert(mathLetterGrade);
    convert(sciLetterGrade);
    convert(hisLetterGrade);
};