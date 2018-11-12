
/* Dependencies */
var mongoose = require('mongoose'), 
    Garage = require('../models/garages.model.js');

exports.read = function(req, res) {
  /* send back the garages as json from the request */
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

exports.listGeoJSON = function(req, res) {
  Garage.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    geoJson = {
      "type": "FeatureCollection",
      "features" : []
    };
    features = [];
    docs.forEach((ele) => {
        features.push({
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": ele.coordinates.reverse()
          },
          "properties": {
              "name": ele.name
          }
        });
    });
    geoJson.features = features;
    res.json(geoJson);
  });
}

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
