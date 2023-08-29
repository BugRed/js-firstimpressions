//Declarando uma lista
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log("Pure list: " + list)

//Adiciona elemento ai final da lista
list.push(11)
console.log("List with a push: " + list)

//Remove o ultimo item da lista
list.pop(list)
console.log("List with a pop: " + list)

//Shift retira o primeiro item da lista
list.shift(list)
console.log("List with a shift: " + list)

//unShift adiciona um item a primeira posição do array
list.unshift(88)
console.log("List with a unshift: " + list)

//Concatenar duas listas (Precisa salvar em uma nova list)
const listList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]
const concatt = listList.concat(list)
console.log("List with concat list:  " + concatt)

//Filtrar (Precisa salvar em uma nova list)
function MaiorQue(value) {
    return value >= 10
}
const valor = [12, 5, 8, 130, 44].filter(MaiorQue)
console.log("Filter with function: " + valor);

//Filtrar com predicado
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log("Filter with length word: " + result);

//Find retorna o primeiro elemento que corresponde ao teste
console.log("Find with predicate: " + valor.find((element) => element > 10))

//FindIndex retorna o primeiro valor que corresponde ao teste(retorna o indice ao inves do valor)
const isLargeNumber = (element) => element > 40;
console.log("FindIdex with predicate: " + valor.findIndex(isLargeNumber));

//lastIndexOf mesmo que o findIndex só que começa pelo ultimo
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);

//forEach executa uma função em cada um dos elementos do array
const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log("ForEach: " + element));

//Reduce, criar uma função simples e usa todos os items do array pra isso
const sumWithInitial = words.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Reduce with function: " + sumWithInitial);

//ReduceRight mesmo que o reduce, só começa pelo fim
const sumWithInitial2 = words.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log("ReduceRight with function: " + sumWithInitial2);

//Reverse inverte a posição de todos os itens do array
console.log("Normal array: " + valor)
console.log("reverse array: " + valor.reverse())

//Slice corta o array e o copia para outro array, a partir do indice fornecido
console.log("Slice: " + valor.slice(-2))

//Sort organiza conforme tabela ASCII
function comparar(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    } else {
        return 0;
    }

}
console.log("Sort without function aux: " + valor.sort())
console.log("Sort with function aux: " + valor.sort(comparar))

//Splice consegue adicionar ou remover elementos entre index
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1,0, "Feb")
console.log("Insert with splice: " + months)
months.splice(4, 1, "May")
console.log("Replace with splice: " + months)
