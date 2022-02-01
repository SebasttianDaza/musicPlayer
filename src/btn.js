import { audio } from "./app.js";

export function playPauseSongBeen (btnPlay) {
    
    const minuteExact = 0;
    
    if ( btnPlay === true) {
        btnPlay = false;
        
        audio.pause();

    }
    else if ( btnPlay === false) {
        btnPlay = true;
        audio.play();
    }
}

