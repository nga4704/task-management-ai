import type { Task } from "@/features/tasks/types/task.types";

import { useUpdateTask } from "@/features/tasks/hooks/useUpdateTask";
import { useTeamMembers } from "@/features/teams/hooks/useTeamMembers";
import { useAssignTask } from "@/features/tasks/hooks/useAssignTask";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Info, User, Flag, Calendar } from "lucide-react";

type Props = {
  task: Task;
};

function TaskMetadata({ task }: Props) {
  const { mutate: updateTask, isPending } =
    useUpdateTask(task.project_id);

  const { data: members = [] } =
    useTeamMembers(task.team_id);

  const { mutate: assignTask } =
    useAssignTask(task.project_id);
  const [isOwner, setIsOwner] = useState(false);
  const row =
    "flex items-center justify-between py-4 px-2 rounded-xl hover:bg-surfaceSecondary transition";

  const label = "text-sm text-muted flex items-center gap-2";
  const value = "text-sm font-medium text-text";

  const selectStyle = `
    rounded-xl
    border border-border
    bg-surfaceSecondary
    px-3 py-2
    text-sm
    outline-none
    transition
    focus:ring-2 focus:ring-primary/20
    hover:border-primary/30
  `;
  useEffect(() => {
    const checkOwner = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;

      if (!user) return;

      // giả sử creator = owner
      setIsOwner(task.users_tasks_created_byTousers?.id === user.id);
    };

    checkOwner();
  }, [task]);
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">

      {/* HEADER */}
      <div className="flex items-center gap-2 mb-5">
        <Info size={18} className="text-black" />
        <h3 className="font-bold text-base">
          Task Information
        </h3>
      </div>

      <div className="space-y-1">

        {/* STATUS */}
        <div className={row}>
          <span className={label}>
            <Flag size={14} /> Status
          </span>

          <select
            value={task.status}
            disabled={isPending}
            className={selectStyle}
            onChange={(e) =>
              updateTask({
                taskId: task.id,
                payload: { status: e.target.value },
              })
            }
          >
            <option value="TODO">Todo</option>
            <option value="IN_PROGRESS">
              In Progress
            </option>
            <option value="REVIEW">Review</option>
            <option value="DONE">Done</option>
          </select>
        </div>

        {/* PRIORITY */}
        <div className={row}>
          <span className={label}>
            <Flag size={14} /> Priority
          </span>

          <select
            value={task.priority}
            disabled={!isOwner || isPending}
            className={selectStyle}
            onChange={(e) =>
              updateTask({
                taskId: task.id,
                payload: {
                  priority: e.target.value,
                },
              })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* TEAM */}
        <div className={row}>
          <span className={label}>
            <User size={14} /> Team
          </span>
          <span className={value}>
            {task.teams?.name ?? "-"}
          </span>
        </div>

        {/* CREATOR */}
        <div className={row}>
          <span className={label}>
            <User size={14} /> Creator
          </span>
          <span className={value}>
            {task.users_tasks_created_byTousers
              ?.full_name ?? "-"}
          </span>
        </div>

        {/* ASSIGNEE */}
        <div className={row}>
          <span className={label}>
            <User size={14} /> Assignee
          </span>

          <select
            disabled={!isOwner}
            value={task.assignee_id ?? ""}
            className={selectStyle}
            onChange={(e) =>
              assignTask({
                taskId: task.id,
                assigneeId: e.target.value,
              })
            }
          >
            <option value="">Unassigned</option>

            {members.map((member: any) => (
              <option
                key={member.user_id}
                value={member.user_id}
              >
                {member.users?.full_name}
              </option>
            ))}
          </select>
        </div>

        {/* DEADLINE */}
        <div className={row}>
          <span className={label}>
            <Calendar size={14} /> Deadline
          </span>

          <input
            type="date"
            disabled={!isOwner || isPending}
            defaultValue={
              task.deadline
                ? task.deadline.split("T")[0]
                : ""
            }
            className={selectStyle}
            onBlur={(e) =>
              updateTask({
                taskId: task.id,
                payload: {
                  deadline: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TaskMetadata;