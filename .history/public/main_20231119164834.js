// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { currentJokeSetup, currentJokePunchline } from '../utils/sample_data/emptyData';

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
  const getRequest = () => new Promise((resolve, reject) => {
    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });
  document.querySelector('#get-a-joke').addEventListener('click', () => (getRequest())
    .then((data) => console.warn(data))
    .catch((error) => console.error(error)));

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
