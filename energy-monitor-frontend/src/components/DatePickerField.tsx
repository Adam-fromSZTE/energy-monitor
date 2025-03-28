// src/components/DatePickerField.tsx
import { hu } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Workaround for the locale type issue
const hungarianLocale = {
	...hu,
	options: {
		...hu.options,
		weekStartsOn: 1 as 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined,
	},
};

registerLocale('hu', hungarianLocale);
setDefaultLocale('hu');

interface DatePickerFieldProps {
	selected: Date;
	onChange: (date: Date | null) => void;
	placeholder?: string;
	highlightDates?: Date[];
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
	selected,
	onChange,
	placeholder = 'Válasszon dátumot',
	highlightDates = [],
}) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return (
			<input
				type="text"
				className="w-full rounded-md border border-gray-300 p-2"
				placeholder={placeholder}
				readOnly
			/>
		);
	}

	return (
		<DatePicker
			selected={selected}
			onChange={onChange}
			locale="hu"
			dateFormat="yyyy. MM. dd."
			placeholderText={placeholder}
			className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
			todayButton="Mai nap"
			showMonthDropdown
			showYearDropdown
			dropdownMode="select"
			highlightDates={highlightDates}
		/>
	);
};

export default DatePickerField;
