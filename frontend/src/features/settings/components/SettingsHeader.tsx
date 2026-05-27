// src/features/settings/components/SettingsHeader.tsx

function SettingsHeader() {
  return (
    <section
      className="
        rounded-3xl
        bg-primaryLight
        p-8
      "
    >
      <div className="max-w-[700px]">

        <h1
          className="
            text-5xl
            font-bold
            leading-tight
          "
        >
          Personalize your
          AI productivity workspace.
        </h1>

        <p
          className="
            mt-5
            text-lg
            leading-8
            text-black/70
          "
        >
          Configure notifications,
          AI recommendations,
          appearance and security
          settings for your team workflow.
        </p>
      </div>
    </section>
  );
}

export default SettingsHeader;