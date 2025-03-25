export enum ConsumptionAction {
	FETCH_CONSUMPTION_REQUEST = 'consumption/FETCH_CONSUMPTION_REQUEST',
	FETCH_CONSUMPTION_SUCCESS = 'consumption/FETCH_CONSUMPTION_SUCCESS',
	FETCH_CONSUMPTION_FAILURE = 'consumption/FETCH_CONSUMPTION_FAILURE',
}

export enum ConsumptionStatus {
	LOADING = 'LOADING',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
}

export enum ConsumptionType {
	WATER = 'water',
	ELECTRICITY = 'electricity',
	GAS = 'GAS',
}
