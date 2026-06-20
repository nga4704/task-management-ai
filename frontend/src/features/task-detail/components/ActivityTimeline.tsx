type ActivityTimelineProps = {
  activity: string;
  time: string;
};

function ActivityTimeline({
  activity,
  time,
}: ActivityTimelineProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="
            w-4
            h-4
            rounded-full
            bg-secondary
          "
        />

        <div className="w-[2px] h-full bg-gray-200 mt-2" />
      </div>

      <div className="pb-8">
        <p className="font-medium">
          {activity}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          {time}
        </p>
      </div>
    </div>
  );
}

export default ActivityTimeline;