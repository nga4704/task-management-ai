import { X } from "lucide-react";

import { useTaskDetail }
  from "@/features/tasks/hooks/useTaskDetail";

import TaskMetadata from "./task-information/TaskMetadata";
import TaskDescription from "./task-information/TaskDescription";

import TaskComments
  from "./comments/TaskComments";

import AttachmentList from "./attachments/AttachmentList";
import ActivityTimeline from "./activity/ActivityTimeline";
import SubtaskList from "./task-information/SubtaskList";
import { useDeleteTask } from "@/features/tasks/hooks/useDeleteTask";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { queryClient } from "@/lib/queryClient";

type Props = {
  taskId?: string;
  projectId?: string;
  onClose: () => void;
};

function TaskDetailDrawer({
  taskId,
  projectId,
  onClose,
}: Props) {
  const [isOwner, setIsOwner] = useState(false);
  const { mutate: deleteTask } = useDeleteTask(projectId);
  const [showConfirm, setShowConfirm] = useState(false);
  const {
    data: task,
    isLoading,
  } = useTaskDetail(taskId);

  useEffect(() => {
    const checkOwner = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;

      if (!user || !task) return;

      setIsOwner(
        task.users_tasks_created_byTousers?.id === user.id
      );
    };

    checkOwner();
  }, [task]);

  if (!taskId) return null;

  return (
    <>
      {/* Overlay */}

      <div
        className="
          fixed
          inset-0
          z-40
          bg-black/40
          backdrop-blur-sm
        "
        onClick={onClose}
      />

      {/* Drawer */}

      <div
        className="
          fixed
          right-0
          top-0
          z-50

          h-screen
          w-full

          max-w-[760px]

          overflow-y-auto

          rounded-l-[32px]

          border-l
          border-border

          bg-white

          shadow-2xl
        "
      >

        {/* Loading */}

        {isLoading && (
          <div className="p-8">
            Loading task...
          </div>
        )}

        {!isLoading && task && (
          <>
            {/* Header */}

            <div
              className="
                sticky
                top-0
                z-10

                border-b
                border-border

                bg-white

                px-8
                py-6
              "
            >
              <div className="flex items-start justify-between">

                <div className="pr-6">

                  <h2
                    className="
                      text-3xl
                      font-bold
                    "
                  >
                    {task.title}
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      text-muted-foreground
                    "
                  >
                    {task.description ??
                      "No description"}
                  </p>

                </div>

                <button
                  onClick={onClose}
                  className="
                    rounded-xl
                    p-2

                    transition

                    hover:bg-gray-100
                  "
                >
                  <X size={20} />
                </button>

              </div>
            </div>

            {/* Content */}

            <div className="p-8">

              <div className="space-y-5">

                <TaskMetadata
                  task={task}
                />

                <TaskDescription
                  task={task}
                />

                <SubtaskList taskId={task.id} />

                <AttachmentList
                  taskId={task.id}
                />

                <ActivityTimeline
                  task={task}
                />

                <TaskComments taskId={task.id} />

              </div>

            </div>
          </>
        )}
        {isOwner && (
          <div className="flex justify-end pb-12 pr-10">
            <button
              onClick={() => setShowConfirm(true)}
              className="w-44 rounded-xl bg-black py-3 text-white hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        )}

        {showConfirm && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">

            <div className="w-[360px] rounded-xl bg-white p-6 shadow-xl">

              <h3 className="text-lg font-semibold">
                Delete Task?
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                This action cannot be undone.
              </p>

              <div className="mt-6 flex justify-end gap-3">

                <button
                  onClick={() => setShowConfirm(false)}
                  className="rounded-lg border px-4 py-2 text-sm"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    if (!task) return;

                    deleteTask(task.id, {
                      onSuccess: () => {
                        setShowConfirm(false);

                        queryClient.removeQueries({
                          queryKey: ["task-detail", task.id],
                        });

                        onClose();

                        toast.success("Task deleted");
                      },
                    });
                  }}
                  className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
                >
                  Delete
                </button>

              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default TaskDetailDrawer;