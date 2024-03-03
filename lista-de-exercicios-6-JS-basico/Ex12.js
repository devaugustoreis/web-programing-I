// Loop de Fatorial:
// Escreva um loop que calcule o fatorial de um número N e imprima o resultado.

// Função Recursiva
function fatorial(n) {
    if (n == 0) return 1
    else return n * fatorial(n - 1)
}

console.log(fatorial(5))

// Loop Manual
let number = 5
let fatorialManual = 1

for (let i = number; i > 1; i--) {
    fatorialManual *= i
}

console.log(fatorialManual)