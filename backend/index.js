const http = require('http');
const app = require('./server.js');

http.createServer(app).listen(process.env.PORT || 8081, () => {
    console.log('=> Server écoutant sur le port http://localhost:8081');
    console.log('=> Pour arrêter le serveur : Ctrl + C');
  });