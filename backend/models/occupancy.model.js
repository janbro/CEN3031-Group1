/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var occupancyData = new Schema(
    // Schema here
    {
        "name": String,
        "data": [{
            "decal": String,
            "currOccupancy": Number
        }]
    },
    {
        collection: "OccupancyData"
    }
);

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
occupancyData.pre('save', function (next) {
    var currentTime = new Date;
    this.updated_at = currentTime;
    if (!this.created_at) {
        this.created_at = currentTime;
    }
    next();
});

/* Use your schema to instantiate a Mongoose model */
var Occupancy = mongoose.model('Occupancy', occupancyData);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Occupancy;