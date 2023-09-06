const study = ["Jão", "July", "Ana", "Caio"]
const mid = [10, 8, 7, 5, 9]

const studyMid = [study, mid]


//acesso a item especificos
console.log(`A Aluna na posição ${study.indexOf('July')}, se chama ${studyMid[0][1]}.
A nota dessa aluna é ${studyMid[1][1]}`)

//Ex

const name = ["Tv", "Radio", "PC"]
const price = [11, 12, 13]
const hashIt = [true, false, false]
const order = [1, 2, 3]
const product = [name, price, hashIt]
const ordeItem = [order, product]


console.log(ordeItem[0][0] + ", item: " + ordeItem[1][0][0] + ", price: " + ordeItem[1][1][0] + ", Hashit: " + ordeItem[1][2][0])
