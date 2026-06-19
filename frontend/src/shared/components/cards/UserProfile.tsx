import { useAuthStore } from "@/store/authStore";

type Props = {
  collapsed?: boolean;
  compact?: boolean;
};

function UserProfile({ collapsed, compact }: Props) {
  const user = useAuthStore((state) => state.user);

  const displayName =
    user?.full_name ||
    user?.username ||
    "Unknown User";

  const email = user?.email || "";

  const getInitial = () => {
    if (user?.full_name) return user.full_name[0];
    if (user?.username) return user.username[0];
    if (user?.email) return user.email[0];
    return "U";
  };

  return (
    <button
      className={`
        flex items-center gap-2 md:gap-3
        rounded-2xl border border-border
        bg-surface shadow-soft
        hover:bg-surfaceSecondary
        transition-all duration-200
        ${compact ? "px-2 py-2 md:px-3" : "p-2 md:p-3"}
      `}
    >
      {/* AVATAR */}
      <div
        className={`
          flex shrink-0 items-center justify-center
          rounded-xl bg-primary font-bold text-black
          ${
            compact
              ? "h-8 w-8 text-xs md:h-9 md:w-9"
              : "h-9 w-9 md:h-11 md:w-11"
          }
        `}
      >
        {getInitial()}
      </div>

      {/* INFO */}
      {!collapsed && (
        <div className="min-w-0 hidden md:block text-left">
          <h4 className="truncate text-sm font-semibold">
            {displayName}
          </h4>

          <p className="truncate text-xs text-muted">
            {email}
          </p>
        </div>
      )}
    </button>
  );
}

export default UserProfile;