const clientId = 'af4da5fc41f147b7a7d18c36de3178a3';
const redirectUri = 'http://localhost:3000';
const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    console.log(accessToken);
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      console.log(jsonResponse);
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },
    

  savePlaylist(name, trackUris) {
      if (!name || ! trackUris.length) {
          return;
      }

      const accessToken = Spotify.getAccessToken();
      const userIdEndpoint = 'https://api.spotify.com/v1/me';

      return fetch(userIdEndpoint, {
          headers: {Authorization: `Bearer ${accessToken}`}
      }).then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error('request for userId failed!');
      }, networkError => console.log(networkError.message)
      ).then(jsonResponse => {
          const userId = jsonResponse.id;
          const createPlaylist = `https://api.spotify.com/v1/users/${userId}/playlists`;
          return fetch(createPlaylist, {
              headers: {Authorization: `Bearer ${accessToken}`},
              method: 'POST',
              body: JSON.stringify({name: name})
          }).then(response => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error('request for playlist creation failed!');
          }, networkError => console.log(networkError.message)
          ).then(jsonResponse => {
              const playlistId = jsonResponse.id;
              const addToPlayList = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`
              return fetch(addToPlayList, {
                  headers: {Authorization: `Bearer ${accessToken}`},
                  method: 'POST',
                  body: JSON.stringify({uris: trackUris})
              });
          });
      });
  }
};

export default Spotify;
