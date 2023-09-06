const apArrow = nome => `meu nome é ${nome}`;

const sum = (a,b)=> a + b;

console.log(sum(1,2))
console.log(apArrow("Driko"))

const soma = (a,b) => {
    if (a > 10 || b > 10){
        return "maior que 10"
    } else {
        return a+b
    }
}
console.log(soma(11,1))