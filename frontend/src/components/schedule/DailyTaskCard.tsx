type DailyTaskCardProps = {
  title: string;
  time: string;
};

function DailyTaskCard({
  title,
  time,
}: DailyTaskCardProps) {
  return (
    <div
      className="
        bg-[#F7F7F7]
        rounded-[22px]
        p-5
        flex
        justify-between
        items-center
      "
    >
      <div>
        <h4 className="font-semibold">
          {title}
        </h4>

        <p className="text-gray-500 mt-2">
          {time}
        </p>
      </div>

      <div
        className="
          w-10
          h-10
          rounded-full
          bg-primary
        "
      />
    </div>
  );
}

export default DailyTaskCard;