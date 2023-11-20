// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
// import { currentJokeSetup, currentJokePunchline } from '../utils/sample_data/emptyData';
import getRequest from '../utils/getJoke';
import init from '../components/init';
const init = () => {
  document.querySelector('#app').innerHTML = `
  <h1>HELLO! You are up and running!</h1>
  <small>Open your dev tools</small><br />
  <button class="btn btn-danger" id="joke-button">Get a Joke!</button><br />
  <div id="joke-display"></div> <!-- Div for displaying the joke -->
  <hr />
  <h2>These are font awesome icons:</h2>
  <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
    `;
  console.warn('YOU ARE UP AND RUNNING!');
};
  

  let currentJokeSetup = '';
  let currentJokePunchline = '';
  let jokeStage = 'getJoke';

  document.querySelector('#joke-button').addEventListener('click', () => {
  const jokeButton = document.querySelector('#joke-button');
  const jokeDisplay = document.querySelector('#joke-display');

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
};
// USE WITH FIREBASE AUTH
// ViewDirectorBasedOnUserAuthStatus();

const startApp = () => {
  getRequest();
  init();
};
startApp();
