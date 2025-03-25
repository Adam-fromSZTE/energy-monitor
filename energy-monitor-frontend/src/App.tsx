import React from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import ConsumptionPage from './pages/ConsumptionPage';
import store from './redux/store';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Navbar />
			<div className="container mx-auto p-4">
				<ConsumptionPage />
			</div>
		</Provider>
	);
};

export default App;
