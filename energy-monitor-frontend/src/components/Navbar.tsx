import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConsumptionType } from '../features/consumption/enum';
import { selectConsumptionType } from '../features/consumption/selector';
import { setConsumptionType } from '../features/consumption/slice';
import { RootState } from '../redux/store';

const Navbar: React.FC = () => {
	const dispatch = useDispatch();
	const consumptionType = useSelector((state: RootState) => selectConsumptionType(state));

	return (
		<nav className="bg-blue-600 p-4 text-white shadow-md">
			<div className="container mx-auto flex items-center justify-between">
				<h1 className="text-xl font-bold">Energy Monitor</h1>

				<div className="flex space-x-4">
					<button
						className={`rounded px-4 py-2 ${consumptionType === ConsumptionType.WATER ? 'bg-white text-blue-600' : ''}`}
						onClick={() => dispatch(setConsumptionType(ConsumptionType.WATER))}
					>
						Water
					</button>
					<button
						className={`rounded px-4 py-2 ${consumptionType === ConsumptionType.ELECTRICITY ? 'bg-white text-blue-600' : ''}`}
						onClick={() => dispatch(setConsumptionType(ConsumptionType.ELECTRICITY))}
					>
						Electricity
					</button>
					<button
						className={`rounded px-4 py-2 ${consumptionType === ConsumptionType.GAS ? 'bg-white text-blue-600' : ''}`}
						onClick={() => dispatch(setConsumptionType(ConsumptionType.GAS))}
					>
						Gas
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
