const books = require('./listalivros');
const changePosition = require('./changePosition');


function insertionSort(list) {
    for (let i = 0; i < list.length; i++) {
        let check = i;
        while (check > 0 && list[check].preco < list[check - 1].preco) {
            changePosition(list, check, check -1);
            check --;
        }
    }

    console.log(list);
};

insertionSort(books);

