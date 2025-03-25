import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConsumptionStatus } from '../features/consumption/enum';
import { selectConsumptionData, selectConsumptionStatus } from '../features/consumption/selector';
import { fetchConsumptionRequest } from '../features/consumption/slice';

const ConsumptionPage: React.FC = () => {
	const dispatch = useDispatch();
	const data = useSelector(selectConsumptionData);
	const status = useSelector(selectConsumptionStatus);

	const handleFetchData = () => {
		dispatch(fetchConsumptionRequest());
	};

	return (
		<div className="p-4">
			<h1 className="text-xl font-bold">Consumption Data</h1>
			<button
				className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
				onClick={handleFetchData}
			>
				Fetch Data
			</button>

			{status === ConsumptionStatus.LOADING && <p>Loading...</p>}
			{status === ConsumptionStatus.ERROR && (
				<p className="text-red-500">Error loading data.</p>
			)}
		</div>
	);

export default ConsumptionPage;
