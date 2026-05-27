import {
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import type { Task } from "@/shared/types/task.types";

import TaskBoardCard from "./TaskBoardCard";

type KanbanColumnProps = {
  title: string;

  tasks: Task[];

  droppableId: string;
};

function KanbanColumn({
  title,
  tasks,
  droppableId,
}: KanbanColumnProps) {
  return (
    <section
      className="
        min-h-[700px]
        rounded-xl
        border
        border-border
        bg-white/70
        p-4
        shadow-soft
        backdrop-blur-md
      "
    >
      {/* HEADER */}
      <div
        className="
          mb-5
          flex
          items-center
          justify-between
        "
      >
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <div
          className="
            flex
            h-8
            min-w-[32px]
            items-center
            justify-center
            rounded-full
            bg-surfaceSecondary
            px-3
            text-sm
            font-semibold
          "
        >
          {tasks.length}
        </div>
      </div>

      {/* BOARD */}
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4"
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskBoardCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </section>
  );
}

export default KanbanColumn;