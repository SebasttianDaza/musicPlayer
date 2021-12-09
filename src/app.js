// Importar matriz de dados

import { song } from './matrizMusic.js';

//*Obtener los elementos del DOM

const img = document.getElementById('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const listSongs = document.getElementById('songs');

// *Botones de reproduccion

const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Estado de la musica

let isPlaying = null;

// Evento de los botones

playBtn.addEventListener('click', () => {
     playMusic();
})

// Funcion para cargar cancion

function loadSong(){
     //*Realizamos un ciclo
     song.forEach((song, index) => {
          //*Cargamos la plantillas
          document.getElementById('songs').innerHTML += loadSong2(song);
          //*Cargamos eventos
          document.getElementById('persona2').addEventListener('click', () => {
               playSong(index);
          });
     });
}


// Funcion para cargar plantilla

function loadSong2(song){
     //*Plantilla
     let plantilla = `
          <li> <a id='persona2' href="#">${song.name}</a> </li>
     `;

     return plantilla;
}

//Funcion para reproducir cancion

function playSong(index){
     if(index !== isPlaying){
          //*Falta funcion de cambio de clase
          isPlaying = index;

          audio.src = './audio' + song[index].cover;
          audio.play();
     }
}

loadSong();