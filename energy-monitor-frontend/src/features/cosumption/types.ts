import { ConsumptionStatus, ConsumptionType } from "./enum";

export interface ConsumptionState {
  data?: ConsumptionData;
  status: ConsumptionStatus;
  error?: string;
  type: ConsumptionType;
}

export interface ConsumptionData {
  water: string;
  electricity: string;
  gas: string;
}