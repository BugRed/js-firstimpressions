//Interagindo com json
//Importar um JSon
const dados = require("./cliente1.json");


console.log(dados.nome);
console.log(typeof dados);

//Transformando Json em string
const clientString = JSON.stringify(dados);
console.log(clientString);
console.log(typeof clientString);

//Transformando String em Json(obj)

const objClient = JSON.parse(clientString);

console.log(objClient);