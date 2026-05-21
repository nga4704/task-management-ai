type ActivityCardProps = {
  text: string;
  time: string;
};

function ActivityCard({
  text,
  time,
}: ActivityCardProps) {
  return (
    <div className="flex gap-4">
      <div
        className="
          w-3
          h-3
          rounded-full
          bg-secondary
          mt-2
        "
      />

      <div>
        <p className="font-medium">
          {text}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {time}
        </p>
      </div>
    </div>
  );
}

export default ActivityCard;