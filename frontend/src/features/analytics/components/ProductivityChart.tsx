import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

import {
  productivityData,
} from "../data/mockAnalytics";

function ProductivityChart() {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div>
        <h2 className="text-2xl font-bold">
          Weekly Productivity
        </h2>

        <p className="mt-1 text-muted">
          AI-powered productivity tracking
        </p>
      </div>

      <div className="mt-8 h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={productivityData}>
            <XAxis dataKey="name" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="productivity"
              stroke="#C8E95E"
              fill="#DFF5A5"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default ProductivityChart;