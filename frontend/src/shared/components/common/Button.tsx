
import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "dark"
  | "ghost";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children?: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  loading?: boolean;
}

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
  children,
  variant = "primary",
  fullWidth = true,
  loading = false,
  disabled,
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        flex
        items-center
        justify-center
        gap-2

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
      {loading && (
        <span
          className="
            h-4
            w-4
            animate-spin
            rounded-full
            border-2
            border-current
            border-t-transparent
          "
        />
      )}

      {children || title}
    </button>
  );
}

export default Button;

