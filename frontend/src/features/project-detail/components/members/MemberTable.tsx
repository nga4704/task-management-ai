import {
  MoreHorizontal,
} from "lucide-react";

import WorkloadIndicator from "./WorkloadIndicator";
import { useTeamMembersStats } from "../../hooks/useTeamMembersStats";
import { useParams } from "react-router-dom";

function MemberTable() {
  const { teamId } = useParams();

  const { data: members = [], isLoading } =
    useTeamMembersStats(teamId!);

  return (
    <section
      className="
        rounded-[32px]
        border
        border-border
        bg-white/70
        backdrop-blur-md
        p-6
        shadow-soft
      "
    >
      <div
        className="
          mb-6
          flex
          items-center
          justify-between
        "
      >
        <div>
          <h3
            className="
              text-xl
              font-bold
            "
          >
            Team Members
          </h3>

          <p
            className="
              mt-1
              text-sm
              text-muted
            "
          >
            Manage project members and workload distribution
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr
              className="
                border-b
                border-border
                text-left
              "
            >
              <th className="pb-4">
                Member
              </th>

              <th className="pb-4">
                Role
              </th>

              <th className="pb-4">
                Tasks
              </th>

              <th className="pb-4">
                Completion
              </th>

              <th className="pb-4">
                Workload
              </th>

              <th className="pb-4"></th>
            </tr>
          </thead>

          <tbody>
            {members.map((member: any) => (
              <tr
                key={member.id}
                className="border-b border-border/50"
              >
                <td className="py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primaryLight font-bold">
                      {member.name?.[0]}
                    </div>

                    <div>
                      <p className="font-semibold">
                        {member.name}
                      </p>

                      <p className="text-sm text-muted">
                        Online
                      </p>
                    </div>
                  </div>
                </td>

                <td>{member.role}</td>
                <td>{member.tasks}</td>
                <td>{member.completion}%</td>

                <td className="w-[260px]">
                  <WorkloadIndicator workload={member.workload} />
                </td>

                <td>
                  <button className="rounded-xl p-2 hover:bg-surfaceSecondary">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MemberTable;