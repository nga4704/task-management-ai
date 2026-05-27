import {
  generatedTasks,
} from "../data/mockPlanner";

function ScheduleTimeline() {
  return (
    <section
      className="
        rounded-xl
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div>
        <h2 className="text-2xl font-bold">
          Daily Timeline
        </h2>

        <p className="mt-1 text-muted">
          AI-generated focus schedule
        </p>
      </div>

      <div className="mt-6 space-y-5">

        {generatedTasks.map((task, index) => (
          <div
            key={task.id}
            className="flex gap-4"
          >
            <div
              className="
                flex
                flex-col
                items-center
              "
            >
              <div
                className="
                  h-4
                  w-4
                  rounded-full
                  bg-primary
                "
              />

              {index !==
                generatedTasks.length - 1 && (
                <div
                  className="
                    mt-2
                    h-full
                    w-[2px]
                    bg-border
                  "
                />
              )}
            </div>

            <div className="pb-8">
              <h3 className="font-bold">
                {task.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-muted
                "
              >
                {task.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScheduleTimeline;