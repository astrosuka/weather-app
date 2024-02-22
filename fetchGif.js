export default async function fetchGif(tag) {
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
}
