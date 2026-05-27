// src/features/settings/components/AISettingsSection.tsx

import SettingSwitch from "./SettingSwitch";

function AISettingsSection() {
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
          AI Preferences
        </h2>

        <p className="mt-1 text-muted">
          Customize AI productivity features
        </p>
      </div>

      <div className="mt-6 space-y-4">

        <SettingSwitch
          title="AI Task Suggestions"
          description="Enable intelligent task prioritization"
          enabled={true}
        />

        <SettingSwitch
          title="Predictive Analytics"
          description="Use AI to forecast sprint performance"
          enabled={true}
        />

        <SettingSwitch
          title="Smart Calendar Planning"
          description="Allow AI to optimize schedules"
          enabled={false}
        />
      </div>
    </section>
  );
}

export default AISettingsSection;