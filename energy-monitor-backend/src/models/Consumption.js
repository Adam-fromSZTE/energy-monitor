import mongoose from 'mongoose';

const consumptionSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
		enum: ['water', 'gas', 'electricity'],
	},
	date: {
		type: Date,
		required: true,
		index: true,
	},
	actClock: {
		type: Number,
		required: true,
		min: 0,
	},
});

consumptionSchema.index({ type: 1, date: 1 }, { unique: true });

export default mongoose.model('Consumption', consumptionSchema);
