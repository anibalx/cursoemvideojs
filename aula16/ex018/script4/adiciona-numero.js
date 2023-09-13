export default function adicionaNumero(temNumero) {

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

