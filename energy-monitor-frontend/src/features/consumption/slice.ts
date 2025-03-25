import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConsumptionStatus, ConsumptionType } from './enum';
import { ConsumptionData, ConsumptionState } from './types';

const initialState: ConsumptionState = {
	status: ConsumptionStatus.LOADING,
	type: ConsumptionType.WATER,
};

const consumptionSlice = createSlice({
	name: 'consumption',
	initialState,
	reducers: {
		fetchConsumptionRequest(state: ConsumptionState) {
			state.status = ConsumptionStatus.LOADING;
			state.error = undefined;
		},
		fetchConsumptionSuccess(state: ConsumptionState, action: PayloadAction<ConsumptionData>) {
			state.data = action.payload;
			state.status = ConsumptionStatus.SUCCESS;
			state.error = undefined;
		},
		fetchConsumptionFailure(state: ConsumptionState, action: PayloadAction<string>) {
			state.status = ConsumptionStatus.ERROR;
			state.error = action.payload;
		},
		setConsumptionType: (state: ConsumptionState, action: PayloadAction<ConsumptionType>) => {
			state.type = action.payload;
		},
	},
});

export const {
	fetchConsumptionRequest,
	fetchConsumptionSuccess,
	fetchConsumptionFailure,
	setConsumptionType,
} = consumptionSlice.actions;

export default consumptionSlice.reducer;
