// Iteragindo com dados no Dom

// Crie um titulo Soma, com dois campos input e um botão, quando o usuário informar os dados e clicar no botão faça a soma dos números informados nos campos input.

let n1Input = document.querySelector("#n1")
let n2Input = document.querySelector("#n2")
let sumBtn = document.querySelector("#sum-btn")
let total = document.querySelector("#total")

sumBtn.addEventListener("click", () => {
    if (isNaN(parseInt(n1Input.value)) || isNaN(parseInt(n2Input.value))) {
        total.innerHTML = "Por favor, insira dois números!"
    } else {
        let soma = parseInt(n1Input.value) + parseInt(n2Input.value)
        total.innerHTML = `${n1Input.value} + ${n2Input.value} = ${soma}`
    }
})