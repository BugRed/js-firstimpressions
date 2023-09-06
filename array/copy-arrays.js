const notes = [7, 7, 8, 9]

//spread operator = operador de espalhamento

const newNotes = [5, ...notes, 10]

// newNotes.push(10)

console.log(`Nota originais: ${notes}`)
console.log(`Notas editadas: ${newNotes}`)

const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray([...arrayOriginal]);