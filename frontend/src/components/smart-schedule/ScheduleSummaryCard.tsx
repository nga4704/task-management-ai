type ScheduleSummaryCardProps = {
  title: string;
  value: string;
  description: string;
};

function ScheduleSummaryCard({
  title,
  value,
  description,
}: ScheduleSummaryCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-[26px]
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

      <p className="mt-4 text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ScheduleSummaryCard;