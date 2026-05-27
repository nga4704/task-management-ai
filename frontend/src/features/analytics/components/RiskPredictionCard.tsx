import { AlertTriangle } from "lucide-react";

function RiskPredictionCard() {
  return (
    <section
      className="
        rounded-xl
        border
        border-danger/20
        bg-dangerLight
        p-6
      "
    >
      <div className="flex gap-4">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-danger
            text-white
          "
        >
          <AlertTriangle size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            AI Risk Prediction
          </h2>

          <p
            className="
              mt-3
              leading-7
              text-black/70
            "
          >
            API integration tasks have
            74% delay probability due
            to sprint overload and
            resource allocation issues.
          </p>

          <button
            className="
              mt-5
              font-semibold
              text-danger
            "
          >
            View Recommendation
          </button>
        </div>
      </div>
    </section>
  );
}

export default RiskPredictionCard;