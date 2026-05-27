type SubtaskItemProps = {
  title: string;
  completed?: boolean;
};

function SubtaskItem({
  title,
  completed,
}: SubtaskItemProps) {
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
          className={`
            w-5
            h-5
            rounded-full
            border-2
            
            ${
              completed
                ? "bg-primary border-primary"
                : "border-gray-300"
            }
          `}
        />

        <p
          className={`
            ${
              completed
                ? "line-through text-gray-400"
                : ""
            }
          `}
        >
          {title}
        </p>
      </div>

      <span className="text-sm text-gray-500">
        2h
      </span>
    </div>
  );
}

export default SubtaskItem;