/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var garageSchema = new Schema(
    {
      "name": String,
      "coordinates": [Number],
      "electric": Boolean,
      "meter": Boolean,
      "scooter": Boolean,
      "lastUpdate": Date,
      "decals": [{
        "name": String,
        "specCapacity": Number,
        "restrictions": {
            "startTime": String,
            "endTime": String,
            "weekend": Boolean,
            "allDay": Boolean
        }
      }]
  }, {
    collection: "ParkingLotData"
  }
);

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
garageSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Garage = mongoose.model('Garage', garageSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Garage;
