import {
  useState,
} from "react";

import {
  X,
} from "lucide-react";

import {
  useLocation,
} from "react-router-dom";

import { sidebarSections } from "../constants/sidebar";

import SidebarItem from "./sidebar/SidebarItem";

import AIStatusCard from "@/shared/components/cards/AIStatusCard";
import ProjectSwitcher
  from "./ProjectSwitcher";

type SidebarProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

function Sidebar({
  mobileOpen,
  onClose,
}: SidebarProps) {
  const location = useLocation();

  const [collapsed] =
    useState(false);

  return (
    <>
      {/* OVERLAY */}
      {mobileOpen && (
        <div
          onClick={onClose}
          className="
            fixed
            inset-0
            z-40

            bg-black/40
            backdrop-blur-sm

            xl:hidden
          "
        />
      )}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50

          flex
          h-screen
          flex-col

          border-r
          border-border/60

          bg-white/80
          backdrop-blur-xl

          transition-all
          duration-300

          ${collapsed
            ? "w-[90px]"
            : "w-[280px]"
          }

          ${mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
          }

          xl:sticky
          xl:translate-x-0
        `}
      >
        {/* HEADER */}
        <div
          className="
            flex
            items-center
            justify-between

            px-5
            py-6
          "
        >
          <div className="flex items-center gap-3">

            {/* LOGO */}
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                rounded-2xl

                bg-primary

                text-lg
                font-black
              "
            >
              AI
            </div>

            {/* BRAND */}
            {!collapsed && (
              <div className="min-w-0">

                <h1
                  className="
                    truncate
                    text-base
                    font-bold
                  "
                >
                  WorkFlow AI
                </h1>

                <p
                  className="
                    truncate
                    text-xs
                    text-muted
                  "
                >
                  Productivity Platform
                </p>
              </div>
            )}
          </div>

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="
              flex
              xl:hidden

              h-9
              w-9

              items-center
              justify-center

              rounded-xl

              hover:bg-surfaceSecondary
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* AI STATUS */}
        <div className="px-4">
          <AIStatusCard
            collapsed={collapsed}
          />
        </div>

        {/* PROJECT SWITCHER */}
        {!collapsed && (
          <div className="px-4">
            <ProjectSwitcher />
          </div>
        )}

        {/* NAVIGATION */}
        <div
          className="
            mt-6
            flex-1
            overflow-y-auto

            px-4
            pb-6
          "
        >
          {sidebarSections.map(
            (section) => (
              <div
                key={section.title}
                className="mb-8"
              >
                {!collapsed && (
                  <p
                    className="
                      mb-3
                      px-3

                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]

                      text-muted
                    "
                  >
                    {section.title}
                  </p>
                )}

                <div className="space-y-2">

                  {section.items.map(
                    (item) => (
                      <SidebarItem
                        key={item.path}
                        {...item}
                        collapsed={
                          collapsed
                        }
                        active={location.pathname.startsWith(item.path)}
                      />
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;