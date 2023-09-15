const livros = require('./listalivros');
const changePosition = require('./changePosition')
const lowerValue = require('./menorValor');


for (let i = 0; i < livros.length - 1; i++) {

    let lowerPosition = lowerValue(livros, i);
    changePosition(livros, lowerPosition, i);

};

console.log(livros);