type StatCardProps = {
  title: string;
  value: string;
  growth: string;
};

function StatCard({
  title,
  value,
  growth,
}: StatCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-card
        p-6
        shadow-soft
      "
    >
      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>

      <p className="text-secondary mt-4">
        {growth}
      </p>
    </div>
  );
}

export default StatCard;