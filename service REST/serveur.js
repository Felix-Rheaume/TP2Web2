const express = require('express');
const app = express();

app.get('/evenements', (req, res) => {
    res.send('Liste des evenements');
});

app.post('/ajouterEvenement', (req, res) => {
    res.status(200).send('Événement ajouté');
});

app.delete('/supprimerEvenement/:id', (req, res) => {
    res.status(200).send('Événement supprimé');
});

var server = app.listen(8081, () => {
    var host = server.address().address;
    var port = server.address().port;
});