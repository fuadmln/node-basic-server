const http = require('http');
const fs = require('fs');

const PORT = 8080;

fs.readFile('./pages/index.html', (error, html) => {
  if(error) throw error;
  
  http.createServer((req, res) => {
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
  
  }).listen(PORT, () => console.log(`server running on port ${PORT}`));
});

