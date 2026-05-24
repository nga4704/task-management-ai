import {
  LayoutDashboard,
  FolderKanban,
  Settings,
  KanbanSquare,
  CalendarDays,
  FolderOpen,
  BrainCircuit,
  Sparkles,
  Bell,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  return (
    <aside
      className="
        w-[280px]
        h-screen
        sticky
        top-0
        bg-white/80
        backdrop-blur-md
        border-r
        border-white/50
        border-gray-100
        p-6
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
      w-10
      h-10
      rounded-xl
      bg-primary
      flex
      items-center
      justify-center
      font-bold
    "
        >
          W
        </div>

        <div>
          <h1 className="text-xl font-bold">
            WorkFlow AI
          </h1>

          <p className="text-xs text-gray-400">
            Smart Productivity
          </p>
        </div>
      </div>

      <nav className="mt-10 space-y-2">
        <Link to="/dashboard">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            title="Dashboard"
            active={location.pathname === "/dashboard"}
          />
        </Link>

        <Link to="/tasks">
          <SidebarItem
            icon={<KanbanSquare size={20} />}
            title="My Tasks"
            active={location.pathname === "/tasks"}
          />
        </Link>

        <Link to="/projects">
          <SidebarItem
            icon={<FolderOpen size={20} />}
            title="Projects"
            active={location.pathname === "/projects"}
          />
        </Link>

        <Link to="/calendar">
          <SidebarItem
            icon={<CalendarDays size={20} />}
            title="Calendar"
            active={location.pathname === "/calendar"}
          />
        </Link>

        <div className="pt-6 pb-2 px-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            AI Features
          </p>
        </div>

        <Link to="/ai-planner">
          <SidebarItem
            icon={<Sparkles size={20} />}
            title="AI Planner"
            active={location.pathname === "/ai-planner"}
          />
        </Link>

        <Link to="/insights">
          <SidebarItem
            icon={<BrainCircuit size={20} />}
            title="Productivity Insights"
            active={location.pathname === "/insights"}
          />
        </Link>

        <div className="pt-6 pb-2 px-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Workspace
          </p>
        </div>

        <Link to="/workspace">
          <SidebarItem
            icon={<FolderKanban size={20} />}
            title="Workspace"
            active={location.pathname === "/workspace"}
          />
        </Link>

        <Link to="/notifications">
          <SidebarItem
            icon={<Bell size={20} />}
            title="Notifications"
            active={location.pathname === "/notifications"}
          />
        </Link>

        <Link to="/settings">
          <SidebarItem
            icon={<Settings size={20} />}
            title="Settings"
            active={location.pathname === "/settings"}
          />
        </Link>
      </nav>
    </aside>
  );
}

type SidebarItemProps = {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
};

function SidebarItem({
  icon,
  title,
  active,
}: SidebarItemProps) {
  return (
    <div
      className={`
        flex items-center gap-3
        px-4 py-3
        rounded-2xl
        cursor-pointer
        transition
        
        ${active
          ? "bg-primary text-black font-semibold shadow-soft"
          : "hover:bg-surface-secondary"
        }
      `}
    >
      {icon}

      <span>{title}</span>
    </div>
  );
}

export default Sidebar;