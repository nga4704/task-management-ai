type AISuggestionCardProps = {
  suggestion: string;
};

function AISuggestionCard({
  suggestion,
}: AISuggestionCardProps) {
  return (
    <div
      className="
        bg-primary
        rounded-[24px]
        p-5
      "
    >
      <h3 className="font-bold text-lg">
        AI Suggestion
      </h3>

      <p className="mt-4 leading-relaxed">
        {suggestion}
      </p>
    </div>
  );
}

export default AISuggestionCard;