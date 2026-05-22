type TeamAIStatsProps = {
  name: string;
  productivity: string;
};

function TeamAIStats({
  name,
  productivity,
}: TeamAIStatsProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        bg-[#F7F7F7]
        rounded-[20px]
        p-4
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            w-12
            h-12
            rounded-full
            bg-secondary
          "
        />

        <div>
          <h4 className="font-semibold">
            {name}
          </h4>

          <p className="text-gray-500 text-sm">
            AI Productivity Score
          </p>
        </div>
      </div>

      <span
        className="
          bg-white
          px-4
          py-2
          rounded-full
        "
      >
        {productivity}
      </span>
    </div>
  );
}

export default TeamAIStats;