import {
  LayoutDashboard,
  FolderKanban,
  Calendar,
  Settings,
} from "lucide-react";

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
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          title="Dashboard"
          active
        />

        <SidebarItem
          icon={<FolderKanban size={20} />}
          title="Workspace"
        />

        <SidebarItem
          icon={<Calendar size={20} />}
          title="Schedule"
        />

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
        
        ${
          active
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