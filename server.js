const express = require('express');
const app = express();
const http = require('http');


app.use(express.static(__dirname + '/'));

app.get('/', (req,res) => {
  return res.sendFile(__dirname + '/index.html')
});

app.get('/*', (req, res) => {
  return res.redirect('/');
});

http.createServer(app).listen(3000)

console.log('server Running');
