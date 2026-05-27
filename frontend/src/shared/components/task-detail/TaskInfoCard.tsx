type TaskInfoCardProps = {
  label: string;
  value: string;
};

function TaskInfoCard({
  label,
  value,
}: TaskInfoCardProps) {
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
        {label}
      </p>

      <h3 className="font-semibold text-lg mt-3">
        {value}
      </h3>
    </div>
  );
}

export default TaskInfoCard;