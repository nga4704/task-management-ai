import {
  Bell,
  Menu,
  Search,
  Sparkles,
} from "lucide-react";

import UserProfile from "@/shared/components/cards/UserProfile";
import {
  useNavigate,
} from "react-router-dom";

type TopbarProps = {
  title: string;
  description: string;
  onOpenSidebar?: () => void;
};

function Topbar({
  title,
  description,
  onOpenSidebar,
}: TopbarProps) {
  const navigate =
    useNavigate();

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
      <div
        className="
          px-4
          sm:px-6
          lg:px-8

          py-4
          md:py-5
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1600px]
            items-center
            justify-between
            gap-4
          "
        >
          {/* LEFT */}
          <div
            className="
              flex
              min-w-0
              flex-1
              items-center
            "
          >
            {/* MOBILE MENU */}
            <button
              onClick={onOpenSidebar}
              className="
                fixed
                left-4
                top-4
                z-50

                flex
                xl:hidden

                h-10
                w-10

                items-center
                justify-center

                rounded-xl

                border
                border-border

                bg-white/90
                backdrop-blur-md

                shadow-soft
              "
            >
              <Menu size={18} />
            </button>

            {/* TITLE */}
            <div
              className="
                min-w-0
                flex-1

                pl-14
                sm:pl-16
                md:pl-20

                xl:pl-0
              "
            >
              <h1
                className="
                  truncate

                  text-lg
                  sm:text-xl
                  md:text-2xl
                  lg:text-3xl

                  font-bold
                  tracking-tight
                "
              >
                {title}
              </h1>

              <p
                className="
                  mt-1

                  hidden
                  md:block

                  truncate

                  text-sm
                  text-muted
                "
              >
                {description}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              shrink-0
              items-center

              gap-1.5
              sm:gap-2
              md:gap-4
            "
          >
            {/* SEARCH */}
            <div
              className="
                hidden
                lg:flex

                items-center
                gap-3

                w-[280px]
                xl:w-[320px]

                h-[52px]

                px-4

                rounded-2xl

                border
                border-border

                bg-surface

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
                  text-sm
                  outline-none
                "
              />
            </div>

            {/* MOBILE SEARCH */}
            <button
              className="
                flex
                lg:hidden

                h-10
                w-10

                sm:h-11
                sm:w-11

                items-center
                justify-center

                rounded-xl

                border
                border-border

                bg-surface

                shadow-soft

                shrink-0
              "
            >
              <Search size={18} />
            </button>

            {/* AI BUTTON */}
            <button
              onClick={() =>
                navigate(
                  "/planner"
                )
              }
              className="
                group
                flex
                items-center
                justify-center
                gap-2

                h-10
                sm:h-11
                md:h-[52px]

                w-10
                sm:w-auto

                sm:min-w-[44px]

                px-0
                sm:px-4
                md:px-5

                rounded-xl

                bg-primary

                font-semibold

                shadow-soft

                transition-all
                duration-200

                hover:scale-[1.02]
                hover:shadow-card

                shrink-0
              "
            >
              <Sparkles
                size={16}
                className="
                  shrink-0

                  transition-transform
                  duration-200

                  group-hover:rotate-12
                "
              />

              <span
                className="
                  hidden
                  md:inline

                  whitespace-nowrap

                  text-sm
                "
              >
                Ask AI
              </span>
            </button>

            {/* NOTIFICATION */}
            <button
              onClick={() =>
                navigate(
                  "/notifications"
                )
              }
              className="
                relative
                flex

                h-10
                w-10

                sm:h-11
                sm:w-11

                md:h-[52px]
                md:w-[52px]

                items-center
                justify-center

                rounded-xl

                border
                border-border

                bg-surface

                shadow-soft

                shrink-0
              "
            >
              <Bell size={19} />

              <div
                className="
                  absolute
                  right-2
                  top-2

                  h-2.5
                  w-2.5

                  rounded-full

                  bg-danger
                "
              />
            </button>

            {/* PROFILE */}
            <div className="block">
              <UserProfile compact />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;