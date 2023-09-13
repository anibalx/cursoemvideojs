function contar() {
    let valorStringInicio   = document.getElementById('inicio').value
    let valorStringFim      = document.getElementById('fim').value
    let valorStringPasso    = document.getElementById('passo').value

    let resposta            = document.querySelector('div#resposta')
    
    let comprimentoInicio   = valorStringInicio.length
    let comprimentoFim      = valorStringFim.length
    let comprimentoPasso    = valorStringPasso.length

    if (comprimentoInicio == 0 || comprimentoFim == 0 || comprimentoPasso == 0) {
        resposta.innerHTML = 'Não deu para contar!'
    
    } else if (valorStringPasso <= 0){
        window.alert('Passo negativo: escolha um número positivo')

    } else {
        let inicio          = Number(valorStringInicio)
        let fim             = Number(valorStringFim)
        let passo           = Number(valorStringPasso)

        resposta.innerHTML = `VAI, PORRA \u{1F3C1}`

        if (inicio > fim) {
            
            for (; inicio >= fim; inicio -= passo) {
                resposta.innerHTML += ` ${inicio} \u{1F449}`          
            }
        } else {
            for (; inicio <= fim; inicio += passo) {

                resposta.innerHTML += ` ${inicio} \u{1F449}`        
            }
        }

        resposta.innerHTML += `\u{1F3C1}`

        // if (inicio < fim) {
        //     for (let contador = inicio; contador <= fim ; contador += passo){
        //         resposta.innerHTML += ` ${contador} \u{1F449}`
               
        //     }
        // } else {
        //     for (let contador = inicio; contador >= fim ; contador -= passo){
        //         resposta.innerHTML += ` ${contador} \u{1F449}`
               
        //     }

        // }


        // if (inicio > fim) {
        //    let passoNegativo = passo * -1
             
        //     for (; inicio >= fim; passoNegativo) {
        //         resposta.innerHTML += ` ${inicio} \u{1F449}`
        //         inicio += passoNegativo            
        //     }
        // } else {
        //     for (; inicio <= fim; passo) {

        //         resposta.innerHTML += ` ${inicio} \u{1F449}`
        //         inicio += passo            
        //     }
        // }
        
    }
}
