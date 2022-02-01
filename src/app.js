import { changeSongListDom } from "./changeSong.js";
import { playPauseSongBeen} from "./btn.js";

// Change elements a variables

const listSongs = document.querySelectorAll('#change li');
const save = document.getElementById('guardar');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


// Leer documnento Json en Js
document.addEventListener("click", (e) => {
     if ( e.target.matches("#play")){
          playPauseSongBeen(btnPlay);
     }
})


function requestJson () {
     fetch('src/song.json')
          .then( response => response.json())
          .then( data => {
               changeSongListDom(data);
               //Evento para cargar cancion
               playSongList(data);
          })
}



//Var been

let actualSong = null;

let btnPlay = false;

const audio = new Audio();



export const playSongList = (data = []) => {

  for (let i = 0; i < data.length; i++) {

    listSongs[i].addEventListener("click", (e) => {
          e.stopPropagation();

          audio.src = `assets/audio/${data[i].url}`;

          if (i !== actualSong) {
               changeClass(actualSong, e);

               audio.play();
               console.log(audio.currentTime);
               btnPlay = true;

               actualSong = i;
          }
    });
  }
};

// Cambio de clases

const changeClass = (actualSong, e) => {
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

export { actualSong, btnPlay, listSongs, audio};

requestJson();