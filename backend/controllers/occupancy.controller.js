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

/* Create a occupancy */
exports.create = function(req, res) {

  /* Instantiate a Occupancy */
  var occupancy = new Occupancy(req.body);

  /* Then save the occupancy */
  occupancy.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(occupancy);
    }
  });
};


/* Update a occupancy */
exports.update = function(req, res) {
  var newOccupancy = req.body.occupancy; // { name: [garagename], decal: [decaltoupdate], park: [bool]}
  if(newOccupancy) {
    Occupancy.find({name: newOccupancy.name}).exec(function(err, occ) {
      if(err) {
        res.status(400).send(err);
      } else {
        let updatedOcc = occ[0].data;
        updatedOcc.some((ele) => {
          if(ele.decal === newOccupancy.decal) {
            if(newOccupancy.park) ++ele.currOccupancy;
            else --ele.currOccupancy;
          }
        });
        occ.update({data: updatedOcc}, (err) => {
          console.log(err);
          res.status(400).send(err);
        });
        res.json(occ);
      }
    });
  }
  else {
    console.log("Occupancy does not exist!");
    res.status(400).send("Occupancy does not exist!");
  }
};
