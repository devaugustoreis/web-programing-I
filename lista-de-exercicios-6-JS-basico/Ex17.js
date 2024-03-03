// Capturando evento de click

// Escreva um programa que conte o número de click que o usuário fez em um botão e imprima no terminal;
// Altere seu programa e mostre o conteúdo em um item html abaixo do botão.

let totalClicks = 0
let p = document.querySelector("#total-clicks")

function countClicks() {
    totalClicks += 1
    console.log(`O botão foi clicado ${totalClicks} vezes.`)
    p.innerHTML = totalClicks
}