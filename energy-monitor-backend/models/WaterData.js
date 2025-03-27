import mongoose from "mongoose";

const WaterSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  value: Number,
});

export default mongoose.model("WaterData", WaterSchema);
