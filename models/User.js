const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: { type: String, default: null, required: true, unique: true },
  address: String,
  city: String,
  state: String,
  postalCode: String,
  phone: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: String,
  createdBy: String,
});

module.exports = model('User', userSchema);
