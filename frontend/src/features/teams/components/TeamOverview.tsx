import type {
  TeamDetail,
} from "../types/team.types";

interface Props {
  team: TeamDetail;
}

function TeamOverview({
  team,
}: Props) {

  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-3
      "
    >
      <div
        className="
          rounded-2xl
          border
          p-6
        "
      >
        <h3>
          Members
        </h3>

        <p
          className="
            mt-2
            text-3xl
            font-bold
          "
        >
          {
            team
            .team_members
            .length
          }
        </p>
      </div>

      <div
        className="
          rounded-2xl
          border
          p-6
        "
      >
        <h3>
          Projects
        </h3>

        <p
          className="
            mt-2
            text-3xl
            font-bold
          "
        >
          0
        </p>
      </div>

      <div
        className="
          rounded-2xl
          border
          p-6
        "
      >
        <h3>
          Tasks
        </h3>

        <p
          className="
            mt-2
            text-3xl
            font-bold
          "
        >
          0
        </p>
      </div>
    </div>
  );
}

export default TeamOverview;