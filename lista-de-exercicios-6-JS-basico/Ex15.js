// Objeto Pessoa:

// Crie um objeto "pessoa" com propriedades nome, idade e cidade, e imprima-o no console.

let pessoa = {
    nome: "Augusto",
    idade: 28,
    cidade: "Gaspar"
}

for (key in pessoa) {
    console.log(`${key}: ${pessoa[key]}`)
}