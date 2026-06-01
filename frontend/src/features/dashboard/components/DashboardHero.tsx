import { Sparkles } from "lucide-react";

import Button from "@/shared/components/common/Button";

function DashboardHero() {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-primary/20

        bg-primaryLight

        px-6
        py-6
        md:px-8
        md:py-7

        shadow-soft
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          right-[-80px]
          top-[-80px]

          h-52
          w-52

          rounded-full

          bg-white/30

          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10

          flex
          flex-col
          gap-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* LEFT */}
        <div className="max-w-2xl">
          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-black

              px-3
              py-1.5

              text-xs
              font-semibold
              text-white
            "
          >
            <Sparkles size={14} />

            AI ACTIVE
          </div>

          <h2
            className="
              mt-4

              text-2xl
              md:text-3xl

              font-bold
              tracking-tight
            "
          >
            Your team productivity score is
            <span className="ml-2">
              92%
            </span>
          </h2>

          <p
            className="
              mt-3

              text-sm
              md:text-base

              text-black/65
            "
          >
            AI predicts 3 tasks may miss deadlines this
            week and suggests workload rebalancing to
            improve sprint completion.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >
          <Button
            title="Generate Plan"
            variant="dark"
            fullWidth={false}
          />

          <Button
            title="View Insights"
            variant="secondary"
            fullWidth={false}
          />
        </div>
      </div>
    </section>
  );
}

export default DashboardHero;