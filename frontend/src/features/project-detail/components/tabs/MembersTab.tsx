import MemberTable from "../members/MemberTable";
import InviteMemberPanel from "../members/InviteMemberPanel";

function MembersTab() {
  return (
    <section
      className="
        grid
        gap-6
        xl:grid-cols-[2.2fr_1fr]
      "
    >
      <MemberTable />

      <InviteMemberPanel />
    </section>
  );
}

export default MembersTab;