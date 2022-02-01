import { listSongs } from "./app.js";

// Funcion para caragar Canciones

export function changeSongListDom(data = []) {
  // Recorrer canciones
  for (let i = 0; i < data.length; i++) {
    listSongs[i].innerHTML = data[i].name;
  }
}
