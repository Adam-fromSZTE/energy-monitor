import { useEffect } from 'react';
import { fetchAllConsumptions } from '../features/consumption/generator';
import { useAppDispatch } from '../hooks/useAppDispatch';
import ConsumptionDashboard from './ConsumptionDashboard';
import ConsumptionForm from './ConsumptionForm';
import StatsOverview from './StatsOverview';

const DashboardLayout = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const loadData = async () => {
			try {
				await dispatch(fetchAllConsumptions()).unwrap();
			} catch (err) {
				console.error('Hiba az adatok betöltésekor:', err);
			}
		};

		loadData();
	}, [dispatch]);

	return (
		<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
			<div className="space-y-6 lg:col-span-2">
				<StatsOverview />
				<ConsumptionDashboard />
			</div>
			<div className="lg:col-span-1">
				<ConsumptionForm />
			</div>
		</div>
	);
};

export default DashboardLayout;
