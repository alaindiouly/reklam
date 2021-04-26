const mongoose = require('mongoose');

const { Schema } = mongoose;

// _id s assigned by default by MongoDB
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

// loading the schema into mongoose
mongoose.model('users', userSchema);
