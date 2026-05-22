type SmartTimelineItemProps = {
  title: string;
  time: string;
  type: string;
};

function SmartTimelineItem({
  title,
  time,
  type,
}: SmartTimelineItemProps) {
  return (
    <div
      className="
        flex
        items-start
        gap-4
        bg-[#F7F7F7]
        rounded-[22px]
        p-5
      "
    >
      <div
        className="
          w-4
          h-4
          rounded-full
          bg-primary
          mt-2
        "
      />

      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-semibold">
            {title}
          </h4>

          <span className="text-sm text-gray-500">
            {time}
          </span>
        </div>

        <p className="text-gray-500 mt-3">
          {type}
        </p>
      </div>
    </div>
  );
}

export default SmartTimelineItem;