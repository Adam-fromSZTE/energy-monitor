// components/Dashboard.jsx
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js';
import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectConsumptionType, selectCurrentConsumptions } from '../features/consumption/selector';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Dashboard = () => {
	const currentType = useSelector(selectConsumptionType);
	const currentConsumptions = useSelector(selectCurrentConsumptions);

	const chartData = useMemo(() => {
		return {
			labels: currentConsumptions.map((item) => new Date(item.date).toLocaleDateString()),
			datasets: [
				{
					label: `${currentType} fogyasztás`,
					data: currentConsumptions.map((item) => item.amount),
					backgroundColor:
						currentType === 'water'
							? '#3B82F6'
							: currentType === 'gas'
								? '#F97316'
								: '#EAB308',
				},
			],
		};
	}, [currentConsumptions, currentType]);

	return (
		<div className="rounded-xl bg-white p-6 shadow-sm">
			<Bar data={chartData} />
		</div>
	);
};

export default Dashboard;
