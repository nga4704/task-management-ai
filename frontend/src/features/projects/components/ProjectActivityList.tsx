import { useProjectActivities } from "../hooks/useProjectActivities";
import ActivityItem from "./ActivityItem";

type Props = {
  projectId: string;
};

function ProjectActivityList({ projectId }: Props) {
  const { data, isLoading } = useProjectActivities(projectId);

  if (isLoading) {
    return <div>Loading activities...</div>;
  }

  const activities = data?.data || data;

  if (!activities?.length) {
    return (
      <div className="text-sm text-gray-500">
        No activities yet
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {activities.map((act: any) => (
        <ActivityItem
          key={act.id}
          type={act.type}
          createdAt={act.created_at}
          actorId={act.actor_id}
          payload={act.payload}
        />
      ))}
    </div>
  );
}

export default ProjectActivityList;