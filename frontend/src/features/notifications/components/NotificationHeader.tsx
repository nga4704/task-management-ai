// src/features/notifications/components/NotificationHeader.tsx

function NotificationHeader() {
  return (
    <section
      className="
        rounded-3xl
        bg-primaryLight
        p-8
      "
    >
      <div className="max-w-[700px]">

        <h1
          className="
            text-5xl
            font-bold
            leading-tight
          "
        >
          Smart Notifications
          powered by AI.
        </h1>

        <p
          className="
            mt-5
            text-lg
            leading-8
            text-black/70
          "
        >
          Stay updated with AI-generated
          alerts, workload risks,
          sprint updates and team activities.
        </p>
      </div>
    </section>
  );
}

export default NotificationHeader;