

try{
    divisao(2,A) //colei uma letra para dividir
}catch(error){
    console.log(error + ": informe apenas numeros")
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}finally{
    console.log("sempre será executado!!")
}


function divisao(a,b){
    console.log(a/b)
}


try {
    
} catch (error) {
    
}finally{

}