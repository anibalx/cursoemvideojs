/*
    REFERÊNCIAS: 
                -> https://pt.stackoverflow.com/questions/371722/uso-de-iife-em-es6
                -> https://developer.mozilla.org/pt-BR/docs/Glossario/IIFE
    
    Bloco protege o escopo da variável, 
    não sendo necessário IIEF
    (Immediately Invoked Function Expressions):

    (function() {
        var numero = 1
    })()

    console.log(numero) <- Dá erro: numero is not defined
*/



let x = 1

{
  let x = 2
}

console.log(x)