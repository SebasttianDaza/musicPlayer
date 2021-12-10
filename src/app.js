// Importar matriz de dados

import { song } from './matrizMusic.js';

//*Obtener los elementos del DOM

const img = document.getElementById('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audios = document.getElementById('audioSong');
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
          document.getElementById('songs').innerHTML += template(song);
          //*Cargamos eventos
          let sonidos = document.querySelector('.persona2');
          sonidos.addEventListener('click', () => {
               playSong(index);
          });
     });
}


// Funcion para cargar plantilla

function template(song){
     //*Plantilla
     let plantilla = `
          <li class ='persona2'  > <a href="#">${song.name}</a> </li>
     `;

     return plantilla;
}

//Funcion para reproducir cancion

function playSong(index){
     if(index !== isPlaying){
          //*Falta funcion de cambio de clase
          console.log(index);
          isPlaying = index;
          audios.src = "./audio/" + song[index].cover;
          audios.play();
          document.getElementById('profile').src = song[index].image;
     }
}

loadSong();