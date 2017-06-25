var http = require("http");
var request = http.request({
  hostname: "eloquentjavascript.net",
  path: "/author",
  method: "GET",
  headers: {Accept: "text/plain"}
},
function readStreamAsString(stream) {
  var data = "";
  stream.on("data", function(chunk) {
    data += chunk.toString();
  });
  stream.on("end", function() {
    console.log(data);
    // callback(null, data);
  });
  stream.on("error", function(error) {
    // callback(error);
  });
}
);
request.end();
