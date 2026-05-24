type AISummaryCardProps = {
  title: string;
  value: string;
  description: string;
};

function AISummaryCard({
  title,
  value,
  description,
}: AISummaryCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-card
        p-6
        shadow-soft
      "
    >
      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>

      <p className="text-gray-500 mt-4 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default AISummaryCard;