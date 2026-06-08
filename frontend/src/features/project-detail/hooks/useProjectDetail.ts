import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  getProjectDetail,
} from "../services/projectDetail.service";

import type {
  ProjectDetail,
} from "../types/projectDetail.types";

export function useProjectDetail() {

  const { projectId } =
    useParams();

  const [
    project,
    setProject,
  ] =
    useState<ProjectDetail | null>(
      null
    );

  const [
    loading,
    setLoading,
  ] =
    useState(true);

  useEffect(() => {

    async function load() {

      try {

        if (!projectId)
          return;

        const data =
          await getProjectDetail(
            projectId
          );

        setProject(
          data
        );

      } finally {

        setLoading(
          false
        );
      }
    }

    load();

  }, [projectId]);

  return {
    project,
    loading,
  };
}