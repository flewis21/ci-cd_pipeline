// Load the http module to create an http server.
import * as http from 'http';

// create a function to handle every HTTP request.
function handler(req: any, res: any) {
  var form = '';

  if (req.method == 'GET') {
    form =
      '<!doctype html> \
<html lang="en"> \
<head> \
	<meta charset="UTF-8"> \
	<link rel="stylesheet" type="text/css" href="../../frontend/public/css/style.css"> \
	<title>JavaScript Fundamentals</title> \
</head> \
<body> \
	<script> \
		let js = "amazing"; \
		console.log(40 + 8 + 23 - 10); \
		console.log("Fabian"); \
		console.log(23); \
		let firstname = "Fabian"; \
		console.log(firstname); \
	</script> \
</body> \
</html>';

    // respond
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(form);
  }
}

// Create a serever that invokes `handler` function upon receiving a request
http.createServer(handler).listen(3999, function (err?: any) {
  if (err) {
    console.log('Error starting http server ');
  } else {
    console.log('server running at http://127.0.0.1:3999/ or http://localhost:3999/');
  }
});
