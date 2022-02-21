import { changeClassPlay, changeClassList } from "./change-Class.js";
import { requestAPI } from "./api.js";

export let actualSong = null;
export let btnPlay = false;


export function loadSong(i, e, audio, data) {
  if (i !== actualSong) {
    changeClassList(actualSong, e);

    audio.play();
    btnPlay = true;
    changeClassPlay(btnPlay);

    actualSong = i;
    requestAPI(data, actualSong, document.querySelector("#lyrics"));
  }
}
