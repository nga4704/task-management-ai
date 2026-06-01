import {
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

function RiskAnalytics() {
  const risks = [
    {
      label: "Low Risk",
      value: 14,
      icon: ShieldCheck,
      color: "bg-successLight",
    },

    {
      label: "Medium Risk",
      value: 7,
      icon: AlertTriangle,
      color: "bg-warningLight",
    },

    {
      label: "High Risk",
      value: 3,
      icon: ShieldAlert,
      color: "bg-dangerLight",
    },
  ];

  return (
    <div
      className="
        rounded-[28px]
        border
        border-border
        bg-white/70
        backdrop-blur-md
        p-6
        shadow-soft
      "
    >
      <div className="mb-6">
        <h3 className="font-bold text-lg">
          Risk Analytics
        </h3>

        <p className="text-sm text-muted">
          AI risk prediction overview
        </p>
      </div>

      <div className="space-y-4">
        {risks.map((risk) => {
          const Icon = risk.icon;

          return (
            <div
              key={risk.label}
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
              <div className="flex items-center gap-3">
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    ${risk.color}
                  `}
                >
                  <Icon size={18} />
                </div>

                <span className="font-medium">
                  {risk.label}
                </span>
              </div>

              <span
                className="
                  text-xl
                  font-bold
                "
              >
                {risk.value}
              </span>
            </div>
          );
        })}
      </div>

      <div
        className="
          mt-6
          rounded-2xl
          bg-primaryLight
          p-4
        "
      >
        <p
          className="
            text-sm
            leading-6
            text-black/80
          "
        >
          AI predicts a
          <span className="font-bold">
            {" "}89% sprint success rate
          </span>
          {" "}if current workload distribution remains unchanged.
        </p>
      </div>
    </div>
  );
}

export default RiskAnalytics;