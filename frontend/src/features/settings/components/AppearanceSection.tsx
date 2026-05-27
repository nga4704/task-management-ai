// src/features/settings/components/AppearanceSection.tsx

function AppearanceSection() {
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
          Appearance
        </h2>

        <p className="mt-1 text-muted">
          Customize workspace appearance
        </p>
      </div>

      <div className="mt-6 flex gap-4">

        <button
          className="
            rounded-2xl
            border-2
            border-primary
            bg-white
            p-5
            font-medium
          "
        >
          Light Mode
        </button>

        <button
          className="
            rounded-2xl
            border
            border-border
            bg-surfaceSecondary
            p-5
            font-medium
          "
        >
          Dark Mode
        </button>
      </div>
    </section>
  );
}

export default AppearanceSection;