const
  mongoose = require('mongoose')
  tripSchema = new mongoose.Schema({
    name: { type: String },
    start: { type: String, required: true },
    end: { type: String, required: true },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  })

const Trip = mongoose.model('Trip', tripSchema)
module.exports = Trip