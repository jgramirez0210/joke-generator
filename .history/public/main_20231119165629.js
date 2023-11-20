// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { currentJokeSetup, currentJokePunchline } from '../utils/sample_data/emptyData';
import getRequest from '../utils/getJoke';

const endpoint = 'https://v2.jokeapi.dev/joke/Any';

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

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};
startApp = () => {
  getRequest()
  init();
}
