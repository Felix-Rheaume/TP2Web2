const express = require('express');
const app = express();

// Code felix
app.get('/evenements', (req, res) => {
    res.send('Liste des evenements');
});

app.post('/ajouterEvenement', (req, res) => {
    res.status(200).send('Événement ajouté');
});

app.delete('/supprimerEvenement/:id', (req, res) => {
    res.status(200).send('Événement supprimé');
});

module.exports = app;