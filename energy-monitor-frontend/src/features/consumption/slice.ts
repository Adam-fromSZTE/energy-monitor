// src/features/consumption/consumptionSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { ConsumptionType } from './enum';
import { addConsumption, fetchAllConsumptions } from './generator';
import { Consumption, ConsumptionState } from './types';

const initialState: ConsumptionState = {
	currentType: ConsumptionType.WATER,
	data: {},
	status: 'idle',
	error: null,
};

const consumptionSlice = createSlice({
	name: 'consumption',
	initialState,
	reducers: {
		setType: (state, action) => {
			state.currentType = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllConsumptions.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchAllConsumptions.fulfilled, (state, action) => {
				// Group consumptions by type
				const groupedData = action.payload.reduce(
					(acc: Record<ConsumptionType, Consumption[]>, item: Consumption) => {
						if (!acc[item.type]) {
							acc[item.type] = [];
						}
						acc[item.type].push(item);
						return acc;
					},
					{} as Record<ConsumptionType, Consumption[]>,
				);

				state.data = groupedData;
				state.status = 'succeeded';
			})
			.addCase(fetchAllConsumptions.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload as string;
			})
			.addCase(addConsumption.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(addConsumption.fulfilled, (state) => {
				state.status = 'succeeded';
			})
			.addCase(addConsumption.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload as string;
			});
	},
});

export const { setType } = consumptionSlice.actions;
export default consumptionSlice.reducer;
