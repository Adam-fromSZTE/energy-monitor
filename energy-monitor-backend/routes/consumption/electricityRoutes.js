/* eslint-disable no-undef */
import ElectricityData from '../../models/ElectricityData';

export const setElectricity = app.post('/energy', async (req, res) => {
	try {
		const newData = new ElectricityData(req.body);
		await newData.save();
		res.status(201).json(newData);
	} catch (error) {
		res.status(500).json({ message: 'Error saving energy data', error });
	}
});

export const getElectricity = app.get('/energy', async (req, res) => {
	try {
		const data = await ElectricityData.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching energy data', error });
	}
});
