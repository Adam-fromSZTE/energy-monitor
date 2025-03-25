const mongoose = require("mongoose");

const GasSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  value: Number,
});

module.exports = mongoose.model("GasData", GasSchema);
