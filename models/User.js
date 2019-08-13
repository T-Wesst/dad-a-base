const { Schema, model } = require('mongoose');
const { checkPassword, hashPassword } = require('../utilities/passwordService');

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String
});

UserSchema.pre('save', async function(next) {
  let user = this;
  if (!user.isModified('password')) return next();
  try {
    let hash = await hashPassword(user.password);
    user.password = hash;
    next();
  } catch (err) {
    if (err) throw err;
  }
});

UserSchema.methods.comparePassword = async function(password) {
  try {
    let matched = await checkPassword(password, this.password);
    return matched;
  } catch (err) {
    if (err) throw err;
  }
};

module.exports = model('User', UserSchema);
