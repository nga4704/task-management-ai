
import type {
  ChangeEvent,
  InputHTMLAttributes,
} from "react";

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
  ...props
}: InputProps) {

  // fallback id
  const inputId =
    id || name;

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

      <input
        id={inputId}
        name={name}
        className={`
          w-full
          h-[56px]
          px-4
          rounded-2xl

          bg-surface-secondary

          border
          border-border

          outline-none

          focus:border-primary
          focus:bg-white
          focus:ring-2
          focus:ring-primary/20

          transition-all

          disabled:opacity-50
          disabled:cursor-not-allowed

          ${error
            ? "border-red-400"
            : ""
          }

          ${className}
        `}
        {...props}
      />

      {error && (
        <p
          className="
            text-sm
            text-red-500
          "
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;

