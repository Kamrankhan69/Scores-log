const mongoose = require('mongoose');
const { Schema } = mongoose;

const scoreSchema = new Schema({
  userId: String, // String is shorthand for {type: String}
  gameId: String,
  score: Number
});

const Score = mongoose.model('score', scoreSchema);
module.exports = Score;