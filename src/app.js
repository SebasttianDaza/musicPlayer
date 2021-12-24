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

//* Recuperar template

const template = document.getElementById('templeta').content;
const fragment = document.createDocumentFragment();

// Evento de los botones

playBtn.addEventListener('click', () => {
     playMusic();
})

// Funcion para cargar cancion

function loadSong(){
     //*Realizamos un ciclo
     song.forEach((song, index) => {
          template.querySelector('.templa a').textContent = song.name;
          template.querySelector('.templa a').onclick = 'playSong(index)';
          const clone = template.cloneNode(true);
          fragment.appendChild(clone);
          playSong(index);
          
     });

     // Funcion para cargar plantilla

     listSongs.appendChild(fragment); 

}



//Funcion para reproducir cancion

function playSong(index){
     console.log(index);
     
    /* .addEventListener('click', () => {
          if(index !== isPlaying){
               isPlaying = index;
               audios.src = song[index].file;
               audios.play();
          }
     })*/
}

//*Funcion para cargar cancion llamada

loadSong();