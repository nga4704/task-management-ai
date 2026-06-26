import { useParams } from "react-router-dom";
import { useProjectOverview } from "@/features/project-detail/hooks/useProjectOverview";

import { statusStyles } from "@/shared/constants/task";

function CompletionChart() {
  const { projectId } = useParams();
  const { data } = useProjectOverview(projectId!);

  const sprint = data?.sprintProgress;

  if (!sprint) return null;

  const chartData = [
    {
      key: "TODO",
      label: "Todo",
      value: sprint.todo,
      color: statusStyles.TODO,
    },
    {
      key: "IN_PROGRESS",
      label: "In Progress",
      value: sprint.inProgress,
      color: statusStyles.IN_PROGRESS,
    },
    {
      key: "REVIEW",
      label: "Review",
      value: sprint.review,
      color: statusStyles.REVIEW,
    },
    {
      key: "DONE",
      label: "Completed",
      value: sprint.completed,
      color: statusStyles.DONE,
    },
  ];

  return (
    <div className="rounded-[28px] border border-border bg-white/70 backdrop-blur-md p-6 shadow-soft">
      <h3 className="font-bold text-lg mb-6">
        Sprint Progress
      </h3>

      <div className="space-y-5">
        {chartData.map((item) => (
          <div key={item.key}>
            {/* label */}
            <div className="flex justify-between mb-2">
              <span className="text-sm">{item.label}</span>
              <span className="text-sm font-semibold">
                {item.value}
              </span>
            </div>

            {/* bar background */}
            <div className="h-3 rounded-full bg-surfaceSecondary overflow-hidden">
              <div
                className={`h-full rounded-full ${item.color}`}
                style={{
                  width: `${
                    sprint.total
                      ? (item.value / sprint.total) * 100
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletionChart;