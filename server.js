const
  dotenv = require('dotenv').load()
  express = require('express')
  app = express()
  logger = require('morgan')
  bodyParser = require('body-parser')
  mongoose = require('mongoose')
  MONGODB_URI = 'mongodb://localhost/ibike'
  PORT = process.env.PORT || 3001
  usersRoutes = require('./routes/users.js')
  tripsRoutes = require('./routes/trips.js')
  

// connect ot db:
mongoose.connect(MONGODB_URI, (err) => {
  console.log(err || 'Connected to MongoDB.')
})

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
  res.json({message: "API root."})
})

// app.get('/api/users', (req, res) => {
//   res.json(users)
// })

app.use('/api/users', usersRoutes)
app.use('/api/trips', tripsRoutes)

app.use('*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

var server = app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}`)
})