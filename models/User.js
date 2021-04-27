const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  socialId: String,
  credits: { type: Number, default: 0 },
});

// loading the schema into mongoose
mongoose.model('users', userSchema);
