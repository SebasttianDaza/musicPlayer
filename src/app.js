//*Obtener los elementos del DOM

const img = document.getElementById('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');

//
const url_API = 'https://api.napster.com/v2.2/';
const API = 'YzZhNDIyZTktZTgyNy00MDEwLWI4NTMtMTFmM2Q4MjU0NDdj';
const getData = async () => {
     fetch('https://api.napster.com/v2.2/', Headers = { apikey : API })
     .then(response => response.json())
     .then(data => {console.log(data)})
}

getData();

