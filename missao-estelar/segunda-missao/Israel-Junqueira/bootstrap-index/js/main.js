

var missao = "Segunda Missão Estelar JS";
console.log(missao)

var hiperespaco = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!"
console.log(hiperespaco)

var nomeCliente;
var renda;
var dataNascimento = new Date(2000, 08, 02);
var ativo;

nomeCliente = "israel";
renda = 1500;
ativo = true;

function exibirDadosClienteVariaveis() {
    if (ativo == true) {
        console.log("cliente ativo")
    }
    console.log(nomeCliente+":"+ typeof nomeCliente)
    console.log(renda + ":"+typeof renda)
    console.log(dataNascimento +":"+ typeof dataNascimento)


}

exibirDadosClienteVariaveis()


var Clienteobj = {
    Nomecliente: "israel2",
    renda: 1500,
    dataNacismento: new Date(2000, 08, 02),
    ativo: true
}
console.log(Clienteobj.Nomecliente)
console.log("___________")

//objeto literal
var produtos = {qtdd: 50, nome:"cocacola",lts:2}
console.log(produtos.nome )
console.log(produtos)
console.log(produtos['qtdd'])
//objeto construtor
console.log("____________")
var pessoa = new Object();
pessoa.nome = "israel";
pessoa.idade = 22;
console.log(pessoa.nome)
console.log(pessoa)
console.log(pessoa['idade'])

function exibirDadosClienteObjeto() {

}