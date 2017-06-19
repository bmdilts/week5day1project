var express = require('express');
var app = express();

var loremIpsum = require('lorem-ipsum');

const output = loremIpsum({count: 3, units:'paragraphs', format:'html'});

app.get('/lorem', function(req,res){
  res.send(output);
});

app.listen(3000, function(){
  console.log("server started");
});
