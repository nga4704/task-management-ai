import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 65 },
  { day: "Wed", value: 80 },
  { day: "Thu", value: 70 },
  { day: "Fri", value: 95 },
];

function ProductivityAreaChart() {
  return (
    <div
      className="
        bg-white
        rounded-card
        p-6
        shadow-soft
      "
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Productivity Trend
        </h2>

        <span className="text-gray-500">
          Weekly
        </span>
      </div>

      <div className="h-[320px] mt-6">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <XAxis dataKey="day" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#7C4DFF"
              fill="#C8E95E"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProductivityAreaChart;