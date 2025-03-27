import mongoose from "mongoose";

const ElectricitySchema = new mongoose.Schema({
	date: { type: Date, required: true },
	generation: Number,
	hourly_outgoing: Number,
	hourly_incoming: Number,
});

export default mongoose.model("ElectricityData", ElectricitySchema);
