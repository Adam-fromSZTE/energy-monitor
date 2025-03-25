import { combineReducers } from "@reduxjs/toolkit";
import consumptionReducer from "../features/cosumption/slice";

const rootReducer = combineReducers({
  consumption: consumptionReducer,
});

export default rootReducer;