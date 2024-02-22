import './style.css';

const fetchGif = async (tag) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=3h0FZlxEtjuV2Q8pmQ0xgA7H62otinvE&s=${tag}`,
      { mode: 'cors' }
    );

    const gif = await response.json();
    return gif.data.images.downsized.url;
  } catch (error) {
    console.error(`🫥! ${error}`);
    return error;
  }
};

const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=f02c0a3fd36a4df98a0145436242002&q=${city}&aqi=no`,
      { mode: 'cors' }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`🫥! ${error}`);
    return error;
  }
};

const displayGif = async (value) => {
  const gifElement = document.querySelector('#gifElement');
  const randomGif = await fetchGif(value);
  gifElement.setAttribute('src', randomGif);
};

const displayWeather = async (currentLocation) => {
  const textField = document.querySelector('#textField');
  textField.textContent = 'Loading...';

  try {
    const currentWeather = await fetchWeather(currentLocation);
    const icon = document.createElement('img');
    icon.setAttribute('style', 'display: inline');
    icon.setAttribute('height', '30px');
    icon.setAttribute('src', currentWeather.current.condition.icon);

    textField.textContent = `It's ${currentWeather.current.condition.text} in ${currentWeather.location.name}, ${currentWeather.location.country}`;
    textField.append(icon);
    displayGif(currentWeather.current.condition.text);
  } catch (error) {
    textField.textContent = 'OOOOPS! No such place';
  }
};

(function initDom() {
  const button = document.querySelector('#button');
  const searchInput = document.querySelector('#search');
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    if (searchInput.value !== '') {
      displayWeather(searchInput.value);
    }
  });
  displayGif('weather');
})();
