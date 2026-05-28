import {
  Brain,
  CheckCircle2,
  Clock3,
  ListTodo,
} from "lucide-react";

import StatCard from "@/shared/components/cards/StatCard";

function TaskStats() {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-6

        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      <StatCard
        title="Total Tasks"
        value="24"
        change="+12%"
        description="vs last week"
        icon={ListTodo}
      />

      <StatCard
        title="In Progress"
        value="8"
        change="+4%"
        description="Active now"
        icon={Clock3}
      />

      <StatCard
        title="AI Productivity"
        value="91%"
        change="+18%"
        description="AI optimized"
        icon={Brain}
        highlighted
      />

      <StatCard
        title="Completed"
        value="16"
        change="+24%"
        description="Tasks done"
        icon={CheckCircle2}
      />
    </section>
  );
}

export default TaskStats;