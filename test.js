const assert = require('assert');
const http = require('http');
const server = require('./app.js'); // This imports the server without starting it

describe('Application Tests', function() {
  
  // Start the server manually before tests
  before(function(done) {
    server.listen(3000, done);
  });

  // Close the server manually after tests so Jenkins doesn't hang
  after(function(done) {
    server.close(done);
  });

  it('should return 200 status code', function(done) {
    http.get('http://localhost:3000', (res) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });
});
