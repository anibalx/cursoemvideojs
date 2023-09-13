let vetorDeNumeros = []

function adicionar() {

/*
    let valorNumero = document.getElementById('numero').value
*/

    let stringValorNumero = document.getElementById('numero')

    let valorNumero             = stringValorNumero.value
    let foco                    = stringValorNumero.focus()
    let comprimentoStringNumero = stringValorNumero.length

    // Irá apagar o valor digitado na caixa de números, após o click no botão "Adicionar".
    stringValorNumero.value = ''

    // Nada de valor < 0 ou > 100 e Nada de caixa vazia.
    if (valorNumero < 1 || valorNumero > 100) {
        window.alert('[ERRO]: porra, caraalho, só pode valor entre 1 e 100, porra!')
    } 
    
    else {
        let numero   = Number(valorNumero)
        let repetido = procuraRepetido(numero)

        if (!repetido) {
            vetorDeNumeros.push(numero)

            exibe(numero)
            
        }                    
    

    }

}

function finalizar() {

    // Nada de finalizar sem valores
    if (vetorDeNumeros.length == 0) {
        window.alert('[ERRO]: caraaaleo, não deixa o rolê vazio, porra!')
    } else {
        let vemDeFinalizar = true
        exibe(false, vemDeFinalizar)
    }
}


function procuraRepetido(numero) {
    // Nada de valor repetido
    vetorDeNumeros.sort()
    for (let posicao in vetorDeNumeros) {
        if (vetorDeNumeros[posicao] == numero) {
            window.alert('Repetido')
            return true
        }
                            
    }
    return false
}


function exibe(temNumero=NaN, vemDeFinalizar=false) {

    // let exibeResultado = criaDiv()

    if (!document.getElementById('resultado')) {
        let divExibeResultado = document.createElement('div')
        divExibeResultado.setAttribute('id', 'resultado')

        let exibeNumeros   = document.getElementById('exibenumeros')
        exibeNumeros.appendChild(divExibeResultado)
    }

    let pegaDivResultado = document.querySelector('div#resultado')

    // let existeFilho    = false
    // let remove

    if (temNumero) {

        let stringArray   = document.getElementById('array')
        let mostraNumero  = document.createElement('option')

        
        // Soma novos números à área do option e os deixa visíveis, caso não se tenha atualizado o navegador.
        stringArray.innerHTML += ''

        // .text = parte de dentro do option.
        mostraNumero.text += `Valor ${temNumero} foi adicionado!`

        // Bom para PHP. 
        mostraNumero.value = `tab${temNumero}`

        // Adiciona ao select, seu filho option, com os dados armazenados em mostraNumero.text e a serem exibidos pelo html.    
        stringArray.appendChild(mostraNumero)

        // div com id="resultado" será apagada depois de se adicionar novo valor.
        pegaDivResultado.innerHTML = ''


        // console.log(pegaDivResultado)
/*

        Cria Div
        let divCriada = document.createElement('div')
        
        Set o ID e seu valor
        divCriada.setAttribute('id', 'resultado')
        
        Adiciona Div Criada ao "Pai"
        exibeNumeros.appendChild(divCriada)
        
        Põe Texto na DIV
        divCriada.text += `Olá, Mundo!`
        
        Pega DIV CRIADA pelo id
        let pegaDivCriada = document.querySelector('div#resultado')

        Exibe informações no console
        console.log(pegaDivCriada)
*/
        // pegaDivResultado.appendChild()

        // divExibeResultado.innerHTML = 'Olá'

        // exibeNumeros.appendChild(divExibeResultado)


        // console.log(divExibeResultado)


        // if (existeFilho) {
        //     exibeNumeros.removeChild(divExibeResultado)
        //     existeFilho = false
        // }
        
    } else if (vemDeFinalizar) {


        let comprimento = vetorDeNumeros.length
        let soma        = vetorDeNumeros.reduce((total, meSomeAoTotal) => total + meSomeAoTotal)
        let media       = soma/comprimento


        // Valor precisa ser apagado, caso haja adição de novo valor
        pegaDivResultado.innerHTML = ''

        pegaDivResultado.innerHTML += `<p> Ao todo, temos ${comprimento} números cadastrados </p>`
        pegaDivResultado.innerHTML += `<p> O maior valor informado foi: ${Math.max(...vetorDeNumeros)} </p>`
        pegaDivResultado.innerHTML += `<p> O menor valor informado foi: ${Math.min(...vetorDeNumeros)} </p>`
        pegaDivResultado.innerHTML += `<p> Somando todos os valores temos: ${soma} </p>`
        pegaDivResultado.innerHTML += `<p> A média dos valores digitados é: ${media} </p>`


        // exibeNumeros.appendChild(pegaDivResultado)


        // // Valor precisa ser apagado, caso haja adição de novo valor
        // divExibeResultado.innerHTML = ''

        // divExibeResultado.innerHTML += `<p> Ao todo, temos ${comprimento} números cadastrados </p>`
        // divExibeResultado.innerHTML += `<p> O maior valor informado foi: ${Math.max(...vetorDeNumeros)} </p>`
        // divExibeResultado.innerHTML += `<p> O menor valor informado foi: ${Math.min(...vetorDeNumeros)} </p>`
        // divExibeResultado.innerHTML += `<p> Somando todos os valores temos: ${soma} </p>`
        // divExibeResultado.innerHTML += `<p> A média dos valores digitados é: ${media} </p>`


        // exibeNumeros.appendChild(divExibeResultado)
        // exibeNumeros.removeChild(divExibeResultado)
        // exibeNumeros.insertAdjacentElement('afterend', divExibeResultado)
        // existeFilho = true
        console.log(pegaDivResultado)
    

    }
    
    
}

// function criaDiv() {
//     let divExibeResultado = document.createElement('div')
//     divExibeResultado.setAttribute('id', 'resultado')
//     let pegaDivResultado = document.getElementById('resultado')
//     return pegaDivResultado
// }