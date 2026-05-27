import { Sparkles } from "lucide-react";

import Button from "../../../../shared/components/common/Button";

function DashboardHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-xl
        bg-primaryLight
        p-8
      "
    >
      <div className="max-w-[720px]">

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-black/10
            px-4
            py-2
            text-sm
            font-medium
          "
        >
          <Sparkles size={16} />

          AI Assistant Active
        </div>

        <h1
          className="
            mt-6
            text-5xl
            font-bold
            leading-tight
          "
        >
          AI-powered productivity
          management platform.
        </h1>

        <p
          className="
            mt-5
            max-w-[580px]
            text-lg
            leading-8
            text-black/70
          "
        >
          Predict delays, optimize workload
          and improve sprint performance
          using intelligent analytics.
        </p>

        <div className="mt-8 flex gap-4">
          <Button
            title="Generate AI Plan"
            variant="dark"
            fullWidth={false}
          />

          <Button
            title="View Analytics"
            variant="secondary"
            fullWidth={false}
          />
        </div>
      </div>
    </section>
  );
}

export default DashboardHero;