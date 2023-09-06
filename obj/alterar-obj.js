const people = {
    nome: 'Luma',
    profissao: 'Eng. de Produção'
}

//adicionando uma propriedade sem mudar o bloco do objeto
people.telefone = "11 000000000";
console.log(people.telefone);

//alterando propriedade do obj
people.nome = 'Luma Loka';

// deletando propriedade do obj, delete retorna valor true caso apague 
// uma propriedade ou tente apagar uma propriedade que já existe
console.log(delete people.profissao);

//alterando obj com espalhamento
const peopleWithHouse = {...people, ap: true };

//atribuindo a uma variavel de mesmo nome uma propriedade do obj
const { nome } = peopleWithHouse;

//usando espalhamento para imprimir só dados especificos do obj
console.log(people);
console.log(peopleWithHouse);
console.log(nome);

function printData(data){
    const {nome, telefone} = people;
    console.log(nome, telefone);
}

printData(people)

function printDataS({nome, telefone, ap}){
    console.log(nome, telefone, ap);
};

printDataS(people);
printDataS(peopleWithHouse);