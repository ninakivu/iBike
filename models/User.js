const
  mongoose = require('mongoose')
  bcrypt = require('bcrypt-nodejs')
  userSchema = new mongoose.Schema({
    username: { type: String, required: 'Username is required' },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    name: { type: String },
    image: { type: String }
  })

  // add a method to a user document object ot create a hashed password
  userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  }

  // add a method to a user object to check if provided password is correct
  userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  }

  // middleware: before saving, check if the password was changed, and if so, encrypt the new password before saving:
  userSchema.pre('save', function(next) {
    if(this.isModified('password')) {
      this.password = this.generateHash(this.password)
    }
    next()
  })

const User = mongoose.model('User', userSchema)
module.exports = User