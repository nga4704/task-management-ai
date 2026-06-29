function SettingsHeader() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-border/40
        bg-primaryLight
        p-10
      "
    >

      <div className="relative max-w-[720px]">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-white/60 px-4 py-1 text-xs font-medium text-muted backdrop-blur">
          Workspace Settings
        </div>

        <h1
          className="
            text-2xl
            md:text-4xl
            font-semibold
            tracking-tight
            text-foreground
            leading-[1.1]
          "
        >
          Personalize your
          <span className="text-white"> AI workspace</span>
        </h1>

        <p
          className="
            mt-5
            text-base
            md:text-md
            leading-7
            text-muted
            max-w-[600px]
          "
        >
          Fine-tune notifications, AI behavior, appearance, and security preferences
          to match your team workflow and productivity style.
        </p>

        {/* optional hint row */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted">
          <span className="rounded-full border border-border px-3 py-1 bg-white">
            Notifications
          </span>
          <span className="rounded-full border border-border px-3 py-1 bg-white">
            AI Settings
          </span>
          <span className="rounded-full border border-border px-3 py-1 bg-white">
            Appearance
          </span>
          <span className="rounded-full border border-border px-3 py-1 bg-white">
            Security
          </span>
        </div>
      </div>
    </section>
  );
}

export default SettingsHeader;