const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request received');
  // Use a timeout to ensure the response is ended within a reasonable timeframe.
  const timeoutId = setTimeout(() => {
    res.writeHead(500);
    res.end('Request timed out');
  }, 5000); // 5 seconds timeout

  // Simulate a long-running task
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  clearTimeout(timeoutId);
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});