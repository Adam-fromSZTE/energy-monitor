import Consumption from '../models/Consumption.js';

// Összes mérő aktuális állása
export const getConsumptions = async (req, res) => {
	try {
		const { type } = req.query;

		const query = {};
		if (type) query.type = type;

		const consumptions = await Consumption.find(query).sort({ date: 1 }); // 1 = növekvő, -1 = csökkenő sorrend

		res.json(consumptions);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Adatrögzítés

// Adatrögzítés
export const createConsumption = async (req, res) => {
	try {
		const { type, date, amount } = req.body;

		const inputDate = new Date(date);

		const existing = await Consumption.findOne({
			type,
			date: {
				$gte: new Date(inputDate.setHours(0, 0, 0, 0)),
				$lte: new Date(inputDate.setHours(23, 59, 59, 999)),
			},
		});

		let result;
		if (existing) {
			existing.amount = amount;
			result = await existing.save();
		} else {
			result = await new Consumption({
				type,
				date: inputDate,
				amount: amount,
			}).save();
		}

		res.status(200).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
