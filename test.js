const assert = require('assert');
const http = require('http');
const app = require('./app.js');

describe('Application Tests', function() {
  let server;

  // Start the server before the tests run
  before(function(done) {
    // If app.js doesn't already call .listen, we do it here.
    // If it does, we just need to make sure we can close it.
    server = app.listen(3000, done);
  });

  // CLOSE the server after the tests are done
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
