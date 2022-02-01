import { audio, play } from "./app.js";
import { changeClassPlay } from "./change-Class.js";

export function playPauseSongBeen (btnPlay, e, firstSong) {

    let time;

    if ( btnPlay === true) {
        btnPlay = false;
        audio.pause();
        time = audio.currentTime;
        
        changeClassPlay(btnPlay);
        
    } 
    
    
    
}
