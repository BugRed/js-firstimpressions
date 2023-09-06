const client = {
    nome: 'Jão',
    idade: '55',
    email: 'jao@firma.com',
    telefone: ['115555555555', '144444444'],
    saldo: 200,
    efetuarPagamento: function(valor){
        if(valor > this.saldo){
            console.log(`Saldo de ${this.saldo} é inferior a ${valor}, por isso não pode ser efetuado o pagamento!`)
        } else{
            this.saldo -= valor;
            console.log(`Pagamento efetuado! Novo saldo: ${this.saldo}`);
        }
    }
};

client.efetuarPagamento(8000);

//criando um objeto novo a partir do antigo, ele cria o objeto vazio
const client2 = Object.create(client);

console.log(`Novo cliente: ${client2.valor}`);