const mongoose = require("mongoose");

const WaterSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  value: Number
});

module.exports = mongoose.model("WaterData", WaterSchema);
