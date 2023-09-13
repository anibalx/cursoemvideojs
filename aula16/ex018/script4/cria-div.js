export default function criaDiv() {

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

