type MilestoneCardProps = {
  title: string;
  date: string;
  status: string;
};

function MilestoneCard({
  title,
  date,
  status,
}: MilestoneCardProps) {
  return (
    <div
      className="
        border
        border-gray-100
        rounded-[24px]
        p-5
      "
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">
          {title}
        </h3>

        <span
          className="
            bg-primary
            px-3
            py-1
            rounded-full
            text-sm
          "
        >
          {status}
        </span>
      </div>

      <p className="mt-4 text-gray-500">
        Deadline: {date}
      </p>
    </div>
  );
}

export default MilestoneCard;