// Detecta teclas

// Monitore o teclado e apresente de forma animada no centro da tela as letras digitadas pelo usuário.
// Altere seu programa para manter a lista de teclas digitadas pelo usuário.

let allKeys = document.querySelector("#last-inputs")
let lastLetter = document.querySelector("#giant-letter")
let changeLetterColor

document.onkeyup = function(event) {
    setTimeout(() => {
        let key = event.key
        lastLetter.innerHTML = key
        lastLetter.classList.add("grow-letter", "rotate-letter")
        allKeys.innerHTML += `${key} / `
    }, 200)
}

document.onkeydown = function(event) {
    lastLetter.classList.remove("grow-letter", "rotate-letter")
}

function generateRandomBGColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    lastLetter.style.setProperty('--letter-color', `rgba(${red}, ${green}, ${blue})`)
}

setInterval(generateRandomBGColor, 1000)