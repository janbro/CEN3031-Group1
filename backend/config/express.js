var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    garagesRouter = require('../routes/garages.routes'),
    decalRouter = require('../routes/decal-permissions.routes');

var __clientdir = './../parking-picker-ui';

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri, { useNewUrlParser: true });

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /**TODO
  Serve static files */
  app.use('/', express.static(__clientdir));

  app.get('/', function(req, res) {
    res.sendFile('/index.html');
  });
  

  /**TODO 
  Use the garage router for requests to the api */
  app.use('/api/garages', garagesRouter);

/**TODO
  Use the decal router for requests to the api*/
  app.use('/api/decals', decalRouter);

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.all('/*', function(req, res) {
    res.redirect('/');
  });

  return app;
};
