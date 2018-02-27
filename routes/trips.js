const
  express = require('express')
  tripsRouter = express.Router()
  tripsCtrl = require('../controllers/trips.js')
  verifyToken = require('../serverAuth.js').verifyToken

tripsRouter.route('/')
  .get(tripsCtrl.index)
  .post(verifyToken, tripsCtrl.create)


tripsRouter.route('/:id')
  .get(tripsCtrl.show)
  .patch(verifyToken, tripsCtrl.update)
  .delete(verifyToken, tripsCtrl.destroy)

module.exports = tripsRouter