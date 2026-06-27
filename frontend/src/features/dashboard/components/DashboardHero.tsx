import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "@/shared/components/common/Button";

import type {
  SprintProgress,
} from "../types/dashboard.types";

type Props = {
  projectId: string | null;
  projectName: string | null;
  sprintProgress?: SprintProgress;
};

function DashboardHero({
  projectName,
  sprintProgress,
}: Props) {

  const navigate = useNavigate();

  const score =
    sprintProgress?.overallProgress ?? 0;

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
            "
          >
            Team productivity score

            <span className="ml-2">
              {score}%
            </span>
          </h2>

          <p
            className="
              mt-3
              text-black/70
            "
          >
            Current Project:

            {" "}

            {projectName || "No Project Selected"}
          </p>

        </div>

        <div className="flex gap-3">

          <Button
            title="Generate Plan"
            variant="dark"
            fullWidth={false}
            onClick={() =>
              navigate("/planner")
            }
          />

          <Button
            title="View Insights"
            variant="secondary"
            fullWidth={false}
            onClick={() =>
              navigate("/insights")
            }
          />

        </div>

      </div>
    </section>
  );
}

export default DashboardHero;