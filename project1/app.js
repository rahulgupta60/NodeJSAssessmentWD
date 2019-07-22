const fs = require('fs');
const server = require('http').createServer();

const port = 3001

server.on('request', (req, res) => {
  switch (req.url) {
    case '/home':
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(`.${req.url}/${req.url}.html`));
      break;
    case '/':
      res.writeHead(301, { 'Location': '/home' });
      res.end();
      break;
    default:
      res.writeHead(404);
      res.end();
  }
});

server.listen(port, function () {
  console.log(`API listen at port ${port}`);
});

module.exports = server;