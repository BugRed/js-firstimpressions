const client = {
    nome: 'Jão',
    idade: '55',
    email: 'jao@firma.com',
    telefone: ['115555555555', '144444444'],
};
//criando uma lista de obj
client.enderecos = [{
    rua: 'R. locacia',
    numero: 1337,
    ap: true,
    comp: 'ap 9.3/4',
}
]

//alterando uma lista obj
client.enderecos.push({
    rua: "R. lader lader",
    numero: 404,
    ap: false,
})

//filtrar dentro do obj com funções de list

const listAP = client.enderecos.filter((endereco) => endereco.ap === true)

console.log(listAP);