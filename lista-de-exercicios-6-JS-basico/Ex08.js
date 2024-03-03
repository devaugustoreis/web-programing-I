// Switch Case:

// Crie um programa que solicite ao usuário que escolha uma opção de menu (1, 2, ou 3) e, com base na opção escolhida, imprima uma mensagem correspondente.

let opcao = prompt("Escolha uma opção: [1, 2 ou 3]")

while (!["1", "2", "3"].includes(opcao)) {
    alert("Por favor insira uma opção válida!")
    opcao = prompt("Escolha uma opção: [1, 2 ou 3]")
}

switch (opcao) {
    case "1":
        console.log("Um é pouco!")
        break
    case "2":
        console.log("Dois é bom!")
        break
    case "3":
        console.log("Três é demais!")
        break
}