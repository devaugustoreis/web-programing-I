// Manipulando o DOM com JavaScript

// Escreva um programa que altere a cor de fundo de um elemento HTML quando um botão for clicado.
// Modifique seu programa para adicionar um evento de mouseover que altere a cor de fundo do elemento quando o mouse passar por cima dele.

let box1 = document.querySelector("#box-1")
let box2 = document.querySelector("#box-2")
let btn = document.querySelector("#change-color-btn")

function generateRandomBGColor(element) {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    element.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`
}

btn.addEventListener("click", () => {
    generateRandomBGColor(box1)
})

box2.addEventListener("mouseover", () => {
    generateRandomBGColor(box2)
})