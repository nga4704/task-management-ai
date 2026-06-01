import {
  CalendarDays,
  Users,
  FolderKanban,
} from "lucide-react";

type ProjectHeaderProps = {
  name: string;
  description: string;
  progress: number;
  status: string;
};

function ProjectHeader({
  name,
  description,
  progress,
  status,
}: ProjectHeaderProps) {
  return (
    <section
      className="
        rounded-[32px]
        border
        border-border/60
        bg-white/70
        backdrop-blur-md
        p-6
        md:p-8
        shadow-soft
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primaryLight
              px-3
              py-1.5
              text-xs
              font-semibold
            "
          >
            {status.toUpperCase()}
          </div>

          <h1
            className="
              mt-4
              text-3xl
              md:text-4xl
              font-bold
            "
          >
            {name}
          </h1>

          <p
            className="
              mt-3
              max-w-2xl
              text-muted
            "
          >
            {description}
          </p>

          <div className="mt-5">
            <div
              className="
                mb-2
                flex
                justify-between
                text-sm
              "
            >
              <span>Progress</span>
              <span>{progress}%</span>
            </div>

            <div
              className="
                h-3
                rounded-full
                bg-surface-secondary
              "
            >
              <div
                className="
                  h-full
                  rounded-full
                  bg-primary
                "
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="
            flex
            flex-wrap
            gap-4
          "
        >
          <div className="flex items-center gap-2">
            <FolderKanban size={18} />
            124 Tasks
          </div>

          <div className="flex items-center gap-2">
            <Users size={18} />
            12 Members
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={18} />
            Jul 15, 2026
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectHeader;