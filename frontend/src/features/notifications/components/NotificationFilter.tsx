// src/features/notifications/components/NotificationFilter.tsx

function NotificationFilter() {
  return (
    <div className="flex flex-wrap gap-3">

      <button
        className="
          rounded-2xl
          bg-primary
          px-4
          py-2.5
          font-medium
        "
      >
        All
      </button>

      <button
        className="
          rounded-2xl
          bg-surface
          px-4
          py-2.5
          font-medium
          border
          border-border
        "
      >
        AI
      </button>

      <button
        className="
          rounded-2xl
          bg-surface
          px-4
          py-2.5
          font-medium
          border
          border-border
        "
      >
        Tasks
      </button>

      <button
        className="
          rounded-2xl
          bg-surface
          px-4
          py-2.5
          font-medium
          border
          border-border
        "
      >
        Warnings
      </button>
    </div>
  );
}

export default NotificationFilter;