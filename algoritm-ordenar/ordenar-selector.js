function ordenacaoSelecao(list) {
  
    for (let i = 0; i < list.length - 1; i++) {
      //Encontra o menor item da parte não ordenada
      let min_idx = i;
      for (let j = i + 1; j < list.length; j++)
        if (list[j] < list[min_idx])
          min_idx = j;
  
      //Troca o menor com o primeiro elemento
      let aux = list[min_idx];
      list[min_idx] = list[i];
      list[i] = aux;
    }
    console.log(list);
  }

   const lista = [7, 2,  12, 1, 8];
   ordenacaoSelecao(lista);