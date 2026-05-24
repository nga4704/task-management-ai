type ButtonProps = {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

function Button({
  title,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        bg-primary
        hover:opacity-90
        transition
        rounded-2xl
        py-3
        font-semibold
        text-black
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    >
      {title}
    </button>
  );
}

export default Button;