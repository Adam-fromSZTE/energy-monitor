// components/Navbar.jsx

import { ConsumptionType } from '../features/consumption/enum';
import { setType } from '../features/consumption/slice';
import { useAppDispatch } from '../hooks/useAppDispatch';

const types = [
	{ id: ConsumptionType.WATER, label: 'Víz', icon: '💧' },
	{ id: ConsumptionType.GAS, label: 'Gáz', icon: '🔥' },
	{ id: ConsumptionType.ELECTRICITY, label: 'Villany', icon: '⚡' },
];

const Navbar = () => {
	const dispatch = useAppDispatch();

	const handleTypeChange = (type: ConsumptionType) => {
		// Dispatch both setType and fetchConsumptions
		dispatch(setType(type));
	};

	return (
		<nav className="bg-gray-800 p-4">
			<div className="flex justify-center space-x-4">
				{types.map((type) => (
					<button
						key={type.id}
						onClick={() => handleTypeChange(type.id)}
						className="flex items-center rounded-lg bg-gray-700 px-4 py-2 text-white hover:bg-blue-600"
					>
						<span className="mr-2">{type.icon}</span>
						{type.label}
					</button>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
