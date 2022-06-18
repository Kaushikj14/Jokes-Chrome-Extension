/**
* Fetch the data from the api each time when the user opens the extension
*/
const apiUrl = 'https://icanhazdadjoke.com/slack';

fetch(apiUrl)
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })