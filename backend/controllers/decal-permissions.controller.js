/* Dependencies */
var mongoose = require('mongoose'), 
    decal = require('../models/decal-permissions.model.js');

exports.read = function(req, res) {
  /* send back the decals as json from the request */
  res.json(req.decal);
};

exports.list = function(req, res) {
 decal.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.json(docs);
  });
};

exports.decalByName = function(req, res, next, name) {
  decal.find({'decal': name}).exec(function(err, decal) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.decal = decal[0];
      next();
    }
  });
};