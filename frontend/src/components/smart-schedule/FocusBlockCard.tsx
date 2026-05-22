type FocusBlockCardProps = {
  title: string;
  duration: string;
};

function FocusBlockCard({
  title,
  duration,
}: FocusBlockCardProps) {
  return (
    <div
      className="
        bg-primary
        rounded-[24px]
        p-5
      "
    >
      <p className="text-black/70">
        Focus Block
      </p>

      <h3 className="text-2xl font-bold mt-3">
        {title}
      </h3>

      <p className="mt-4">
        Duration: {duration}
      </p>
    </div>
  );
}

export default FocusBlockCard;