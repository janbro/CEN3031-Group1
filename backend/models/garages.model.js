/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var garageSchema = new Schema({
  "parkingLots": 
    {
      "name": String,
      "coordinates": {
          "latitude": Number,
          "longitude": Number
      },
      "genCapacity": Number,
      "currOccupancy": Number,
      "electric": Boolean,
      "meter": Boolean,
      "scooter": Boolean,
      "lastUpdate": Date,
      "decals": {
        "disabled": {
            "specCapacity": Number,
            "restrictions": {
                "startTime": Date,
                "endTime": Date,
                "weekend": Boolean,
                "allDay": Boolean
            }
        },
        "gated": {
            "specCapacity": Number,
            "restrictions": {
                "startTime": Date,
                "endTime": Date,
                "weekend": Boolean,
                "allDay": Boolean
            }
        }
      }
    }
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
