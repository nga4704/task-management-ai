type Props = {
  text: string;
  time: string;
};

function ActivityCard({
  text,
  time,
}: Props) {
  return (
    <div className="flex gap-4">

      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-primaryLight
          font-semibold
        "
      >
        N
      </div>

      <div
        className="
          flex-1
          rounded-xl
          bg-surfaceSecondary
          p-4
        "
      >
        <p className="font-medium">
          {text}
        </p>

        <p className="mt-2 text-sm text-muted">
          {time}
        </p>
      </div>
    </div>
  );
}

export default ActivityCard;