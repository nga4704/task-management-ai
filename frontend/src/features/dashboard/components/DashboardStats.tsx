import StatCard from "@/shared/components/cards/StatCard";

import { statsData } from "../data/statsData";

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
          {...item}
        />
      ))}
    </section>
  );
}

export default DashboardStats;