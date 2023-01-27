import playlist  from "./playlist.js";

const musicImg = document.getElementById("music-img");
const musicName = document.getElementById("music-name");
const album = document.getElementById("album");
const releasedOn = document.getElementById("released-on");
const artist = document.getElementById("artist");
const label = document.getElementById("label");
const progressBar = document.getElementById("progress-bar");
const musicSrc = document.getElementById("music-src");
const prevBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const volumeBar = document.getElementById("volumeBar");
const playlistDiv = document.getElementById("playlist-box");
const albumArt = document.getElementById("pi-album-art");
const songName = document.getElementById("pi-song-name");
const songArtist = document.getElementById("pi-song-artist");

// add the songs from playlist in playlist box as play item
const createPlayItem = (songName, albumArtSrc, songArtist) => {
    const playItemDiv = document.createElement('div');
    const albumArtDiv = document.createElement('div');
    const piSongDetailsDiv = document.createElement('div');
    const albumArtImg = document.createElement('img');
    const songNameH4 = document.createElement('h4');
    const songArtistP = document.createElement('p');

    playItemDiv.classList.add('play-item');
    albumArtDiv.classList.add('pi-album-art-div');
    piSongDetailsDiv.classList.add('pi-song-details');
    songNameH4.classList.add('song-name');
    songArtistP.classList.add('song-artist');
    albumArtImg.classList.add('album-art');

    albumArtImg.setAttribute('src', albumArtSrc);
    songNameH4.innerText = songName;
    songArtistP.innerText = songArtist;

    playItemDiv.appendChild(albumArtDiv);
    playItemDiv.appendChild(piSongDetailsDiv);
    albumArtDiv.appendChild(albumArtImg);
    piSongDetailsDiv.appendChild(songNameH4);
    piSongDetailsDiv.appendChild(songArtistP);

    playlistDiv.appendChild(playItemDiv);
}

playlist.map((song) => {
    createPlayItem(song.name, song.albumArt, song.artist);
})