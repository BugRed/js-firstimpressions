// Var = variaveis livres

var altura1 = 5;
var comprimento1 = 7;

area = altura1 * comprimento1;
console.log(area)
var area;


//Let = não consegue acessar antes de iniciar a variavel

let forma = 'retangulo';
let altura = 5;
let comprimento = 7;

if(forma === 'retangulo'){
    area = altura*comprimento;
} else {
    area = (altura*comprimento)/2;
}
console.log(area)


//Constante: precisa sempre ser inicializada e ser constante

const forma2 = 'quadrado';
const altura2 = 5;
const comprimento2 = 7;


if (forma === 'quadrado'){
    area = altura2*comprimento2;
}else{
    area = (altura2*comprimento2)/2;
}
console.log(area)
