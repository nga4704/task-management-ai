import MainLayout from "../../layouts/MainLayout";

import SettingsHeader from "../../components/settings/SettingsHeader";
import ProfileCard from "../../components/settings/ProfileCard";
import SettingsToggle from "../../components/settings/SettingsToggle";
import AISettingsCard from "../../components/settings/AISettingsCard";
import SecurityCard from "../../components/settings/SecurityCard";

function SettingsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">

        <SettingsHeader />

        <div className="grid grid-cols-12 gap-6">

          {/* Left */}
          <div className="col-span-12 xl:col-span-4 space-y-6">

            <ProfileCard />

            <AISettingsCard />

          </div>

          {/* Right */}
          <div className="col-span-12 xl:col-span-8 space-y-6">

            <div
              className="
                bg-white
                rounded-[28px]
                p-6
                shadow-soft
              "
            >
              <h2 className="text-2xl font-bold">
                Preferences
              </h2>

              <div className="mt-6 space-y-4">

                <SettingsToggle
                  title="Smart Notifications"
                  description="
                  Receive AI-powered reminders and alerts.
                  "
                />

                <SettingsToggle
                  title="Auto Smart Scheduling"
                  description="
                  Allow AI to optimize task schedules automatically.
                  "
                />

                <SettingsToggle
                  title="Productivity Insights"
                  description="
                  Enable AI productivity analytics and predictions.
                  "
                />

              </div>
            </div>

            <SecurityCard />

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default SettingsPage;