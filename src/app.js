import { changeSongListDom } from "./changeSong.js";
import { loadSong, btnPlay, actualSong } from "./loadSong.js";
import { playPauseSongBeen } from "./btn.js";
import { changeNextSong, changePrevSong, barraTop } from "./nextPrev-Btn.js";
import { saveSongLocalStorage } from "./saveSong-Local.js";


// Change elements a variables

const listSongs = document.querySelectorAll('#change li');
const save = document.getElementById('guardar');

// Leer documnento Json en Js
document.addEventListener("click", (e) => {
     if ( e.target.matches("#play")){
          playPauseSongBeen(btnPlay, e);
     }
     if (e.target.matches("#next")) {
          changeNextSong(actualSong);
     }
     if (e.target.matches("#prev")) {
          changePrevSong(actualSong);
     }
     if (e.target.matches("#guardar")) {
          
          saveSongLocalStorage( document.querySelector("#listSave"));
     }
     if (e.target.matches("#top")) {
          const barra = document.getElementById("bar");
          barraTop(barra, e);
     }
})


// Each Json

function requestJson () {
     fetch('src/song.json')
          .then( response => response.json())
          .then( data => {
               changeSongListDom(data);
               //Evento para cargar cancion
               playSongList(data);
               

          })
}


//Var been audio
const audio = new Audio();

// Events of to list

const playSongList = (data = []) => {
  
  for (let i = 0; i < data.length; i++) {
     listSongs[i].addEventListener("click", (e) => {
          e.stopPropagation();
          audio.src = `${data[i].url}`;
          loadSong(i, e, audio, data);
          
     });
  }
};


// Export Var
export { listSongs, audio};

requestJson();