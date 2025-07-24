const http = require("http");
http.createServer((req, res) => {
  if (req.url === "/javascript") {
    res.writeHead(200, { "Content-Type": "text/plain", "Access-Control-Allow-Origin": "*" });
    res.end("Package Being Served From JavaScript");
  }
}).listen(9002, "0.0.0.0");