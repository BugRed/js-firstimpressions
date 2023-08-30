const mid = [10, 9.5, 8, 7, 6];
//Reescrever arrays

const notaUpdate = mid.map((nota) =>{
    return nota + 1 >= 10 ? 10 : nota + 1;
})
console.log(notaUpdate)