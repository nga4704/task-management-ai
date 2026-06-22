import { useState } from "react";
import type { KeyboardEvent } from "react";

interface Props {
  onInvite: (
    email: string
  ) => void;
}

function InviteMemberForm({
  onInvite,
}: Props) {

  const [email, setEmail] =
    useState("");

  const handleSubmit = () => {

    const value =
      email.trim();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      alert("Invalid email");
      return;
    }

    onInvite(value);

    setEmail("");
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>
  ) => {

    if (e.key === "Enter") {
      e.preventDefault();

      handleSubmit();
    }
  };

  const isDisabled =
    email.trim().length === 0;

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
        onKeyDown={
          handleKeyDown
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
        onClick={
          handleSubmit
        }
        disabled={
          isDisabled
        }
        className="
          rounded-2xl
          bg-black
          px-5
          py-3
          text-white

          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        Invite
      </button>
    </div>
  );
}

export default InviteMemberForm;