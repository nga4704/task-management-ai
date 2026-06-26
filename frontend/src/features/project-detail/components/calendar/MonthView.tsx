import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

import type { Task } from "@/features/tasks/types/task.types";
import TaskDetailDrawer from "../drawer/TaskDetailDrawer";

type Props = {
  tasks: Task[];
};

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const priorityColor: Record<string, string> = {
  LOW: "bg-green-100 text-green-700",
  MEDIUM: "bg-yellow-100 text-yellow-700",
  HIGH: "bg-red-100 text-red-700",
};

const normalizePriority = (p?: string) =>
  (p ?? "LOW").toUpperCase();

const getDatesInRange = (start: Date, end: Date) => {
  const dates: string[] = [];
  const current = new Date(start);

  while (current <= end) {
    dates.push(current.toDateString());
    current.setDate(current.getDate() + 1);
  }

  return dates;
};

function MonthView({ tasks }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const firstWeekDay = (firstDay.getDay() + 6) % 7;
  const totalDays = lastDay.getDate();

  const totalCells = Math.ceil((firstWeekDay + totalDays) / 7) * 7;

  const calendarDays = Array.from({ length: totalCells }).map((_, index) => {
    const day = index - firstWeekDay + 1;
    return day < 1 || day > totalDays ? null : day;
  });

  // GROUP TASKS BY DAY
  const tasksByDay = useMemo(() => {
    const map = new Map<string, Task[]>();

    (tasks ?? []).forEach((task) => {
      const start = task.start_date ? new Date(task.start_date) : null;
      const end = task.deadline ? new Date(task.deadline) : start;

      if (!start || !end) return;

      const dates = getDatesInRange(start, end);

      dates.forEach((d) => {
        if (!map.has(d)) map.set(d, []);
        map.get(d)!.push(task);
      });
    });

    return map;
  }, [tasks]);

  const selectedTasks = selectedDay
    ? tasksByDay.get(selectedDay) ?? []
    : [];

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  };

  return (
    <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primaryLight px-3 py-1 text-xs font-semibold">
            <CalendarDays size={14} />
            PROJECT CALENDAR
          </div>

          <h3 className="mt-3 text-2xl font-bold">
            {currentDate.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h3>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
            className="h-10 w-10 rounded-xl border border-border"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            className="h-10 w-10 rounded-xl border border-border"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* WEEK HEADER */}
      <div className="mb-3 grid grid-cols-7 gap-3">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-muted">
            {day}
          </div>
        ))}
      </div>

      {/* CALENDAR */}
      <div className="grid grid-cols-7 gap-3">
        {calendarDays.map((day, index) => {
          const dateKey = day
            ? new Date(year, month, day).toDateString()
            : null;

          const dayTasks = dateKey ? tasksByDay.get(dateKey) ?? [] : [];

          return (
            <div
              key={index}
              onClick={() => {
                if (day) setSelectedDay(dateKey!);
              }}
              className="min-h-[110px] cursor-pointer rounded-2xl border border-border p-3 transition-all hover:border-primary hover:shadow-soft"
            >
              {day && (
                <>
                  {/* DAY */}
                  <div
                    className={`text-sm font-semibold ${
                      isToday(day) ? "text-primary" : ""
                    }`}
                  >
                    {day}
                  </div>

                  {/* TASKS */}
                  <div className="mt-3 space-y-1">
                    {dayTasks.slice(0, 2).map((task) => {
                      const priority = normalizePriority(task.priority);

                      return (
                        <div
                          key={task.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTask(task);
                          }}
                          className={`truncate rounded-lg px-2 py-1 text-[11px] font-medium ${
                            priorityColor[priority] ??
                            "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {task.title}
                        </div>
                      );
                    })}

                    {dayTasks.length > 2 && (
                      <div className="text-[10px] text-muted">
                        +{dayTasks.length - 2} more
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* SELECTED DAY PANEL */}
      {selectedDay && (
        <div className="mt-6 rounded-2xl border p-4">
          <h4 className="font-semibold">Tasks on {selectedDay}</h4>

          <div className="mt-3 space-y-2">
            {selectedTasks.length === 0 ? (
              <p className="text-sm text-muted">No tasks</p>
            ) : (
              selectedTasks.map((task) => {
                const priority = normalizePriority(task.priority);

                return (
                  <div
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    className={`cursor-pointer rounded-lg px-3 py-2 text-sm ${
                      priorityColor[priority] ??
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {task.title}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* TASK DETAIL DRAWER */}
      <TaskDetailDrawer
        taskId={selectedTask?.id}
        onClose={() => setSelectedTask(null)}
      />
    </div>
  );
}

export default MonthView;