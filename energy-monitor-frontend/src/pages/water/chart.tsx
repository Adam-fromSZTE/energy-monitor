import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { hónap: "Jan", liter: 320 },
  { hónap: "Feb", liter: 280 },
  { hónap: "Már", liter: 350 },
  { hónap: "Ápr", liter: 290 },
];

const WaterChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <XAxis dataKey="hónap" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="liter" fill="#3182CE" />
    </BarChart>
  </ResponsiveContainer>
);

export default WaterChart;