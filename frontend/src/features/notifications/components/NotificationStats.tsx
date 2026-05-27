// src/features/notifications/components/NotificationStats.tsx

function NotificationStats() {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-3
      "
    >
      <div
        className="
          rounded-3xl
          bg-surface
          p-6
          shadow-soft
        "
      >
        <p className="text-muted">
          Total Notifications
        </p>

        <h2
          className="
            mt-3
            text-4xl
            font-bold
          "
        >
          48
        </h2>
      </div>

      <div
        className="
          rounded-3xl
          bg-surface
          p-6
          shadow-soft
        "
      >
        <p className="text-muted">
          AI Alerts
        </p>

        <h2
          className="
            mt-3
            text-4xl
            font-bold
          "
        >
          12
        </h2>
      </div>

      <div
        className="
          rounded-3xl
          bg-surface
          p-6
          shadow-soft
        "
      >
        <p className="text-muted">
          Unread
        </p>

        <h2
          className="
            mt-3
            text-4xl
            font-bold
          "
        >
          7
        </h2>
      </div>
    </section>
  );
}

export default NotificationStats;