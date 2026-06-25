import type { Task }
  from "@/features/tasks/types/task.types";
import { useState } from "react";
import Button from "@/shared/components/common/Button";

import { useUpdateProgress }
  from "@/features/tasks/hooks/useUpdateProgress";

type Props = {
  task: Task;
};

function ProgressTracker({
  task,
}: Props) {


  
  const progress =
    task.progress ?? 0;

  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
      "
    >
      <div className="flex justify-between">

        <h3 className="font-bold">
          Progress
        </h3>

        <span>
          {progress}%
        </span>

      </div>

      <div
        className="
          mt-4
          h-3
          rounded-full
          bg-border
        "
      >
        <div
          className="
            h-full
            rounded-full
            bg-primary
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}

export default ProgressTracker;