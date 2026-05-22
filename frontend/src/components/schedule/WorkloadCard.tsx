type WorkloadCardProps = {
  title: string;
  value: string;
};

function WorkloadCard({
  title,
  value,
}: WorkloadCardProps) {
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

      <h2 className="text-3xl font-bold mt-4">
        {value}
      </h2>
    </div>
  );
}

export default WorkloadCard;