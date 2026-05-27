// src/features/settings/components/SecuritySection.tsx

import Button from "@/shared/components/common/Button";

function SecuritySection() {
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
          Security
        </h2>

        <p className="mt-1 text-muted">
          Manage account security settings
        </p>
      </div>

      <div className="mt-6 space-y-4">

        <Button
          title="Change Password"
          variant="secondary"
          fullWidth={false}
        />

        <Button
          title="Enable Two-Factor Authentication"
          variant="dark"
          fullWidth={false}
        />
      </div>
    </section>
  );
}

export default SecuritySection;