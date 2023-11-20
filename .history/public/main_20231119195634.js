// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
// import { currentJokeSetup, currentJokePunchline } from '../utils/sample_data/emptyData';
import getRequest from '../utils/getJoke';
import init from '../components/init';

const currentJokeSetup = '';
const currentJokePunchline = '';
const jokeStage = 'getJoke';

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
            
          }
        })
    }
}


// USE WITH FIREBASE AUTH
// ViewDirectorBasedOnUserAuthStatus();

const startApp = () => {
  getRequest();
  init();
};
startApp();
