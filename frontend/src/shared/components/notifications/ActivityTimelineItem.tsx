type ActivityTimelineItemProps = {
  activity: string;
  time: string;
};

function ActivityTimelineItem({
  activity,
  time,
}: ActivityTimelineItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="
            w-4
            h-4
            rounded-full
            bg-primary
          "
        />

        <div className="w-[2px] h-full bg-gray-200 mt-2" />
      </div>

      <div className="pb-8">
        <p className="font-medium">
          {activity}
        </p>

        <p className="text-gray-500 text-sm mt-2">
          {time}
        </p>
      </div>
    </div>
  );
}

export default ActivityTimelineItem;