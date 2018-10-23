//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://dev:d3vd3v@ds139523.mlab.com:39523/parking-picker', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT || 8080
};

