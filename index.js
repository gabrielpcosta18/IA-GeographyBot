var app = require('./app/server');
var config = require('./app/config/config');

app.listen(config.server.port, function (error) {
  if (error) {
    console.log('Unable to listen for connections', error);
    process.exit(10);
  }
  else console.log("Server running on ", config.server.port);
});