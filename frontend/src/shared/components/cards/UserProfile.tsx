type Props = {
  collapsed?: boolean;
  compact?: boolean;
};

function UserProfile({
  collapsed,
  compact,
}: Props) {
  return (
    <button
      className={`
        flex
        items-center

        gap-2
        md:gap-3

        rounded-2xl

        border
        border-border

        bg-surface

        shadow-soft

        transition-all
        duration-200

        hover:bg-surfaceSecondary

        ${
          compact
            ? "px-2 py-2 md:px-3"
            : "p-2 md:p-3"
        }
      `}
    >
      {/* AVATAR */}
      <div
        className={`
          flex
          shrink-0
          items-center
          justify-center

          rounded-xl

          bg-primary

          font-bold

          ${
            compact
              ? `
                h-8
                w-8
                text-xs

                md:h-9
                md:w-9
              `
              : `
                h-9
                w-9

                md:h-11
                md:w-11
              `
          }
        `}
      >
        N
      </div>

      {/* INFO */}
      {!collapsed && (
        <div
          className="
            min-w-0

            hidden
            md:block

            text-left
          "
        >
          <h4
            className="
              truncate
              text-sm
              font-semibold
            "
          >
            Nga
          </h4>

          <p
            className="
              truncate
              text-xs
              text-muted
            "
          >
            Fullstack Developer
          </p>
        </div>
      )}
    </button>
  );
}

export default UserProfile;