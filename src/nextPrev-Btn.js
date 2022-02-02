import { listSongs } from "./app.js";


export function changeNextSong (beforeSong) {
    let nextSong = beforeSong + 1;
    // Pasar al primer elemento de la lista en caso de ser el ultimo
    if (nextSong >= listSongs.length) {
        nextSong = 0;
    }
    listSongs[nextSong].click();
}

export function changePrevSong (beforeSong) {
    let prevSong = beforeSong - 1;
    //Pasar al ultimo elemento en caso de que sea el primero
    if (prevSong < 0) {
        prevSong = listSongs.length - 1;
    }
    listSongs[prevSong].click();
}