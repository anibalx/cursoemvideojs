/*
    REFERÊNCIAS -> https://pt.stackoverflow.com/questions/9936/como-funcionam-fun%C3%A7%C3%B5es-an%C3%B4nimas
                -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
*/

function Empresa(nome){
    //privates
    var _funcionarios       = []
    var _ordenaFuncionarios = function(){
        return _funcionarios.sort()
    }
    //public's
    return {
        adicionaFuncionario: function(funcionario) {
            _funcionarios.push(funcionario)
            return this
        },
        meusFuncionarios: function(){
            return _ordenaFuncionarios(_funcionarios).join(", ")
        }
    };
}

// FUNCIONOU COM THIS COMENTADO: //return this. 
// var p = new Empresa("Foo Ltda")
// p.adicionaFuncionario("João da Silva")
// p.adicionaFuncionario("Maria da Rosa")
// console.log(p.meusFuncionarios()) //João da Silva, Maria da Rosa.

// FUNCIONOU COM THIS DESCOMENTADO: return this.
var p = new Empresa("Foo Ltda")
console.log(p.adicionaFuncionario("João da Silva")
             .adicionaFuncionario("Maria da Rosa")
             .meusFuncionarios()) //Joao da Silva, Maria da Rosa