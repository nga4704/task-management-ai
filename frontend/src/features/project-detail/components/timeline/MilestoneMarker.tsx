import {
  CheckCircle2,
  Clock3,
} from "lucide-react";

type Props = {
  title: string;
  date: string;
  status: string;
};

function MilestoneMarker({
  title,
  date,
  status,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-between

        rounded-2xl
        border
        border-border

        p-4
      "
    >
      <div className="flex gap-4">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-xl

            bg-primaryLight
          "
        >
          {status === "Completed"
            ? (
              <CheckCircle2 size={18} />
            )
            : (
              <Clock3 size={18} />
            )}
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
            {date}
          </p>
        </div>
      </div>

      <span
        className="
          rounded-full
          bg-surfaceSecondary
          px-3
          py-1
          text-xs
          font-medium
        "
      >
        {status}
      </span>
    </div>
  );
}

export default MilestoneMarker;