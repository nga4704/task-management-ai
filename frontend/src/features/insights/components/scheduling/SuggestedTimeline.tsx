function SuggestedTimeline() {
  const timeline = [
    "08:00 Backend Development",
    "10:00 API Integration",
    "13:00 Sprint Planning",
    "15:00 Testing",
  ];

  return (
    <section
      className="
        rounded-[28px]
        border
        border-border
        bg-surface
        p-6
      "
    >
      <h2 className="font-bold text-xl">
        Suggested Timeline
      </h2>

      <div className="mt-6 space-y-4">
        {timeline.map((item) => (
          <div
            key={item}
            className="
              rounded-xl
              bg-primaryLight/50
              p-4
            "
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SuggestedTimeline;