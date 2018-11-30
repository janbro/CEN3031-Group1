/* Dependencies */
var mongoose = require('mongoose'), 
    Garage = require('../models/garages.model.js'),
    Occupancy = require('../models/occupancy.model.js');

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
      let currOcc = 0;
      ele.decals.forEach((dec) => {
        getOccupancy(ele.name, dec).then((res) => {
          let occupancy = res[0].data.find((val, ind) => {
            if(val.decal === dec.name) {
              return true;
            }
          });
          currOcc += occupancy.currOccupancy;
        });
      });
      let capacity = currOcc / getCapacity(ele);
      geoJson.features.push({
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": ele.coordinates.reverse()
        },
        "properties": {
          "name": ele.name,
          "capacity": capacity,
          "color": getColor(capacity)
        }
      });
    });
    res.json(geoJson);
  });
};

exports.listGeoJSON = function(req, res) {
  Garage.find({}).sort({}).exec((err, docs) => {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    geoJson = {
      type: "FeatureCollection",
      features: []
    };
    docs.forEach((ele) => {
      let currOcc = 0;
      ele.decals.forEach((dec) => {
        getOccupancy(ele.name, dec).then((res) => {
          let occupancy = res[0].data.find((val, ind) => {
            if(val.decal === dec.name) {
              return true;
            }
          });
          currOcc += occupancy.currOccupancy;
        });
      });
      let capacity = currOcc / getCapacity(ele);
      geoJson.features.push({
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": ele.coordinates.reverse()
        },
        "properties": {
          "name": ele.name,
          "capacity": capacity,
          "color": getColor(capacity)
        }
      });
    });
    res.json(geoJson);
  });
}

function getColor(capacity) {
  if(capacity < 60) {
    // Green
    return "#48af48";
  }
  else if(capacity < 85) {
    // Yellow
    return '#cccc45';
  }
  else {
    // Red
    return '#a53a3a';
  }
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

function getOccupancy(name, dec) {
  let promise = Occupancy.find({"name": name}).exec();
  return promise;
}

function getCapacity(ele, dec = []) {
  let totalCapacity = 0;
  ele.decals.forEach((val, ind) => {
    if(dec.length === 0 || dec.includes(val.name)) {
      totalCapacity += val.specCapacity;
    }
  });
  return totalCapacity;
}