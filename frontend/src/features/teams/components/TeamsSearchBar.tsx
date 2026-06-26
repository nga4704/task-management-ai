import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function TeamsSearchBar({ value, onChange }: Props) {
  return (
    <div
      className="
        flex
        items-center
        gap-3

        w-full
        xl:max-w-md

        rounded-2xl
        border
        border-border
        bg-surface

        px-4
        py-3

        transition
        focus-within:ring-2
        focus-within:ring-black/5
        focus-within:border-primary
      "
    >
      <Search size={18} className="text-muted" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search teams by name..."
        className="
          w-full
          bg-transparent
          outline-none
          text-sm
          text-text
        "
      />
    </div>
  );
}

export default TeamsSearchBar;