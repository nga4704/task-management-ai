// src/features/notifications/components/NotificationHeader.tsx

import { Sparkles } from "lucide-react";

function NotificationHeader() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-primaryLight
        p-8
        sm:p-10
      "
    >
      {/* decorative blur */}
      {/* <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-primary/10 blur-2xl" /> */}

      <div className="relative max-w-2xl">
        {/* badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-medium text-white backdrop-blur">
          <Sparkles size={14} />
          AI-Powered Notification System
        </div>

        {/* title */}
        <h1 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
          Smart Notifications
          <span className="text-white"> powered by AI</span>
        </h1>

        {/* description */}
        <p className="mt-4 text-base leading-7 text-muted sm:text-md">
          Track AI insights, workload risks, sprint updates, and team activity
          in real time — all in one intelligent feed.
        </p>

        {/* subtle stats hint */}
        <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted">
          <span className="rounded-full bg-surface px-3 py-1">
            Real-time updates
          </span>
          <span className="rounded-full bg-surface px-3 py-1">
            AI risk detection
          </span>
          <span className="rounded-full bg-surface px-3 py-1">
            Team activity tracking
          </span>
        </div>
      </div>
    </section>
  );
}

export default NotificationHeader;