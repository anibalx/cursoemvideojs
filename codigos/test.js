/*
    REFERÊNCIAS -< https://pt.stackoverflow.com/questions/329223/armazenar-um-array-de-objetos-em-um-local-storage-com-js
                -> http://blog.thiagobelem.net/armazenando-informacoes-no-computador-do-visitante-com-localstorage-e-sessionstorage
                -> https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
                -> https://pt.stackoverflow.com/questions/191522/como-pegar-setar-pegar-objeto-no-localstorage
                -> https://pt.stackoverflow.com/questions/191522/como-pegar-setar-pegar-objeto-no-localstorage
                -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos
*/

function AdicionaVetor() {
    // Privado
    let _vetorDeNumeros = []    

    // Público
    return {
        adicionaAoVetorDeNumeros: function(numero) {
            _vetorDeNumeros.push(numero)
            // return this
        },
        exibeVetorDeNumeros: function() {
            return _vetorDeNumeros
        },
  
        exibeComprimentoDoVetorDeNumeros: function() {
            return _vetorDeNumeros.length
        },
        somaDoVetorDeNumeros: function() {
            return _vetorDeNumeros.reduce((total, meSomeAoTotal) => total + meSomeAoTotal)
        },
        mediaDoVetorDeNumeros: function() {
            return Math.floor(this.somaDoVetorDeNumeros()/this.exibeComprimentoDoVetorDeNumeros())
        },
        maiorDoVetorDeNumeros: function() {
            return Math.max(..._vetorDeNumeros)
        },
        menorDoVetorDeNumeros: function() {
            return Math.min(..._vetorDeNumeros)
        },
        repetidoNoVetorDeNumeros: function(numero) {
            return _vetorDeNumeros.includes(numero)
        }
    }
}


function encapsula1() {
    let numero = 10
    console.log(typeof(numero))

    let adicionaVetor = new AdicionaVetor()

    for (numero of Array(5).keys()) {
        adicionaVetor.adicionaAoVetorDeNumeros(numero)
    }

    let comprimento = adicionaVetor.exibeComprimentoDoVetorDeNumeros()
    let soma        = adicionaVetor.somaDoVetorDeNumeros()
    let media       = adicionaVetor.mediaDoVetorDeNumeros()
    let menor       = adicionaVetor.mediaDoVetorDeNumeros()
    let maior       = adicionaVetor.maiorDoVetorDeNumeros()

    console.log(comprimento, soma, media, menor, maior)

}

encapsula1()


function encapsula2(num) {
    let numero = [num]
    console.log(typeof(numero))

    let adicionaVetor = new AdicionaVetor()

    // for (numero of Array(5).keys()) {
    //     adicionaVetor.adicionaAoVetorDeNumeros(numero)
    // }

    console.log(numero)
    
    let adição      = adicionaVetor.adicionaAoVetorDeNumeros(numero)
    let comprimento = adicionaVetor.exibeComprimentoDoVetorDeNumeros()
    let soma        = adicionaVetor.somaDoVetorDeNumeros()
    let media       = adicionaVetor.mediaDoVetorDeNumeros()
    let menor       = adicionaVetor.mediaDoVetorDeNumeros()
    let maior       = adicionaVetor.maiorDoVetorDeNumeros()

    console.log(comprimento, soma, media, menor, maior)

    // return comprimento, soma, media, menor, maior

}
let numero2 = encapsula2(1)


function encapsula3() {

    let adicionaVetor = new AdicionaVetor()

    return {
        adição: function(numero3){
            return adicionaVetor.adicionaAoVetorDeNumeros(numero3)
        },
        exibe: function() {
            return adicionaVetor.exibeVetorDeNumeros()
        },
        comprimento: function(){
            return adicionaVetor.exibeComprimentoDoVetorDeNumeros() 
        },
        soma: function(){
            return adicionaVetor.somaDoVetorDeNumeros()
        },
        media: function(){
            return adicionaVetor.mediaDoVetorDeNumeros()
        },
        menor: function(){
            return adicionaVetor.menorDoVetorDeNumeros()
        },
        maior: function(){
            return adicionaVetor.maiorDoVetorDeNumeros()
        },

        repetido: function(numero3) {
            return adicionaVetor.repetidoNoVetorDeNumeros(numero3)
        }
    }

}

let numero3 = encapsula3()

// numero3.adição(1)
// numero3.adição(2)
// numero3.adição(3)

for (numero of Array(10).keys()) {
    numero3.adição(numero)   
}


numero3.exibe().forEach(numeroNoVetor => {
    console.log(numeroNoVetor)
})


