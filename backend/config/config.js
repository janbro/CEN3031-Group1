//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://admin:cen3031@ds045077.mlab.com:45077/parkingpicker', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT || 8080
};

