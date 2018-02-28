const User = require('../models/User.js')
const Trip = require('../models/Trip.js')
const signToken = require('../serverAuth.js').signToken

module.exports = {
  // list all users
  index: (req, res) => {
    User.find( {}, (err, users) => {
      res.json(users)
    })
  },

  // get one user
  show: (req, res) => {
    console.log("Current User:")
    console.log(req.user)
    User.findById(req.params.id, (err, user) => {
      Trip.find({by: user}, (err, trips) => {
        const userData = user.toObject() 
        res.json({...userData, trips})
      })
    })
  },

  // create a new user:
  create: (req, res) => {
    User.create(req.body, (err, user) => {      
      if(err) return res.json({success: false, code: err.code})
      // once user is created, generate a token to "log in":
      const token = signToken(user)
      res.json({success: true, message: "User created. Token", token})
    })
  },

  // update an exisitng user:
  update: (req, res) => {
    User.findById(req.params.id, (err, user) => {
      Object.assign(user, req.body)
      user.save((err, updatedUser) => {
        res.json({success: true, message: "User updated.", user})
      })
    })
  },

  // delete an existing user
  destroy: (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      res.json({success: true, message: "User deleted.", user})
    })
  },

  // the login route
  authenticate: (req, res) => {
    //check if user exists:
    User.findOne({email: req.body.email}, (err, user) => {
      // if there is no user or the password is invalid
      if(!user || !user.validPassword(req.body.password)) {
        // deny access
        return res.json({success: false, message: "Invalid credentials."})
      }
      const token = signToken(user)
      res.json({success: true, message:"User authenticated, token attached.", token})
    })
  }
}