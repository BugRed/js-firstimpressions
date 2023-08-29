const study = ["Jão", "July", "Ana", "Caio"]
const mid = [10, 8, 7, 5, 9]
const studyMid = [study, mid]

function showNameScore(aluno) {
    if (studyMid[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado! E Sua media escolar é: ${studyMid[1][studyMid[0].indexOf(aluno)]}`)
    } else {
        console.log('Aluno não cadastrado')
    }
}

showNameScore('Jão')
showNameScore('It a coisa')
