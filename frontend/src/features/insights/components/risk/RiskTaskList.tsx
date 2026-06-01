import { AlertTriangle } from "lucide-react";

import {
  riskTasks,
} from "../../data/mockInsights";

function RiskTaskList() {
  return (
    <section
      className="
        rounded-[32px]

        border
        border-danger/20

        bg-dangerLight

        p-6
      "
    >
      <div className="flex items-center gap-3">
        <AlertTriangle />

        <h2
          className="
            text-xl
            font-bold
          "
        >
          High Risk Tasks
        </h2>
      </div>

      <div className="mt-6 space-y-4">
        {riskTasks.map((task) => (
          <div
            key={task.id}
            className="
              flex
              items-center
              justify-between

              rounded-2xl

              bg-white/70

              p-5
            "
          >
            <div>
              <h3 className="font-semibold">
                {task.task}
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-muted
                "
              >
                Potential deadline delay
              </p>
            </div>

            <div
              className="
                rounded-full

                bg-danger

                px-4
                py-2

                text-white
                font-bold
              "
            >
              {task.risk}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RiskTaskList;