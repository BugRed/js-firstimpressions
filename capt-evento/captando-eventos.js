//Captando uma função do js e lançando o resultado na tela
const h1 = document.querySelector('h1');

const randomNumber = () => {
    return Math.random();
}

h1.innerText = randomNumber();