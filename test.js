
var http = require("http");

http.createServer(function(req, rsp) {
	console.log("received http request...");

    rsp.writeHead(200, "Content-Type:text/plain");
    rsp.end("hello world!");

    console.log("sent back http response 200!");
}).listen(8888);


console.log("HTTP Server is running...");
