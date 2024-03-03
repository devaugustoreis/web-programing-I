let input = document.querySelector("#screen")
let allButtons = document.querySelectorAll(".btn")
let btnReset = document.querySelector("#btn-reset")
let btnCalculate = document.querySelector("#btn-equal")
const operators = ["+", "-", "*", "/", "."]
let invalidOperation = false  // Controls if an invalid operation has been made.
let operationFinished = false // Controls if an operation has been concluded.


// =============================== CLICK EFFECT ON BUTTONS ===============================
allButtons.forEach((button) => {
    button.addEventListener("mousedown", () => { button.classList.add("btn-clicked") })
    button.addEventListener("mouseup", () => { button.classList.remove("btn-clicked") })
    button.addEventListener("mouseleave", () => { button.classList.remove("btn-clicked") })
})


// =============== ELEMENTS THAT TRIGGER THE EVENTS (BUTTONS AND KEYBOARD) ===============
// Adding a click event in all buttons (except for "c" and "=") to update the Input Value.
for (let i = 0; i < 15; i++) {
    const button = allButtons[i]
    button.addEventListener("click", () => { updateInput(button.value) })
}

btnReset.addEventListener("click", () => { input.value = 0 })
btnCalculate.addEventListener("click", calculate)

// Keyboard press events.
document.addEventListener("keydown", (event) => {
    let allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "x", "/", ".", ",", "=", "Enter", "Backspace"]
    let key = event.key
    
    if (["Enter", " "].includes(key)) event.preventDefault() // Preventing "Enter" and "spacebar" from triggering the last button clicked.
    
    if (allowedKeys.includes(key)) {
        // Key treatment.
        if (key == "x") key = "*"
        else if (key == ",") key = "."
        
        if (["=", "Enter"].includes(key)) calculate()
        else if (key == "Backspace") input.value = input.value.slice(0, -1)
        else updateInput(key)
    }
})


// =========== FUNCTIONS THAT UPDATE THE INPUT AND CALCULATE THE EXPRESSION ============
// Updates the Input with the value received (from button click or keyboard press).
function updateInput(value) {
    if ((operationFinished && !operators.includes(value)) || invalidOperation) input.value = ""
    operationFinished = invalidOperation = false

    // Preventing an operator as the first character or two or more operators in sequence.
    if (operators.includes(value) && (input.value.length == 0 || lastCharIsOperator())) return            
    else input.value += value
}

// Evaluates the expression on the input and finishes the operation.
function calculate() {
    if (input.value.length == 0 || lastCharIsOperator() || invalidOperation) return    // Preventing some eval() errors.

    let resultado = eval(input.value)
    if (isNaN(resultado) || resultado == "Infinity") {
        input.value = "Operação Inválida!"
        invalidOperation = true
    } else {
        input.value = resultado
        operationFinished = true
    }
}

// Checks if the last character of the input is an operator.
function lastCharIsOperator() {
    let lastChar = input.value.slice(-1)
    if (operators.includes(lastChar)) return true
    else return false
}
