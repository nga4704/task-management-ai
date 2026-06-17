import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
} from "react";

import {
  Eye,
  EyeOff,
} from "lucide-react";

type InputProps =
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    onChange?: (
      e: ChangeEvent<HTMLInputElement>
    ) => void;
  };

function Input({
  label,
  error,
  className = "",
  id,
  name,
  type,
  ...props
}: InputProps) {

  const inputId =
    id || name;

  const [showPassword,
    setShowPassword]
    = useState(false);

  const isPassword =
    type === "password";

  return (
    <div className="space-y-2">

      {label && (
        <label
          htmlFor={inputId}
          className="
            text-sm
            font-semibold
          "
        >
          {label}
        </label>
      )}

      <div className="relative">

        <input
          id={inputId}
          name={name}
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          className={`
            w-full
            h-[56px]

            rounded-2xl

            bg-surfaceSecondary

            border
            border-border

            outline-none

            transition-all

            focus:border-primary
            focus:bg-white
            focus:ring-2
            focus:ring-primary/20

            disabled:opacity-50
            disabled:cursor-not-allowed

            ${
              isPassword
                ? "pl-4 pr-12"
                : "px-4"
            }

            ${
              error
                ? "border-danger"
                : ""
            }

            ${className}
          `}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2

              text-muted

              hover:text-text
            "
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}

      </div>

      {error && (
        <p
          className="
            text-sm
            text-danger
          "
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;