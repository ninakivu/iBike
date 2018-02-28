const
  express = require('express')
  usersRouter = express.Router()
  usersCtrl = require('../controllers/users.js')
  // import the verifyToken function
  verifyToken = require('../serverAuth.js') 

usersRouter.route('/')
  .get(usersCtrl.index)
  .post(usersCtrl.create)

// to get a token, you need to send a post request here:
usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.use(verifyToken.verifyToken) 
//All the routes after this point will need a verified token
usersRouter.route('/:id')
  .get(usersCtrl.show)
  .patch(usersCtrl.update)
  .delete(usersCtrl.destroy)

module.exports = usersRouter