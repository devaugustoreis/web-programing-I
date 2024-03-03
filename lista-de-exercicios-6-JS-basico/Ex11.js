// Loop de Números Primos:

// Escreva um loop que imprima todos os números primos até N.

let n = 60
let primo

for (let i = 2; i < n; i++) {
    primo = true
    for (let j = (i - 1); j >= 2; j--) {
        if (i % j == 0) primo = false
    }
    if (primo == true) console.log(i)
}