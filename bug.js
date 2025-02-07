const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause an error if the request takes too long to process.
  // Because the response is not ended in time which makes the request hanging.
  // This bug can be difficult to debug because the server process might not crash, but
  // the response will hang indefinitely.
  console.log('Request received');
  // Simulate a long-running task
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});