type OptimizationSuggestionProps = {
  suggestion: string;
};

function OptimizationSuggestion({
  suggestion,
}: OptimizationSuggestionProps) {
  return (
    <div
      className="
        bg-white
        rounded-[24px]
        p-5
        shadow-soft
      "
    >
      <h3 className="font-bold text-xl">
        AI Suggestion
      </h3>

      <p className="mt-4 leading-relaxed text-gray-600">
        {suggestion}
      </p>
    </div>
  );
}

export default OptimizationSuggestion;