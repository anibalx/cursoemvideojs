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
function AdicionaVetor(_vetorDeNumeros) {
    
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

function encapsulaVetor() {

    let _vetorDeNumeros = []
    let adicionaVetor = new AdicionaVetor(_vetorDeNumeros)
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

        // let _vetorDeNumeros = vetor.map(function(obj) {
        //     return Object.keys(obj).map(function(chave) {
        //         return obj[chave]
        //     })
        // })


        // console.log(`Tipo do vetor: ${typeof(vetor)},\nVariável vetor: ${vetor},\nTipo do _vetorDeNumeros: ${typeof(_vetorDeNumeros)}`)


        // let adicionaVetor = new AdicionaVetor(_vetorDeNumeros)


        // let _vetorDeNumeros = vetor.map(function(obj) {
        //     return Object.keys(obj).map(function(chave) {
        //         return obj[chave]
        //     })
        // })

        // return adicionaVetor
    // } else {
        // let adicionaVetor = new AdicionaVetor(vetor)
        // console.log(typeof(_vetorDeNumeros), typeof(adicionaVetor), adicionaVetor)
        // return adicionaVetor
    // }

    // adicionaVetor.adicionaAoVetorDeNumeros(10)
    // console.log(adicionaVetor, _vetorDeNumeros)
    // return adicionaVetor
}

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
        let numero        = Number(valorDoNumero)
        
        let adicionaVetor = encapsulaVetor()

        // let finalizar     = exibeFinalizar()

        // console.log(typeof(Object.values(adicionaVetor.procuraRepetidoNoVetorDeNumeros())))

        let repetido      = adicionaVetor.procuraRepetidoNoVetorDeNumeros(numero)
        
        // let repetido       = adicionaVetor.procuraRepetidoNoVetorDeNumeros(numero)

        // let adicionaVetor = new AdicionaVetor()
        
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


function finalizar() {

    let adicionaVetor = encapsulaVetor()

    // let adicionaVetor = new AdicionaVetor()

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

    // Adiciona ao select, seu filho option, com os dados armazenados em mostraNumero.text e a serem exibidos pelo html.    
    stringArray.appendChild(mostraNumero)

    // div com id="resultado" terá seu conteúdo escondido, depois de se adicionar um novo valor.
    pegaDivResultado.innerHTML = ''
}


function exibeFinalizar() {

    let pegaDivResultado = criaDiv()

    // let adicionaVetor = encapsulaVetor()

    // let adicionaVetor = new AdicionaVetor()

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

