function InviteMemberModal() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-white
        p-6
        shadow-soft
      "
    >
      <h3 className="font-bold">
        Invite Member
      </h3>

      <div className="mt-4 space-y-4">
        <input
          placeholder="Email"
          className="
            h-11
            w-full
            rounded-xl
            border
            border-border
            px-4
          "
        />

        <button
          className="
            rounded-xl
            bg-primary
            px-5
            py-3
            font-medium
          "
        >
          Send Invite
        </button>
      </div>
    </div>
  );
}

export default InviteMemberModal;