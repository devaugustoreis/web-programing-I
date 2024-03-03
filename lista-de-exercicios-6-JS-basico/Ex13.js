// Contagem de Vogais:

// Escreva uma função que conta o número de vogais em uma string.

function countVowels(string) {
    let vowelRegEx = /[aeiou]/gi
    let vowelsArray = string.match(/[aeiou]/gi)
    
    // let vowelCount = 0
    // for (character of string) {
    //     if (vowelRegEx.test(character)) vowelCount++
    // }
    // return vowelCount

    return vowelsArray == null ? 0 : vowelsArray.length
}

console.log(countVowels("meat"))
console.log(countVowels("orange"))
console.log(countVowels("pineapple"))