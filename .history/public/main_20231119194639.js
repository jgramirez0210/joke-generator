// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
// import { currentJokeSetup, currentJokePunchline } from '../utils/sample_data/emptyData';
import getRequest from '../utils/getJoke';
import init from '../components/init';

const currentJokeSetup = '';
const currentJokePunchline = '';
export { currentJokeSetup, currentJokePunchline };

// USE WITH FIREBASE AUTH
// ViewDirectorBasedOnUserAuthStatus();

const startApp = () => {
  getRequest();
  init();
};
startApp();
