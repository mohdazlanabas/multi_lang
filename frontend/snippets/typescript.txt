import * as http from 'http';
http.createServer((req, res) => {
  if (req.url === "/typescript") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World from TypeScript");
  }
}).listen(9011);