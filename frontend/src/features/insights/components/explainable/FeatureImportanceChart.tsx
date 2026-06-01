import {
  BrainCircuit,
} from "lucide-react";

import {
  featureImportance,
} from "../../data/mockInsights";

function FeatureImportanceChart() {
  return (
    <section
      className="
        rounded-[32px]
        border
        border-border

        bg-white/70
        backdrop-blur-md

        p-7

        shadow-soft
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <div>
          <p className="text-sm text-muted">
            Explainable AI
          </p>

          <h2
            className="
              mt-1
              text-2xl
              font-bold
            "
          >
            Feature Importance
          </h2>
        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-2xl

            bg-primaryLight
          "
        >
          <BrainCircuit size={24} />
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {featureImportance.map((item) => (
          <div key={item.label}>
            <div
              className="
                mb-2
                flex
                items-center
                justify-between
              "
            >
              <span className="font-medium">
                {item.label}
              </span>

              <span className="font-bold">
                {item.value}%
              </span>
            </div>

            <div
              className="
                h-3

                rounded-full

                bg-border
              "
            >
              <div
                className="
                  h-full
                  rounded-full
                  bg-primary
                "
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureImportanceChart;