import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { projectApi } from "@/features/projects/api/projectApi";

export function useUpdateProject() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            projectId,
            payload,
        }: {
            projectId: string;
            payload: {
                name: string;
                description: string;
                status: string;
                startDate?: string;
                endDate?: string;
            };
        }) =>
            projectApi.updateProject(
                projectId,
                payload
            ),

        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: [
                    "project-detail",
                    variables.projectId,
                ],
            });

            queryClient.invalidateQueries({
                predicate: (query) =>
                    query.queryKey[0] === "team-projects",
            });
        },
    });
}