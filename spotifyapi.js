window.onSpotifyWebPlaybackSDKReady = () => {
    const token = identification;
    const player = new Spotify.Player({
        name: 'TreasureHacks Website',
        getOAuthToken: cb => { cb(token); },
        volume: 0.1
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    document.getElementById('togglePlay').onclick = function() {
      player.togglePlay();
      startStop();
    };

    document.getElementById('nextTrack').onclick = function() {
        player.nextTrack();
        reset();

    };

    player.connect();
}