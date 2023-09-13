export default function exibeFinalizar() {

    let pegaDivResultado = criaDiv()

    // let adicionaVetor = encapsulaVetor()

    // let adicionaVetor = new adicionaVetor()

    let comprimento = adicionaVetor.exibeComprimentoDoVetorDeNumeros()
    let soma        = adicionaVetor.somaDoVetorDeNumeros()
    let media       = adicionaVetor.mediaDoVetorDeNumeros()
    let menor       = adicionaVetor.mediaDoVetorDeNumeros()
    let maior       = adicionaVetor.maiorDoVetorDeNumeros()

    // Valor precisa ser apagado, caso haja adição de novo valor
    pegaDivResultado.innerHTML = ''

    pegaDivResultado.innerHTML += `<p> Ao todo, temos ${comprimento} números cadastrados </p>`
    pegaDivResultado.innerHTML += `<p> O menor valor informado foi: ${menor} </p>`
    pegaDivResultado.innerHTML += `<p> O maior valor informado foi: ${maior} </p>`
    pegaDivResultado.innerHTML += `<p> Somando todos os valores temos: ${soma} </p>`
    pegaDivResultado.innerHTML += `<p> A média dos valores digitados é: ${media} </p>`

    console.log(pegaDivResultado)
}
