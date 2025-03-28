import { ConsumptionType, TypeUnit } from './enum';

// Mértékegységek definiálása
export const unitLabels: Record<ConsumptionType, string> = {
	[ConsumptionType.WATER]: TypeUnit.WATER,
	[ConsumptionType.GAS]: TypeUnit.GAS,
	[ConsumptionType.ELECTRICITY]: TypeUnit.ELECTRIC,
};
