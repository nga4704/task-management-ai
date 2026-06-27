import {
  Brain,
  CheckCircle2,
  Clock3,
  ListTodo,
} from "lucide-react";

import StatCard from "@/shared/components/cards/StatCard";
import { useTasks } from "@/features/tasks/hooks/useTasks";

function TaskStats() {
  const { data: tasks = [] } = useTasks({
    scope: "my",
  });

  // TOTAL
  const totalTasks = tasks.length;

  // IN PROGRESS
  const inProgressTasks = tasks.filter(
    (t) => t.status === "IN_PROGRESS"
  ).length;

  // COMPLETED
  const completedTasks = tasks.filter(
    (t) => t.status === "DONE"
  ).length;

  // AI TASKS
  const aiTasks = tasks.filter(
    (t) => t.ai_suggested
  ).length;

  // AI PRODUCTIVITY (simple formula)
  const aiProductivity =
    totalTasks === 0
      ? 0
      : Math.round((aiTasks / totalTasks) * 100);

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Tasks"
        value={totalTasks}
        // change="+12%"
        // description="vs last week"
        icon={ListTodo}
      />

      <StatCard
        title="In Progress"
        value={inProgressTasks}
        // change="+4%"
        // description="Active now"
        icon={Clock3}
      />

      <StatCard
        title="AI Productivity"
        value={`${aiProductivity}%`}
        // change="+18%"
        // description="AI suggested tasks ratio"
        icon={Brain}
        highlighted
      />

      <StatCard
        title="Completed"
        value={completedTasks}
        // change="+24%"
        // description="Tasks done"
        icon={CheckCircle2}
      />

    </section>
  );
}

export default TaskStats;