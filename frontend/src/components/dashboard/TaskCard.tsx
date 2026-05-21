type TaskCardProps = {
  title: string;
  status: string;
  date: string;
};

function TaskCard({
  title,
  status,
  date,
}: TaskCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-[24px]
        p-5
        shadow-soft
        border
        border-gray-100
      "
    >
      <div className="flex justify-between">
        <h3 className="font-semibold">
          {title}
        </h3>

        <span
          className="
            bg-primary
            px-3
            py-1
            rounded-full
            text-sm
          "
        >
          {status}
        </span>
      </div>

      <p className="text-gray-500 mt-4">
        Due: {date}
      </p>
    </div>
  );
}

export default TaskCard;