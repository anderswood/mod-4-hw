let express = require('express');
let app = express();

app.get('/', (req, res) => res.send('hello world'))

let server = app.listen(8081, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})
