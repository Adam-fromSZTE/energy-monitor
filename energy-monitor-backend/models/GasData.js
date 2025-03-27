import mongoose from 'mongoose';

// GasData.js
const GasSchema = new mongoose.Schema({
	date: {
		type: Date,
		required: [true, 'Dátum kötelező'],
		default: Date.now,
	},
	value: {
		type: Number,
		required: [true, 'Érték kötelező'],
		min: [0, 'Érték nem lehet negatív'],
	},
});

export default mongoose.model('GasData', GasSchema);
