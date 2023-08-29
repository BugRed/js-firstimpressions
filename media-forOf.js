const mid = [10, 6.5, 8, 7.5]
const study = ["a", "b", "c"]
const studyMid = [mid, study]
let sum = 0;

//Varrer uma lista e mostrar todos os elementos
for (let element of studyMid[0]){
    sum+=element
}
console.log(`A media solicitada é: ${sum/studyMid[0].length}`)

//Imprimindo de tras pra frente com lenght
const numeros = [100, 200, 300, 400, 500, 600];
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log("Using lenght-1: " + numeros[i]);
}

//imprimindo de trás pra frente usando reverse
for(let element of numeros.reverse()){
    console.log("Using reverse(): " + element);
}

