// Condicional Simples:

// Crie um algoritmo que solicite ao usuário três números e imprima eles em ordem crescente. (sem utilizar funções ou métodos de ordenação prontos disponiveis na linguagem)

let n1 = prompt("Informe o 1º número: ")
let n2 = prompt("Informe o 2º número: ")
let n3 = prompt("Informe o 3º número: ")

// Comparação Manual
if (n1 <= n2 && n1 <= n3) {
    if (n2 <= n3) console.log(`${n1} <= ${n2} <= ${n3}`)
    else console.log(`${n1} <= ${n3} <= ${n2}`)
} else if (n2 <= n1 && n2 <= n3) {
    if (n1 <= n3) console.log(`${n2} <= ${n1} <= ${n3}`)
    else console.log(`${n2} <= ${n3} <= ${n1}`)
} else {
    if (n1 <= n2) console.log(`${n3} <= ${n1} <= ${n2}`)
    else console.log(`${n3} <= ${n2} <= ${n1}`)
}


// Algoritmo de Ordenação
let numeros = [Number(n1), Number(n2), Number(n3)]

// console.log(`Bubble Sort Alternativo: ${numeros}`)

// for (let i = 0; i < numeros.length; i++) {
//     for (let j = i; j < numeros.length; j++) {
//         if (numeros[i] > numeros[j]) {
//             aux = numeros[j]
//             numeros[j] = numeros[i]
//             numeros[i] = aux
//             console.log(`Bubble Sort Alternativo: ${numeros}`)
//         }
//     }
// }

// console.log(`Bubble Sort Alternativo Final: ${numeros}`)


console.log(`Array Original: ${numeros}`)

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < (numeros.length - 1); j++) {
        if (numeros[j] > numeros[j + 1]) {
            aux = numeros[j]
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = aux
        }
    }
}

console.log(`Array ordenado: ${numeros}`)
  