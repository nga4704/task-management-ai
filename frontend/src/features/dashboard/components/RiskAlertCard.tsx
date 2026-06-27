import {
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

type Props = {
  risk: string;
};

function RiskAlertCard({
  risk,
}: Props) {
  const hasRisk =
    !risk
      .toLowerCase()
      .includes("no critical");

  return (
    <div
      className={`
        rounded-2xl
        border
        p-5
        shadow-soft

        ${
          hasRisk
            ? "border-warning bg-warningLight/30"
            : "border-success bg-successLight/30"
        }
      `}
    >
      <div className="flex items-center gap-3">

        <div
          className={`
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl

            ${
              hasRisk
                ? "bg-warningLight"
                : "bg-successLight"
            }
          `}
        >
          {hasRisk ? (
            <AlertTriangle
              size={20}
              className="text-warning"
            />
          ) : (
            <ShieldCheck
              size={20}
              className="text-success"
            />
          )}
        </div>

        <div>
          <h3 className="font-semibold">
            Risk Alert
          </h3>

          <p className="text-sm text-muted">
            AI project monitoring
          </p>
        </div>
      </div>

      <div
        className="
          mt-5
          rounded-xl
          bg-white/70
          p-4
        "
      >
        <p
          className="
            text-sm
            leading-6
          "
        >
          {risk}
        </p>
      </div>
    </div>
  );
}

export default RiskAlertCard;