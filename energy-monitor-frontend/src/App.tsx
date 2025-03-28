import { Provider } from 'react-redux';
import DashboardLayout from './components/DashboardLayout';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import { store } from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="min-h-screen bg-gray-50">
				<Navbar />
				<main className="container mx-auto px-4 py-6">
					<ErrorBoundary>
						<DashboardLayout />
					</ErrorBoundary>
				</main>
			</div>
		</Provider>
	);
}

export default App;
