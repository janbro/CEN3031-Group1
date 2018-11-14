var should = require('should'), 
    request = require('supertest'),
    express = require('../config/express'),
    mongoose = require('mongoose'), 
    Garage = require('../models/garages.model.js');

/* Global variables */
var server, app, agent, garage, id;

/* Unit tests for testing server side routes for the garages API */
describe('Garages CRUD tests', function() {

    this.timeout(10000);

    before(function(done) {
        app = express.init();
        server = app.listen(done);
        agent = request.agent(server);
    });

    it('should it able to retrieve all garages', function(done) {
        agent.get('/api/garages')
                .expect(200)
                .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.should.have.length(72);
            done();
        });
    });

    it('should be able to retrieve a single garage', function(done) {
        Garage.findOne({name: 'Garage 1'}, function(err, garage) {
            if(err) {
            console.log(err);
            } else {
            agent.get('/api/garages/' + garage._id)
                .expect(200)
                .end(function(err, res) {
                    should.not.exist(err);
                    should.exist(res);
                    res.body.name.should.equal('Garage 1');
                    res.body._id.should.equal(garage._id.toString());
                    done();
                });
            }
        });
    });

    it('should return geojson FeatureCollection', function(done) {
        agent.get('/api/garages/mapbox')
        .expect(200)
        .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.type.should.equal("FeatureCollection");
            res.body.features.should.have.length(72);
            done();
        });
    });

    /* ADMIN TESTS
    it('should be able to save a garage', function(done) {
    var garage = {
        "name": "Test Garage",
        "coordinates": {
            "latitude": 29.641064,
            "longitude": -82.342439
        },
        "genCapacity": 100,
        "currOccupancy": 0,
        "electric": false,
        "meter": false,
        "scooter": true,
        "lastUpdate": "00:00",
        "decals": {
            "gated": {
                "specCapacity": 100,
                "restrictions": {
                    "startTime": "07:30",
                    "endTime": "16:30",
                    "weekend": false,
                    "allDay": false
                }
            }
        }
    };
    agent.post('/api/garages')
        .send(garage)
        .expect(200)
        .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('Test Garage');
        res.body.genCapacity.should.equal(100);
        res.body.electric.should.equal(false);
        res.body.decals.gated.specCapacity.should.equal(100);
        id = res.body._id;
        done();
        });
    });

    it('should be able to update a garage', function(done) {
    var updatedGarage = {
        name: 'Test Garage', 
        genCapacity: 200
    };

    agent.put('/api/garages/' + id)
        .send(updatedGarage)
        .expect(200)
        .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('Test Garage');
        res.body.genCapacity.should.equal(200);
        done();
        });
    });

    it('should be able to delete a garage', function(done) {
    agent.delete('/api/garages/' + id)
        .expect(200)
        .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);

        agent.get('/api/garages/' + id) 
            .expect(400)
            .end(function(err, res) {
            id = undefined;
            done();
            });
        })
    });*/

    after(function(done) {
        mongoose.connection.close();
        server.close(done);
    });
});
