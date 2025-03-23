import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { hónap: "Jan", fogyasztás: 250, termelés: 180 },
  { hónap: "Feb", fogyasztás: 230, termelés: 200 },
  { hónap: "Már", fogyasztás: 260, termelés: 220 },
  { hónap: "Ápr", fogyasztás: 270, termelés: 240 },
];

const ElectricityChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <XAxis dataKey="hónap" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="fogyasztás" fill="#FF5733" name="Villanyfogyasztás" />
      <Bar dataKey="termelés" fill="#33FF57" name="Napelem termelés" />
    </BarChart>
  </ResponsiveContainer>
);

export default ElectricityChart;