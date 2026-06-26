import {
  AlertTriangle,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import type {
  AIInsight,
} from "../../types/project-overview.types";

type Props = {
  ai: AIInsight;
};

function ProjectAIInsights({
  ai,
}: Props) {

  const risk =
    ai.overdueRisk !== null &&
    ai.overdueRisk !== undefined
      ? Math.round(ai.overdueRisk * 100)
      : null;

  const scoreLabel =
    ai.score >= 85
      ? "Excellent"
      : ai.score >= 70
      ? "Good"
      : ai.score >= 50
      ? "Fair"
      : "Poor";

  const scoreColor =
    ai.score >= 85
      ? "text-success"
      : ai.score >= 70
      ? "text-info"
      : ai.score >= 50
      ? "text-warning"
      : "text-danger";

  return (
    <div
      className="
        rounded-[32px]
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">

        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primaryLight
              px-3
              py-1.5
              text-xs
              font-semibold
            "
          >
            <Sparkles
              size={14}
            />

            AI Insights

          </div>

          <h3 className="mt-4 text-xl font-bold">
            Project Health
          </h3>

          <p className="mt-1 text-sm text-muted">
            AI evaluation of current project status
          </p>

        </div>

        <BrainCircuit
          size={32}
          className="text-primary"
        />

      </div>

      {/* Score */}
      {/* <div
        className="
          mt-8
          rounded-2xl
          bg-primaryLight
          p-5
        "
      >
        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-muted">
              AI Health Score
            </p>

            <h2 className="mt-1 text-4xl font-black">
              {ai.score}%
            </h2>

          </div>

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-xs
              font-semibold
              bg-white
              ${scoreColor}
            `}
          >
            {scoreLabel}
          </span>

        </div>

        <div className="mt-5 h-2 rounded-full bg-white">

          <div
            className="
              h-2
              rounded-full
              bg-primary
              transition-all
            "
            style={{
              width: `${ai.score}%`,
            }}
          />

        </div>

      </div> */}

      {/* Recommendation */}
      <div
        className="
          mt-6
          rounded-2xl
          border
          border-border
          p-4
        "
      >
        <div className="mb-2 flex items-center gap-2">

          <Sparkles
            size={15}
            className="text-primary"
          />

          <span className="text-sm font-semibold">
            Recommendation
          </span>

        </div>

        <p className="text-sm leading-6 text-muted">
          {ai.recommendation ??
            "Project is progressing normally. Continue maintaining the current workflow."}
        </p>

      </div>

      {/* Prediction */}
      <div
        className="
          mt-4
          rounded-2xl
          border
          border-danger/30
          bg-dangerLight/30
          p-4
        "
      >
        <div className="mb-2 flex items-center gap-2">

          <AlertTriangle
            size={15}
            className="text-warning"
          />

          <span className="text-sm font-semibold">
            AI Prediction
          </span>

        </div>

        <p className="text-sm leading-6">
          {ai.prediction ??
            "No prediction available."}
        </p>

      </div>

      {/* Risk */}
      {risk !== null && (
        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-border
            p-4
          "
        >
          <div>

            <p className="text-xs text-muted">
              Overdue Risk
            </p>

            <h4 className="mt-1 text-2xl font-bold">
              {risk}%
            </h4>

          </div>

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-xs
              font-semibold

              ${
                risk >= 70
                  ? "bg-dangerLight text-danger"
                  : risk >= 40
                  ? "bg-warningLight text-warning"
                  : "bg-successLight text-success"
              }
            `}
          >
            {risk >= 70
              ? "High"
              : risk >= 40
              ? "Medium"
              : "Low"}
          </span>

        </div>
      )}

    </div>
  );
}

export default ProjectAIInsights;