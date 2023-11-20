// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
// Endpoint for the joke API
// const endpoint = 'https://v2.jokeapi.dev/joke/Any';
import endpoint from '../utils/getJoke';

// Function to initialize the application
const init = () => {
  // Set initial HTML structure
  document.querySelector('#app').innerHTML = `
    <h1>HELLO! You are up and running!</h1>
    <button class="btn btn-danger" id="joke-button">Get a Joke!</button><br />
    <div id="joke-display"></div> <!-- Div for displaying the joke -->
    <hr />
    <h2>These are font awesome icons:</h2>
    <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
  `;

  // Variables to store joke data
  let currentJokeSetup = '';
  let currentJokePunchline = '';
  let jokeStage = 'getJoke';

  // Function to fetch a joke from the API
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

  // Event listener for the joke button
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

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

const startApp = () => {
  init();
};
startApp();
