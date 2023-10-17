const http = require('http');
const app = require('./server.js');
const mysql = require('mysql2');

var conn = mysql.createConnection({
  database: 'defaultdb',
  host: 'mysql-13ac89ba-tp2web.aivencloud.com',
  user: 'lawrence',
  password: 'AVNS_CNH8EHaS3FiLPie-leY',
  port: 27473
});

conn.connect(function(err) {
  if(err) throw err;
  console.log("Connexion a la base de donnees reussie!");
});

http.createServer(app).listen(process.env.PORT || 8081, () => {
    console.log('=> Server écoutant sur le port http://localhost:8081');
    console.log('=> Pour arrêter le serveur : Ctrl + C');
  });