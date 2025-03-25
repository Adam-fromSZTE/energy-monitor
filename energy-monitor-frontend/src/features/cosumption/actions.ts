import { ConsumptionAction } from "./enum";

export const fetchConsumptionRequest = () => ({
  type: ConsumptionAction.FETCH_CONSUMPTION_REQUEST,
});

export const fetchConsumptionSuccess = (data: any) => ({
  type: ConsumptionAction.FETCH_CONSUMPTION_SUCCESS,
  payload: data,
});