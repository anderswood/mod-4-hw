var http = require("http");
var request = http.request({
  hostname: 'http://localhost:8000',
  path: '/file.txt',
  method: "GET",
  // headers: {Accept: "text/html"}
}, function(response) {
  console.log("Server responded with status code:",
              response.statusCode);
});
request.end();
