import MemberTable from "../members/MemberTable";
import InviteMemberModal from "../members/InviteMemberModal";

function MembersTab() {
  return (
    <div
      className="
        grid
        gap-6
        xl:grid-cols-[2fr_1fr]
      "
    >
      <MemberTable />

      <InviteMemberModal />
    </div>
  );
}

export default MembersTab;