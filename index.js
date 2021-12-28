/**
 * @param {express} Variable que contiene el elemento express
 * @param {app} Variable que contiene el llamado a express
 */
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/canciones', (req, res) => {
    fs.readFile(path.join(__dirname, 'canciones.json'), 'utf8', (err, canciones) => {
        if (err) {throw err}
        res.json(JSON.parse(canciones));
    })
})

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});