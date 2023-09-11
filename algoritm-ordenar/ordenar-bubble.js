function ordenacaoBolha(list) {

    for (let i = 0; i < list.length - 1; i++)
      for (let j = 0; j < list.length - i - 1; j++)
        if (list[j] > list[j + 1]) {
          let aux = list[j];
          list[j] = list[j + 1];
          list[j + 1] = aux;
        }
    console.log(list);
  }

  const lista = [7, 2,  12, 1, 8];

  ordenacaoBolha(lista);


