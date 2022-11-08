//typeof
var numero = "20";
var numero2 = new String( "20");
console.log("tipo numero: "+typeof(numero))

console.log("numero instanceof string:",numero instanceof String) //ele retorna false pq usei da forma literal
console.log("numero instanceof string:",numero2 instanceof String) //agr ja retorna true
