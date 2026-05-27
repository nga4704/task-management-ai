// src/features/settings/components/SettingSwitch.tsx

import type {
  SettingSwitchProps,
} from "../types/settings.types";

function SettingSwitch({
  title,
  description,
  enabled,
}: SettingSwitchProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-6
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
      "
    >
      <div>
        <h3
          className="
            text-lg
            font-semibold
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            text-sm
            leading-6
            text-muted
          "
        >
          {description}
        </p>
      </div>

      <button
        className={`
          relative
          h-7
          w-14
          rounded-full
          transition-all

          ${
            enabled
              ? "bg-primary"
              : "bg-surfaceSecondary"
          }
        `}
      >
        <div
          className={`
            absolute
            top-1
            h-5
            w-5
            rounded-full
            bg-white
            transition-all

            ${
              enabled
                ? "left-8"
                : "left-1"
            }
          `}
        />
      </button>
    </div>
  );
}

export default SettingSwitch;