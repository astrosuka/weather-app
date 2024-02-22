import fetchWeather from './fetchWeather';
import displayGif from './displayGif';

export default async function displayWeather(currentLocation) {
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
}
