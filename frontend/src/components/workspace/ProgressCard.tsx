type ProgressCardProps = {
  title: string;
  progress: number;
};

function ProgressCard({
  title,
  progress,
}: ProgressCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        p-6
        shadow-soft
      "
    >
      <div className="flex justify-between">
        <h3 className="font-semibold">
          {title}
        </h3>

        <span className="text-secondary">
          {progress}%
        </span>
      </div>

      <div
        className="
          mt-6
          h-3
          bg-gray-100
          rounded-full
          overflow-hidden
        "
      >
        <div
          className="h-full bg-primary rounded-full"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}

export default ProgressCard;