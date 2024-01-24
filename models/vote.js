const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  party: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

// Specify the collection name explicitly as "Votes"
const Vote = mongoose.model("Votes", voteSchema);

module.exports = Vote;
