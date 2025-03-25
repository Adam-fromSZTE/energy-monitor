import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ConsumptionPage from "./pages/ConsumptionPage";
import Navbar from "./components/Navbar";

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