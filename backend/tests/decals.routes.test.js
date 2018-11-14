var should = require('should'), 
    request = require('supertest'),
    express = require('../config/express'),
    mongoose = require('mongoose'), 
    decal = require('../models/decal-permissions.model.js');

/* Global variables */
var server, app, agent, decal;

/* Unit tests for testing server side routes for the garages API */
describe('Decals CRUD tests', function() {

    this.timeout(10000);

    before(function(done) {
        app = express.init();
        server = app.listen(done);
        agent = request.agent(server);
    });

    it('should it able to retrieve all decals', function(done) {
    agent.get('/api/decals')
        .expect(200)
        .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.should.have.length(17);
            done();
        });
    });

    it('should be able to retrieve a single decal', function(done) {
        decal.findOne({decal: 'red1'}, function(err, decal) {
            if(err) {
            console.log(err);
            } else {
            agent.get('/api/decals/' + decal.decal)
                .expect(200)
                .end(function(err, res) {
                    should.not.exist(err);
                    should.exist(res);
                    res.body.decal.should.equal('red1');
                    done();
                });
            }
        });
    });

    after(function(done) {
        mongoose.connection.close();
        server.close(done);
    });
});