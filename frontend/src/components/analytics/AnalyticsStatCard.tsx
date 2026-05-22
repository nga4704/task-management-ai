type AnalyticsStatCardProps = {
  title: string;
  value: string;
  growth: string;
};

function AnalyticsStatCard({
  title,
  value,
  growth,
}: AnalyticsStatCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-[24px]
        p-5
        shadow-soft
      "
    >
      <p className="text-gray-500">
        {title}
      </p>

      <div className="mt-4 flex items-end justify-between">
        <h2 className="text-4xl font-bold">
          {value}
        </h2>

        <span
          className="
            bg-primary
            px-3
            py-1
            rounded-full
            text-sm
          "
        >
          {growth}
        </span>
      </div>
    </div>
  );
}

export default AnalyticsStatCard;