import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { unitLabels } from '../features/consumption/constants';
import { RootState } from '../redux/store';

const StatsOverview = () => {
	const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
	const { currentType, data } = useTypedSelector((state) => state.consumption);

	// Az aktuális típushoz tartozó adatok
	const currentItems = data[currentType] || [];

	// Aktuális dátumhoz segédváltozók
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();

	// Adatok szűrése aktuális hónapra
	const currentMonthData = currentItems.filter((item) => {
		const itemDate = new Date(item.date);
		return itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear;
	});

	// Adatok szűrése előző hónapra
	const lastMonthData = currentItems.filter((item) => {
		const itemDate = new Date(item.date);
		const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
		const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
		return itemDate.getMonth() === lastMonth && itemDate.getFullYear() === lastMonthYear;
	});

	// Összesítések számolása
	const currentMonthTotal = currentMonthData.reduce((sum, item) => sum + item.amount, 0);
	const lastMonthTotal = lastMonthData.reduce((sum, item) => sum + item.amount, 0);

	// Százalékos változás számítása
	const difference =
		lastMonthTotal > 0
			? (((currentMonthTotal - lastMonthTotal) / lastMonthTotal) * 100).toFixed(2)
			: '0.00';

	// Mértékegység meghatározása
	const unit = unitLabels[currentType];

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
			{/* Aktuális hónap statisztika */}
			<div className="rounded-xl bg-white p-6 shadow-sm">
				<h3 className="text-sm font-medium text-gray-500">Aktuális hónap</h3>
				<p className="mt-2 text-2xl font-bold">
					{currentMonthTotal.toFixed(2)} {unit}
				</p>
			</div>

			{/* Előző hónap statisztika */}
			<div className="rounded-xl bg-white p-6 shadow-sm">
				<h3 className="text-sm font-medium text-gray-500">Előző hónap</h3>
				<p className="mt-2 text-2xl font-bold">
					{lastMonthTotal.toFixed(2)} {unit}
				</p>
			</div>

			{/* Változás statisztika */}
			<div
				className={`rounded-xl bg-white p-6 shadow-sm ${
					parseFloat(difference) >= 0 ? 'text-red-500' : 'text-green-500'
				}`}
			>
				<h3 className="text-sm font-medium text-gray-500">Változás</h3>
				<p className="mt-2 text-2xl font-bold">
					{difference}%
					{parseFloat(difference) >= 0 ? (
						<span className="ml-1">↑</span>
					) : (
						<span className="ml-1">↓</span>
					)}
				</p>
			</div>
		</div>
	);
};

export default StatsOverview;
