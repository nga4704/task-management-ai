import {
  LayoutDashboard,
  KanbanSquare,
  CalendarDays,
  GitBranch,
  Users,
  BarChart3,
} from "lucide-react";

import type {
  ProjectTab,
} from "../../constants/projectTabs";

type Props = {
  activeTab: ProjectTab;

  onChange: (
    tab: ProjectTab
  ) => void;
};

const tabs = [
  {
    key: "overview",
    label: "Overview",
    icon: LayoutDashboard,
  },

  {
    key: "board",
    label: "Board",
    icon: KanbanSquare,
  },

  {
    key: "calendar",
    label: "Calendar",
    icon: CalendarDays,
  },

  {
    key: "timeline",
    label: "Timeline",
    icon: GitBranch,
  },

  {
    key: "members",
    label: "Members",
    icon: Users,
  },

  {
    key: "analytics",
    label: "Analytics",
    icon: BarChart3,
  },
] as const;

function ProjectTabs({
  activeTab,
  onChange,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-surface
        p-2
      "
    >
      <div
        className="
          flex
          flex-wrap
          gap-2
        "
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;

          const active =
            activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() =>
                onChange(
                  tab.key as ProjectTab
                )
              }
              className={`
                flex
                items-center
                gap-2

                rounded-2xl

                px-5
                py-3

                font-medium

                transition-all

                ${
                  active
                    ? `
                      bg-primary
                      text-black
                    `
                    : `
                      text-muted
                      hover:bg-surfaceSecondary
                    `
                }
              `}
            >
              <Icon size={18} />

              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectTabs;