const mongoose = require('mongoose');
const RecipientSchema = require('./Recipient');
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date,
});
// the moment we create a new model, we get a new collection (or table for relational DBs) in the DB
// collection stores instances of surveys, or records
mongoose.model('surveys', surveySchema);
