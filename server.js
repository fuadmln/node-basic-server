const http = require('http');

const PORT = 8080;

http.createServer((req, res) => {
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.write("Hello Node JS");
  res.end();

}).listen(PORT);