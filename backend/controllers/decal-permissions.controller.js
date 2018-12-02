/* Dependencies */
var mongoose = require('mongoose'), 
    decal = require('../models/decal-permissions.model.js');

exports.read = function(req, res) {
  /* send back the decals as json from the request */
  res.json(req.decal);
};

// Returns all decal permissions
exports.list = function(req, res) {
 decal.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.json(docs);
  });
};

// Returns all permission for passed decals
exports.permissionByDecals = function(req, res) {
  decal.find({decal:{$in: req.body.decals}}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    // Use set to ignore repeat decals
    let decals = new Set();
    docs.forEach((ele) => {
      ele.access.forEach((decal) => {
        decals.add(decal);
      });
    });
    res.json(Array.from(decals));
  });
};

// Returns passed decals permissions
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
