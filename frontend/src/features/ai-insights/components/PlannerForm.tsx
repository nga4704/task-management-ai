import { useState } from "react";

import Button from "../../../shared/components/common/Button";
import Input from "../../../shared/components/common/Input";

type PlannerFormProps = {
  onGenerate: () => void;

  loading: boolean;
};

function PlannerForm({
  onGenerate,
  loading,
}: PlannerFormProps) {
  const [goal, setGoal] =
    useState("");

  const [deadline, setDeadline] =
    useState("");

  const [workload, setWorkload] =
    useState("");

  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div>
        <h2 className="text-2xl font-bold">
          Generate AI Schedule
        </h2>

        <p className="mt-1 text-muted">
          AI analyzes workload and priorities
        </p>
      </div>

      <div className="mt-6 space-y-5">

        <Input
          label="Project Goal"
          placeholder="
            Build AI productivity dashboard
          "
          value={goal}
          onChange={(e) =>
            setGoal(e.target.value)
          }
        />

        <Input
          label="Deadline"
          type="date"
          value={deadline}
          onChange={(e) =>
            setDeadline(e.target.value)
          }
        />

        <Input
          label="Daily Workload"
          placeholder="6 hours/day"
          value={workload}
          onChange={(e) =>
            setWorkload(e.target.value)
          }
        />

        <Button
          title={
            loading
              ? "Generating..."
              : "Generate AI Plan"
          }
          onClick={onGenerate}
        />
      </div>
    </section>
  );
}

export default PlannerForm;