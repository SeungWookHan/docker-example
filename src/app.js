const express = require('express');

const PORT = 80;

async function startServer() {
  const app = express();

  // app.get('/', function(req, res) {
  //   res.send('hello world');
  // });

    // app.get('/test', function(req, res) {
  //   res.send('hello test');
  // });

  app.listen(PORT, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${PORT} 🛡️
      ################################################
    `);
  }).on('error', err => {
    console.error(err);
    process.exit(1);
  });

}

startServer();