/* Dependencies */
var decals = require('../controllers/decal-permissions.controller.js'), 
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/')
  .get(decals.list)
  .post(decals.permissionByDecals);

/*
  The ':' specifies a URL parameter. 
 */
router.route('/:decalName')
  .get(decals.read);
  // ADMIN ROUTES
  // .put(decals.update)
  // .delete(decals.delete);


router.param('decalName', decals.decalByName);

module.exports = router;