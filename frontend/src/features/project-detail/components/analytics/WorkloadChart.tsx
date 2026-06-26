import { useParams } from "react-router-dom";
import { Users } from "lucide-react";
import { useProjectOverview } from "@/features/project-detail/hooks/useProjectOverview";

function WorkloadChart() {
  const { projectId } = useParams();
  const { data } = useProjectOverview(projectId!);

  const members = data?.workload || [];

  return (
    <div className="rounded-[28px] border border-border bg-white/70 backdrop-blur-md p-6 shadow-soft">
      <div className="flex items-center gap-3 mb-6">
        <Users size={20} />
        <div>
          <h3 className="font-bold text-lg">Team Workload</h3>
          <p className="text-sm text-muted">Current allocation</p>
        </div>
      </div>

      <div className="space-y-5">
        {members.map((member: any) => (
          <div key={member.id}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">
                {member.name}
              </span>
              <span className="text-sm">
                {member.workload}%
              </span>
            </div>

            <div className="h-3 rounded-full bg-surface-secondary">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${member.workload}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkloadChart;