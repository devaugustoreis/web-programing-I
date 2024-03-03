let input = document.querySelector("#std-input")
const allButtons = document.querySelectorAll(".btn")
const allResetButtons = document.querySelectorAll(".btn-reset")
const btnCalculate = document.querySelector(".btn-equal")
const operators = ["+", "-", "*", "/", "."]
let allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "x", "/", ".", ",", "=", "Enter", "Backspace"]
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
for (let i = 0; i < allButtons.length; i++) {
    const button = allButtons[i]
    if (button.classList.contains("btn-reset") || button.classList.contains("btn-equal")) continue

    button.addEventListener("click", () => { updateInput(button.value) })
}

for (btnReset of allResetButtons) {
    btnReset.addEventListener("click", () => { input.value = 0 })
}

btnCalculate.addEventListener("click", calculate)

// Keyboard press events.
document.addEventListener("keydown", (event) => {
    let key = event.key
    if (["Enter", " "].includes(key)) event.preventDefault()  // Preventing "Enter" and "spacebar" from triggering the last button clicked.
    
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
    if ((operationFinished && !operators.includes(value)) || 
        invalidOperation || 
        input.value.length == 1 && input.value == 0) input.value = ""
    operationFinished = invalidOperation = false

    // Preventing an operator as the first character or two or more operators in sequence.
    if (operators.includes(value) && (input.value.length == 0 || lastCharIsOperator())) return            
    else input.value += value
}

// Evaluates the expression on the standard input and finishes the operation.
function calculate() {
    if (input.value.length == 0 || lastCharIsOperator() || invalidOperation) return    // Preventing some eval() errors.

    let resultado = eval(input.value)
    if (isNaN(resultado) || resultado == "Infinity") {
        input.value = "Operação Inválida!"
        invalidOperation = true
    } else {
        updateHistoric(resultado)
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


/* ============================= OPERATIONS HISTORIC ============================= */
const historicDiv = document.querySelector("#operations-historic")
let operationsHistoric = []

// Adds the last operation made to the historic of operations.
function updateHistoric(resultado) {
    if (input.value == resultado) return
    let lastOperation = `${input.value} = ${resultado}`
    operationsHistoric.push(lastOperation)

    let p = document.createElement("p")
    p.innerText = lastOperation
    historicDiv.appendChild(p)
}


/* =============================== CALCULATOR MODES =============================== */
const calculatorSelect = document.querySelector("#calculator-select")
const standardCalculator = document.querySelector("#standard-calculator")
const conversionCalculator = document.querySelector("#conversion-calculator")
const convInput = document.querySelector("#conv-input")
const output = document.querySelector("#conv-output")
const inputSelector = document.querySelector("#input-selector")
const outputSelector = document.querySelector("#output-selector")

calculatorSelect.addEventListener("change", () => { 

    if (calculatorSelect.value == "standard") {
        allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "x", "/", ".", ",", "=", "Enter", "Backspace"]
        conversionCalculator.style.display = "none"
        standardCalculator.style.display = "block"
        input = document.querySelector("#std-input")
    } else {
        allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "Backspace"]
        standardCalculator.style.display = "none"
        conversionCalculator.style.display = "block"
        input = document.querySelector("#conv-input")
        displaySelectorOptions()
    }

    input.value = 0
})

const selectTemperatureOptions = ["Celsius", "Farenheit", "Kelvin"]
const selectLengthOptions = ["Milímetros", "Centímetros", "Metros", "Quilômetros"]
const selectTimeOptions = ["Segundos", "Minutos", "Horas"]
const selectAnglesOptions = ["Graus", "Radianos"]

function displaySelectorOptions() {
    inputSelector.innerHTML = ""
    outputSelector.innerHTML = ""
    let arrayOptions, cont = 0

    if (calculatorSelect.value == "temperature") arrayOptions = selectTemperatureOptions
    else if (calculatorSelect.value == "length") arrayOptions = selectLengthOptions
    else if (calculatorSelect.value == "time") arrayOptions = selectTimeOptions
    else if (calculatorSelect.value == "angle") arrayOptions = selectAnglesOptions

    for (let option of arrayOptions) {
        let inputOptionElement = new Option(option, option)
        let outputOptionElement = inputOptionElement.cloneNode(true)
        cont++
        if (cont == 2) outputOptionElement.setAttribute('selected', true)
        
        inputSelector.appendChild(inputOptionElement)
        outputSelector.appendChild(outputOptionElement)
    }
}


document.addEventListener("keydown", updateOutput)
document.addEventListener("click", updateOutput)
inputSelector.addEventListener("change", () => { updateOutput() })
outputSelector.addEventListener("change", () => { updateOutput() })


function updateOutput() {
    if (calculatorSelect.value == "standard" || convInput.value.length == 0) return

    let value = Number(convInput.value)
    let inputSel = inputSelector.value
    let outputSel = outputSelector.value

    if (inputSel == outputSel) output.value = value
    else if (calculatorSelect.value == "temperature") output.value = temperatureConverter(inputSel, outputSel, value)
    else if (calculatorSelect.value == "length") output.value = lengthConverter(inputSel, outputSel, value)
    else if (calculatorSelect.value == "time") output.value = timeConverter(inputSel, outputSel, value)
    else if (calculatorSelect.value == "angle") output.value = anglesConverter(inputSel, outputSel, value)
}

function temperatureConverter(inputType, outputType, value) {
    let output

    if (inputType == "Celsius" && outputType == "Farenheit") output = value * 1.8 + 32
    else if (inputType == "Celsius" && outputType == "Kelvin") output = value + 273.15
    else if (inputType == "Farenheit" && outputType == "Celsius") output = (value - 32) / 1.8
    else if (inputType == "Farenheit" && outputType == "Kelvin") output = (value - 32) / 1.8 + 273.15
    else if (inputType == "Kelvin" && outputType == "Celsius") output = value - 273.15
    else if (inputType == "Kelvin" && outputType == "Farenheit") output = (value - 273.15) * 1.8 + 32

    return Number(output.toFixed(2))
}

function lengthConverter(inputType, outputType, value) {
    if (inputType == "Milímetros" && outputType == "Centímetros") return value / 10
    else if (inputType == "Milímetros" && outputType == "Metros") return value / 1000
    else if (inputType == "Milímetros" && outputType == "Quilômetros") return value / 1000000
    else if (inputType == "Centímetros" && outputType == "Milímetros") return value * 10 
    else if (inputType == "Centímetros" && outputType == "Metros") return value / 100 
    else if (inputType == "Centímetros" && outputType == "Quilômetros") return value / 100000
    else if (inputType == "Metros" && outputType == "Milímetros") return value * 1000 
    else if (inputType == "Metros" && outputType == "Centímetros") return value * 100 
    else if (inputType == "Metros" && outputType == "Quilômetros") return value / 1000
    else if (inputType == "Quilômetros" && outputType == "Milímetros") return value * 1000000 
    else if (inputType == "Quilômetros" && outputType == "Centímetros") return value * 100000 
    else if (inputType == "Quilômetros" && outputType == "Metros") return value * 1000
}

function timeConverter(inputType, outputType, value) {
    let output

    if (inputType == "Segundos" && outputType == "Minutos") output = value / 60
    else if (inputType == "Segundos" && outputType == "Horas") output = value / 3600
    else if (inputType == "Minutos" && outputType == "Segundos") output = value * 60
    else if (inputType == "Minutos" && outputType == "Horas") output = value / 60
    else if (inputType == "Horas" && outputType == "Segundos") output = value * 3600
    else if (inputType == "Horas" && outputType == "Minutos") output = value * 60

    return Number(output.toFixed(6))
}

function anglesConverter(inputType, outputType, value) {
    let output

    if (inputType == "Graus" && outputType == "Radianos") output = value * 0.0174533
    else if (inputType == "Radianos" && outputType == "Graus") output = value * 57.2958

    return Number(output.toFixed(6))
}
