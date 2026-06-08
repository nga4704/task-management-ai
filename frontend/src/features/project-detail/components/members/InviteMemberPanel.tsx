import {
  Users,
  UserPlus,
  Sparkles,
} from "lucide-react";

function InviteMemberPanel() {
  return (
    <div className="space-y-6">
      {/* INVITE */}
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
        <div className="flex items-center gap-3">
          <UserPlus size={20} />

          <h3 className="font-bold">
            Invite Member
          </h3>
        </div>

        <input
          placeholder="Email address"
          className="
            mt-5
            h-12
            w-full
            rounded-2xl
            border
            border-border
            px-4
          "
        />

        <button
          className="
            mt-4
            w-full
            rounded-2xl
            bg-primary
            py-3
            font-semibold
          "
        >
          Send Invitation
        </button>
      </section>

      {/* TEAM CAPACITY */}
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
        <div className="flex items-center gap-3">
          <Users size={20} />

          <h3 className="font-bold">
            Team Capacity
          </h3>
        </div>

        <div className="mt-5 space-y-5">
          <div>
            <p className="text-sm text-muted">
              Members
            </p>

            <h2 className="text-3xl font-bold">
              12
            </h2>
          </div>

          <div>
            <p className="text-sm text-muted">
              Average Workload
            </p>

            <h2 className="text-3xl font-bold">
              72%
            </h2>
          </div>
        </div>
      </section>

      {/* AI */}
      <section
        className="
          rounded-[32px]
          bg-primaryLight
          p-6
          shadow-soft
        "
      >
        <div className="flex items-center gap-2">
          <Sparkles size={16} />

          <span
            className="
              text-xs
              font-semibold
            "
          >
            AI Recommendation
          </span>
        </div>

        <p
          className="
            mt-4
            text-sm
            leading-7
          "
        >
          AI detected workload imbalance.
          Backend team utilization exceeds
          85%. Consider assigning upcoming
          tasks to Frontend and AI teams.
        </p>
      </section>
    </div>
  );
}

export default InviteMemberPanel;