import {
  LayoutDashboard,
  KanbanSquare,
  CalendarDays,
  BrainCircuit,
  BarChart3,
  Bell,
  Settings,
  FolderKanban,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

const menuSections = [
  {
    title: "MAIN",
    items: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
      },

      {
        title: "Tasks",
        icon: KanbanSquare,
        path: "/tasks",
      },

      {
        title: "Workspace",
        icon: FolderKanban,
        path: "/workspace",
      },

      {
        title: "Calendar",
        icon: CalendarDays,
        path: "/calendar",
      },
    ],
  },

  {
    title: "AI SYSTEM",
    items: [
      {
        title: "AI Planner",
        icon: Sparkles,
        path: "/ai-planner",
      },

      // {
      //   title: "AI Insights",
      //   icon: BrainCircuit,
      //   path: "/insights",
      // },

      {
        title: "Analytics",
        icon: BarChart3,
        path: "/analytics",
      },
    ],
  },

  {
    title: "SYSTEM",
    items: [
      {
        title: "Notifications",
        icon: Bell,
        path: "/notifications",
      },

      {
        title: "Settings",
        icon: Settings,
        path: "/settings",
      },
    ],
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="
        hidden
        xl:flex
        flex-col
        w-[290px]
        shrink-0
        sticky
        top-0
        h-screen
        border-r
        border-border/60
        bg-white/70
        backdrop-blur-xl
        px-5
        py-6
      "
    >
      {/* LOGO */}
      <div
        className="
          flex
          items-center
          gap-4
          px-3
        "
      >
        <div
          className="
            w-14
            h-14
            rounded-[20px]
            bg-primary
            flex
            items-center
            justify-center
            text-xl
            font-black
            shadow-soft
          "
        >
          AI
        </div>

        <div>
          <h1 className="text-lg font-bold">
            WorkFlow AI
          </h1>

          <p className="text-sm text-muted">
            Productivity Platform
          </p>
        </div>
      </div>

      {/* AI STATUS */}
      <div
        className="
          mt-8
          bg-primaryLight
          rounded-[28px]
          p-5
          relative
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            right-[-30px]
            top-[-30px]
            w-[120px]
            h-[120px]
            rounded-full
            bg-white/20
          "
        />

        <div className="relative z-10">

          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-black
              text-white
              text-xs
              font-semibold
              px-3
              py-2
              rounded-full
            "
          >
            <Sparkles size={14} />

            AI ACTIVE
          </div>

          <h3
            className="
              mt-4
              text-xl
              font-bold
              leading-snug
            "
          >
            Smart productivity insights enabled
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-black/70
            "
          >
            AI is monitoring workload,
            deadlines and team performance.
          </p>
        </div>
      </div>

      {/* NAVIGATION */}
      <div
        className="
          mt-8
          flex-1
          overflow-y-auto
          pr-1
        "
      >
        {menuSections.map((section) => (
          <div
            key={section.title}
            className="mb-8"
          >
            <p
              className="
                px-3
                mb-3
                text-xs
                font-bold
                tracking-[0.2em]
                text-muted
              "
            >
              {section.title}
            </p>

            <div className="space-y-2">

              {section.items.map((item) => {
                const Icon = item.icon;

                const active =
                  location.pathname === item.path;

                return (
                  <Link
                    key={item.title}
                    to={item.path}
                  >
                    <div
                      className={`
                        group
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        px-4
                        py-3.5
                        transition-all
                        duration-200

                        ${
                          active
                            ? `
                              bg-primary
                              text-black
                              shadow-soft
                              font-semibold
                            `
                            : `
                              text-muted
                              hover:bg-surface-secondary
                              hover:text-text
                            `
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">

                        <Icon size={20} />

                        <span className="text-sm">
                          {item.title}
                        </span>
                      </div>

                      {active && (
                        <ChevronRight size={16} />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* USER */}
      {/* <div
        className="
          border
          border-border/60
          bg-white
          rounded-[28px]
          p-4
          flex
          items-center
          gap-4
          shadow-soft
        "
      >
        <div
          className="
            w-14
            h-14
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

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold truncate">
            Nga
          </h4>

          <p className="text-sm text-muted truncate">
            Fullstack Developer
          </p>
        </div>
      </div> */}
    </aside>
  );
}

export default Sidebar;