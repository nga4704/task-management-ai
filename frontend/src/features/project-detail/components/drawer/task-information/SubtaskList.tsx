import { CheckCircle2, Circle, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useSubtasks } from "@/features/tasks/hooks/useSubtasks";

type Props = {
  taskId: string;
};

function SubtaskList({ taskId }: Props) {
  const {
    items,
    loading,
    toggle,
    addSubtask,
    removeSubtask,
  } = useSubtasks(taskId);

  const [newTitle, setNewTitle] = useState("");

  const handleAdd = async () => {
    if (!newTitle.trim()) return;

    await addSubtask(newTitle);
    setNewTitle("");
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <h3 className="font-bold mb-4">Subtasks</h3>

      {/* LIST */}
      <div className="space-y-2">
        {items.map((st) => (
          <div
            key={st.id}
            className="flex items-center justify-between gap-2 p-2 rounded-xl hover:bg-surfaceSecondary transition"
          >
            <div className="flex items-center gap-2">
              <button onClick={() => toggle(st.id)}>
                {st.completed ? (
                  <CheckCircle2 className="text-green-500" />
                ) : (
                  <Circle className="text-muted" />
                )}
              </button>

              <span
                className={`text-sm ${
                  st.completed
                    ? "line-through text-muted"
                    : "text-text"
                }`}
              >
                {st.title}
              </span>
            </div>

            <button
              onClick={() => removeSubtask(st.id)}
              className="text-muted hover:text-red-500"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* ADD */}
      <div className="mt-4 flex gap-2">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add subtask..."
          className="flex-1 rounded-xl border border-border px-3 py-2 text-sm"
        />

        <button
          onClick={handleAdd}
          disabled={loading}
          className="rounded-xl bg-primary px-3 text-black disabled:opacity-50"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}

export default SubtaskList;