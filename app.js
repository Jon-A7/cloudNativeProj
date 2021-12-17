"use strict"

const outToMain = document.querySelector("#mainCardHolder")
document.querySelector("#playListForm").addEventListener("submit", function (event) {
    getOutput.innerHTML = "";
    event.preventDefault();
    console.log("THIS:", this);
    const form = this;

    const data = {
        song: form.song.value,
        album: form.album.value,
        artist: form.artist.value
    };

    console.log("DATA: ", data);

    axios
        .post("http://localhost:8080/createSong", data)
        .then(res => {
            outToMain.innerHTML = "";
            getAllSongs();
            form.reset();
            form.song.focus();
            console.log(res);
        })
        .catch(err => console.error(err));
});

function getAllSongs(){
    axios
    .get("http://localhost:8080/getAll")
    .then(res => {
        const songs = res.data;
        for (let song of songs){
            const songContainer = document.createElement("div");

        const songTitle = document.createElement("p");
        songTitle.innerText = `Song: ${song.song}`;
        songContainer.appendChild(songTitle);

        const albumTitle = document.createElement("p");
        albumTitle.innerText = `Album: ${song.album}`;
        songContainer.appendChild(albumTitle);

        const artistName = document.createElement("p");
        artistName.innerText = `Artist: ${song.artist}`;
        songContainer.appendChild(artistName);
        }

        

    })
    .catch(err => console.error(err))
}
