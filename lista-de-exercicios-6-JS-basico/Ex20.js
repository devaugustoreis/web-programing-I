// Aplicativo de Notas simples

// Escreva uma página com um campo input e um botão, e cada vez que o usuário informar um texto e clicar sobre o botão adicione um item a um array e o imprima no console.
// Altere seu programa e cada vez que o usuário clicar no botão, adicione o paragrafo em uma div com paragrafo abaixo, exibindo o texto da div.

let btn = document.querySelector("#add-array-btn")
let div = document.querySelector("#array-div")
let array = []

btn.addEventListener("click", () => {
    let item = document.querySelector("#array-input").value
    array.push(item)
    console.log(array)
    document.querySelector("#array-input").value = ""
    p = document.createElement("p")
    p.innerHTML = `Array = [${array}]`
    div.appendChild(p)
})
