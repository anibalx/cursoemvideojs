function gerarTabuada() {
    let valorStringNumero       = document.getElementById('numero').value
    let stringTabuada           = document.getElementById('tabuada')

    let comprimentoStringNumero = valorStringNumero.length

    if (comprimentoStringNumero == 0) {
        window.alert('Nenhum número digitado!')
    } else {

        let numero        = Number(valorStringNumero)
        let contador      = 0
        
        // Deixa a área da tabua vazia, para caso seja digitado um novo número e não se tenha atualizado o navegador.
        stringTabuada.innerHTML = ''
        
        while (contador <= 10) {

            let linhasDaTabuada = document.createElement('option')
            
            // .text = parte de dentro do option.
            linhasDaTabuada.text += `${numero} X ${contador} = ${numero * contador}`
            
            // Bom para PHP. 
            linhasDaTabuada.value = `tab${contador}`

            stringTabuada.appendChild(linhasDaTabuada)

            contador++
        }
    }

}