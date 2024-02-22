import fetchGif from './fetchGif';

export default async function displayGif(value) {
  const gifElement = document.querySelector('#gifElement');
  const randomGif = await fetchGif(value);
  gifElement.setAttribute('src', randomGif);
}
