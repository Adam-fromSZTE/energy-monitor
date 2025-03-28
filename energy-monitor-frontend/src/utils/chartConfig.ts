import { ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions<'bar'> = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		tooltip: {
			callbacks: {
				label: (context: any) => {
					return `${context.dataset.label}: ${context.parsed.y}`;
				},
			},
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			grid: {
				drawBorder: false,
			},
			ticks: {
				stepSize: 20,
			},
			title: {
				display: true,
				text: 'Mennyiség',
			},
		},
		x: {
			grid: {
				display: false,
			},
			title: {
				display: true,
				text: 'Dátum',
			},
		},
	},
	elements: {
		bar: {
			hoverBackgroundColor: '#1D4ED8',
		},
	},
};
