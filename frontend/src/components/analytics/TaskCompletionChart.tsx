import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Completed", value: 65 },
  { name: "In Progress", value: 25 },
  { name: "Pending", value: 10 },
];

const COLORS = [
  "#C8E95E",
  "#7C4DFF",
  "#111111",
];

function TaskCompletionChart() {
  return (
    <div
      className="
        bg-white
        rounded-card
        p-6
        shadow-soft
      "
    >
      <h2 className="text-2xl font-bold">
        Task Completion
      </h2>

      <div className="h-[320px] mt-6">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TaskCompletionChart;