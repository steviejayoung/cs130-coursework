const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // type of data: its a list of objects where each object represents a track of data
            // display (as some sort of HTML block) each of the tracks in the container.
            // first slice the list
            // then loop through the results using for ... of
            //console.log(data);
            document.querySelector('#tracks').innerHTML = '';
            for (const track of data) {
                
                const template = `
                    <section class="track-item preview" data-preview-track="${track.preview_url}">
                        <img src="${track.album.image_url}">
                        <i class="fas play-track fa-play" aria-hidden="true">
                        <div class="label">
                            <h3>${track.name}</h3>
                            <p>
                                ${track.artist.name}
                            </p>
                        </div>
                    </section>`;
                document.querySelector('#tracks').innerHTML += template;
                console.log(track);
            }
        })

};

const getAlbums = (term) => {
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#albums').innerHTML = '';
            for (const track of data) {
                const template = `
                    <section class="track-item preview" data-preview-track="${track.preview_url}">
                        <img src="${track.album.image_url}">
                        <i class="fas play-track fa-play" aria-hidden="true">
                        <div class="label">
                            <h3>${track.name}</h3>
                            <p>
                                ${track.artist.name}
                            </p>
                        </div>
                    </section>`;
                document.querySelector('#tracks').innerHTML += template;
                console.log(track);
            }
        })

};

const getArtist = (term) => {
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#albums').innerHTML = '';
            for (const track of data) {
                const template = `
                    <section class="track-item preview" data-preview-track="${track.preview_url}">
                        <img src="${track.album.image_url}">
                        <i class="fas play-track fa-play" aria-hidden="true">
                        <div class="label">
                            <h3>${track.name}</h3>
                            <p>
                                ${track.artist.name}
                            </p>
                        </div>
                    </section>`;
                document.querySelector('#tracks').innerHTML += template;
                console.log(track);
            }
        })
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};