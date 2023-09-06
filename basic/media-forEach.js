const mid = [10, 6.5, 8, 7.5];
let sum = 0;

//Usar função anonimas
mid.forEach(function (note, index) {
    sum += note
    console.log(index)
})
console.log(sum / mid.length)