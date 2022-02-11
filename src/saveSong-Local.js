import { actualSong } from "./loadSong.js"
import { listSongs, audio, dataGlobal } from "./app.js"



export function saveSongLocalStorage (div) {
    const song = listSongs[actualSong],
    copySong = song.cloneNode(true);
    console.log(song);
    copySong.addEventListener("click", (e) => {
        e.stopPropagation();
        audio.src = `assets/audio/${dataGlobal[actualSong].url}`;
        
        
    })
    
    copySong.classList.remove("ile");
    copySong.classList.remove("primero");
    copySong.classList.add("save");

    
    div.appendChild(copySong);



}