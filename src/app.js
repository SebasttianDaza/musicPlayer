// Change elements a variables

const listSongs = document.querySelectorAll('#change li');
const save = document.getElementById('guardar');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');


// Leer documnento Json en Js
document.addEventListener("click", (e) => {
     if ( e.target.matches("#change li")){
          
     }
})


function requestJson () {
     fetch('src/song.json')
          .then( response => response.json())
          .then( data => {
               changeSong(data);
               //Evento para cargar cancion
               playSong(data);
          })
}

// Funcion para caragar Canciones
function changeSong (data = []) {
     // Recorrer canciones
     for (let i = 0; i < data.length; i++) {
          listSongs[i].innerHTML = data[i].name;
     }
}

let actualSong = null;
// Agregar events

const playSong = (data = []) => {
     const audio = new Audio();
     for(let i = 0; i < data.length; i++) {
          listSongs[i].addEventListener('click', (e) => {
               e.stopPropagation();
               audio.src = `assets/audio/${data[i].url}`;
               if ( i !== actualSong ) {
                    changeClass(actualSong, e);
                    audio.play();
                    actualSong = i;
                    

               }
          })
     }
}

// Cambio de clases

 const  changeClass = (actualSong, e) => {
     if (actualSong === null) {
       e.target.classList.remove("secundarios");
       e.target.classList.add("primero");
     } else if (actualSong !== null) {
       listSongs[actualSong].classList.remove("primero");
       listSongs[actualSong].classList.add("secundarios");
       e.target.classList.remove("secundarios");
       e.target.classList.add("primero");
     }
 }


requestJson();