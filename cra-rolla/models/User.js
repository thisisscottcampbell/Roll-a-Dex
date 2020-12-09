const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  list: [],
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', function(next){
  const user = this;

  if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);
    
    
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err)

        user.password = hash;
        next();
    })
  })
})

module.exports = mongoose.model('User', UserSchema);