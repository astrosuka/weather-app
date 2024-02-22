import './style.css';
import displayGif from './displayGif';
import displayWeather from './displayWeather';

const initDom = () => {
  const button = document.querySelector('#button');
  const searchInput = document.querySelector('#search');
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    if (searchInput.value !== '') {
      displayWeather(searchInput.value);
    }
  });
  displayGif('weather');
};

initDom();
