type RiskAnalysisCardProps = {
  task: string;
  risk: string;
};

function RiskAnalysisCard({
  task,
  risk,
}: RiskAnalysisCardProps) {
  return (
    <div
      className="
        bg-[#F7F7F7]
        rounded-[22px]
        p-5
        flex
        justify-between
        items-center
      "
    >
      <div>
        <h4 className="font-semibold">
          {task}
        </h4>

        <p className="text-gray-500 mt-2">
          Potential delay detected
        </p>
      </div>

      <span
        className="
          bg-white
          px-4
          py-2
          rounded-full
          font-medium
        "
      >
        {risk}
      </span>
    </div>
  );
}

export default RiskAnalysisCard;