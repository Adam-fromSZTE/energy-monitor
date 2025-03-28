import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AddConsumptionRequest, Consumption } from './types';

// Fetch all consumptions at once
export const fetchAllConsumptions = createAsyncThunk('consumptions/fetchAll', async () => {
	const response = await axios.get<Consumption[]>('http://localhost:5000/api/consumptions');
	return response.data;
});

export const addConsumption = createAsyncThunk(
	'consumption/addConsumption',
	async (addConsumptionRequest: AddConsumptionRequest, { rejectWithValue }) => {
		try {
			const response = await axios.post('http://localhost:5000/api/consumptions', {
				...addConsumptionRequest,
				date: addConsumptionRequest.date.toISOString(),
			});
			return response.data;
		} catch (err) {
			if (axios.isAxiosError(err)) {
				return rejectWithValue(err.response?.data?.message || err.message);
			}
			return rejectWithValue('Ismeretlen hiba történt');
		}
	},
);
