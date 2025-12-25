const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello from Jenkins Pipeline!</h1>');
});

const port = process.env.PORT || 3000;

// ONLY start the server if this file is run directly
if (require.main === module) {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export the server object so test.js can control it
module.exports = server;
