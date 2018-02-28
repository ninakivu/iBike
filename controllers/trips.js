const Trip = require('../models/Trip.js')

module.exports = {
  // list all trips
  index: (req, res) => {
    Trip.find({}).populate('by').exec((err, trips) => {
      res.json(trips)
    })
  },

  // get one trip
  show: (req, res) => {
    console.log("Current Trip:")
    console.log(req.params.id)
    Trip.findById(req.params.id, (err, trip) => {
      res.json(trip)
    })
  },

  // create a new trip:
  create: (req, res) => {
    Trip.create({...req.body, by: req.user}, (err, newTrip) => {
      if(err) return res.json({success: false, code: err.code})
      res.json({success: true, message: "Trip created.", newTrip})
    })
  },

  // update an exisitng trip:
  update: (req, res) => {
    Trip.findById(req.params.id, (err, trip) => {
      Object.assign(trip, req.body)
      trip.save((err, updatedTrip) => {
        console.log(err)
        res.json({success: true, message: "Trip updated.", updatedTrip})
      })
    })
  },

  // delete an existing trip
  destroy: (req, res) => {
    Trip.findByIdAndRemove(req.params.id, (err, trip) => {
      res.json({success: true, message: "Trip deleted.", trip})
    })
  }
}