const User = require('../models/User.js')

module.exports = {
  // list all users
  index: (req, res) => {
    User.find( {}, (err, users) => {
      res.json(users)
    })
  },

  // get opne user
  show: (req, res) => {
    console.log("Current User:")
    console.log(req.user)
    User.findById(req.params.id, (err, user) => {
      res.json(user)
    })
  },

  // create a new user:
  create: (req, res) => {
    User.create(req.body, (err, user) => {
      if(err) return res.json({success: false, code: err.code})
      res.json({success: true, message: "User created."})
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
      res.json({success: treu, message: "User deleted.", user})
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
      res.json({success: true, message:"User authenticated."})
    })
  }
}