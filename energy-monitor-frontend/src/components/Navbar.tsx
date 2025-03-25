import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ConsumptionType } from "../features/cosumption/enum";
import { selectConsumptionType } from "../features/cosumption/selector";
import { setConsumptionType } from "../features/cosumption/slice";

const Navbar: React.FC = () => {
  const consumptionType = (useSelector((state: RootState) => selectConsumptionType(state)));

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Energy Monitor</h1>
        
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded ${consumptionType === ConsumptionType.WATER ? "bg-white text-blue-600" : ""}`}
            onClick={() => setConsumptionType(ConsumptionType.WATER)}
          >
            Water
          </button>
          <button
            className={`px-4 py-2 rounded ${consumptionType === ConsumptionType.ELECTRICITY ? "bg-white text-blue-600" : ""}`}
            onClick={() => setConsumptionType(ConsumptionType.ELECTRICITY)}
          >
            Electricity
          </button>
          <button
            className={`px-4 py-2 rounded ${consumptionType === ConsumptionType.GAS ? "bg-white text-blue-600" : ""}`}
            onClick={() => setConsumptionType(ConsumptionType.GAS)}
          >
            Gas
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;