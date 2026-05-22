type SettingsToggleProps = {
  title: string;
  description: string;
};

function SettingsToggle({
  title,
  description,
}: SettingsToggleProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        bg-[#F7F7F7]
        rounded-[22px]
        p-5
      "
    >
      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          {description}
        </p>
      </div>

      <button
        className="
          w-14
          h-8
          rounded-full
          bg-primary
          relative
        "
      >
        <div
          className="
            absolute
            top-1
            right-1
            w-6
            h-6
            rounded-full
            bg-white
          "
        />
      </button>
    </div>
  );
}

export default SettingsToggle;