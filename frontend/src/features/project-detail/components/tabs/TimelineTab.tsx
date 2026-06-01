import TimelineChart from "../timeline/TimelineChart";
import MilestoneMarker from "../timeline/MilestoneMarker";

function TimelineTab() {
  return (
    <div className="space-y-6">
      <TimelineChart />

      <div
        className="
          rounded-3xl
          border
          border-border
          bg-white
          p-6
          shadow-soft
        "
      >
        <h3 className="font-bold">
          Milestones
        </h3>

        <div className="mt-5 space-y-4">
          <MilestoneMarker title="Sprint 1 Completed" />

          <MilestoneMarker title="AI Integration" />

          <MilestoneMarker title="Production Release" />
        </div>
      </div>
    </div>
  );
}

export default TimelineTab;