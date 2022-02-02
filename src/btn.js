import { audio } from "./app.js";
import { changeClassPlay } from "./change-Class.js";

export function playPauseSongBeen (btnPlay) {
    if (audio.paused) {
        audio.play();
        btnPlay = true;
        changeClassPlay(btnPlay);
    } else {
        audio.pause();
        btnPlay = false;
        changeClassPlay(btnPlay);
    } 
}

