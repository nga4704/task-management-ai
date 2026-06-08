type Props = {
  task: string;
  start: string;
  end: string;
  width: number;
  offset: number;
};

function TaskDurationBar({
  task,
  start,
  end,
  width,
  offset,
}: Props) {
  return (
    <div
      className="
        grid
        grid-cols-[220px_1fr]
        gap-4
      "
    >
      <div>
        <h4 className="font-semibold">
          {task}
        </h4>

        <p
          className="
            text-xs
            text-muted
          "
        >
          {start} - {end}
        </p>
      </div>

      <div
        className="
          relative
          h-12
          rounded-xl
          bg-surfaceSecondary
        "
      >
        <div
          style={{
            width: `${width}%`,
            marginLeft: `${offset}%`,
          }}
          className="
            absolute
            top-1/2
            h-8
            -translate-y-1/2

            rounded-xl

            bg-primary

            shadow-soft
          "
        />
      </div>
    </div>
  );
}

export default TaskDurationBar;