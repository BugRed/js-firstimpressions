const nome = ["Ed", "Mary", "Camy"]

nome.forEach(printName)

function printName(nome){
    console.log(nome)
}

const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma/lista.length)