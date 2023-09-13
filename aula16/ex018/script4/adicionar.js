export default function adicionar() {

    let stringValorDoNumero = document.getElementById('numero')

    let valorDoNumero       = stringValorDoNumero.value
    let foco                = stringValorDoNumero.focus()

    // Irá apagar o valor digitado na caixa de números, após o click no botão "Adicionar".
    stringValorDoNumero.value = ''

    // Nada de valor < 1 ou > 100 e Nada de caixa vazia.
    if (valorDoNumero < 1 || valorDoNumero > 100) {
        window.alert('[ERRO]: porra, caraalho, só pode valor entre 1 e 100, porra!')
    }

    else {
        let numero        = Number(valorDoNumero)

        let adicionaVetor = encapsulaVetor()

        // let finalizar     = exibeFinalizar()

        // console.log(typeof(Object.values(adicionaVetor.procuraRepetidoNoVetorDeNumeros())))

        let repetido      = adicionaVetor.procuraRepetidoNoVetorDeNumeros(numero)

        // let repetido       = adicionaVetor.procuraRepetidoNoVetorDeNumeros(numero)

        // let adicionaVetor = new adicionaVetor()

        // let repetido      = adicionaVetor.procuraRepetidoNoVetorDeNumeros(numero)

        if (repetido) {

            window.alert('Repetido')

        } else {

            adicionaVetor.adicionaAoVetorDeNumeros(numero)

            // vetorDeNumeros.push(numero)

            adicionaNumero(numero)

            // let _vetorDeNumeros = JSON.parse(localStorage.getItem('_vetorDeNumeros'))
            // console.log(_vetorDeNumeros, numero)
        }


    }

}
