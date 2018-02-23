const
  mongoose = require('mongoose')
  bcrypt = require('bcrypt-nodejs')
  tripSchema = new mongoose.Schema({
    name: { type: String },
    start: { type: String, required: true },
    end: { type: String, required: true }
  })

const Trip = mongoose.model('Trip', tripSchema)
module.exports = Trip