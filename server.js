const http = require('http');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer((req, res) => {
  if(req.url == '/'){
    fs.readFile('./pages/index.html', (error, html) => {
      if(error) throw error;
      res.writeHeader(200, {"Content-Type": "text/html"});
      res.write(html);
      res.end();
    });
  } else {
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write('NOT FOUND');
    res.end();
  }
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

