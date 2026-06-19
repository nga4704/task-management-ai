import {
  Bell,
  Menu,
  Search,
  Sparkles,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import UserProfile from "@/shared/components/cards/UserProfile";
import { useAuthStore } from "@/store/authStore";
import { supabase } from "@/lib/supabase";

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
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const logoutStore = useAuthStore((state) => state.logout);

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    logoutStore();
    navigate("/login");
  };

  return (
    <header
      className="
        sticky top-0 z-40
        border-b border-border/60
        bg-background/80
        backdrop-blur-xl
      "
    >
      <div className="px-4 sm:px-6 lg:px-8 py-4 md:py-5">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">

          {/* LEFT */}
          <div className="flex min-w-0 flex-1 items-center">

            <button
              onClick={onOpenSidebar}
              className="
                fixed left-4 top-4 z-50
                flex xl:hidden
                h-10 w-10 items-center justify-center
                rounded-xl border border-border
                bg-white/90 backdrop-blur-md shadow-soft
              "
            >
              <Menu size={18} />
            </button>

            <div className="min-w-0 flex-1 pl-14 sm:pl-16 md:pl-20 xl:pl-0">
              <h1 className="truncate text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
                {title}
              </h1>

              <p className="mt-1 hidden md:block truncate text-sm text-muted">
                {description}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex shrink-0 items-center gap-2 md:gap-4">

            {/* SEARCH */}
            <div className="hidden lg:flex items-center gap-3 w-[320px] h-[52px] px-4 rounded-2xl border border-border bg-surface shadow-soft">
              <Search size={18} className="text-muted" />

              <input
                placeholder="Search tasks, analytics..."
                className="flex-1 bg-transparent text-sm outline-none"
              />
            </div>

            {/* AI */}
            <button
              onClick={() => navigate("/planner")}
              className="
                flex items-center gap-2
                h-10 md:h-[52px]
                px-4 md:px-5
                rounded-xl bg-primary
                font-semibold shadow-soft
                hover:scale-[1.02] transition
              "
            >
              <Sparkles size={16} />
              <span className="hidden md:inline text-sm">
                Ask AI
              </span>
            </button>

            {/* NOTIFICATION */}
            <button
              onClick={() => navigate("/notifications")}
              className="
                relative flex
                h-10 w-10 md:h-[52px] md:w-[52px]
                items-center justify-center
                rounded-xl border border-border bg-surface shadow-soft
              "
            >
              <Bell size={19} />

              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-danger" />
            </button>

            {/* USER MENU*/}
            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
              >
                <UserProfile compact />
              </div>

              {open && (
                <>
                  {/* overlay click outside */}
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setOpen(false)}
                  />

                  <div
                    className="
                      absolute right-0 mt-2 z-40
                      w-44
                      rounded-md border border-border
                      bg-white shadow-xl
                      overflow-hidden
                    "
                  >
                    {/* <div className="px-3 py-2 text-xs text-muted border-b">
                      {user?.email || "Guest"}
                    </div> */}

                    <button
                      onClick={() => {
                        navigate("/settings");
                        setOpen(false);
                      }}
                      className="w-full px-3 py-2 text-sm text-left hover:bg-surface"
                    >
                      Settings
                    </button>

                    <button
                      onClick={handleLogout}
                      className="
                        w-full px-3 py-2 text-sm text-left
                        text-red-500 hover:bg-red-50
                        flex items-center gap-2
                      "
                    >
                      <LogOut size={14} />
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;