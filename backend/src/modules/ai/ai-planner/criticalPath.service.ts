import { PlannerTask } from "./aiPlanner.types";

export class CriticalPathService {
  private taskMap = new Map<string, PlannerTask & {
    earliestStart: number;
    earliestFinish: number;
    latestStart: number;
    latestFinish: number;
  }>();

  compute(tasks: PlannerTask[]) {
    // init
    for (const t of tasks) {
      this.taskMap.set(t.id, {
        ...t,
        earliestStart: 0,
        earliestFinish: 0,
        latestStart: Infinity,
        latestFinish: Infinity,
      });
    }

    this.forwardPass(tasks);
    this.backwardPass(tasks);

    return this.taskMap;
  }

  // EARLIEST TIME
  private forwardPass(tasks: PlannerTask[]) {
    for (const task of tasks) {
      const node = this.taskMap.get(task.id)!;

      let maxDepFinish = 0;

      for (const dep of task.dependsOn ?? []) {
        const depNode = this.taskMap.get(dep);
        if (depNode) {
          maxDepFinish = Math.max(
            maxDepFinish,
            depNode.earliestFinish
          );
        }
      }

      node.earliestStart = maxDepFinish;
      node.earliestFinish =
        maxDepFinish + task.durationHours;
    }
  }

  // LATEST TIME
  private backwardPass(tasks: PlannerTask[]) {
    const reversed = [...tasks].reverse();

    let maxFinish = Math.max(
      ...Array.from(this.taskMap.values()).map(
        t => t.earliestFinish
      )
    );

    for (const task of reversed) {
      const node = this.taskMap.get(task.id)!;

      if (node.latestFinish === Infinity) {
        node.latestFinish = maxFinish;
      }

      node.latestStart =
        node.latestFinish - (task.durationHours / 8);

      for (const dep of task.dependsOn ?? []) {
        const depNode = this.taskMap.get(dep);
        if (depNode) {
          depNode.latestFinish = Math.min(
            depNode.latestFinish,
            node.latestStart
          );
        }
      }
    }
  }
}