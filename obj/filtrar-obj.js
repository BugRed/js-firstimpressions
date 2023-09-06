const clients = require("./cliente.json");

function filterClientAp(clients){
    return clients.filter((client)=>{
        return (client.endereco.apartamento && !client.endereco.hasOwnProperty("complemento")
        );
    });
}

const clientNoComplement = filterClientAp(clients);

console.log(clientNoComplement);