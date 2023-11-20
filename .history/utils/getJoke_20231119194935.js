import endpoint from '../api/jokeApi';

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
document.querySelector('#joke-button').addEventListener('click', () => {
  const
}
// (getRequest())
//   .then((data) => console.warn(data))
//   .catch((error) => console.error(error)));

export default getRequest;
