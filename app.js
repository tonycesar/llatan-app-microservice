'use strict';

const fs = require('fs');
const https = require('https');
var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  var portSSL = process.env.PORT_SSL;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
  if (portSSL) {
    const privateKey = fs.readFileSync('/mysite/privkey.pem', 'utf8');
    const certificate = fs.readFileSync('/mysite/cert.pem', 'utf8');
    const ca = fs.readFileSync('/mysite/chain.pem', 'utf8');
    const credentials = { key: privateKey, cert: certificate, ca: ca };
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(portSSl, () => { console.log('HTTPS Server running on port 443'); });
  }



});
