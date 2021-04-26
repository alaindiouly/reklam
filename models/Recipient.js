const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

// in case of sub-document collections, schemas are not loaded
module.exports = recipientSchema;
