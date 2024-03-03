// Condicional simples:

// Crie um algoritmo que solicite ao usuário qual a sua idade e em seguida informe se ele é criança, adolescente, adulto ou idoso.

let idade = prompt("Qual sua idade?")

while (isNaN(parseInt(idade)) || parseInt(idade) < 0) {
    alert("Por favor informe um número positivo!")
    idade = prompt("Qual sua idade?")
}

idade = parseInt(idade)

if (idade < 13) alert("Você é criança.")
else if (idade < 18) alert("Você é adolescente.")
else if (idade < 65) alert("Você é adulto.")
else alert("Você é idoso.")