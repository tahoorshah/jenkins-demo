const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello from Jenkins Pipeline!</h1>');
});

const port = process.env.PORT || 3000;

if (require.main === module) {
  // Change this line to include '0.0.0.0'
  server.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port} at 0.0.0.0`);
  });
}

module.exports = server;
