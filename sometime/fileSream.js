/* const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile(`${__dirname}/fileSream.js`, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(String(err));
      return;
    }

    res.end(data);
  });
}).listen(8000); */
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

http.createServer((req, res) => {
  res.writeHead(200, {
    'content-encoding': 'gzip',
  });
  fs.createReadStream(`${__dirname}/fileSream.js`)
    .pipe(zlib.createGzip())
    .pipe(res);
}).listen(8000);
