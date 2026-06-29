import { useThemeStore } from "@/store/themeStore";

function AppearanceSection() {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  return (
    <section className="rounded-3xl border border-border dark:border-borderDark bg-surface dark:bg-surfaceDark p-6 shadow-soft">

      <div>
        <h2 className="text-2xl font-bold">
          Appearance
        </h2>

        <p className="mt-1 text-muted">
          Customize workspace appearance
        </p>
      </div>

      <div className="mt-6 flex gap-4">

        {/* LIGHT */}
        <button
          onClick={() => setTheme("light")}
          className={`
            rounded-2xl border-2 p-5 font-medium transition
            ${
              theme === "light"
                ? "border-primary bg-surface"
                : "border-border bg-surfaceSecondary"
            }
          `}
        >
          Light Mode
        </button>

        {/* DARK */}
        <button
          onClick={() => setTheme("dark")}
          className={`
            rounded-2xl border-2 p-5 font-medium transition
            ${
              theme === "dark"
                ? "border-primary bg-surfaceSecondary"
                : "border-border bg-surfaceSecondary"
            }
          `}
        >
          Dark Mode
        </button>

      </div>
    </section>
  );
}

export default AppearanceSection;