const clientId = 'af4da5fc41f147b7a7d18c36de3178a3';
const redirectUri = 'http://localhost:3000';

export const getAccessToken = async (client_id, redirect_uri) => {
    //var accessUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;
    var accessUrl = 'https://accounts.spotify.com/authorize';
    accessUrl += '?response_type=token';
    accessUrl += '&client_id=' + encodeURIComponent(client_id);
    accessUrl += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    // try {
    //     const response = await fetch(accessUrl);
    //     if (response.ok) {
    //         const jsonResponse = response;
    //         console.log(jsonResponse);
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
    window.location=accessUrl;
};
