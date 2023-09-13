export default function encapsulaVetor() {

    let _vetorDeNumeros = []
    let adicionaVetor = new adicionaVetor(_vetorDeNumeros)
    return adicionaVetor

    // Se não existe, cria.
    // if (!localStorage.hasOwnProperty('_vetorDeNumeros')) {
    //     window.localStorage.setItem('_vetorDeNumeros', JSON.stringify(Array()))
    //     console.log(typeof(_vetorDeNumeros), _vetorDeNumeros)
    // }
/*
    IGUAIS
    let _vetorDeNumeros = window.localStorage.getItem('_vetorDeNumeros')
    let _vetorDeNumeros = JSON.parse(localStorage.getItem('_vetorDeNumeros') || '[]')
*/
    // let vetor = JSON.parse(localStorage.getItem('_vetorDeNumeros') || '[]')

    // if (vetor) {
        // 1º: Existe alguma coisa? Object
        // 2º: É um vetor?

        // let vetor = JSON.parse(localStorage.getItem('_vetorDeNumeros') || '[]')

        // let _vetorDeNumeros = Array(vetor)

        // let _vetorDeNumeros = vetor.map(export default function(obj) {
        //     return Object.keys(obj).map(export default function(chave) {
        //         return obj[chave]
        //     })
        // })


        // console.log(`Tipo do vetor: ${typeof(vetor)},\nVariável vetor: ${vetor},\nTipo do _vetorDeNumeros: ${typeof(_vetorDeNumeros)}`)


        // let adicionaVetor = new adicionaVetor(_vetorDeNumeros)


        // let _vetorDeNumeros = vetor.map(export default function(obj) {
        //     return Object.keys(obj).map(export default function(chave) {
        //         return obj[chave]
        //     })
        // })

        // return adicionaVetor
    // } else {
        // let adicionaVetor = new adicionaVetor(vetor)
        // console.log(typeof(_vetorDeNumeros), typeof(adicionaVetor), adicionaVetor)
        // return adicionaVetor
    // }

    // adicionaVetor.adicionaAoVetorDeNumeros(10)
    // console.log(adicionaVetor, _vetorDeNumeros)
    // return adicionaVetor
}
