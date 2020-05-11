
var http = require("http");

http.createServer(function(req, rsp) {
    rsp.writeHead(200, "Content-Type:text/plain");
    rsp.end("hello world!");
}).listen(8888);


console.log("HTTP Server is running...");
