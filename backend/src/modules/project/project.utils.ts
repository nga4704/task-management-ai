export const calculateProgress = (
  tasks: any[]
) => {
  if (!tasks.length) return 0;

  const total =
    tasks.reduce(
      (sum, task) =>
        sum + (task.progress || 0),
      0
    );

  return Math.round(
    total / tasks.length
  );
};

export const calculateAIScore = (
  tasks: any[]
) => {
  if (!tasks.length) return 0;

  const completed =
    tasks.filter(
      (task) =>
        task.status === "done"
    ).length;

  const overdue =
    tasks.filter((task) => {
      if (!task.deadline)
        return false;

      return (
        new Date(task.deadline) <
          new Date() &&
        task.status !== "done"
      );
    }).length;

  const completionRate =
    completed / tasks.length;

  const overduePenalty =
    overdue * 5;

  return Math.max(
    0,
    Math.min(
      100,
      Math.round(
        completionRate * 100 -
          overduePenalty
      )
    )
  );
};