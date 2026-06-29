import { Search } from "lucide-react";

export type FilterType =
  | "all"
  | "unread"
  | "ai"
  | "task"
  | "warning";

export type NotificationFilterState = {
  search: string;
  type: FilterType;
};

type Props = {
  filter: NotificationFilterState;
  setFilter: (filter: NotificationFilterState) => void;
};

function NotificationFilter({ filter, setFilter }: Props) {
  const tags: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Unread", value: "unread" },
    // { label: "AI", value: "ai" },
    // { label: "Tasks", value: "task" },
    // { label: "Warnings", value: "warning" },
  ];

  return (
    <div className="flex flex-col gap-3">

      {/* SEARCH */}
      <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-2">
        <Search size={16} />

        <input
          value={filter.search}
          onChange={(e) =>
            setFilter({
              ...filter,
              search: e.target.value,
            })
          }
          placeholder="Search notifications..."
          className="w-full bg-transparent outline-none text-sm"
        />
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag.value}
            onClick={() =>
              setFilter({
                ...filter,
                type: tag.value,
              })
            }
            className={`
              rounded-2xl px-4 py-2 text-sm font-medium border transition
              ${
                filter.type === tag.value
                  ? "bg-primary text-white border-primary"
                  : "bg-surface border-border"
              }
            `}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NotificationFilter;