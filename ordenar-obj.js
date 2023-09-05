const clients = require("./cliente.json");

function ordenar(list, property){
    const result = list.sort((a,b)=> {
        if(a[property] < b[property]){
            return -1;
        }
        if(a[property] > b[property]){
            return 1;
        }
        return 0;
    });
    return result;
}

const orderName = ordenar(clients, "nome");

console.log(orderName);