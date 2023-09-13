let vetor = []
let iterador = Array(5).keys()
// let adicionar = vetor.push(7)

// vetor.push(7)
// vetor.push(6)
// console.log(adicionar)

// for (let posição in vetor) {
//     vetor.push()
// }

let mensuraVetor = (vetor=0) => {
    return vetor
}

for (let posição of iterador ) {
    vetor.push(posição)
}

console.log(iterador)
console.log(mensuraVetor(vetor))


// ---------- PRIMEIRO E ÚLTIMO ELEMNTO DO VETOR ---------- //

// Referência -> https://pt.stackoverflow.com/questions/87416/como-retornar-o-%C3%BAltimo-registro-de-um-array-com-javascript-ou-jquery

// Array.prototype.get = function(index) {
//     return this[index < 0 ? this.length + index : index];
// };

// Array.prototype.last = function(index) {
//     return this.get(-1);
// };

// Array.prototype.first = function(index) {
//     return this[0];
// };

// const arr = [1, 2, 3];

// console.log('Último elemento com get:', arr.get(-1));
// console.log('Último elemento com last:', arr.last());
// console.log('Primeiro elemento com first:', arr.first());


// ---------- MAX E MIN NUM VETOR ---------- //

// Referência -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max

let arr = [1, 2, 3]

let min = Math.min(...arr)
// max: 1

let max = Math.max(...arr)
// max: 3

console.log(min)
console.log(max)


// ---------- SOMA DE VETOR ---------- //

// Referência ->https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


let total = vetor.reduce(function(a, b) {
    return a + b
  })

let totalArrow = vetor.reduce((a, b) => {
return a + b
})

console.log(totalArrow)


// ---------- REMOVE DUPLICATAS NUM VETOR ---------- //

// Referências -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Referências -> https://pt.stackoverflow.com/questions/232954/como-passar-um-array-como-par%C3%A2metro-para-fun%C3%A7%C3%A3o

var nomes = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var contagemDeNomes = nomes.reduce(function (todosOsNomes, nome) { 
  if (nome in todosOsNomes) {
    todosOsNomes[nome]++;
  }
  else {
    todosOsNomes[nome] = 1;
  }
  return todosOsNomes;
}, {});
// contagemDeNomes é:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }