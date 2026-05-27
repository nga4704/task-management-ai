// src/features/settings/components/NotificationSection.tsx

import SettingSwitch from "./SettingSwitch";

function NotificationSection() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <div>
        <h2
          className="
            text-2xl
            font-bold
          "
        >
          Notifications
        </h2>

        <p className="mt-1 text-muted">
          Configure notification preferences
        </p>
      </div>

      <div className="mt-6 space-y-4">

        <SettingSwitch
          title="AI Productivity Alerts"
          description="Receive AI-generated workload insights"
          enabled={true}
        />

        <SettingSwitch
          title="Task Updates"
          description="Get notified when task status changes"
          enabled={true}
        />

        <SettingSwitch
          title="Sprint Warnings"
          description="Receive sprint delay risk alerts"
          enabled={false}
        />
      </div>
    </section>
  );
}

export default NotificationSection;