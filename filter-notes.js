const study = ['Ana', 'Marcos', 'Maria', 'Mauro']
const note = [7, 4.5, 8, 7.5]

//retorna true or false caso a condição seja satisfeita
const reprove = study.filter((_, index)=> {
    return note[index] < 7;
})

console.log(reprove)