function SecurityCard() {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        p-6
        shadow-soft
      "
    >
      <h2 className="text-2xl font-bold">
        Security
      </h2>

      <div className="mt-6 space-y-4">

        <button
          className="
            w-full
            bg-[#F7F7F7]
            rounded-[20px]
            p-4
            text-left
          "
        >
          Change Password
        </button>

        <button
          className="
            w-full
            bg-[#F7F7F7]
            rounded-[20px]
            p-4
            text-left
          "
        >
          Enable 2FA
        </button>

        <button
          className="
            w-full
            bg-[#F7F7F7]
            rounded-[20px]
            p-4
            text-left
          "
        >
          Active Sessions
        </button>

      </div>
    </div>
  );
}

export default SecurityCard;