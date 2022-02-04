import { actualSong } from "./loadSong.js"
import { listSongs } from "./app.js"



export function saveSongLocalStorage (div) {
    const song = listSongs[actualSong],
    copySong = song.cloneNode(true);
    
    copySong.classList.remove("ile");
    copySong.classList.remove("primero");
    copySong.classList.add("save");

    if ( copySong === div.firstChild ) {console.warn("Ya existe")} else {
        div.appendChild(copySong);
    }

    

}