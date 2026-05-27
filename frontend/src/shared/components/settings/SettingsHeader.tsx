function SettingsHeader() {
  return (
    <div
      className="
        bg-white
        rounded-[30px]
        p-6
        shadow-soft
      "
    >
      <h1 className="text-4xl font-bold">
        Settings
      </h1>

      <p className="text-gray-500 mt-3">
        Manage account, AI preferences, and workspace settings
      </p>
    </div>
  );
}

export default SettingsHeader;