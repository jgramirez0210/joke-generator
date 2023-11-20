// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import homePage from '../components/homePage';
// import { currentJokeSetup, currentJokePunchline } from '../utils/sample_data/jokeData';
import getRequest from '../utils/getJoke';
// Function to initialize the application
const init = () => {
  // Event listener for the joke button
  document.querySelector('#joke-button').addEventListener('click', () => {
    const jokeButton = document.querySelector('#joke-button');
    const jokeDisplay = document.querySelector('#joke-display');
    let jokeStage = 'getJoke';
    let currentJokeSetup = '';
    const currentJokePunchline = '';
    if (jokeStage === 'getJoke') {
      getRequest()
        .then((data) => {
          if (data.type === 'twopart') {
            currentJokeSetup = data.setup;
            currentJokePunchline = data.delivery;
            jokeDisplay.innerText = currentJokeSetup;
            jokeButton.textContent = 'Get Punchline';
            jokeStage = 'getPunchline';
          } else {
            jokeDisplay.innerText = data.joke;
            jokeButton.textContent = 'Get Another Joke';
            jokeStage = 'newJoke';
          }
        })
        .catch((error) => {
          console.error(error);
          jokeDisplay.innerText = 'Failed to load joke!';
        });
    } else if (jokeStage === 'getPunchline') {
      jokeDisplay.innerText = `${currentJokeSetup}\n\n${currentJokePunchline}`;
      jokeButton.textContent = 'Get Another Joke';
      jokeStage = 'newJoke';
    } else if (jokeStage === 'newJoke') {
      jokeDisplay.innerText = '';
      jokeButton.textContent = 'Get a Joke!';
      jokeStage = 'getJoke';
    }
  });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

const startApp = () => {
  homePage();
  init();
};
startApp();
