import type { Task, TaskPriority, TaskStatus } from "@/features/tasks/types/task.types";

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

  // =========================
  // LOCAL STATE (EDIT BUFFER)
  // =========================
  const [form, setForm] = useState({
    status: task.status,
    priority: task.priority,
    assignee_id: task.assignee_id ?? "",
    start_date: task.start_date ?? "",
    deadline: task.deadline ?? "",
  });

  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    const checkOwner = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;

      if (!user) return;

      setIsOwner(task.users_tasks_created_byTousers?.id === user.id);
    };

    checkOwner();
  }, [task]);

  // reset khi task thay đổi
  useEffect(() => {
    setForm({
      status: task.status,
      priority: task.priority,
      assignee_id: task.assignee_id ?? "",
      start_date: task.start_date ?? "",
      deadline: task.deadline ?? "",
    });
    setDirty(false);
  }, [task]);

  const handleSave = () => {
    updateTask({
      taskId: task.id,
      payload: {
        status: form.status,
        priority: form.priority,
        assignee_id: form.assignee_id || null,
        start_date: form.start_date || null,
        deadline: form.deadline || null,
      },
    });

    setDirty(false);
  };

  const row =
    "flex items-center justify-between py-4 px-2 rounded-xl hover:bg-surfaceSecondary transition";

  const label = "text-sm text-muted flex items-center gap-2";
  const selectStyle = `
    rounded-xl border border-border bg-surfaceSecondary
    px-3 py-2 text-sm outline-none
  `;

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Info size={18} />
          <h3 className="font-bold text-base">
            Task Information
          </h3>
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={handleSave}
          disabled={!dirty || isPending}
          className={`
            px-4 py-2 rounded-xl text-white text-sm
            ${dirty ? "bg-black" : "bg-gray-300"}
          `}
        >
          {isPending ? "Saving..." : "Save"}
        </button>
      </div>

      <div className="space-y-1">

        {/* STATUS */}
        <div className={row}>
          <span className={label}>
            <Flag size={14} /> Status
          </span>

          <select
            value={form.status}
            onChange={(e) => {
              setForm((p) => ({
                ...p,
                status: e.target.value as TaskStatus,
              }));
              setDirty(true);
            }}
            className={selectStyle}
          >
            <option value="TODO">Todo</option>
            <option value="IN_PROGRESS">In Progress</option>
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
            disabled={!isOwner}
            value={form.priority}
            onChange={(e) => {
              setForm((p) => ({
                ...p,
                priority: e.target.value as TaskPriority,
              }));
              setDirty(true);
            }}
            className={selectStyle}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* ASSIGNEE */}
        <div className={row}>
          <span className={label}>
            <User size={14} /> Assignee
          </span>

          <select
            disabled={!isOwner}
            value={form.assignee_id}
            onChange={(e) => {
              setForm((p) => ({ ...p, assignee_id: e.target.value }));
              setDirty(true);
            }}
            className={selectStyle}
          >
            <option value="">Unassigned</option>

            {members.map((m: any) => (
              <option key={m.user_id} value={m.user_id}>
                {m.users?.full_name}
              </option>
            ))}
          </select>
        </div>

        {/* START DATE */}
        <div className={row}>
          <span className={label}>
            <Calendar size={14} /> Start Date
          </span>

          <input
            type="date"
            value={form.start_date ? form.start_date.split("T")[0] : ""}
            onChange={(e) => {
              setForm((p) => ({ ...p, start_date: e.target.value }));
              setDirty(true);
            }}
            className={selectStyle}
          />
        </div>

        {/* DEADLINE */}
        <div className={row}>
          <span className={label}>
            <Calendar size={14} /> Deadline
          </span>

          <input
            type="date"
            value={form.deadline ? form.deadline.split("T")[0] : ""}
            onChange={(e) => {
              setForm((p) => ({ ...p, deadline: e.target.value }));
              setDirty(true);
            }}
            className={selectStyle}
          />
        </div>

      </div>
    </div>
  );
}

export default TaskMetadata;