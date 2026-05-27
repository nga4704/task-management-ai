type NotificationCardProps = {
  title: string;
  description: string;
  time: string;
  unread?: boolean;
};

function NotificationCard({
  title,
  description,
  time,
  unread,
}: NotificationCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-[26px]
        p-5
        shadow-soft
        flex
        justify-between
        gap-5
      "
    >
      <div className="flex gap-4">
        <div
          className="
            w-12
            h-12
            rounded-full
            bg-primary
            shrink-0
          "
        />

        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-lg">
              {title}
            </h3>

            {unread && (
              <span
                className="
                  w-3
                  h-3
                  rounded-full
                  bg-red-500
                "
              />
            )}
          </div>

          <p className="text-gray-500 mt-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <span className="text-sm text-gray-400 shrink-0">
        {time}
      </span>
    </div>
  );
}

export default NotificationCard;