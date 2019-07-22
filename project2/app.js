const server = require('http').createServer();
const { extractQuery, validateInput, computeProduct } = require('./utils')

const port = 3000;

server.on('request', (req, res) => {
  try {
    if ((req.url).includes("/api?q=")) {

      const arrayQuery = extractQuery(req.url);
      const response = validateInput(arrayQuery) && computeProduct(arrayQuery);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ 'response': response }));
    }
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 'response': error }));
  }
});

server.listen(port, function () {
  console.log("API listen at port 3000");
});

module.exports = server;
