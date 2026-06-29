import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMarkAsRead } from "../hooks/useMarkAsRead";

type Props = {
  id: string;
  title: string;
  message: string | null;
  is_read: boolean;
  created_at: string;
  project_id?: string;
};

function NotificationCard({
  id,
  title,
  message,
  is_read,
  created_at,
  project_id,
}: Props) {
  const navigate = useNavigate();
  const { mutate: markAsRead } = useMarkAsRead();

  const handleClick = async () => {
    if (!is_read) {
      markAsRead(id);
    }

    if (project_id) {
      navigate(`/projects/${project_id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        cursor-pointer
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
        transition-all
        ${!is_read ? "shadow-soft" : ""}
      `}
    >
      <div className="flex gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primaryLight">
          <Bell size={20} />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>

              {message && (
                <p className="mt-2 leading-7 text-muted">
                  {message}
                </p>
              )}
            </div>

            {!is_read && (
              <div className="h-3 w-3 rounded-full bg-primary mt-2" />
            )}
          </div>

          <p className="mt-4 text-sm text-muted">
            {new Date(created_at).toLocaleString("vi-VN")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;