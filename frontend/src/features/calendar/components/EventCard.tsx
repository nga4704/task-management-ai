type EventCardProps = {
  title: string;
  time: string;
  type: string;
};

const typeStyles = {
  meeting: "bg-infoLight text-info",
  focus: "bg-primaryLight text-black",
  deadline: "bg-dangerLight text-danger",
};

function EventCard({
  title,
  time,
  type,
}: EventCardProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-4
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          {title}
        </h3>

        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-medium

            ${
              typeStyles[
                type as keyof typeof typeStyles
              ]
            }
          `}
        >
          {type}
        </span>
      </div>

      <p className="mt-3 text-sm text-muted">
        {time}
      </p>
    </div>
  );
}

export default EventCard;