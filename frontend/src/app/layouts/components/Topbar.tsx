import {
  Bell,
  Search,
  Sparkles,
} from "lucide-react";

type TopbarProps = {
  title: string;
  description: string;
};

function Topbar({
  title,
  description,
}: TopbarProps) {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        border-border/60
        bg-background/80
        backdrop-blur-xl
      "
    >
      <div className="px-6 lg:px-8 py-5">
        <div
          className="
            max-w-[1600px]
            mx-auto
            flex
            items-center
            justify-between
            gap-6
          "
        >
          {/* LEFT */}
          <div>
            <h1
              className="
                text-3xl
                font-bold
                tracking-tight
              "
            >
              {title}
            </h1>

            <p className="text-muted mt-1">
              {description}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* SEARCH */}
            <div
              className="
                hidden
                lg:flex
                items-center
                gap-3
                w-[320px]
                h-[54px]
                px-4
                rounded-xl
                bg-surface
                border
                border-border
                shadow-soft
              "
            >
              <Search
                size={18}
                className="text-muted"
              />

              <input
                placeholder="Search tasks, analytics..."
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-sm
                "
              />
            </div>

            {/* AI BUTTON */}
            <button
              className="
                h-[54px]
                px-5
                rounded-xl
                bg-primary
                font-semibold
                flex
                items-center
                gap-2
                shadow-soft
                hover:scale-[1.02]
              "
            >
              <Sparkles size={18} />

              Ask AI
            </button>

            {/* NOTIFICATION */}
            <button
              className="
                relative
                w-[54px]
                h-[54px]
                rounded-xl
                bg-surface
                border
                border-border
                flex
                items-center
                justify-center
                shadow-soft
              "
            >
              <Bell size={20} />

              <div
                className="
                  absolute
                  top-3
                  right-3
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-danger
                "
              />
            </button>

            {/* PROFILE */}
            <div className="hidden lg:flex items-center gap-3 pl-2">

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-primary
                  flex
                  items-center
                  justify-center
                  font-bold
                "
              >
                N
              </div>

              <div>
                <h4 className="font-semibold">
                  Nga
                </h4>

                <p className="text-sm text-muted">
                  Fullstack Developer
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;