export default function adicionaVetor(_vetorDeNumeros) {

    // Privado
    // let _vetorDeNumeros = []
    // window.localStorage.setItem('_vetorDeNumeros', Array())
    // let _vetorDeNumeros = window.localStorage.getItem('_vetorDeNumeros')
    // console.log(_vetorDeNumeros)

    //Público <- objetos
    return {
        adicionaAoVetorDeNumeros: function(numero) {
            _vetorDeNumeros.push(numero)
            // return this
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
        menorDoVetorDeNumeros: function() {
            return Math.min(..._vetorDeNumeros)
        },
        maiorDoVetorDeNumeros: function() {
            return Math.max(..._vetorDeNumeros)
        },
        procuraRepetidoNoVetorDeNumeros: function(numero) {
            return _vetorDeNumeros.includes(numero)
        }
    }
}

