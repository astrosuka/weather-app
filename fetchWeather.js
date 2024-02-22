export default async function fetchWeather(city) {
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
}
