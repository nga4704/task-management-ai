import {
  Bell,
  Menu,
  Search,
  Sparkles,
  LogOut,
  Command,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import UserProfile from "@/shared/components/cards/UserProfile";
import { useAuthStore } from "@/store/authStore";
import { supabase } from "@/lib/supabase";

// 🔥 NEW hooks (bạn sẽ tạo sau)
import { useUnreadNotifications } from "@/features/notifications/hooks/useUnreadNotifications";
import socket from "@/lib/socket";
import { useEffect } from "react";

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

  const { unreadCount = 0 } = useUnreadNotifications();

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    logoutStore();
    navigate("/login");
  };

  useEffect(() => {
    if (user?.id) {
      socket.emit("join_user", user.id);
    }
  }, [user?.id]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="px-4 sm:px-6 lg:px-8 py-4 md:py-5">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">

          {/* LEFT */}
          <div className="flex min-w-0 flex-1 items-center gap-3">

            {/* MOBILE MENU */}
            <button
              onClick={onOpenSidebar}
              className="flex xl:hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/90 shadow-soft"
            >
              <Menu size={18} />
            </button>

            <div className="min-w-0">
              <h1 className="truncate text-xl font-bold">
                {title}
              </h1>
              {/* <p className="hidden md:block text-sm text-muted">
                {description}
              </p> */}
            </div>
          </div>

          {/* CENTER - SEARCH (PRO) */}
          <div className="hidden lg:flex items-center gap-2 w-[420px]">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex w-full items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted hover:bg-surfaceSecondary"
            >
              <Search size={16} />
              <span className="flex-1 text-left">
                Search tasks, projects, teams...
              </span>

              <div className="flex items-center gap-1 text-xs opacity-60">
                <Command size={12} />
                K
              </div>
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* AI BUTTON */}
            <button
              onClick={() => navigate("/planner")}
              className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 font-semibold shadow-soft hover:scale-[1.02] transition"
            >
              <Sparkles size={16} />
              <span className="hidden md:inline">
                Ask AI
              </span>
            </button>

            {/* NOTIFICATION */}
            <button
              onClick={() => navigate("/notifications")}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface"
            >
              <Bell size={18} />

              {unreadCount > 0 && (
                <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
              )}
            </button>

            {/* USER MENU */}
            <div className="relative">
              <div
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="cursor-pointer"
              >
                <UserProfile compact />
              </div>

              {userMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setUserMenuOpen(false)}
                  />

                  <div className="absolute right-0 mt-2 z-40 w-52 rounded-md border border-border bg-white shadow-xl overflow-hidden">

                    <div className="px-3 py-2 border-b text-xs text-muted">
                      {user?.email}
                    </div>

                    <button
                      onClick={() => {
                        navigate("/settings");
                        setUserMenuOpen(false);
                      }}
                      className="w-full px-3 py-2 text-sm text-left hover:bg-surface"
                    >
                      Settings
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full px-3 py-2 text-sm text-left text-red-500 hover:bg-red-50 flex items-center gap-2"
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

      {/* GLOBAL SEARCH MODAL PLACEHOLDER */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center pt-24">
          <div className="w-[600px] rounded-2xl bg-white p-4 shadow-xl">
            <div className="text-sm text-muted">
              🔍 Global search modal (you can plug API here)
            </div>

            <button
              onClick={() => setSearchOpen(false)}
              className="mt-4 text-sm text-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Topbar;