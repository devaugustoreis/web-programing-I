// Movimento do Mouse

// Detecte o movimento do mouse sobre um elemento e exiba as coordenadas X e Y no console

let box1 = document.querySelector("#box-1")
let coord = document.querySelector("#coords-value")

box1.addEventListener("mousemove", (event) => {
    console.clear()
    let x = event.clientX - event.target.offsetLeft
    let y = event.clientY - event.target.offsetTop
    coord.innerHTML = `<span class="blue">${x}</span> <span class="red">${y}</span>`
    console.log(`${x}, ${y}`)
})