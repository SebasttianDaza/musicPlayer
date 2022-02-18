export const requestAPI = (data, actualSong, element) => {
    const { name, author } = data[actualSong];

    try {
        fetch(`https://api.lyrics.ovh/v1/${author}/${name}`)
          .then((response) => response.json())
          .then((data) => {
            try {
                loadLyric(data, element);
            } catch (error) {
                loadError(error, element);
            }
          });

    } catch (error) {
        loadError(error, element);
    }
}


const loadLyric = (data, element) => {
    console.log(data.lyrics);

    ( data.error ) 
        ? loadError(data.error, element)
        : element.innerHTML = data.lyrics.split("\n").join("<br>");

}

const loadError = (error, element) => {
    element.innerHTML = error;
}
