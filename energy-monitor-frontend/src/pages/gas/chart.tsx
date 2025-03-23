import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { hónap: "Jan", m3: 120 },
  { hónap: "Feb", m3: 150 },
  { hónap: "Már", m3: 130 },
  { hónap: "Ápr", m3: 110 },
];

const GasChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <XAxis dataKey="hónap" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="m3" stroke="red" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);

export default GasChart;