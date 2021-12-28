/**
 * @param {express} Variable que contiene el elemento express
 * @param {app} Variable que contiene el llamado a express
 */
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});