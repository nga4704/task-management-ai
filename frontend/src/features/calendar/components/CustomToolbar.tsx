import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function CustomToolbar(toolbar: any) {
  return (
    <div
      className="
        mb-5
        flex
        items-center
        justify-between
      "
    >
      <h2
        className="
          text-2xl
          font-bold
        "
      >
        {toolbar.label}
      </h2>

      <div className="flex gap-3">
        <button
          onClick={() =>
            toolbar.onNavigate("PREV")
          }
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-border
            bg-surface
          "
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() =>
            toolbar.onNavigate("NEXT")
          }
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-border
            bg-surface
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default CustomToolbar;