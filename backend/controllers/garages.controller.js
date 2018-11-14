
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

exports.getGaragesByDecals = function(req, res) {
  Garage.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    var filteredgarages = docs.filter((garage)=>{
      return garage.decals.some((decal)=> {
        if(req.body.decals.includes(decal.name)) {
          return true;
        }
      });
    });
    res.json(filteredgarages);
  });
};

exports.getGeoJSONByDecals = function(req, res) {
  Garage.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    var filteredgarages = docs.filter((garage)=>{
      return garage.decals.some((decal)=> {
        if(req.body.decals.includes(decal.name)) {
          return true;
        }
      });
    });
    geoJson = {
      type: "FeatureCollection",
      features: []
    };
    filteredgarages.forEach((ele) => {
        geoJson.features.push({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": ele.coordinates.reverse()
            },
            "properties": {
                "name": ele.name,
                "capacity": Math.floor(Math.random()*101),
                "color": getRandomColor()
            }
        });
    });
    res.json(geoJson);
  });
};

exports.listGeoJSON = function(req, res) {
  Garage.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    geoJson = {
      type: "FeatureCollection",
      features: []
    };
    docs.forEach((ele) => {
        geoJson.features.push({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": ele.coordinates.reverse()
            },
            "properties": {
                "name": ele.name,
                "capacity": Math.floor(Math.random()*101),
                "color": getRandomColor()
            }
        });
    });
    res.json(geoJson);
  });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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
