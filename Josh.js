var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(process.env.C9_PORT);
