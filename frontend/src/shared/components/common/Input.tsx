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
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">

      {label && (
        <label
          className="
            text-sm
            font-semibold
          "
        >
          {label}
        </label>
      )}

      <input
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
          transition-all

          ${className}
        `}
        {...props}
      />

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