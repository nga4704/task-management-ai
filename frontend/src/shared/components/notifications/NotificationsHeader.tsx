function NotificationsHeader() {
  return (
    <div
      className="
        bg-white
        rounded-[30px]
        p-6
        shadow-soft
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-5
      "
    >
      <div>
        <h1 className="text-4xl font-bold">
          Notifications
        </h1>

        <p className="text-gray-500 mt-3">
          Stay updated with tasks, AI alerts, and activities
        </p>
      </div>

      <button
        className="
          bg-primary
          px-5
          py-3
          rounded-full
          font-semibold
        "
      >
        Mark All As Read
      </button>
    </div>
  );
}

export default NotificationsHeader;