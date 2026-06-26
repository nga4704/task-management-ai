import { useParams } from "react-router-dom";
import { Users, UserPlus, Sparkles } from "lucide-react";

import { useTeamMembersStats } from "@/features/project-detail/hooks/useTeamMembersStats";

function InviteMemberPanel() {
  const { teamId } = useParams();

  const { data: members = [], isLoading } =
    useTeamMembersStats(teamId!);

  const totalMembers = members.length;

  const avgWorkload =
    members.length > 0
      ? Math.round(
          members.reduce((sum, m) => sum + m.workload, 0) /
            members.length
        )
      : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* AI */}
      <section className="rounded-[32px] bg-primaryLight p-6 shadow-soft">
        <div className="flex items-center gap-2">
          <Sparkles size={16} />
          <span className="text-xs font-semibold">
            AI Recommendation
          </span>
        </div>

        <p className="mt-4 text-sm leading-7">
          {isLoading
            ? "Analyzing team workload..."
            : avgWorkload > 80
              ? "High workload detected. Consider redistributing tasks to balance team capacity."
              : "Team workload is balanced. Keep maintaining current distribution."}
        </p>
      </section>

      {/* TEAM CAPACITY */}
      <section className="rounded-[32px] border border-border bg-white/70 backdrop-blur-md p-6 shadow-soft">
        <div className="flex items-center gap-3">
          <Users size={20} />
          <h3 className="font-bold">Team Capacity</h3>
        </div>

        <div className="mt-5 space-y-5">
          <div>
            <p className="text-sm text-muted">Members</p>
            <h2 className="text-3xl font-bold">
              {isLoading ? "..." : totalMembers}
            </h2>
          </div>

          <div>
            <p className="text-sm text-muted">Average Workload</p>
            <h2 className="text-3xl font-bold">
              {isLoading ? "..." : `${avgWorkload}%`}
            </h2>
          </div>
        </div>
      </section>

      {/* INVITE */}
      <section className="rounded-[32px] border border-border bg-white/70 backdrop-blur-md p-6 shadow-soft">
        <div className="flex items-center gap-3">
          <UserPlus size={20} />
          <h3 className="font-bold">Invite Member</h3>
        </div>

        <input
          placeholder="Email address"
          className="mt-5 h-12 w-full rounded-2xl border border-border px-4"
        />

        <button className="mt-4 w-full rounded-2xl bg-primary py-3 font-semibold">
          Send Invitation
        </button>

        {/* optional: quick preview */}
        <div className="mt-4 text-xs text-muted">
          {isLoading ? "Loading members..." : `${totalMembers} members in this team`}
        </div>
      </section>
    </div>
  );
}

export default InviteMemberPanel;