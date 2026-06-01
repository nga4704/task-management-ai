import {
  useEffect,
  useState,
} from "react";

import {
  getProjectDetail,
} from "../services/projectDetail.service";

import type {
  ProjectDetail,
} from "../types/projectDetail.types";

export function useProjectDetail() {
  const [project, setProject] =
    useState<ProjectDetail | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getProjectDetail();

        setProject(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    project,
    loading,
  };
}