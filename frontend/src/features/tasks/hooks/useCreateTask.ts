import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export function useCreateTask(projectId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: any) => {
      const { data, error } = await supabase
        .from("tasks")
        .insert(payload)
        .select()
        .single();

      if (error) throw error;
      return data;
    },

    // ⚡ OPTIMISTIC UPDATE
    onMutate: async (newTask) => {
      await queryClient.cancelQueries({
        queryKey: ["tasks", projectId],
      });

      const prev = queryClient.getQueryData([
        "tasks",
        projectId,
      ]);

      queryClient.setQueryData(
        ["tasks", projectId],
        (old: any = []) => [
          ...old,
          {
            id: "temp-" + Date.now(),
            ...newTask,
          },
        ]
      );

      return { prev };
    },

    onError: (_err, _newTask, context) => {
      queryClient.setQueryData(
        ["tasks", projectId],
        context?.prev
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks", projectId],
      });
    },
  });
}