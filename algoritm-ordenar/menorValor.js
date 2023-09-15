//importando de outro arquivo

const livros = require('./listalivros');

function lowerValue(list, initialPosition) {
    let aux = initialPosition;

    for (let i = initialPosition; i < list.length; i++) {
        if (list[i].preco < list[aux].preco) {
            aux = i
        };
    };
    return aux;
};

module.exports = lowerValue;