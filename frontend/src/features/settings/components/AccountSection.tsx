// src/features/settings/components/AccountSection.tsx

import Input from "@/shared/components/common/Input";

function AccountSection() {
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
          Account Information
        </h2>

        <p className="mt-1 text-muted">
          Manage your profile details
        </p>
      </div>

      <div
        className="
          mt-6
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
        "
      >
        <Input
          label="Full Name"
          placeholder="Nga"
        />

        <Input
          label="Email"
          placeholder="nga@gmail.com"
        />

        <Input
          label="Role"
          placeholder="Fullstack Developer"
        />

        <Input
          label="Team"
          placeholder="AI Engineering"
        />
      </div>
    </section>
  );
}

export default AccountSection;