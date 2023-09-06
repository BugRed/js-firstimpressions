const client = {
    nome: 'Jão',
    idade: '55',
    email: 'jao@firma.com',
    telefone: ['115555555555', '144444444'],
};

client.enderecos = [{
    rua: 'R. locacia',
    numero: 1337,
    ap: true,
    comp: 'ap 9.3/4',
},
];


for (let key in client){
    let tipo = typeof client[key];

    if(tipo !== 'object' && tipo !== 'function'){
                        //obtendo as chaves do obj      //obtendo os valores das chaves
    console.log(`A chave: ${key}, tem o valor: ${client[key]}`);
    }

    
}