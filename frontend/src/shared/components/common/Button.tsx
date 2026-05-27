import type { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "dark"
  | "ghost";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    variant?: ButtonVariant;
    fullWidth?: boolean;
  };

const variants = {
  primary: `
    bg-primary
    text-black
    hover:opacity-90
  `,

  secondary: `
    bg-white
    border
    border-border
    hover:bg-surface-secondary
  `,

  dark: `
    bg-black
    text-white
    hover:opacity-90
  `,

  ghost: `
    hover:bg-surface-secondary
  `,
};

function Button({
  title,
  variant = "primary",
  fullWidth = true,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        h-[54px]
        px-5
        rounded-2xl
        font-semibold
        transition-all
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed

        ${fullWidth ? "w-full" : ""}

        ${variants[variant]}

        ${className}
      `}
      {...props}
    >
      {title}
    </button>
  );
}

export default Button;