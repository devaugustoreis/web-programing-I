const timer = document.querySelector("#timer")
const startStopBtn = document.querySelector("#start-stop-btn")
let timerIsActive = false
let activateTimer

let hours = 0
let minutes = 0
let seconds = 0
let milliseconds = 0


startStopBtn.addEventListener("click", () => {
    timerIsActive = !timerIsActive
    activateOrDeactivateTimer()
})


function activateOrDeactivateTimer() {
    
    if (timerIsActive) {
        startStopBtn.classList.add("btn-outline-danger")
        startStopBtn.classList.remove("btn-danger")
        activateTimer = setInterval(runTimer, 10)
        startStopBtn.innerText = "Pausar"
        
    } else {
        startStopBtn.classList.add("btn-danger")
        startStopBtn.classList.remove("btn-outline-danger")
        clearInterval(activateTimer)
        registerStop()
        startStopBtn.innerText = "Iniciar"
    }
}


function runTimer() {
    // If the tab is not active, setInterval occurs only once each 1000 ms.
    if (document.hidden) seconds++
    else milliseconds += 10

    if (milliseconds === 1000) {
        milliseconds = 0
        seconds++
    }
    if (seconds === 60) {
        seconds = 0
        minutes++
    }
    if (minutes === 60) {
        minutes = 0
        hours++
    }

    timer.innerText = `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)}`
}


function formatTime(number) {
    if (number < 10) number = "0" + number
    return number
}


let stopsList = document.querySelector("#stops-list")

function registerStop() {
    let newStop = document.createElement("li")

    let ms = ""
    if (milliseconds < 100)  ms = "0" + formatTime(milliseconds)  // format function for the possibility of hitting 0 ms.
    else ms = milliseconds

    newStop.innerText = `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)} : ${ms}`

    stopsList.appendChild(newStop)
}


const resetBtn = document.querySelector("#reset-btn")

resetBtn.addEventListener("click", resetTimer)

function resetTimer() {
    milliseconds = seconds = minutes = hours = 0
    timerIsActive = false
    activateOrDeactivateTimer()
    stopsList.innerHTML = ""

    timer.innerText = `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)}`
}


document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        event.preventDefault()   // Preventing button triggers if selected when spacebar is pressed.
        timerIsActive = !timerIsActive
        activateOrDeactivateTimer()
    } else if (event.key === "Escape") {
        resetTimer()
    }
})