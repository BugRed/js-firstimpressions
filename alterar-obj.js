const people = {
    nome: 'Luma',
    profissao: 'Eng. de Produção'
}

//adicionando uma propriedade sem mudar o bloco do objeto
people.telefone = "11 000000000";
console.log(people.telefone);

//alterando propriedade do obj
people.nome = 'Luma Loka'

// deletando propriedade do obj, delete retorna valor true caso apague 
// uma propriedade ou tente apagar uma propriedade que já existe
console.log(delete people.profissao);

console.log(people);