type PredictionCardProps = {
  title: string;
  percentage: number;
};

function PredictionCard({
  title,
  percentage,
}: PredictionCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-card
        p-6
        shadow-soft
      "
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <span className="font-semibold">
          {percentage}%
        </span>
      </div>

      <div
        className="
          mt-6
          h-4
          bg-gray-100
          rounded-full
          overflow-hidden
        "
      >
        <div
          className="
            h-full
            bg-primary
            rounded-full
          "
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-5 text-gray-500">
        AI prediction based on current productivity patterns.
      </p>
    </div>
  );
}

export default PredictionCard;