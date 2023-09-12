const livros = require('./listalivros');
const lowerValue = require('./menorValor');

livros.forEach((_, index)=>{
    let lower = lowerValue(livros, index);

    let actual = livros[index]
    let lowerPrice = livros[lower];

    livros[index] = lowerPrice;
    livros[lower] = actual;
});

console.log(livros);