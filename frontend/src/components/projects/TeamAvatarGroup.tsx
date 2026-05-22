function TeamAvatarGroup() {
  return (
    <div className="flex -space-x-3">
      <div
        className="
          w-10
          h-10
          rounded-full
          bg-primary
          border-4
          border-white
        "
      />

      <div
        className="
          w-10
          h-10
          rounded-full
          bg-secondary
          border-4
          border-white
        "
      />

      <div
        className="
          w-10
          h-10
          rounded-full
          bg-black
          border-4
          border-white
        "
      />
    </div>
  );
}

export default TeamAvatarGroup;