var http = require('http');
var uc = require('lower-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc("HELLO WORLD!"));
  res.end();
}).listen(8081); 