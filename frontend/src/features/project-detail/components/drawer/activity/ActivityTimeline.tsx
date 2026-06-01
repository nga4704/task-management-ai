const activities = [
  "Task created",
  "Status changed to In Progress",
  "Comment added",
  "AI analysis updated",
];

function ActivityTimeline() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
      "
    >
      <h3 className="font-bold">
        Activity
      </h3>

      <div className="mt-5 space-y-4">
        {activities.map((item) => (
          <div
            key={item}
            className="
              flex
              gap-3
            "
          >
            <div
              className="
                mt-1
                h-3
                w-3
                rounded-full
                bg-primary
              "
            />

            <p className="text-sm">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityTimeline;