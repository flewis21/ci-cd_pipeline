// Load the http module to create an http server.
import http from 'http';

// create a function to handle every HTTP request.
function handler(req: any, res: any) {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end('<html><body><h1>Hello</h1></body></html>');
}

// Create a serever that invokes `handler` function upon receiving a request
http.createServer(handler).listen(3999, function( (err: any) => {
  if (err) {
    console.log('Error starting http server ');
  }) else {
    console.log('server running at http://127.0.0.1:3999/ or http://localhost:3999/');
  }
});
export {};
const js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Fabian`');

let firstname = 'Fabian';
