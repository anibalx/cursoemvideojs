/*
    REFERẼNCIAS -> https://pt.stackoverflow.com/questions/187803/como-criar-div-com-javascript
                -> https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
                -> https://developer.mozilla.org/pt-BR/docs/Web/API/element/removeAttribute
                -> https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
                -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains
                -> https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage    
                -> https://pt.stackoverflow.com/questions/191522/como-pegar-setar-pegar-objeto-no-localstorage
                -> https://pt.stackoverflow.com/questions/191522/como-pegar-setar-pegar-objeto-no-localstorage
                -> https://pt.stackoverflow.com/questions/105978/converter-array-de-objetos-para-um-array-de-arrays
                -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos
*/

let vetorDeNumeros = []

function adicionar() {

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
        let numero   = Number(valorDoNumero)
        let repetido = procuraRepetido(numero)

        if (!repetido) {
            vetorDeNumeros.push(numero)

            adicionaNumero(numero)
            
        }                    
    

    }

}


function finalizar() {

    // Nada de finalizar sem valores
    if (vetorDeNumeros.length == 0) {
        window.alert('[ERRO]: caraaaleo, não deixa o rolê vazio, porra!')
    } else {
        exibeFinalizar()
    }
}


function procuraRepetido(numero) {
    if (vetorDeNumeros.includes(numero)) {
        window.alert('Repetido')
        return true
    } else {
        return false
    }

}


function criaDiv() {

    // Se não existir: <div id="resultado"></div>, será criada. 
    if (!document.getElementById('resultado')) {

        let divExibeResultado = document.createElement('div')
        divExibeResultado.setAttribute('id', 'resultado')

        let exibeNumeros   = document.getElementById('exibenumeros')
        exibeNumeros.appendChild(divExibeResultado)
    }

    let pegaDivResultado = document.getElementById('resultado')
    return pegaDivResultado
}


function adicionaNumero(temNumero) {

    let pegaDivResultado = criaDiv()


    let stringArray   = document.getElementById('array')
    let mostraNumero  = document.createElement('option')

    
    // Soma novos números à área do option e os deixa visíveis, caso não se tenha atualizado o navegador.
    stringArray.innerHTML += ''

    // .text = parte de dentro do option.
    mostraNumero.text += `Valor ${temNumero} foi adicionado!`

    // Bom para PHP. 
    mostraNumero.value = `tab${temNumero}`

    // Adiciona ao select, seu filho option com os dados armazenados em mostraNumero.text e a serem exibidos pelo html.    
    stringArray.appendChild(mostraNumero)

    // div com id="resultado" terá seu conteúdo escondido, depois de se adicionar um novo valor.
    pegaDivResultado.innerHTML = ''
}


function exibeFinalizar() {

    let pegaDivResultado = criaDiv()

    let comprimento = vetorDeNumeros.length
    let soma        = vetorDeNumeros.reduce((total, meSomeAoTotal) => total + meSomeAoTotal)
    let media       = Math.floor(soma/comprimento)

    console.log(typeof(comprimento))

    // Valor precisa ser apagado, caso haja adição de novo valor
    pegaDivResultado.innerHTML = ''

    pegaDivResultado.innerHTML += `<p> Ao todo, temos ${comprimento} números cadastrados </p>`
    pegaDivResultado.innerHTML += `<p> O maior valor informado foi: ${Math.max(...vetorDeNumeros)} </p>`
    pegaDivResultado.innerHTML += `<p> O menor valor informado foi: ${Math.min(...vetorDeNumeros)} </p>`
    pegaDivResultado.innerHTML += `<p> Somando todos os valores temos: ${soma} </p>`
    pegaDivResultado.innerHTML += `<p> A média dos valores digitados é: ${media} </p>`

    console.log(pegaDivResultado)
}

