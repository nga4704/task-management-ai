import {
  LayoutDashboard,
  FolderKanban,
  Settings,
  KanbanSquare,
  FileText,
  CalendarDays
} from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      className="
        w-[260px]
        bg-white
        border-r
        border-gray-100
        p-6
      "
    >
      <h1 className="text-2xl font-bold">
        WorkFlow
      </h1>

      <nav className="mt-10 space-y-3">
        <Link to="/dashboard">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            title="Dashboard"
            active
          />
        </Link>
        <Link to="/workspace">
          <SidebarItem
            icon={<FolderKanban size={20} />}
            title="Workspace"
          />
        </Link>
        <Link to="/task-board">
          <SidebarItem
            icon={<KanbanSquare size={20} />}
            title="Task Board"
          />
        </Link>
        <Link to="/task-detail">
          <SidebarItem
            icon={<FileText size={20} />}
            title="Task Detail"
          />
        </Link>
        <Link to="/schedule">
          <SidebarItem
            icon={<CalendarDays size={20} />}
            title="Schedule"
          />
        </Link>

        <SidebarItem
          icon={<Settings size={20} />}
          title="Settings"
        />
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
          ? "bg-primary font-semibold"
          : "hover:bg-gray-100"
        }
      `}
    >
      {icon}

      <span>{title}</span>
    </div>
  );
}

export default Sidebar;