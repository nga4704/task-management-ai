import { useEffect, useState } from "react";

import type { Task } from "@/features/tasks/types/task.types";

import { useUpdateTask } from "@/features/tasks/hooks/useUpdateTask";

import { Pencil, Save, X, FileText } from "lucide-react";

type Props = {
  task: Task;
};

function TaskDescription({ task }: Props) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.description || "");

  const { mutate, isPending } = useUpdateTask(task.project_id);

  useEffect(() => {
    setValue(task.description || "");
  }, [task.description]);

  const hasChanged = value !== (task.description || "");

  const handleSave = () => {
    mutate(
      {
        taskId: task.id,
        payload: {
          description: value,
        },
      },
      {
        onSuccess: () => {
          setEditing(false);
        },
      }
    );
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-black" />
          <h3 className="font-bold text-base">
            Description
          </h3>
        </div>

        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="
              flex
              h-9 w-9
              items-center
              justify-center
              rounded-xl
              text-muted
              transition
              hover:bg-surfaceSecondary
              hover:text-primary
            "
            title="Edit description"
          >
            <Pencil size={16} />
          </button>
        )}
      </div>

      {/* VIEW MODE */}
      {!editing ? (
        <p
          onClick={() => setEditing(true)}
          className="
            mt-4
            cursor-text
            text-sm
            leading-7
            text-muted
            whitespace-pre-wrap
            rounded-xl
            hover:bg-surfaceSecondary
            p-2
            transition
          "
        >
          {task.description || "Click to add description"}
        </p>
      ) : (
        <>
          {/* EDIT MODE */}
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={6}
            className="
              mt-4
              w-full
              rounded-xl
              border
              border-border
              bg-white
              p-4
              text-sm
              outline-none
              focus:ring-2
              focus:ring-primary/20
              transition
            "
            onKeyDown={(e) => {
              if (e.ctrlKey && e.key === "Enter") {
                handleSave();
              }
            }}
          />

          {/* ACTIONS */}
          {hasChanged && (
            <div className="mt-4 flex justify-end gap-3">
              {/* CANCEL */}
              <button
                onClick={() => {
                  setValue(task.description || "");
                  setEditing(false);
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-border
                  px-4
                  py-2
                  text-sm
                  text-muted
                  transition
                  hover:bg-surfaceSecondary
                "
                title="Cancel"
              >
                <X size={16} />
                Cancel
              </button>

              {/* SAVE */}
              <button
                onClick={handleSave}
                disabled={isPending}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-primary
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:opacity-90
                  disabled:opacity-50
                "
                title="Save"
              >
                <Save size={16} />
                Save
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default TaskDescription;