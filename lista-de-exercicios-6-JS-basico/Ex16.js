// Arrays

// Declare um array de frutas e adicione duas frutas usando métodos de array. Em seguida, remova a última fruta e exiba o array modificado. 

let fruits = ["banana", "watermelon", "pineapple", "passion fruit", "grapes"]
fruits.splice(0, 0, "cherry", "strawberry")
fruits.pop()

console.log(fruits)