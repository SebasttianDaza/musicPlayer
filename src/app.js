// Change elements a variables

const listSongs = document.querySelectorAll('#change li');
const save = document.getElementById('guardar');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');


// Leer documnento Json en Js

function requestJson () {
     fetch('src/song.json')
          .then( response => response.json())
          .then( data => {
               console.log(data);
               changeSong(data);
               //Evento para cargar cancion
               listSongs.forEach( elements => {
                    elements.addEventListener('click', () => {
                         playSong(data);
                    });
               })
          })
}

// Funcion para caragar Canciones
function changeSong (data = []) {
     console.log(data);
     // Recorrer canciones
     for (let i = 0; i < data.length; i++) {
          listSongs[i].innerHTML = data[i].name;
     }
}

// Agregar events

const playSong = (data = []) => {
     const audio = new Audio();
     for(let i = 0; i < data.length; i++) {
          listSongs[i].addEventListener('click', () => {
               audio.src = `assets/audio/${data[i].url}`;
               if(audio.play === true) {
                    audio.pause();
               } else {
                    audio.play();
               }
          })
     }
}

requestJson();