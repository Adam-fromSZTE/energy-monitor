import Consumption from '../models/Consumption.js';

export const getConsumptions = async (req, res) => {
	try {
		const { type } = req.query;

		const pipeline = [
			// Filter by type (if have)
			...(type ? [{ $match: { type } }] : []),

			// Sort by date
			{ $sort: { date: 1 } },

			// Get prevoius field clock value
			{
				$setWindowFields: {
					partitionBy: '$type', // Group by type
					sortBy: { date: 1 },
					output: {
						previousActClock: {
							$shift: {
								output: '$actClock',
								by: -1,
								default: null,
							},
						},
					},
				},
			},

			// Calculate consumption: actClock - previousActClock
			{
				$addFields: {
					amount: {
						$cond: [
							{ $eq: ['$previousActClock', null] }, // If no previous data
							null,
							{ $subtract: ['$actClock', '$previousActClock'] },
						],
					},
				},
			},

			// Delete temporary field
			{ $project: { previousActClock: 0 } },
		];

		// Run aggregation
		const consumptions = await Consumption.aggregate(pipeline);

		res.json(consumptions);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Add data
export const createConsumption = async (req, res) => {
	try {
		const { type, date, actClock } = req.body;

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
			existing.actClock = actClock;
			result = await existing.save();
		} else {
			result = await new Consumption({
				type,
				date: inputDate,
				actClock: actClock,
			}).save();
		}

		res.status(200).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
