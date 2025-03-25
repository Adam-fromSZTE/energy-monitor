import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConsumptionData, ConsumptionState } from "./types";
import { ConsumptionStatus, ConsumptionType } from "./enum";

const initialState: ConsumptionState = {
  status: ConsumptionStatus.LOADING,
  type: ConsumptionType.WATER,
};

const consumptionSlice = createSlice({
  name: "consumption",
  initialState,
  reducers: {
    fetchConsumptionSuccess(state, action: PayloadAction<ConsumptionData>) {
      state.data = action.payload;
      state.status = ConsumptionStatus.SUCCESS;
      state.error = undefined;
    },
    fetchConsumptionFailure(state, action: PayloadAction<string>) {
      state.status = ConsumptionStatus.ERROR;
      state.error = action.payload;
    },
    setConsumptionType: (state, action: PayloadAction<ConsumptionType>) => {
      state.type = action.payload;
    },
  },
});

export const { fetchConsumptionSuccess, fetchConsumptionFailure, setConsumptionType } = consumptionSlice.actions;
export default consumptionSlice.reducer;