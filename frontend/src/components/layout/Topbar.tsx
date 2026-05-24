import {
  Bell,
  Search,
  Sparkles,
} from "lucide-react";

function Topbar() {
  return (
    <header
      className="
        bg-white/80
        backdrop-blur-md
        border
        border-white/50
        rounded-card
        px-6
        py-5
        flex
        items-center
        justify-between
        shadow-soft
      "
    >
      {/* LEFT */}
      <div>
        <h2 className="text-3xl font-bold text-text">
          Dashboard
        </h2>

        <p className="text-muted mt-1">
          Manage your productivity and AI workflows
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-3
            bg-surface-secondary
            px-4
            py-3
            rounded-2xl
            w-[260px]
          "
        >
          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            placeholder="Search tasks..."
            className="
              bg-transparent
              outline-none
              text-sm
              w-full
            "
          />
        </div>

        {/* AI Button */}
        <button
          className="
            flex
            items-center
            gap-2
            bg-primary
            hover:scale-[1.02]
            transition
            px-5
            py-3
            rounded-2xl
            font-semibold
            shadow-soft
          "
        >
          <Sparkles size={18} />

          <span>Ask AI</span>
        </button>

        {/* Notification */}
        <button
          className="
            w-12
            h-12
            rounded-2xl
            bg-surface-secondary
            flex
            items-center
            justify-center
            hover:bg-gray-200
            transition
          "
        >
          <Bell size={20} />
        </button>

        {/* Profile */}
        <div
          className="
            flex
            items-center
            gap-3
            pl-2
          "
        >
          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-primary
              flex
              items-center
              justify-center
              font-bold
            "
          >
            N
          </div>

          <div className="hidden md:block">
            <h4 className="font-semibold">
              Nga
            </h4>

            <p className="text-sm text-muted">
              Fullstack Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;