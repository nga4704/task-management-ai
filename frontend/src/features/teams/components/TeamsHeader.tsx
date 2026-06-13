interface Props {
  onCreateTeam: () => void;
}

function TeamsHeader({
  onCreateTeam,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
      "
    >
      <div>
        <h1 className="text-3xl font-bold">
          Teams
        </h1>

        <p className="text-muted">
          Manage your collaboration workspaces
        </p>
      </div>

      <button
        onClick={onCreateTeam}
        className="
          rounded-2xl
          bg-black
          px-5
          py-3
          text-white
        "
      >
        Create Team
      </button>
    </div>
  );
}

export default TeamsHeader;