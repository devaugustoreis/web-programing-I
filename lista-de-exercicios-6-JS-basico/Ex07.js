// Condicional Composta

// Crie um mini quiz com três perguntas, armazenadas em um array de objetos, exiba as perguntas ao usuário no prompt, se o usuário acertar informe a cada pergunda se ele acertou ou errou e por fim informe o resultado final.

quiz = [
    {pergunta: "Quanto é 2 + 2?", resposta: 4},
    {pergunta: "Quanto é 10 / 2?", resposta: 5},
    {pergunta: "Quais os valores de x que satisfazem a equação 2sin(x).cos(x) = sin(2x)?", resposta: "Qualquer valor de x"}
]

let pontos = 0

for (objeto of quiz) {
    let input = prompt(objeto.pergunta)
    if (input == objeto.resposta) {
        alert("Parabéns, você acertou!")
        pontos++
    }
    else alert("Resposta errada!")
}

alert(`Você fez ${pontos} pontos de 3 possíveis!`)