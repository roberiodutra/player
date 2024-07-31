const YOUTUBE_PLAYLIST_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

function getPlaylistIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const playlistId = urlParams.get('playlistId');

  return playlistId;
}

export default async function getMusics(pageToken) {
  const playlistId = getPlaylistIdFromUrl();

  if (!playlistId) {
    console.error('Nenhum playlistId fornecido na URL.');
    return;
  }

  let URL = `${YOUTUBE_PLAYLIST_API}?part=snippet&playlistId=${playlistId}&maxResults=50&type=audio&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

  if (pageToken) {
    URL = `${URL}&pageToken=${pageToken}`;
  }

  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
