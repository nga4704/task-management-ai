import {
  AlertTriangle,
} from "lucide-react";

function RiskAlertCard() {
  return (
    <div
      className="
        rounded-xl
        border
        border-danger/20
        bg-dangerLight
        p-5
      "
    >
      <div className="flex items-start gap-4">

        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-danger
            text-white
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <AlertTriangle size={20} />
        </div>

        <div>
          <h3 className="font-bold text-lg">
            High Risk Task Detected
          </h3>

          <p className="mt-3 leading-7 text-black/70">
            Backend API Integration has
            82% overdue probability due
            to high team workload and
            tight deadline estimation.
          </p>

          <button
            className="
              mt-5
              text-danger
              font-semibold
            "
          >
            View AI Recommendation
          </button>
        </div>
      </div>
    </div>
  );
}

export default RiskAlertCard;