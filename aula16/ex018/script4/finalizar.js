export default function finalizar() {

    let adicionaVetor = encapsulaVetor()

    // let adicionaVetor = new adicionaVetor()

    let comprimentoDoVetor = adicionaVetor.exibeComprimentoDoVetorDeNumeros()

    let num = adicionaVetor.adicionaAoVetorDeNumeros(10)

    console.log(typeof(adicionaVetor), num)

    // Nada de finalizar sem valores
    if (comprimentoDoVetor == 0) {
        window.alert('[ERRO]: caraaaleo, não deixa o rolê vazio, porra!')
    } else {
        exibeFinalizar()
    }
}
