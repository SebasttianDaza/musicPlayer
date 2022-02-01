import { changeSongListDom } from "./changeSong.js";
import { playPauseSongBeen } from "./btn.js";
import { changeClassPlay, changeClassList } from "./change-Class.js";

// Change elements a variables

const listSongs = document.querySelectorAll('#change li');
const save = document.getElementById('guardar');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


// Leer documnento Json en Js
document.addEventListener("click", (e) => {
     if ( e.target.matches("#play")){
          playPauseSongBeen(btnPlay, e);
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
               changeClassList(actualSong, e);

               audio.play();
               btnPlay = true;
               changeClassPlay(btnPlay);
               
               actualSong = i;
          }
    });
  }
};

// Cambio de clases



export { actualSong, btnPlay, listSongs, audio, play};

requestJson();