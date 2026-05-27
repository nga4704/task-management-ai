import {
  Plus,
  Sparkles,
  Users,
} from "lucide-react";

function WorkspaceHeader() {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-white/70
        p-7
        shadow-soft
        backdrop-blur-md
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          xl:flex-row
          xl:items-center
          xl:justify-between
        "
      >
        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primaryLight
              px-4
              py-2
              text-sm
              font-medium
            "
          >
            <Sparkles size={16} />

            AI Workspace Active
          </div>

          <h1
            className="
              mt-5
              text-4xl
              font-bold
            "
          >
            Team Workspace
          </h1>

          <p
            className="
              mt-3
              max-w-2xl
              text-lg
              text-muted
            "
          >
            Collaborate, manage projects,
            and optimize team productivity
            with intelligent AI insights.
          </p>
        </div>

        <div className="flex gap-4">

          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-border
              bg-white
              px-5
              py-3
              font-medium
            "
          >
            <Users size={18} />

            Team
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-black
              px-5
              py-3
              font-semibold
              text-white
            "
          >
            <Plus size={18} />

            New Project
          </button>
        </div>
      </div>
    </section>
  );
}

export default WorkspaceHeader;