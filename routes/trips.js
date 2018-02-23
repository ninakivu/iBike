const
  express = require('express')
  tripsRouter = express.Router()
  tripsCtrl = require('../controllers/trips.js')

tripsRouter.route('/')
  .get(tripsCtrl.index)
  .post(tripsCtrl.create)

tripsRouter.route('/:id')
  .get(tripsCtrl.show)
  .patch(tripsCtrl.update)
  .delete(tripsCtrl.destroy)

module.exports = tripsRouter