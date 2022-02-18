import { actualSong } from "./loadSong.js"
import { listSongs } from "./app.js"



export function saveSongLocalStorage (div) {
    //Create and copy element
    const song = listSongs[actualSong],
        copySong = song.cloneNode(true);


    
    //Remove class and add
    copySong.classList.remove("ile");
    copySong.classList.remove("primero");
    copySong.classList.add(`save`);


    

    if (div.children.length === 0) {
        div.appendChild(copySong);
    } 
    
    if (div.children.length > 0) {
        for(let i = 0; i < div.children.length; i++) {
            console.log(div.children[i].textContent);
            
            if ( div.children[i].textContent !== song.textContent && div.children[i].textContent !== copySong.textContent ) {
                div.appendChild(copySong);
            }
        }
    }

    
}



