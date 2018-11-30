/* Dependencies */
var mongoose = require('mongoose'), 
    Occupancy = require('../models/occupancy.model.js');

exports.read = function(req, res) {
  /* send back the decals as json from the request */
  res.json(req.decal);
};

exports.list = function(req, res) {
  Occupancy.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.json(docs);
  });
};

exports.occupancyByName = function(req, res, next, name) {
  Occupancy.find({'name': name}).exec(function(err, decal) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.decal = decal[0];
      next();
    }
  });
};
