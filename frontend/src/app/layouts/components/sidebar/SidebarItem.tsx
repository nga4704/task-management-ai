import type { LucideIcon } from "lucide-react";

import { Link } from "react-router-dom";

type Props = {
  title: string;

  icon: LucideIcon;

  path: string;

  active: boolean;

  collapsed?: boolean;
};

function SidebarItem({
  title,
  icon: Icon,
  path,
  active,
  collapsed,
}: Props) {
  return (
    <Link to={path}>
      <div
        className={`
          group
          flex
          items-center
          gap-3
          rounded-2xl
          px-4
          py-3
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
        <Icon size={20} className="shrink-0" />

        {!collapsed && (
          <span className="text-sm truncate">
            {title}
          </span>
        )}
      </div>
    </Link>
  );
}

export default SidebarItem;