type Props = {
  task: string;
  width: number;
};

function TaskDurationBar({
  task,
  width,
}: Props) {
  return (
    <div>
      <p
        className="
          mb-2
          text-sm
          font-medium
        "
      >
        {task}
      </p>

      <div
        className="
          h-10
          rounded-xl
          bg-border
        "
      >
        <div
          style={{
            width: `${width}%`,
          }}
          className="
            h-full
            rounded-xl
            bg-primary
          "
        />
      </div>
    </div>
  );
}

export default TaskDurationBar;