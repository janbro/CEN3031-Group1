/* Dependencies */
var mongoose = require('mongoose'), 
    Garage = require('../models/garages.model.js'),
    Occupancy = require('../models/occupancy.model.js');

exports.read = function(req, res) {
  /* send back the garages as json from the request */
  res.json(req.garage);
};

// Returns all garage data
exports.list = function(req, res) {
  Garage.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.json(docs);
  });
};

// Returns garage data of passed decal type
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

// Returns geojson data of garages of passed decal type
exports.getGeoJSONByDecals = function(req, res) {
  Garage.find({}).sort({}).exec((err, docs) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    // Retrieve only garages of passed decal type
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
    // Get occupancy data to include in geojson properties
    getOccupancy().then((occupancies) => {
      filteredgarages.forEach((ele) => {
        let currOcc = 0;
        let occupancy = occupancies.find((occ) => {
          if(occ.name === ele.name) {
            return true;
          }
        });
        // Calculate occupancy total
        occupancy.data.forEach((occ) => {
          // Only calculate with decals user has permission for
          if(req.body.decals.includes(occ.decal)) {
            currOcc += occ.currOccupancy;
          }
        });
        // Calculate occupancy percentage
        let capacity = Math.ceil(currOcc / getCapacity(ele, req.body.decals) * 100);
        // Build geojson
        geoJson.features.push({
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": ele.coordinates.reverse()
          },
          "properties": {
            "id": ele.id,
            "name": ele.name,
            "capacity": capacity,
            "color": getColor(capacity)
          }
        });
      });
      res.json(geoJson);
    });
  });
};

// Return geojson data of all garages
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
    // Get occupancy data to include in geojson properties
    getOccupancy().then((occupancies) => {
      docs.forEach((ele) => {
        let currOcc = 0;
        let occupancy = occupancies.find((occ) => {
          if(occ.name === ele.name) {
            return true;
          }
        });
        // Calculate occupancy total
        occupancy.data.forEach((occ) => {
          currOcc += occ.currOccupancy;
        });
        // Calculate occupancy percentage
        let capacity = Math.ceil(currOcc / getCapacity(ele) * 100);
        // Build geojson
        geoJson.features.push({
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": ele.coordinates.reverse()
          },
          "properties": {
            "id": ele.id,
            "name": ele.name,
            "capacity": capacity,
            "color": getColor(capacity)
          }
        });
      });
      res.json(geoJson);
    });
  });
}

// Get status color for percentage
function getColor(capacity) {
  if(capacity < 60) {
    // Green
    return '#48af48';
  }
  else if(capacity < 85) {
    // Yellow
    return '#fde627';
  }
  else {
    // Red
    return '#a53a3a';
  }
}

// Returns garage data based on passed id
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

// Returns mongo promise for occupancy data
function getOccupancy() {
  let promise = Occupancy.find().exec();
  return promise;
}

// Retrieves the total capacity of a garage, can filter by decal
function getCapacity(ele, dec = []) {
  let totalCapacity = 0;
  ele.decals.forEach((val, ind) => {
    if(dec.length === 0 || dec.includes(val.name)) {
      totalCapacity += val.specCapacity;
    }
  });
  return totalCapacity;
}