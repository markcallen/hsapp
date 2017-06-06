var app = require('express')();
var bodyParser = require('body-parser');

var server = require('http').Server(app);

app.use(bodyParser.json());

app.post('/messages', function (req, res) {
  console.dir(req.body, {colors: true, depth: 4});
  res.send(req.body);
});

server.listen(8080);

