import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

export const selectConsumptionStatus = (state: RootState) => state.consumption.status;
export const selectConsumptionType = (state: RootState) => state.consumption.currentType;
export const selectConsumptionData = (state: RootState) => state.consumption.data;
export const selectConsumptionError = (state: RootState) => state.consumption.error;
// Selector for current type's consumptions
export const selectCurrentConsumptions = createSelector(
	[selectConsumptionType, selectConsumptionData],
	(currentType, data) => data[currentType] || [],
);
