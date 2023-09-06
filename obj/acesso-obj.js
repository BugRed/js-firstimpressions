const client = {
    nome: 'Andre',
    idade: 35,
    cpf: '1234567891011',
    email: 'andre@gmail.com'
};

// acesso propriedados do obj com ponto
console.log(`O nome desse cliente é: ${client.nome}, seu CPF é ${client.cpf.substring(0,3)}, idade: ${client.idade} anos e por fim seu email é ${client.email}`);


//acesso de propriedades do obj com colchetes
console.log(`O nome desse cliente é: ${client["nome"]}, seu CPF é ${client["cpf"]}, idade: ${client["idade"]} anos e por fim seu email é ${client['email']}`);


const key = ["nome", "idade", "cpf", "email", "altura"];

key.forEach((key)=>{
    console.log(`A chave ${key} tem o valor ${client[key]}`);
})