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

function callClient(tel, cell){
    console.log(`Ligando para: ${tel}`);
    console.log(`Ligando para: ${cell}`)
}

        //utilizando espalhamento para acessar todos os itens do array dentro do obj
callClient(...client.telefone);

//Usando espalhamento para compor obj
const encomenda = {
    destino: client.nome,
    ...client.enderecos[0],
};

console.log(encomenda);