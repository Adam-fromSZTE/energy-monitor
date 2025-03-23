import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WaterPage from "./pages/water/page";
import GasPage from "./pages/gas/page";
import ElectricityPage from "./pages/electricity/page";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/water" element={<WaterPage />} />
        <Route path="/gas" element={<GasPage />} />
        <Route path="/electricity" element={<ElectricityPage />} />
      </Routes>
    </Router>
  );
}
