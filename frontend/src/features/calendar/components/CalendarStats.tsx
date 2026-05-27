function CalendarStats() {
  return (
    <section
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
    >
      <StatCard
        title="Meetings"
        value="18"
      />

      <StatCard
        title="Focus Hours"
        value="42h"
      />

      <StatCard
        title="Deadlines"
        value="6"
      />

      <StatCard
        title="AI Efficiency"
        value="91%"
      />
    </section>
  );
}

type StatCardProps = {
  title: string;
  value: string;
};

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <p className="text-muted">
        {title}
      </p>

      <h2
        className="
          mt-3
          text-4xl
          font-bold
        "
      >
        {value}
      </h2>
    </div>
  );
}

export default CalendarStats;