import {
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

interface Props {
  search: string;
  onSearchChange: (v: string) => void;

  filter: "all" | "high" | "ai";
  onFilterChange: (v: "all" | "high" | "ai") => void;
}

function BoardFilter({
  search,
  onSearchChange,
  filter,
  onFilterChange,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-surface
        p-5
        shadow-sm
      "
    >
      <div
        className="
          flex
          flex-col
          xl:flex-row
          xl:items-center
          gap-4
          justify-between
        "
      >

        {/* SEARCH */}
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
            bg-white

            px-4
            py-3

            focus-within:ring-2
            focus-within:ring-black/5
            transition
          "
        >
          <Search size={18} className="text-muted" />

          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects..."
            className="
              w-full
              bg-transparent
              outline-none
              text-sm
            "
          />
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2">

          {/* ALL */}
          <button
            onClick={() => onFilterChange("all")}
            className={
              filter === "all"
                ? `
                  rounded-full
                  px-4 py-2
                  text-sm font-medium
                  bg-black
                  text-white
                  transition
                `
                : `
                  rounded-full
                  px-4 py-2
                  text-sm font-medium
                  border border-border
                  bg-white
                  hover:bg-muted/10
                  transition
                `
            }
          >
            All
          </button>

          {/* HIGH PRIORITY */}
          <button
            onClick={() => onFilterChange("high")}
            className={
              filter === "high"
                ? `
                  rounded-full
                  px-4 py-2
                  text-sm font-medium
                  bg-black
                  text-white
                  transition
                `
                : `
                  rounded-full
                  px-4 py-2
                  text-sm font-medium
                  border border-border
                  bg-white
                  hover:bg-muted/10
                  transition
                `
            }
          >
            High Priority
          </button>

          {/* AI */}
          <button
            onClick={() => onFilterChange("ai")}
            className={
              filter === "ai"
                ? `
                  rounded-full
                  px-4 py-2
                  text-sm font-medium
                  bg-black
                  text-white
                  transition
                  flex items-center gap-2
                `
                : `
                  rounded-full
                  px-4 py-2
                  text-sm font-medium
                  border border-border
                  bg-white
                  hover:bg-muted/10
                  transition
                  flex items-center gap-2
                `
            }
          >
            <Sparkles size={14} />
            AI Suggested
          </button>

          {/* FILTER ICON BUTTON */}
          <button
            className="
              rounded-full
              px-4 py-2
              text-sm font-medium
              border border-border
              bg-white
              hover:bg-muted/10
              transition
              flex items-center gap-2
            "
          >
            <SlidersHorizontal size={14} />
            More
          </button>

        </div>
      </div>
    </div>
  );
}

export default BoardFilter;