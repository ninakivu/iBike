const
  mongoose = require('mongoose')
  tripSchema = new mongoose.Schema({
    name: { type: String },
    start: { type: String, required: true },
    end: { type: String, required: true },
    by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  })

const Trip = mongoose.model('Trip', tripSchema)


Trip.find({by: "5a95e37e7854966308296da5"}, (err, trips) => {
  console.log(trips)
})

module.exports = Trip