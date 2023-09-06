const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   };
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   };

   //Juntando dois obj em um com espalhamento
   //observar que se há campos chaves iguais nos dois o JS substituira pelo mais recente
const persona = {...fichaGuerreiro, ...equipoGuerreiro};

console.log(persona);