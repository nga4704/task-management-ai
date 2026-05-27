// src/features/settings/components/SettingsSidebar.tsx

const items = [
  "Account",
  "Notifications",
  "AI Preferences",
  "Appearance",
  "Security",
];

function SettingsSidebar() {
  return (
    <aside
      className="
        rounded-3xl
        border
        border-border
        bg-surface
        p-4
        shadow-soft
      "
    >
      <div className="space-y-2">

        {items.map((item) => (
          <button
            key={item}
            className={`
              flex
              w-full
              items-center
              rounded-2xl
              px-4
              py-3
              text-left
              font-medium
              transition-all

              ${
                item === "Account"
                  ? `
                    bg-primary
                    text-black
                  `
                  : `
                    hover:bg-surfaceSecondary
                  `
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default SettingsSidebar;