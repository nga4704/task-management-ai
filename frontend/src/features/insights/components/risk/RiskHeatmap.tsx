function RiskHeatmap() {
  return (
    <section
      className="
        rounded-[32px]

        border
        border-border

        bg-white/70

        p-6

        backdrop-blur-md
      "
    >
      <h2
        className="
          text-xl
          font-bold
        "
      >
        Risk Heatmap
      </h2>

      <p
        className="
          mt-1
          text-sm
          text-muted
        "
      >
        Team workload distribution
      </p>

      <div
        className="
          mt-6
          grid
          grid-cols-5
          gap-3
        "
      >
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`
              aspect-square
              rounded-xl

              transition-all

              ${
                i > 18
                  ? "bg-danger"
                  : i > 12
                  ? "bg-warning"
                  : "bg-success"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}

export default RiskHeatmap;