// Par ou Ímpar:

// Crie uma função que receba um número por parametro e verifique se o número é par ou ímpar e imprima o resultado.
// Crie uma função que solicite ao usuário um número utilizando o prompt do navegador e em seguinda informe se o número informado é par ou impar.

function verificarParOuImpar(numero) {
    if (numero % 2 == 0) console.log(`${numero} é par.`)
    else console.log(`${numero} é impar.`)
}

verificarParOuImpar(1)
verificarParOuImpar(2)

function solicitarNumero() {
    let numero = prompt("Informe um número: ")
    if (numero % 2 == 0) alert(`${numero} é par.`)
    else alert(`${numero} é impar.`)
}

solicitarNumero()