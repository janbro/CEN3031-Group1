var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    garagesRouter = require('../routes/garages.routes'),
    decalRouter = require('../routes/decal-permissions.routes'),
    occupancyRouter = require('../routes/occupancy.routes');
const cors = require('cors');

var __clientdir = './../parking-picker-ui/dist/parking-picker-ui/';

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri, { useNewUrlParser: true });

  //initialize app
  var app = express();

  app.use(cors());

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());
  
  /**TODO
  Serve static files */
  app.use('/', express.static(path.resolve(__clientdir)));
  
  app.get('/', function(req, res) {
    res.sendFile('/index.html');
  });
  
  // Garages endpoint
  app.use('/api/garages', garagesRouter);

  // Decal permission endpoint
  app.use('/api/decals', decalRouter);

  // Occupancy endpoint
  app.use('/api/occupancy', occupancyRouter);

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.all('/*', function(req, res) {
    res.redirect('/');
  });

  return app;
};
