type EventCardProps = {
  title: string;
  time: string;
  type: string;
};

function EventCard({
  title,
  time,
  type,
}: EventCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-white
        p-4
        shadow-soft
      "
    >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">
          {title}
        </h4>

        <span
          className="
            rounded-full
            bg-primaryLight
            px-2.5
            py-1
            text-xs
          "
        >
          {type}
        </span>
      </div>

      <p
        className="
          mt-2
          text-sm
          text-muted
        "
      >
        {time}
      </p>
    </div>
  );
}

export default EventCard;