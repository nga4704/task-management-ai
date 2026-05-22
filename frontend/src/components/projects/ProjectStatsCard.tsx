type ProjectStatsCardProps = {
  title: string;
  value: string;
};

function ProjectStatsCard({
  title,
  value,
}: ProjectStatsCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-[24px]
        p-5
        shadow-soft
      "
    >
      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-4">
        {value}
      </h2>
    </div>
  );
}

export default ProjectStatsCard;