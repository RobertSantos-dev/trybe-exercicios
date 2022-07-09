// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const element = document.querySelector('#jokeContainer');
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject)
    .then((res) => res.json())
    .then((ret) => {
        element.innerHTML = ret.joke;
    })
    .catch((err) => element.innerHTML = `Piada não encontrada ${err}`);
};

window.addEventListener('load',fetchJoke);
