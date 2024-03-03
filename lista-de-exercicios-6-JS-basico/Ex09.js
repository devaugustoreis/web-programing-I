// For

// Escreva um algoritmo que imprima no console 10 números.
// Altere seu algoritmo para adicionar 10 paragrafos a estrutura do DOM, cada um com o número em ordem crescente.

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
    let p = document.createElement("p")
    p.innerHTML = `Parágrafo ${i}`
    document.body.appendChild(p)
}