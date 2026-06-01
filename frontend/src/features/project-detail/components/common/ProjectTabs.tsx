import {
  PROJECT_TABS,
  type ProjectTab,
} from "../../constants/projectTabs";

type Props = {
  activeTab: ProjectTab;

  onChange: (
    tab: ProjectTab
  ) => void;
};

function ProjectTabs({
  activeTab,
  onChange,
}: Props) {
  return (
    <div
      className="
        flex
        gap-2
        overflow-x-auto
      "
    >
      {PROJECT_TABS.map((tab) => (
        <button
          key={tab}
          onClick={() =>
            onChange(tab)
          }
          className={`
            px-5
            py-3
            rounded-2xl
            whitespace-nowrap
            transition-all

            ${
              activeTab === tab
                ? `
                  bg-primary
                  font-semibold
                `
                : `
                  bg-surface
                  border
                  border-border
                `
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default ProjectTabs;