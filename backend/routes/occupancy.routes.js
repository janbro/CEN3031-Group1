/* Dependencies */
var occupancy = require('../controllers/occupancy.controller.js'), 
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/')
  .get(occupancy.list);
  //.post(occupancy.permissionByDecals);

/*
  The ':' specifies a URL parameter. 
 */
router.route('/:garageName')
  .get(occupancy.read);
  // ADMIN ROUTES
  // .put(decals.update)
  // .delete(decals.delete);


router.param('garageName', occupancy.occupancyByName);

module.exports = router;