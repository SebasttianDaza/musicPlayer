// Importar matriz de dados

import { song } from './matrizMusic.js';

//*Obtener los elementos del DOM

const img = document.getElementById('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
let audios ;
const progress = document.getElementById('progress');
const listSongs = document.getElementById('songs');

// *Botones de reproduccion

const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Estado de la musica

let isPlaying = null;

//* Recuperar template

const fragment = document.createDocumentFragment();

// Evento de los botones

playBtn.addEventListener('click', () => {
     
})

// Funcion para cargar cancion

function loadSong(){
     //*Realizamos un ciclo
     song.forEach((song, index) => {
          //*Cargamos el template
          listSongs.innerHTML += template(song, index);
          
     });

     // Funcion para cargar plantilla



}

function template(song, index) {
      let template = 
      ` <li class='templa'> <a onclick='${playSong(index)}' class='link' href="#">${song.name}</a> </li>`;

      return template

     
}



//Funcion para reproducir cancion

function playSong(index){
     
     if(index !== isPlaying){
          isPlaying = index;
          audios = new Audio(`../audio/Peaches.mp3`);
          audios.autoPlay = true;
          audios.play();
          
     }
     audios.play();

}

//*Funcion para cargar cancion llamada

loadSong();