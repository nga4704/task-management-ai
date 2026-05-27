type PlannerStatCardProps = {
  title: string;

  value: string;
};

function PlannerStatCard({
  title,
  value,
}: PlannerStatCardProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-border
        bg-white/70
        p-5
        shadow-soft
        backdrop-blur-md
      "
    >
      <p className="text-sm text-muted">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {value}
      </h2>
    </div>
  );
}

export default PlannerStatCard;