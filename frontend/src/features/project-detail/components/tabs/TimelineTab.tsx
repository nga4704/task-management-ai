import TimelineChart from "../timeline/TimelineChart";
import MilestonePanel from "../timeline/MilestonePanel";
import TimelineInsights from "../timeline/TimelineInsights";

function TimelineTab() {
  return (
    <div className="space-y-6">

      <TimelineChart />

      <section
        className="
          grid
          gap-6
          xl:grid-cols-3
        "
      >
        <div className="xl:col-span-2">
          <MilestonePanel />
        </div>

        <TimelineInsights />
      </section>

    </div>
  );
}

export default TimelineTab;