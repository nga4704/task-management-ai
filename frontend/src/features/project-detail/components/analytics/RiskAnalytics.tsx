import { useParams } from "react-router-dom";
import { AlertTriangle, ShieldAlert, ShieldCheck } from "lucide-react";
import { useProjectOverview } from "@/features/project-detail/hooks/useProjectOverview";

function RiskAnalytics() {
  const { projectId } = useParams();
  const { data } = useProjectOverview(projectId!);

  const ai = data?.ai;

  const risks = [
    {
      label: "Low Risk",
      value: ai?.overdueRisk < 0.3 ? 1 : 0,
      icon: ShieldCheck,
      color: "bg-successLight",
    },
    {
      label: "Medium Risk",
      value: ai?.overdueRisk >= 0.3 && ai?.overdueRisk < 0.7 ? 1 : 0,
      icon: AlertTriangle,
      color: "bg-warningLight",
    },
    {
      label: "High Risk",
      value: ai?.overdueRisk >= 0.7 ? 1 : 0,
      icon: ShieldAlert,
      color: "bg-dangerLight",
    },
  ];

  return (
    <div className="rounded-[28px] border border-border bg-white/70 backdrop-blur-md p-6 shadow-soft">
      <h3 className="font-bold text-lg mb-6">Risk Analytics</h3>

      <div className="space-y-4">
        {risks.map((risk) => {
          const Icon = risk.icon;

          return (
            <div
              key={risk.label}
              className="flex items-center justify-between rounded-2xl border border-border p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${risk.color}`}>
                  <Icon size={18} />
                </div>

                <span className="font-medium">{risk.label}</span>
              </div>

              <span className="text-xl font-bold">
                {risk.value}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl bg-primaryLight p-4">
        <p className="text-sm leading-6 text-black/80">
          AI Prediction:{" "}
          <span className="font-bold">
            {ai?.score}% success rate
          </span>
        </p>
      </div>
    </div>
  );
}

export default RiskAnalytics;