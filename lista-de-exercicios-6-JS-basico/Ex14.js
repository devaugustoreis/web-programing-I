// Array de Números Pares:

// Crie um array contendo os primeiros N números pares, informados pelo usuário.

let input
let pares = []

do {
    input = prompt("Informe um número [Digite \"FIM\" para encerrar]: ")
    
    while (isNaN(parseInt(input)) && input != "FIM") {
        console.log("Por favor informe um número!")
        input = prompt("Informe um número [Digite \"FIM\" para encerrar]: ")
    }

    if (input != "FIM" && Number(input) % 2 == 0) {
        pares.push(Number(input))
    }

} while (input != "FIM")

console.log(pares)