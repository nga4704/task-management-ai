import {
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import TaskBoardCard from "./TaskBoardCard";

type Task = {
  id: string;
  title: string;
  priority: string;
};

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
    <div
      className="
        bg-[#EFEFEF]
        rounded-card
        p-4
        min-h-[600px]
      "
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <span
          className="
            bg-white
            px-3
            py-1
            rounded-full
            text-sm
          "
        >
          {tasks.length}
        </span>
      </div>

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
                    <TaskBoardCard
                      title={task.title}
                      priority={task.priority}
                    />
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default KanbanColumn;