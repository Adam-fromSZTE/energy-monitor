import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConsumptionRequest } from "../features/cosumption/actions";
import { selectConsumptionData, selectConsumptionStatus } from "../features/cosumption/selector";
import { ConsumptionStatus } from "../features/cosumption/enum";

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
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={handleFetchData}
      >
        Fetch Data
      </button>

      {status === ConsumptionStatus.LOADING && <p>Loading...</p>}
      {status === ConsumptionStatus.ERROR && <p className="text-red-500">Error loading data.</p>}
    </div>
  );
};

export default ConsumptionPage;