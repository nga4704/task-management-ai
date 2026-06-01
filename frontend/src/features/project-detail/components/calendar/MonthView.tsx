function MonthView() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-white
        p-6
        shadow-soft
      "
    >
      <div
        className="
          grid
          grid-cols-7
          gap-3
        "
      >
        {Array.from({
          length: 35,
        }).map((_, index) => (
          <div
            key={index}
            className="
              aspect-square
              rounded-xl
              border
              border-border
              p-2
              text-sm
            "
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthView;