const livros = require('./listalivros');
const lowerValue = require('./menorValor');

for (let i = 0; i < livros.length - 1; i++) {
    let menor = lowerValue(livros, i);

    let bookActual = livros[i];
    let livroLowerPrice = livros[menor];

    livros[i] = livroLowerPrice;
    livros[menor] = bookActual;


};

console.log(livros);