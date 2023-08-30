const roomJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const roomJava = [6, 5, 8, 9, 5, 6];
const roomPython = [7, 3.5, 8, 9.5];


// Acc é o acumulador, ele é iniciado com o numero depois da virgula
function mid(noteRoom) {
    const sumNoteRoom = noteRoom.reduce((acc, note) => acc + note, 0);

    const media = sumNoteRoom / noteRoom.length;
    return media;
}
console.log(`A media da sala de JS é: ${mid(roomJS)}`)
console.log(`A media da sala de JAVA é: ${mid(roomJava)}`)
console.log(`A media da sala de Python é: ${mid(roomPython)}`)