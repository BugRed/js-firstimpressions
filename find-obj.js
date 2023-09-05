const clients = require("./cliente.json");  

function find(list, key = id, value){
    return list.find((item)=> item[key].includes(value));
}

const  finder = find(clients, 'nome', 'Kirby');

console.log(finder);