import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import consumptionReducer from '../features/consumption/slice';

export const store = configureStore({
	reducer: {
		consumption: consumptionReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
