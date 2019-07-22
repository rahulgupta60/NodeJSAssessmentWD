const http = require('http')
const fs = require('fs');

const { createFileWriteAsync } = require('./utils')
const port = 3000 || process.env.port;

const app = http.createServer((req, res) => {
  if (req.method == 'POST') {
    let string = ''
    req.on('data', (chunk) => {
      string += chunk.toString()
    })
    req.on('end', () => {
      const fileName = createFileWriteAsync(string)
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ 'response': `file created and filename ${fileName}.` }));
    })
  }
})

const server = app.listen(port, function () {
  console.log("API listen at port 3000");
});

module.exports = server;