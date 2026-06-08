import MilestoneMarker from "./MilestoneMarker";

const milestones = [
  {
    title: "Sprint 1 Completed",
    date: "Aug 12",
    status: "Completed",
  },

  {
    title: "AI Module Integration",
    date: "Sep 02",
    status: "In Progress",
  },

  {
    title: "Production Release",
    date: "Oct 01",
    status: "Pending",
  },
];

function MilestonePanel() {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <h3
        className="
          text-lg
          font-bold
        "
      >
        Project Milestones
      </h3>

      <div className="mt-6 space-y-5">
        {milestones.map((item) => (
          <MilestoneMarker
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default MilestonePanel;