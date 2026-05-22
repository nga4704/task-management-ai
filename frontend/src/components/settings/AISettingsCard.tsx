function AISettingsCard() {
  return (
    <div
      className="
        bg-primary
        rounded-[28px]
        p-6
      "
    >
      <h2 className="text-3xl font-bold">
        AI Preferences
      </h2>

      <p className="mt-5 leading-relaxed text-black/80">
        Configure AI prediction sensitivity,
        smart scheduling, and productivity recommendations.
      </p>

      <button
        className="
          mt-8
          bg-black
          text-white
          px-5
          py-3
          rounded-full
          font-semibold
        "
      >
        Configure AI
      </button>
    </div>
  );
}

export default AISettingsCard;