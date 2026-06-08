import {
  CalendarClock,
} from "lucide-react";

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
        flex
        items-center
        justify-between

        rounded-2xl
        border
        border-border

        bg-surface
        p-4

        transition-all
        hover:shadow-soft
      "
    >
      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            bg-primaryLight
          "
        >
          <CalendarClock size={18} />
        </div>

        <div>
          <h4 className="font-semibold">
            {title}
          </h4>

          <p
            className="
              text-sm
              text-muted
            "
          >
            {time}
          </p>
        </div>
      </div>

      <span
        className="
          rounded-full
          bg-primaryLight
          px-3
          py-1
          text-xs
          font-semibold
        "
      >
        {type}
      </span>
    </div>
  );
}

export default EventCard;