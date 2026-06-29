import { useState } from "react";
import { Sparkles } from "lucide-react";

import Button from "../../../shared/components/common/Button";
import Input from "../../../shared/components/common/Input";

import type {
  PlannerFormValues,
} from "../types/planner.types";

type PlannerFormProps = {
  onGenerate: (
    input: PlannerFormValues
  ) => void | Promise<void>;

  loading: boolean;
};

function PlannerForm({
  onGenerate,
  loading,
}: PlannerFormProps) {
  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const [goal, setGoal] =
    useState("");

  const [deadline, setDeadline] =
    useState("");

  const [workload, setWorkload] =
    useState("4");

  const [startDate, setStartDate] =
    useState(today);

  const handleGenerate = async () => {
    if (!goal.trim()) {
      alert("Please enter a project goal.");
      return;
    }

    if (!deadline) {
      alert("Please select a deadline.");
      return;
    }

    if (Number(workload) <= 0) {
      alert("Workload must be greater than 0.");
      return;
    }

    await onGenerate({
      goal,
      deadline,
      workload,
      startDate,
    });
  };

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
      {/* Header */}

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-primary font-medium">
          <Sparkles size={15} />
          AI Planning Generator
        </div>

        <h2 className="text-2xl font-bold">
          Generate AI Project Schedule
        </h2>

        <p className="text-sm text-muted leading-6">
          Describe your project, choose a
          deadline and daily workload.
          The AI will automatically build
          an optimized execution plan.
        </p>
      </div>

      {/* Form */}

      <div className="mt-8 space-y-5">

        <Input
          label="Project Goal"
          placeholder="Example: Build an AI Project Management System"
          value={goal}
          onChange={(e) =>
            setGoal(e.target.value)
          }
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <Input
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) =>
              setStartDate(e.target.value)
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

        </div>

        <Input
          label="Daily Workload (hours/day)"
          type="number"
          min={1}
          max={12}
          value={workload}
          onChange={(e) =>
            setWorkload(e.target.value)
          }
        />

        <Button
          loading={loading}
          title={
            loading
              ? "Generating AI Schedule..."
              : "Generate AI Schedule"
          }
          onClick={handleGenerate}
        />
      </div>
    </section>
  );
}

export default PlannerForm;