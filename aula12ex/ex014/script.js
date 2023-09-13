function carregar() {
    let data = new Date()
    let hora = data.getHours()

    let imagem   = document.getElementById('imagem')
    let mensagem = document.getElementById('mensagem')
    
    mensagem.innerHTML = `<p>Agora são ${hora} horas</p>`

    if (hora >= 0 && hora < 12) {
        imagem.src = 'manha.png'
        document.body.style.background = '#c2d2b5'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'tarde.png'
        document.body.style.background = '#feab02'
    } else {
        imagem.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}