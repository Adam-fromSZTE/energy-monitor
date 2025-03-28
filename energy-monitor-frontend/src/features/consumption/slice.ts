// src/features/consumption/consumptionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
			.addCase(addConsumption.fulfilled, (state, action: PayloadAction<Consumption>) => {
				const { type } = action.payload;

				// Típusbiztos hozzáférés az adattömbhöz
				const typeKey = type as ConsumptionType;
				if (!state.data[typeKey]) {
					state.data[typeKey] = [];
				}

				// Dátum alapján keresés típusbiztos módon
				const existingIndex =
					state.data[typeKey]?.findIndex(
						(item: Consumption) =>
							new Date(item.date).toDateString() ===
							new Date(action.payload.date).toDateString(),
					) ?? -1;

				if (existingIndex >= 0 && state.data[typeKey]) {
					// Frissítés
					state.data[typeKey]![existingIndex] = action.payload;
				} else if (state.data[typeKey]) {
					// Új elem
					state.data[typeKey]!.push(action.payload);
				}

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
