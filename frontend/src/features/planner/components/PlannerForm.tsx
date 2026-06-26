import { useState } from "react";
import { Sparkles } from "lucide-react";

import Button from "../../../shared/components/common/Button";
import Input from "../../../shared/components/common/Input";
import type { PlannerFormValues } from "../types/planner.types";

type PlannerFormProps = {
  onGenerate: (input: PlannerFormValues) => void | Promise<void>;
  loading: boolean;
};

function PlannerForm({
  onGenerate,
  loading,
}: PlannerFormProps) {
  const [goal, setGoal] = useState("");
  const [deadline, setDeadline] = useState("");
  const [workload, setWorkload] = useState("");

  return (
    <section
      className="
        rounded-3xl
        border
        border-border
        bg-surface
        p-8
        shadow-sm
      "
    >
      {/* HEADER */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Sparkles size={14} />
          AI Generator
        </div>

        <h2 className="text-xl font-semibold tracking-tight">
          Create Your AI Schedule
        </h2>

        <p className="text-sm text-muted">
          Enter your goal and constraints, AI will optimize your plan automatically.
        </p>
      </div>

      {/* FORM */}
      <div className="mt-6 space-y-4">

        <div>
          <Input
            label="Project Goal"
            placeholder="Build AI productivity dashboard"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Input
            label="Deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <Input
            label="Daily Workload"
            placeholder="6 hours/day"
            value={workload}
            onChange={(e) => setWorkload(e.target.value)}
          />

        </div>

        {/* ACTION */}
        <div className="pt-2">
          <Button
            title={loading ? "Generating plan..." : "Generate AI Plan"}
            onClick={() =>
              onGenerate({
                goal,
                deadline,
                workload,
              })
            }
          />
        </div>

      </div>
    </section>
  );
}

export default PlannerForm;