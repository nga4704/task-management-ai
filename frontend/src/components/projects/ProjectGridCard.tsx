import TeamAvatarGroup from "./TeamAvatarGroup";

type ProjectGridCardProps = {
  title: string;
  description: string;
  progress: number;
};

function ProjectGridCard({
  title,
  description,
  progress,
}: ProjectGridCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        p-6
        shadow-soft
      "
    >
      <div className="flex justify-between items-start">
        <span
          className="
            bg-primary
            px-3
            py-1
            rounded-full
            text-sm
          "
        >
          Active
        </span>

        <button className="text-gray-400">
          •••
        </button>
      </div>

      <h2 className="text-2xl font-bold mt-6">
        {title}
      </h2>

      <p className="text-gray-500 mt-4 leading-relaxed">
        {description}
      </p>

      <div className="mt-6">
        <div className="flex justify-between mb-3">
          <span className="text-sm text-gray-500">
            Progress
          </span>

          <span className="text-sm font-medium">
            {progress}%
          </span>
        </div>

        <div
          className="
            h-3
            bg-gray-100
            rounded-full
            overflow-hidden
          "
        >
          <div
            className="
              h-full
              bg-primary
              rounded-full
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <TeamAvatarGroup />

        <p className="text-sm text-gray-500">
          Due Jun 12
        </p>
      </div>
    </div>
  );
}

export default ProjectGridCard;