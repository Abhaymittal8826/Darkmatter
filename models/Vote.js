const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  option: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Vote", voteSchema);
