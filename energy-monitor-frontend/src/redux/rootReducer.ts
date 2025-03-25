import { combineReducers } from '@reduxjs/toolkit';
import consumptionReducer from '../features/consumption/slice';

const rootReducer = combineReducers({
	consumption: consumptionReducer,
});

export default rootReducer;
