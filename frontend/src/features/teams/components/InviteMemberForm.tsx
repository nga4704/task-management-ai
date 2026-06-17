import {
  useState,
} from "react";

interface Props {
  onInvite: (
    email: string
  ) => void;
}

function InviteMemberForm({
  onInvite,
}: Props) {

  const [email,
    setEmail]
    = useState("");

  return (
    <div
      className="
        flex
        gap-3
      "
    >
      <input
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
        placeholder="user@email.com"
        className="
          flex-1
          rounded-2xl
          border
          border-border
          px-4
          py-3
        "
      />

      <button
        onClick={() => {

          onInvite(email);

          setEmail("");
        }}
        className="
          rounded-2xl
          bg-black
          px-5
          py-3
          text-white
        "
      >
        Invite
      </button>
    </div>
  );
}

export default InviteMemberForm;