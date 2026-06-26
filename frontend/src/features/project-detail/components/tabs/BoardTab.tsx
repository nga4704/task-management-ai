import { useState } from "react";

import type {
  TaskPriority,
  TaskStatus,
} from "@/features/tasks/types/task.types";

import ProjectTaskToolbar from "../board/ProjectTaskToolbar";
import KanbanBoard from "../board/KanbanBoard";
import {useTeamMembers} from "@/features/teams/hooks/useTeamMembers";

type FilterStatus =
  | TaskStatus
  | "all"
  | "overdue";

type FilterPriority =
  | TaskPriority
  | "all";

type Props = {
  projectId?: string;
  teamId?: string;
  scope: "project";
};

function BoardTab({
  projectId,
  teamId,
}: Props) {
  const [filters, setFilters] =
    useState({
      search: "",

      status:
        "all" as FilterStatus,

      priority:
        "all" as FilterPriority,

      assignee: "all",

      aiRisk: false,
    });

  /**
   * TODO:
   * Replace bằng hook lấy member của project/team
   */
const { data: members = [] } = useTeamMembers(teamId!);

const assignees = members.map((m: any) => ({
  id: m.user_id,
  name:
    m.users?.full_name ??
    m.users?.email ??
    "Unknown",
}));

  const mapStatus = (
    status: FilterStatus
  ): TaskStatus | undefined => {
    if (
      status === "all" ||
      status === "overdue"
    ) {
      return undefined;
    }

    return status;
  };

  const mapPriority = (
    priority: FilterPriority
  ):
    | TaskPriority
    | undefined => {
    if (
      priority === "all"
    ) {
      return undefined;
    }

    return priority;
  };

  return (
    <div className="space-y-6">
      <ProjectTaskToolbar
        filters={filters}
        assignees={
          assignees
        }
        onChange={
          setFilters
        }
      />

      {projectId && (
        <KanbanBoard
          projectId={
            projectId
          }
          scope="project"
          filters={{
            search:
              filters.search,

            status:
              mapStatus(
                filters.status
              ),

            priority:
              mapPriority(
                filters.priority
              ),

            assignee:
              filters.assignee ===
              "all"
                ? undefined
                : filters.assignee,

            aiRisk:
              filters.aiRisk,
          }}
        />
      )}
    </div>
  );
}

export default BoardTab;