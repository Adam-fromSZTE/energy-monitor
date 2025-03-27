/* eslint-disable no-undef */
import WaterData from '../../models/WaterData';

export const setWater = app.post('/water', async (req, res) => {
	try {
		const newData = new WaterData(req.body);
		await newData.save();
		res.status(201).json(newData);
	} catch (error) {
		res.status(500).json({ message: 'Error saving water data', error });
	}
});

export const getWater = app.get('/water', async (req, res) => {
	try {
		const data = await WaterData.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching water data', error });
	}
});
