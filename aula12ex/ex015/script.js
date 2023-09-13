function verificar() {
    let data = new Date()

    let valorDoAnoAtual         = data.getFullYear()
    let anoDeNascimento         = document.getElementById('ano')
    let resposta                = document.querySelector('div#resposta')
    
    let comprimento             = anoDeNascimento.value.length
    let valorDoAnoDeNascimento  = Number(anoDeNascimento.value)

    if (comprimento == 0 || valorDoAnoDeNascimento > valorDoAnoAtual) {
        window.alert('[ERRO]: Verifique os dados e tente novamente!')
    } else {
        let sexo   = document.getElementsByName('sexo')
        let idade  = valorDoAnoAtual - valorDoAnoDeNascimento
        let genero = ''
        
        let imagem = document.createElement('imagem')
            imagem.setAttribute('id','foto')

        let masculino = sexo[0].checked
        let feminino  = sexo[1].checked
        let outro     = sexo[2].checked

        if (masculino) {
            genero = 'masculino'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                // imagem.setAttribute('src', 'foto-crianca.png')
                // resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            } else if (idade < 21) {
                //JOVEM
                // imagem.setAttribute('src', 'foto-jovem.png')
            } else if (idade < 50) {
                // ADULTO
                // imagem.setAttribute('src', 'foto-adulto.png')
            } else if (idade < 1000) {
                // IDOSO
                // imagem.setAttribute('src', 'foto-idoso.png')
            } else {
                // MORTO
                // imagem.setAttribute('src', 'foto-morto.png')
            }
        } else if (feminino) {
            genero = 'feminino'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                // imagem.setAttribute('src', 'foto-crianca.png')
            } else if (idade < 21) {
                //JOVEM
                // imagem.setAttribute('src', 'foto-jovem.png')
            } else if (idade < 50) {
                // ADULTO
                // imagem.setAttribute('src', 'foto-adulta.png')
            } else if (idade < 1000) {
                // IDOSO
                // imagem.setAttribute('src', 'foto-idosa.png')
            } else {
                // MORTO
                // imagem.setAttribute('src', 'foto-mortapng')
            }
        } else if (outro) {
            genero = 'outro'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                // imagem.setAttribute('src', 'foto-aleaoria1.png')
            } else if (idade < 21) {
                //JOVEM
                // imagem.setAttribute('src', 'foto-aleaoria2.png')
            } else if (idade < 50) {
                // ADULTO
                // imagem.setAttribute('src', 'foto-aleaoria3.png')
            } else if (idade < 1000) {
                // IDOSO
                // imagem.setAttribute('src', 'foto-aleaoria4.png')
            } else {
                // MORTO
                // imagem.setAttribute('src', 'foto-aleaoria5.png')
            }
        }

        resposta.style.textAlign = 'center'
        resposta.innerHTML       = `Detectamos ${genero} com ${idade} anos.`
        // resposta.appendChild(imagem)
    }
}