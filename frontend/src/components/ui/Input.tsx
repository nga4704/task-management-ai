type InputProps = {
  placeholder: string;
  type?: string;
};

function Input({
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
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