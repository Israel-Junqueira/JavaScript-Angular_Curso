var array1 = ['israel', 'luan', 'renan']
var array2 = new Array('israel', 'luan', 'renan')
var array3 = { nome: 'rael', idade: '22' }
console.log(array1)
console.log(array2)
console.log(array3.nome)
console.log("_______________________")
//for in
for (var i in array3) {
    console.log("valor:" + i + ":" + array3[i])

}

for (var i in array1) {
    console.log("nomes:" + array1[i])

}

//for of

console.log("_____________For of___________________")//recebe o valor do elemento array
for (var i of array1) {
    console.log("nomes:" + i)

}

