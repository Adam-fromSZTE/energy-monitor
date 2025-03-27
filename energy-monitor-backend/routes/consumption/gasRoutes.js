// gasRoutes.js
import express from 'express';
import GasData from '../../models/GasData.js';

const gasRouter = express.Router();

gasRouter.post('/', async (req, res) => {
	try {
		const newData = new GasData(req.body);
		await newData.save();
		res.status(201).json(newData);
	} catch (error) {
		res.status(500).json({ message: 'Error saving gas data', error });
	}
});

gasRouter.get('/', async (req, res) => {
	try {
		const data = await GasData.find().sort({ date: -1 }); // Rendezés dátum szerint
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching gas data', error });
	}
});

export default gasRouter;
