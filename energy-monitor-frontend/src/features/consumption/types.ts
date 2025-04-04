import { ConsumptionType } from './enum';

export interface ConsumptionState {
	currentType: ConsumptionType;
	data: {
		[key in ConsumptionType]?: Consumption[];
	};
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

export interface Consumption {
	type: ConsumptionType;
	date: Date;
	actClock: number;
	amount: number;
}

export interface AddConsumptionRequest {
	type: ConsumptionType;
	date: Date;
	actClock: number;
}
