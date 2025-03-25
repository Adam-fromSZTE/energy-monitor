import { RootState } from "../../redux/store";

export const selectConsumptionData = (state: RootState) => state.consumption.data;
export const selectConsumptionStatus = (state: RootState) => state.consumption.status;
export const selectConsumptionType = (state: RootState) => state.consumption.type;
export const selectConsumptionError = (state: RootState) => state.consumption.error;