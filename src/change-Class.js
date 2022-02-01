import { listSongs } from "./app.js";


// Change class Btn Play
export function changeClassPlay(btnPlay) {
  if (btnPlay === true) {
    play.classList.replace("ri-play-circle-fill", "ri-pause-circle-fill");
  } else {
    play.classList.replace("ri-pause-circle-fill", "ri-play-circle-fill");
  }
}

// Change class list

export const changeClassList = (actualSong, e) => {
  //if the event is same a null
  if (actualSong === null) {
    e.target.classList.remove("secundarios");
    e.target.classList.add("primero");
  }
  // If the event is different a null
  else if (actualSong !== null) {
    //a to song before
    listSongs[actualSong].classList.remove("primero");
    listSongs[actualSong].classList.add("secundarios");
    //a the song clicked
    e.target.classList.remove("secundarios");
    e.target.classList.add("primero");
  }
};