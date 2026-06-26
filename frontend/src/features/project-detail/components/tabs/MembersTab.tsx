import MemberTable from "../members/MemberTable";
import InviteMemberPanel from "../members/InviteMemberPanel";

function MembersTab() {
  return (
    <section className="space-y-6">
      {/* TOP - FULL WIDTH */}
      <div className="w-full">
        <MemberTable />
      </div>

      {/* BOTTOM SECTION */}
      {/* <div className="grid gap-6 xl:grid-cols-3"> */}
        <div className="xl:col-span-1">
          <InviteMemberPanel />
        </div>

        {/* chỗ này sau bạn có thể thêm AI panel / stats */}
        {/* <div className="xl:col-span-2">
          <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
            <h3 className="font-bold">Team Insights</h3>
            <p className="text-sm text-muted mt-2">
              AI analytics or workload summary goes here
            </p>
          </div>
        </div> */}
      {/* </div> */}
    </section>
  );
}

export default MembersTab;