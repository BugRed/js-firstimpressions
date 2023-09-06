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
            //função que retorna todas as chaves do obj
const keyObj = Object.keys(client);
            //função que retorna todos os valores das chaves do obj
const valorObj = Object.values(client);
// console.log(keyObj);
// console.log(valorObj);

if(!keyObj.includes('enderecos')){
    console.log(`Error! Precisa ter endereço cadastrado `)
}