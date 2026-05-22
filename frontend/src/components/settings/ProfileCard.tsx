function ProfileCard() {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        p-6
        shadow-soft
      "
    >
      <div className="flex items-center gap-5">
        <div
          className="
            w-20
            h-20
            rounded-full
            bg-primary
          "
        />

        <div>
          <h2 className="text-2xl font-bold">
            Ha Thi Thuy Nga
          </h2>

          <p className="text-gray-500 mt-2">
            Fullstack Developer
          </p>
        </div>
      </div>

      <button
        className="
          mt-6
          bg-black
          text-white
          px-5
          py-3
          rounded-full
        "
      >
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileCard;