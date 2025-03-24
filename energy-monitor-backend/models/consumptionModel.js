import mongoose from "mongoose";

const consumptionSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ["water", "gas", "electricity"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Consumption = mongoose.model("Consumption", consumptionSchema);
export default Consumption;