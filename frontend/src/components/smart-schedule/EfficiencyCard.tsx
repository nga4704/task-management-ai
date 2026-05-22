type EfficiencyCardProps = {
  title: string;
  percentage: number;
};

function EfficiencyCard({
  title,
  percentage,
}: EfficiencyCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-[24px]
        p-5
        shadow-soft
      "
    >
      <div className="flex justify-between">
        <h3 className="font-semibold">
          {title}
        </h3>

        <span className="font-semibold">
          {percentage}%
        </span>
      </div>

      <div
        className="
          mt-5
          h-3
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
    </div>
  );
}

export default EfficiencyCard;