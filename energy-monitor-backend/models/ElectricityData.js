const mongoose = require("mongoose");

const ElectricitySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  generation: Number,
  hourly_outgoing: Number,
  hourly_incoming: Number,
});

module.exports = mongoose.model("ElectricityData", ElectricitySchema);
