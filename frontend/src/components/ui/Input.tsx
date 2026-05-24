import type { ChangeEvent } from "react";

type InputProps = {
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
};

function Input({
  placeholder,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        bg-[#F7F7F7]
        border
        border-gray-200
        rounded-2xl
        px-4
        py-3
        outline-none
        focus:border-primary
      "
    />
  );
}

export default Input;