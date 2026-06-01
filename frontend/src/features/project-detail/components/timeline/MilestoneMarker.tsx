type Props = {
  title: string;
};

function MilestoneMarker({
  title,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      <div
        className="
          h-4
          w-4
          rounded-full
          bg-primary
        "
      />

      <span>{title}</span>
    </div>
  );
}

export default MilestoneMarker;