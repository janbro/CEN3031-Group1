
/* Dependencies */
var mongoose = require('mongoose'), 
    Garage = require('../models/garages.model.js');

exports.read = function(req, res) {
  /* send back the listing as json from the request */
  res.json(req.garage);
};

exports.list = function(req, res) {
  Garage.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.json(docs);
  });
};

exports.garageByID = function(req, res, next, id) {
  Garage.findById(id).exec(function(err, garage) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.garage = garage;
      next();
    }
  });
};
