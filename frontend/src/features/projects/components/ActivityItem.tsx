

type Props = {
  type: string;
  createdAt: string;
  actorId: string;
  payload?: any;
};

function ActivityItem({ type, createdAt, actorId }: Props) {
  return (
    <div className="flex gap-4">
      
      {/* avatar */}
      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-semibold">
        {actorId?.slice(0, 1).toUpperCase()}
      </div>

      {/* content */}
      <div className="flex-1 bg-surfaceSecondary p-4 rounded-xl">
        <p className="font-medium">
          <span className="font-bold">{actorId}</span>{" "}
          {formatActivity(type)}
        </p>

        <p className="text-xs text-gray-500 mt-2">
          {new Date(createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

function formatActivity(type: string) {
  switch (type) {
    case "PROJECT_CREATED":
      return "created this project";
    case "PROJECT_UPDATED":
      return "updated this project";
    case "TASK_CREATED":
      return "created a task";
    case "TASK_UPDATED":
      return "updated a task";
    default:
      return type;
  }
}

export default ActivityItem;