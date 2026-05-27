// src/features/settings/pages/SettingsPage.tsx

import MainLayout from "@/app/layouts/MainLayout";

import AccountSection from "../components/AccountSection";
import AISettingsSection from "../components/AISettingsSection";
import AppearanceSection from "../components/AppearanceSection";
import NotificationSection from "../components/NotificationSection";
import SecuritySection from "../components/SecuritySection";
import SettingsHeader from "../components/SettingsHeader";
import SettingsSidebar from "../components/SettingsSidebar";

function SettingsPage() {
  return (
    <MainLayout
      title="Settings"
      description="Manage workspace preferences"
    >
      <div className="space-y-6">

        <SettingsHeader />

        <div
          className="
            grid
            grid-cols-12
            gap-6
          "
        >
          {/* SIDEBAR */}
          <div className="col-span-12 xl:col-span-3">
            <SettingsSidebar />
          </div>

          {/* CONTENT */}
          <div
            className="
              col-span-12
              space-y-6
              xl:col-span-9
            "
          >
            <AccountSection />

            <NotificationSection />

            <AISettingsSection />

            <AppearanceSection />

            <SecuritySection />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default SettingsPage;