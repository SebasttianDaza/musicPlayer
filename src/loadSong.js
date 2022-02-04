import { changeClassPlay, changeClassList } from "./change-Class.js";

export let actualSong = null;
export let btnPlay = false;


export function loadSong(i, e, audio) {
  if (i !== actualSong) {
    changeClassList(actualSong, e);

    audio.play();
    btnPlay = true;
    changeClassPlay(btnPlay);

    actualSong = i;
  }
}
