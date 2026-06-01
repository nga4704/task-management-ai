import {
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

function RiskAlertCard() {
  return (
    <div
      className="
        rounded-[28px]

        border
        border-danger/20

        bg-dangerLight

        p-5
      "
    >
      <div className="flex items-start gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center

            rounded-2xl

            bg-danger

            text-white
          "
        >
          <AlertTriangle size={20} />
        </div>

        <div>
          <h3
            className="
              text-lg
              font-bold
            "
          >
            High Risk Task
          </h3>

          <p
            className="
              mt-3

              text-sm
              leading-7

              text-black/70
            "
          >
            Backend API Integration has an
            82% overdue probability.
          </p>

          <button
            className="
              mt-4

              inline-flex
              items-center
              gap-2

              text-sm
              font-semibold

              text-danger
            "
          >
            View details

            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RiskAlertCard;