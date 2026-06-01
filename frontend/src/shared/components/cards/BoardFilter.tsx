import {
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

function BoardFilter() {
  return (
    <div
      className="
        bg-white/80
        backdrop-blur-md
        border
        border-white/50
        rounded-[32px]
        p-5
        shadow-soft
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
            bg-surface-secondary
            px-4
            py-3
            rounded-2xl
            w-full
            xl:max-w-md
          "
        >
          <Search
            size={18}
            className="text-muted"
          />

          <input
            type="text"
            placeholder="Search tasks, projects..."
            className="
              bg-transparent
              outline-none
              w-full
            "
          />
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3">

          <button
            className="
              bg-primaryLight
              px-4
              py-2.5
              rounded-2xl
              font-medium
            "
          >
            All Tasks
          </button>

          <button
            className="
              bg-dangerLight
              text-danger
              px-4
              py-2.5
              rounded-2xl
              font-medium
            "
          >
            High Priority
          </button>

          <button
            className="
              bg-infoLight
              text-info
              px-4
              py-2.5
              rounded-2xl
              font-medium
              flex
              items-center
              gap-2
            "
          >
            <Sparkles size={16} />

            AI Suggested
          </button>

          <button
            className="
              bg-white
              border
              border-border
              px-4
              py-2.5
              rounded-2xl
              font-medium
              flex
              items-center
              gap-2
            "
          >
            <SlidersHorizontal size={16} />

            Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoardFilter;