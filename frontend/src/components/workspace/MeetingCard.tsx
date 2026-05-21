type MeetingCardProps = {
  title: string;
  time: string;
};

function MeetingCard({
  title,
  time,
}: MeetingCardProps) {
  return (
    <div
      className="
        bg-[#F7F7F7]
        rounded-[20px]
        p-4
      "
    >
      <h4 className="font-semibold">
        {title}
      </h4>

      <p className="text-gray-500 mt-2">
        {time}
      </p>
    </div>
  );
}

export default MeetingCard;