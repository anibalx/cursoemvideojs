// function calculaVetor() {

//     let numero = 1
//     let existe = existeVetor()

//     if (existe == 0) {
//         console.log('Funcionou')
//     } else {
//         let vetor = []
//     }
// }


// function existeVetor(numero) {
//     let vetorAuxiliar = []
//     vetorAuxiliar.push(numero)

// }


// let vet1 = []
// let vet2 = []

// for (let posição of Array(5).keys()) {
//     // console.log(posição)
//     vet1.push(posição)
//     vet2.push(vet1)
// }

// // vet2.push(vet1)

// console.log(vet2)



// ---------- RETORNO DE VÁRIOS ELEMENTOS (NÃO FUNCIONOU) ---------- //


// let vetorDeNumeros = [1, 2, 3, 4]


// function tratamentoDeVetor() {
    
//     let comprimento = vetorDeNumeros.length
//     let max         = Math.max()
//     let min         = Math.min()
//     let soma        = [...vetorDeNumeros].reduce((soma, numero) => soma + numero)
//     let media       = vetorDeNumeros/comprimento 
    
//     // return comprimento, max, min, soma, media

//     return ([...vetorDeNumeros].reduce((soma, numero) => soma + numero))/comprimento

// }


// let comprimento, max, min, soma, media = tratamentoDeVetor()

// console.log(comprimento)
// console.log(max)
// console.log(min)
// console.log(soma)
// console.log(media)

console.log(tratamentoDeVetor())