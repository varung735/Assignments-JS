import playlist  from "./playlist.js";

const musicImg = document.getElementById("music-img");
const musicName = document.getElementById("music-name");
const album = document.getElementById("album");
const releasedOn = document.getElementById("released-on");
const artist = document.getElementById("artist");
const label = document.getElementById("label");
const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress-bar");
const prevBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const playImg = document.getElementById("play-img");
const nextBtn = document.getElementById("next");
const volumeBar = document.getElementById("volumeBar");
const playlistDiv = document.getElementById("playlist-box");

// add the songs from playlist in playlist box as play item
const createPlayItem = (id, songName, albumArtSrc, songArtist) => {
    const playItemDiv = document.createElement('div');
    const albumArtDiv = document.createElement('div');
    const piSongDetailsDiv = document.createElement('div');
    const albumArtImg = document.createElement('img');
    const songNameH4 = document.createElement('h4');
    const songArtistP = document.createElement('p');

    playItemDiv.classList.add('play-item');
    playItemDiv.classList.add(id);
    albumArtDiv.classList.add('pi-album-art-div');
    piSongDetailsDiv.classList.add('pi-song-details');
    songNameH4.classList.add('song-name');
    songNameH4.classList.add(id);
    songArtistP.classList.add('song-artist');
    songArtistP.classList.add(id);
    albumArtImg.classList.add('album-art');
    albumArtImg.classList.add(id);

    playItemDiv.setAttribute('id', "play-item");
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

// Sweeps through the object array in playlist.js to populate the music list
playlist.map((song) => {
    createPlayItem(song.id, song.name, song.albumArt, song.artist);
});

const playItemDiv = document.querySelectorAll('#play-item');

// for attaching the click listeners to every play item div created through createPlayItem()
// the click listener is to select song from the list to be played on player.
playItemDiv.forEach((item) => {
    item.addEventListener('click', () => {
        let songId = event.target.classList[1];
        
        playImg.setAttribute('src', "./assets/icons/play.svg");
        musicImg.setAttribute('src', playlist[songId].albumArt);
        musicName.innerText = playlist[songId].name;
        album.innerText = "Album: " + playlist[songId].album;
        releasedOn.innerText = "Released On: " + playlist[songId]["released-on"];
        artist.innerText = "Artist: " + playlist[songId].artist;
        label.innerText = "Label: " + playlist[songId].label;
        audio.src = playlist[songId].audio;
    })
});

const playSong = () => {
    playBtn.classList.add("play");
    playImg.setAttribute('src', "./assets/icons/pause.svg");
    audio.play();
}

const pauseSong = () => {
    playBtn.classList.remove("play");
    playImg.setAttribute('src', "./assets/icons/play.svg");
    audio.pause();
}

playBtn.addEventListener('click', () => {
    let isPlaying = playBtn.classList.contains("play");
    
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});
