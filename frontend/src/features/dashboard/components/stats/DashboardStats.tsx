import StatCard from "./StatCard";

import { statsData } from "../../data/statsData";

function DashboardStats() {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {statsData.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
          growth={item.growth}
          icon={item.icon}
        />
      ))}
    </section>
  );
}

export default DashboardStats;