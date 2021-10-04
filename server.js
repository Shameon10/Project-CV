console.log('Server-side code running');

const express = require('express');

const app = express();


// serve files from the public directory
app.use(express.static('CV'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  