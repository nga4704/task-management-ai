import WorkloadIndicator from "./WorkloadIndicator";

import { mockMembers } from "./data/mockMembers";

function MemberTable() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-white
        p-6
        shadow-soft
      "
    >
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Name</th>
            <th>Role</th>
            <th>Workload</th>
          </tr>
        </thead>

        <tbody>
          {mockMembers.map(
            (member) => (
              <tr
                key={member.id}
                className="
                  border-t
                  border-border
                "
              >
                <td className="py-4">
                  {member.name}
                </td>

                <td>{member.role}</td>

                <td className="w-[250px]">
                  <WorkloadIndicator
                    workload={
                      member.workload
                    }
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MemberTable;