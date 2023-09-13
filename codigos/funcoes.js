function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2))

// FUNÇÃO NUMA VARIÁVEL
let dobro = function (valor) {
    return valor*2
}

console.log(dobro(5))


// FUNÇÃO ARROW
const sum = (num1, num2) => {
    return num1 + num2
}

console.log(sum(1,2))


// FUNÇÃO ARROW REDUZIDA (APENAS UMA DECLARAÇÃO)
const mult = (num1, num2) => num1 + num2

console.log(mult(1, 2))
