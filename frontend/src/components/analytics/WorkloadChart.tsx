import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { team: "Frontend", tasks: 12 },
  { team: "Backend", tasks: 8 },
  { team: "AI", tasks: 5 },
];

function WorkloadChart() {
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
        Workload Distribution
      </h2>

      <div className="h-[320px] mt-6">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <XAxis dataKey="team" />

            <Tooltip />

            <Bar
              dataKey="tasks"
              fill="#7C4DFF"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WorkloadChart;