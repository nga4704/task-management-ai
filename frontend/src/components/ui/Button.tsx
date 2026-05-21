type ButtonProps = {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

function Button({
  title,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        w-full
        bg-primary
        hover:opacity-90
        transition
        rounded-2xl
        py-3
        font-semibold
        text-black
      "
    >
      {title}
    </button>
  );
}

export default Button;