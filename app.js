var dotenv = require('dotenv');
dotenv.config(); // read in .env file and parse it

var express = require('express');
var app = express()

app.use(function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  next();
});

var youtube = require('./api/youtube')

app.get('/search/:q', function (request, response) {
  youtube.searchYoutube(request.params.q).then(function(data){
    response.json(data);
  });
})

app.listen(3000);
