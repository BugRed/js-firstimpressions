const client = {
    nome: 'Jão',
    idade: '55',
    email: 'jao@firma.com',
    //list dentro de obj
    telefone: ['115555555555', '144444444'],
};

//adicionando obj a um obj
client.endereco = {
    rua: 'R. locacia',
    numero: 1337,
    ap: true,
    comp: 'ap 9.3/4',
}

console.log(client.endereco.ap);