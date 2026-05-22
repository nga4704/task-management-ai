function NotificationFilter() {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        p-5
        shadow-soft
        flex
        gap-3
        flex-wrap
      "
    >
      <button className="bg-primary px-4 py-2 rounded-full">
        All
      </button>

      <button className="bg-gray-100 px-4 py-2 rounded-full">
        AI Alerts
      </button>

      <button className="bg-gray-100 px-4 py-2 rounded-full">
        Mentions
      </button>

      <button className="bg-gray-100 px-4 py-2 rounded-full">
        Reminders
      </button>
    </div>
  );
}

export default NotificationFilter;