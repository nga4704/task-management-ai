import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", productivity: 60 },
  { day: "Tue", productivity: 75 },
  { day: "Wed", productivity: 90 },
  { day: "Thu", productivity: 70 },
  { day: "Fri", productivity: 95 },
];

function ProductivityChart() {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        p-6
        shadow-soft
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Productivity Analytics
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>
            <XAxis dataKey="day" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="productivity"
              stroke="#7C4DFF"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProductivityChart;