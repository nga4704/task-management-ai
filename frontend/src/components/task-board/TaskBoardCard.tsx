type TaskBoardCardProps = {
  title: string;
  priority: string;
};

function TaskBoardCard({
  title,
  priority,
}: TaskBoardCardProps) {
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
      <div className="flex justify-between items-start">
        <h3 className="font-semibold leading-relaxed">
          {title}
        </h3>

        <span
          className="
            bg-primary
            text-sm
            px-3
            py-1
            rounded-full
          "
        >
          {priority}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Due Tomorrow
        </p>

        <div
          className="
            w-9
            h-9
            rounded-full
            bg-secondary
          "
        />
      </div>
    </div>
  );
}

export default TaskBoardCard;