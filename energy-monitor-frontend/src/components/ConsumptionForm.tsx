import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { unitLabels } from '../features/consumption/constants';
import { ConsumptionType } from '../features/consumption/enum';
import { addConsumption, fetchAllConsumptions } from '../features/consumption/generator';
import { selectConsumptionType, selectCurrentConsumptions } from '../features/consumption/selector';
import { AddConsumptionRequest } from '../features/consumption/types';
import { useAppDispatch } from '../hooks/useAppDispatch';
import DatePickerField from './DatePickerField';

const ConsumptionForm = () => {
	const [date, setDate] = useState<Date>(new Date());
	const [amount, setAmount] = useState<string>('');
	const [existingData, setExistingData] = useState<{ actClock: number } | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const currentType = useSelector(selectConsumptionType);
	const currentItems = useSelector(selectCurrentConsumptions);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const existing = currentItems.find(
			(item) => new Date(item.date).toDateString() === date.toDateString(),
		);

		setExistingData(existing ? { actClock: existing.actClock } : null);
		if (existing) {
			if (existing.actClock) {
				setAmount(existing.actClock.toString());
			}
		} else {
			setAmount('');
		}
	}, [date, currentItems]);

	const handleDateChange = useCallback((newDate: Date | null) => {
		if (newDate) {
			setDate(newDate);
		}
	}, []);

	const handleSubmit = useCallback(
		async (e: React.FormEvent) => {
			e.preventDefault();
			setIsSubmitting(true);
			setError(null);

			const newConsumption: AddConsumptionRequest = {
				type: currentType,
				date,
				actClock: parseFloat(amount),
			};

			try {
				await dispatch(addConsumption(newConsumption)).unwrap();
				setAmount('');
				setDate(new Date());
			} catch (err: any) {
				setError(err.message || 'Hiba történt a mentés során');
				console.error('Mentési hiba:', err);
			} finally {
				await dispatch(fetchAllConsumptions());
				setIsSubmitting(false);
			}
		},
		[amount, currentType, date, dispatch],
	);

	const highlightDates = currentItems.map((item) => new Date(item.date));

	return (
		<div className="sticky top-6 rounded-xl bg-white p-6 shadow-sm">
			<h2 className="mb-4 text-xl font-semibold">Új adat rögzítése</h2>

			{existingData && (
				<div className="mb-4 rounded-lg bg-yellow-100 p-3 text-yellow-800">
					Figyelem! Erre a dátumra már van rögzített adat ({existingData.actClock}{' '}
					{unitLabels[currentType]}), ami felülírásra kerül.
				</div>
			)}

			{error && <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-800">{error}</div>}

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="mb-1 block text-sm font-medium text-gray-700">Dátum</label>
					<DatePickerField
						selected={date}
						onChange={handleDateChange}
						highlightDates={highlightDates}
					/>
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium text-gray-700">
						{currentType === ConsumptionType.WATER
							? 'Víz'
							: currentType === ConsumptionType.GAS
								? 'Gáz'
								: 'Villany'}{' '}
						óra állás ({unitLabels[currentType]})
					</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
						step="0.01"
						min="0"
						required
						placeholder={`Adja meg a ${
							currentType === ConsumptionType.WATER
								? 'víz'
								: currentType === ConsumptionType.GAS
									? 'gáz'
									: 'villany'
						} óra állását`}
					/>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className={`w-full rounded-md px-4 py-2 font-medium text-white transition-colors duration-200 ${
						isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
					}`}
				>
					{isSubmitting ? 'Mentés...' : 'Rögzítés'}
				</button>
			</form>
		</div>
	);
};

export default React.memo(ConsumptionForm);
