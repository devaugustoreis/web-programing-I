// String para Array:

// Converta uma string em um array de palavras e imprima o array.
// Converta um string em um array de palavras e imprima o array, sem utilizar funções prontas como “split()”

let string = "Esta string será convertida em um array de palavras."
let word = []
let wordsArray = []

for (let i = 0; i < string.length; i++) {
    word.push(string[i])
    if (string[i].indexOf(" ") != -1 || i == (string.length - 1)) {
        word = word.join("")
        word = word.trim();
        wordsArray.push(word)
        word = []
    }
}

console.log(wordsArray)