// Tipos de dados ”https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures”

// Crie uma função que contenha a declaração de variaveis utilizando let dos seguintes tipos abaixo listados, e em seguida imprima no console o valor e tipo de cada uma delas.
// [String](<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String>) para o primitivo string.
// [Number](<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number>) para o primitivo .
// [Boolean](<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean>) para o primitivo Boolean.
// [Symbol](<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol>) para o primitivo Symbol.
// Object Object não é um tipo primitivo.
// Array Objeto array não é um tipo primitivo.

function dataTypes() {
    let string = "This is a string"
    let number = 0
    let boolean = true
    let symbol = Symbol("Simbolo")
    let object = {name: 'Augusto', age: 28}
    let array = ["index 0", "index 1", "index 2"]

    console.log(`${string} / Type: ${typeof(string)}`)
    console.log(`${number} / Type: ${typeof(number)}`)
    console.log(`${boolean} / Type: ${typeof(boolean)}`)
    console.log(`${symbol.toString( )}/ Type: ${typeof(symbol)}`)
    console.log(`{ Nome: ${object.name}, Idade: ${object.age} } / Type: ${typeof(object)}`)
    console.log(`[${array}] / Type: ${typeof(array)}`)
}

dataTypes()