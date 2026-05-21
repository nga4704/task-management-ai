type TeamMemberCardProps = {
  name: string;
  role: string;
};

function TeamMemberCard({
  name,
  role,
}: TeamMemberCardProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="
          w-12
          h-12
          rounded-full
          bg-primary
        "
      />

      <div>
        <h4 className="font-semibold">
          {name}
        </h4>

        <p className="text-sm text-gray-500">
          {role}
        </p>
      </div>
    </div>
  );
}

export default TeamMemberCard;