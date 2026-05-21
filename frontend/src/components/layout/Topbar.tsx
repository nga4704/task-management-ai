function Topbar() {
  return (
    <header
      className="
        bg-white
        rounded-[28px]
        p-5
        flex
        items-center
        justify-between
        shadow-soft
      "
    >
      <div>
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500 mt-1">
          Manage your projects efficiently
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div
          className="
            w-11
            h-11
            rounded-full
            bg-primary
          "
        />

        <div>
          <h4 className="font-semibold">
            Nga
          </h4>

          <p className="text-sm text-gray-500">
            Software Engineer
          </p>
        </div>
      </div>
    </header>
  );
}

export default Topbar;