let vetorDeNumeros = []

function adicionar() {

/*
    let valorNumero = document.getElementById('numero').value
*/

    let stringValorNumero = document.getElementById('numero')
    let stringArray       = document.getElementById('array')
    var resultado         = document.querySelector('div#resultado')

    let valorNumero             = stringValorNumero.value
    let foco                    = stringValorNumero.focus()
    let comprimentoStringNumero = stringValorNumero.length

    // Irá apagar o valor digitado na caixa de números, após o click no botão "Adicionar".
    stringValorNumero.value = ''

/*
    // Nada de caixa vazia
    if (comprimentoStringNumero == 0) {
        window.alert('[ERRO]: caraaaleo, não deixa o rolê vazio, porra!')
    } else if (Number(valorNumero) < 1 || Number(valorNumero) > 100) {

*/
    // Nada de valor < 0 ou > 100 e Nada de caixa vazia.
    if (valorNumero < 1 || valorNumero > 100) {
        window.alert('[ERRO]: porra, caraalho, só pode valor entre 1 e 100, porra!')
    } 
    
    else {
        let numero       = Number(valorNumero)
        let mostraNumero = document.createElement('option')

        let repetido     = procuraRepetido(numero)

    /*
        // Nada de valor repetido
        vetorDeNumeros.sort()
        for (let posicao in vetorDeNumeros) {
            if (vetorDeNumeros[posicao] == numero) {
                var repetido = true
                window.alert('Repetido')
                break
            }
          
        }
    */

        if (!repetido) {
            vetorDeNumeros.push(numero)
        /*
            repetido = false
        */

            // Soma novos números à área do option e os deixa visíveis, caso não se tenha atualizado o navegador.
            stringArray.innerHTML += ''

            // .text = parte de dentro do option.
            mostraNumero.text += `Valor ${valorNumero} foi adicionado!`

            // Bom para PHP. 
            mostraNumero.value = `tab${valorNumero}`

            // Adiciona ao select, seu filho option, com os dados armazenados em mostraNumero.text e a serem exibidos pelo html.    
            stringArray.appendChild(mostraNumero)


            // div com id="resultado" será apagada depois de se adicionar novo valor.
            resultado.innerHTML = ''
        }                    
    

    }

}

function finalizar() {

    // Nada de finalizar sem valores
    if (vetorDeNumeros.length == 0) {
        window.alert('[ERRO]: caraaaleo, não deixa o rolê vazio, porra!')
    } else {

        let comprimento = vetorDeNumeros.length
        let soma        = vetorDeNumeros.reduce((total, numero) => total + numero)
        let media       = soma/comprimento

        // Valor precisa ser apagado, caso haja adição de novo valor
        resultado.innerHTML = ''

        resultado.innerHTML += `<p> Ao todo, temos ${comprimento} números cadastrados </p>`
        resultado.innerHTML += `<p> O maior valor informado foi: ${Math.max(...vetorDeNumeros)} </p>`
        resultado.innerHTML += `<p> O menor valor informado foi: ${Math.min(...vetorDeNumeros)} </p>`
        resultado.innerHTML += `<p> Somando todos os valores temos: ${soma} </p>`
        resultado.innerHTML += `<p> A média dos valores digitados é: ${media} </p>`
    }
}

// Nada de valor repetido
function procuraRepetido(numero) {
    
    vetorDeNumeros.sort()
    for (let posicao in vetorDeNumeros) {
        if (vetorDeNumeros[posicao] == numero) {
            window.alert('Repetido')
            return true
        }
                            
    }
    return false
}