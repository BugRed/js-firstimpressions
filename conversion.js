//Conversões de tipo

//Implicita = transforma tudo em string e age como tal
const number = 456;
const texNumber = "456";
//NaN
const toNumber = Number("456a")

console.log(number == texNumber);
console.log(number + texNumber);
console.log(number + toNumber);


//Explicita

//Number()
console.log(number + Number(texNumber));
//String()

