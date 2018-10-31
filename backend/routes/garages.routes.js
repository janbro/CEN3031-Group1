/* Dependencies */
var garages = require('../controllers/garages.controller.js'), 
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/')
  .get(garages.list);

/*
  The ':' specifies a URL parameter. 
 */
router.route('/:garageId')
  .get(garages.read);
  // ADMIN ROUTES
  // .put(garages.update)
  // .delete(garages.delete);

router.param('garageId', garages.garageByID);

module.exports = router;
