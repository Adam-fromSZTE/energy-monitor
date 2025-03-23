import ElectricityChart from "./chart";

const ElectricityPage = () => {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Gáz fogyasztás</h1>
        <ElectricityChart/>
      </div>
    );
  };
  
  export default ElectricityPage;