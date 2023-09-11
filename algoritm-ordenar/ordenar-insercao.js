function ordenacaoInsercao(list){
    
    for (let i=1; i<list.length; ++i)
    {
        let key = list[i];
        let j = i-1;

        //Move os elementos do vetor que são maiores que a chave para uma posição a frente 
        while (j>=0 && list[j] > key)
        {
            list[j+1] = list[j];
            j = j-1;
        }
        list[j+1] = key;
    }

    console.log(list);
}

const lista = [7, 2,  12, 1, 8];

ordenacaoInsercao(lista);